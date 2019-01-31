// Storing and parsing string

/*
1. store string in a file.
2. read/get contents of that file back using fs module and printing some properties from it.
3. to do this convert the string we get back from fs.readFile
4. sync into an object using json.parse
 */

const fs = require('fs');

// define object that will be stored inside of our file
let originalData = {
    title: 'Web Dev Journey',
    body: 'Hard work pays off!'
};

let originalDataString = JSON.stringify(originalData);

// create originalDataString
// first step in the process write file to the file system
fs.writeFileSync('notes.json', originalDataString); // first arg file name must use json file extension

// read out the contents parse it using json method
let dataString = fs.readFileSync('notes.json'); // only need to pass one arg as are just reading data from file

// parse data back to an object
let data = JSON.parse(dataString);
console.log(typeof data); // can remove this line just to confirm we are using an object
console.log(data);