const fs = require("fs");
// console.log(process.argv);
// console.log(process.argv[2]);
// console.log(process.argv[3]);

const input = process.argv
fs.writeFileSync(input[2],input[3])

// node index.js 55 33 88 66
// node index.js apple.txt 'this is a fruit'
