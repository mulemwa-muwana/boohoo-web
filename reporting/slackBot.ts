import { App } from '@slack/bolt';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

dotenv.config();

// Build new app.
const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  clientId: process.env.SLACK_CLIENT_ID,
  clientSecret: process.env.SLACK_CLIENT_SECRET,
  stateSecret: process.env.SLACK_STATE_SECRET,
  scopes: ['channels:read', 'channels:write', 'channels:join', 'chat:write', 'channels:join', 'chat:write.customize']
});

// Start the report.
async function GenerateAndPostReport(report: any) {

    // Store reference link.
    const linkToReport = 'https://cloud.cypress.io/projects/i6d3n8/runs'

    // Find timings.
    const currentDate = new Date();

    // Get result statistics.
    const { tests, passed, failed, skipped } = report.totals;
    const passedPercentage = parseFloat(((passed / tests) * 100).toFixed(2));
    const failedPercentage = parseFloat(((failed / tests) * 100).toFixed(2));
    const skippedPercentage = parseFloat(((skipped / tests) * 100).toFixed(2));

    const platformRelease = process.env.PLATFORM || 'Generic Test Run';

    // Failures
    let failures = ''
    let i = 1;
    const reportKeys = Object.keys(report);
    reportKeys.forEach(key => {
        if (key !== 'totals') {
            const suite = report[key] as Record<string, 'failed' | 'passed'>;
            const suiteKeys = Object.keys(suite);
            suiteKeys.forEach(testName => {
                const result = suite[testName];
                if (result === 'failed') {
                    failures = failures + `${i}. ${testName}\n`;
                    i++
                }
            })
        }
    })

    await app.start(process.env.PORT || 3000);

    try {

        // Post message
        await app.client.chat.postMessage({
        token: process.env.SLACK_BOT_OAUTH,
        channel: process.env.SLACK_CHANNEL,
        text: `Web build detected for ${passed} out of ${failed} tests passed.`,
        blocks: [

            // Title Block
            {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: `Detected a mobile build - Test Summary\n*${currentDate.toUTCString()}*`,
            }
            },

        ],

        // Pass and Fail Results
        attachments: [
            {
                "fallback": "Oopsie, error occured.",
                "color": "#23c552",
                "author_name": passedPercentage + "% Passed",
            },
            {
                "fallback": "Oopsie, error occured.",
                "color": "#f84f31",
                "author_name": failedPercentage + "% Failed",
            },
            {
                "fallback": "Oopsie, error occured.",
                "color": "#f6f6f6",
                "author_name": skippedPercentage + "% Skipped",
            },
            {

            // Extra Info Section
            blocks: [
                {
                type: 'section',
                fields: [
                    {
                    type:'mrkdwn',
                    text: '*Platform*\n' + platformRelease
                    },
                    {
                    type:'mrkdwn',
                    text: '*Tests*\n' + tests
                    },
                ]
                },
            
                // Failing Tests Section
                {
                type: 'section',
                text: {
                    type: 'mrkdwn',
                    text: '*Failing Tests:*\n' + failures
                }
                },

                // Button at bottom of post.
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

                // End of attachments
            ]
            }
        ]
        });
    } finally {
        app.stop();
    }
}


/** 
 *  TODO: Either run each time after a test runs, or run once and iterate through all folders
 * Idealy run after each test. 
 * So run this with CLI parameter like: `ts-node reporting/slackBot.ts boohoo`
 * This will go look in the config/boohoo folder and print out the platform as boohoo.
 * Probably the best as this is where the results file will outputted to.
**/ 

(async function () {
    // Get the file first.
    try {
        const file = fs.readFileSync('reporting/results.json', 'utf-8')
        const report = JSON.parse(file);
        GenerateAndPostReport(report);
    } catch {
        console.error('No file found.')
    }
})();

