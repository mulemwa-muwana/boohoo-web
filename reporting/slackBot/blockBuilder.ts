type Attachments = {
    platformRelease: string;
    tests: string;
    failures: string;
    env: string;
    secondMessageOfFailures: string;
    linkToReport: string;
    passedPercentage: number;
    failedPercentage: number;
    skippedPercentage: number;
}

export function buildBlocks(input: ['section', string][]) {
    const blocks = []
    input.forEach(tuple => {
        blocks.push({
            type: tuple[0],
            text: {
              type: 'mrkdwn',
              text: tuple[1],
            }
          })
    })
    return blocks;
}

export function buildAttachments(input: Attachments) {
    const attachments: any = {
        // Extra Info Section
        blocks: [
          {
            type: 'section',
            fields: [
              {
                type:'mrkdwn',
                text: '*Platform*\n' + input.platformRelease
              },
              {
                type:'mrkdwn',
                text: '*Tests*\n' + input.tests
              },
            ]
          },
          {
            type: 'section',
            fields: [
              {
                type:'mrkdwn',
                text: '*Environment*\n' + input.env
              }
            ]
          }
        ]
      }

      // Add failed tests block to the block object.
  if (input.failures.length > 0) {
    attachments.blocks.push({
      'type': 'divider'
    })
    attachments.blocks.push({
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: '*Failing Tests (This list excludes skipped tests):*\n' + input.failures
      }
    })

    // If there's no second message for extra failures, put the button here.
    if (input.secondMessageOfFailures.length <= 0) {
        attachments.blocks.push({
        type: 'actions',
        elements: [{
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Test Results'
          },
          url: `${input.linkToReport}`
        }]
      })
    } 
  } else {
    attachments.blocks.push({
      type: 'actions',
      elements: [{
        type: 'button',
        text: {
          type: 'plain_text',
          text: 'Test Results'
        },
        url: `${input.linkToReport}`
      }]
    })
  }

  return [
    {
      'fallback': 'Oopsie, error occured.',
      'color': '#23c552',
      'author_name': input.passedPercentage + '% Passed',
    },
    {
      'fallback': 'Oopsie, error occured.',
      'color': '#f84f31',
      'author_name': input.failedPercentage + '% Failed',
    },
    {
      'fallback': 'Oopsie, error occured.',
      'color': '#f6f6f6',
      'author_name': input.skippedPercentage + '% Skipped',
    },
    attachments
  ]
}

export function secondSetOfMessagesAttachments(secondMessageOfFailures: string, linkToReport: string) {
    return [
        {
          blocks: [
            // Extra fails
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: secondMessageOfFailures
              }
            },
            {
              type: 'actions',
              elements: [{
                type: 'button',
                text: {
                  type: 'plain_text',
                  text: 'Test Results'
                },
                url: `${linkToReport}`
              }]
            }
          ]
        }
      ]
}