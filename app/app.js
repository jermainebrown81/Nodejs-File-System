const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs/app');

const notes = require('./notes.js');

const argv = yargs.argv; // yargs library stores its version of arguments our app ran with
// access the third item in the array which is command for our note application.
let command = argv._[0]; // change from process.argv argv._[0];

if (command === 'add') {
    // take advantage of yarg parsing by calling functions
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else { console.log("Title already taken!");}
} else if (command === 'list') {
    let getNotes = notes.getAll(); // takes no args as it will return all of notes regardless of title
    console.log(`Printing ${getNotes.length} note(s).`);
    getNotes.forEach((note) => notes.logNote(note)); // forEach takes callback function once for each item in the array
} else if (command === 'read') {
    let note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title); // var set to return result true/false
    let message = noteRemoved ? 'Note was removed' : 'Note not found'; //ternary operator tru/false .. avoid using else if statements
    console.log(message);
} else {
    console.log('Command not recognized');
}

// test add note functionality

// node app.js add --title="print note" --body="Testing functionality of addNote"

// test same line again!
//exercise node app.js add --title="print note" --body="Testing functionality of addNote"

// try new line
// node app.js add --title="new print note" --body="Testing functionality of addNote"










