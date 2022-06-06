const {readFileSync, writeFileSync} = require('fs')

console.log('Start');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync(  // by default, it overwrites a file and creates one if it not exists
    './content/result-sync.txt',                // File Path
    `Here is the result: ${first}, ${second}`,  // What it is going to be written by
    {flag: 'a'}                                 // Do not overwrites the file, just adds more data to it
)
console.log('Done with this task');
console.log('Starting the next one');