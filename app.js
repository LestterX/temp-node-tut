// npm - global command, comes with Node
// nmp --version

// local dependency - use it only this particular project
// npm i <packageName>

// globla dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual aproach (create package.json in the rootCertificates, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


const _ = require('lodash')     // O _ serve para chamar a variável como o require

const items = [1, [2, [3, [4]]]]
console.log(items)

const newItems = _.flattenDeep(items)
console.log(newItems);