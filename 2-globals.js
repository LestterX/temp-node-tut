//                  GLOBALS - No Window

// __dirname    - path to the current directory
// __filename   - file name
// require      - function to use modules (CommonJS)
// module       - info about current module (File)
// process      - info about env where the program is being executed

console.log(__dirname);

setInterval(() => {                 //Repeat the code inside after the interval set
    console.log('Hello, World!')
}, 1000);

setTimeout(() => {                  //Execute the code insite after the time set
    console.log('Hello!!!')
}, 10000);
