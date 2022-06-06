const { copyFileSync } = require('fs')
const os = require('os')

// info about corrent user
const user = os.userInfo()
console.log(user);

// method returns the sytems uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}
console.log(currentOS)