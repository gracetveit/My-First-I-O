'use strict'
const fs = require('fs');

const newLineCount = function (filename) {
    /*Reads the file, converts to string, splits the string into an array
    by '\n, and returns the length of the array subtracted by one
    */
    return fs.readFileSync(filename).toString().split('\n').length - 1
}

console.log(newLineCount(process.argv[2]))