// fetching and parsing data to another .json file

console.log('Starting notes.js');

const fs = require('fs');

let addNote = (title, body) => {
    let notes = [];
    let note = {
        title,
        body
    };

    // fetch data ... prevent overwriting existing notes in the notes.json file
    let noteString = fs.readFileSync('note-data.json'); // data is a string

    // take string from file we read and parse it into notes[]
    notes = JSON.parse(noteString);

    // add the note {} to the notes array
    notes.push(note); // now we have an array with one item

    // create json file and content to be saved
    fs.writeFileSync('notes-data.json', JSON.stringify(notes)); // convert object in array to string updates notes.json file
};

let getAll = () => {
    console.log('Getting all notes', );
};

let getNote = (title) => {
    console.log('Getting note', title);
};

let removeNote = (title) => {
    console.log('Removing note', title);
};


// define entire object set to export
module.exports = {
    // es6 feature if attribute and value are the same no : or value required
    addNote, // set add note equal to addNote function defined up above
    getAll,
    getNote,
    removeNote
}

// run program

/* yargs { _: [ 'add' ],
    title: 'codewars',
    body: 'Hard work pays off',
    '$0': 'app.js' }
command:  add
fs.js:121
throw err;
^

Error: ENOENT: no such file or directory, open 'note-data.json'
*/

// The above error occurs because this file has not yet been created its good because we actually have an
// empty array so there should be no file if it doesn't exist.

// However we need a way to handle this error so the program will still run
// Lets take a look at how to achieve this in notes3

/** in app.js require notes3.js */