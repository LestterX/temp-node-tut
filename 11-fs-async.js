const {readFile, writeFile} = require('fs')

console.log('Start');
readFile('./content/first.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(      // É PRATICAMENTE IGUAL AO writeFileSync
            './content/result-async.txt', 
            `Here the 2 result: ${first}, ${second}`, (err, result) =>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log('Done with this task');
            })
    })
})
console.log('Starting the next one');