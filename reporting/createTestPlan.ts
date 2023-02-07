import * as fs from 'fs';

async function main (file: string) {
  const readFile = fs.readFileSync(file, 'utf-8');
  const splitByNewLine = readFile.split('\n').map(line => line.replace('\r', ''));// .map(line => line.replace(/\"/ig, "''"));
  const describeBlocks = [...new Set(readFile.match(/(?<=describe\()(.*)(?=,)/ig))];
  const itBlocks = [...new Set(readFile.match(/(?<=it\()(.*)(?=,)/ig))];

  const potentialTests = findPotentialTests(describeBlocks, itBlocks);
  const commentedTests = findTestSteps(splitByNewLine, potentialTests);
    
  const directory = file.split('\\').splice(-1).join().split('.')[0];

  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync('reporting\\' + directory + '.json', JSON.stringify(commentedTests, null, 4));

  console.log('\x1b[32m\nFound Documentation\x1b[0m');
  Object.keys(commentedTests).forEach(key => {
    console.log('\n' + key);
    commentedTests[key].forEach(steps => {
      console.log('•', steps);
    });
  });
}

function findPotentialTests (describeBlocks: Array<string>, itBlocks: Array<string>): Array<{describe: string; it: string}> {
  const potentialTests: Array<{describe: string; it: string}> = [];
  for (let i = 0; i < describeBlocks.length; i++) {
    const describe = describeBlocks[i];
    for (let x = 0; x < itBlocks.length; x++) {
      const it = itBlocks[x];
      potentialTests.push({describe, it});
    }
  }
  return potentialTests;
}

function replaceCharactersAtStartAndEndIfTheyreQuotes (str: string) {
  const charactersToReplace = ['"', "'"];
  const firstCharacter = str.substring(0, 1);
  if (charactersToReplace.includes(firstCharacter)) {
    str = str.substring(1, str.length);
  }
  const lastCharacter = str.substring(str.length - 1, str.length);
  if (charactersToReplace.includes(lastCharacter)) {
    str = str.substring(0, str.length - 1);
  }
  return str;
}

function findTestSteps (fileByLine: Array<string>, potentialTests: Array<{describe: string; it: string}>) {
  const commentedTests: Record<string, Array<string>> = {};
  for (let i = 0; i < potentialTests.length; i++) {
    const potentialTest = potentialTests[i];
    console.log(`\nChecking for test ${potentialTest.it}`);

    for (let x = 0; x < fileByLine.length; x++) {
      const line = fileByLine[x];

      if (line.includes('it(') && line.includes(potentialTest.it)) {

        // Now we need to go back a few lines until we find the comment, if we find a line NOT starting with double slashes, assume it doesn't have documentation.
        for (let y = x - 1; y >= 0; y--) {
          const reversedLine = fileByLine[y].trimStart();
          if (reversedLine.length === 0) continue; // Ignore blank spaces.
          if (reversedLine.startsWith('/**') && reversedLine.toLowerCase().includes('[test steps]')) {
            console.log(`\x1b[32mTest plan found for: ${potentialTest.it}\x1b[0m`);
            const testSteps: Array<string> = [];
            const expectedLines = x - y;
            for (let ii = 1; ii < expectedLines; ii++) {
              const expectedLine = fileByLine[y + ii].trim();
              if (expectedLine.startsWith('*') && expectedLine.length > 2) {
                testSteps.push(expectedLine.replace('*', '').trim());
              }
            }
            const trimmedPotentialTestForStorage = {
              describe: replaceCharactersAtStartAndEndIfTheyreQuotes(potentialTest.describe),
              it: replaceCharactersAtStartAndEndIfTheyreQuotes(potentialTest.it)
            };
            commentedTests[`${trimmedPotentialTestForStorage.describe} ${trimmedPotentialTestForStorage.it}`] = testSteps;
            break;
          }

          // Doesnt have docs.
          if (!reversedLine.startsWith('*/') && !reversedLine.startsWith('*')) {
            console.log(`\x1b[31mNo docs found for: ${potentialTest.it}\x1b[0m`); 
            break;
          }
        }
        break;
      }
    }
  }
  return commentedTests;
}

main('cypress\\e2e\\criticalPath\\shippingPageRegisteredUser.cy.ts');