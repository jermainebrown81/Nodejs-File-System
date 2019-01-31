const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv; // yargs library stores its version of arguments our app ran with
// access the third item in the array which is command for our note application.
let command = argv._[0]; // change from process.argv argv._[0];
// console.log('process', process.argv); // list commands in array
console.log('yargs', argv); // using yargs to parse command // now we can fetch arguments and yargs parses them

console.log('command: ', command);

if (command === 'add') {
    // take advantage of yarg parsing by calling functions
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll(); // takes no args as it will return all of notes regardless of title
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}


/* Summary

Parsing in process.argv is not ideal as we have to write alot of manual code to parse out the --, = and optional "

Yargs can do all of the above for us and put it in a really simple object that we can access.

i.e addNote(argv.title, argv.body) // here we use the argv object coming from yargs to grab title and body.
 */






















