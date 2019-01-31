// Adding functionality
// 1. Add functionality to Add
// 2. save the note
// 3. run program and check result

console.log('Starting notes.js');

const fs = require('fs');

// note object
let addNote = (title, body) => {
    let notes = [];
    let note = {
        title,
        body
    };

    // add the note {} to the notes array
    notes.push(note); // now we have an array with one item

    // create json file and content to be saved
    fs.writeFileSync('notes-data.json', JSON.stringify(notes)); // convert object in array to string // updates notes.json file
    // to use in more than one place use a reference variable
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

// Run node app.js add --title=nodejs --body="working with json" check result in terminal

/*
yargs { _: [ 'add' ],
  title: 'nodejs',
  body: 'working with json',
  '$0': 'app.js' }
command:  add

 */

// check notes-data.json
// we see the saved data ... [{"title":"nodejs","body":"working with json"}]

// run command again with different title and body content

// node app.js add --title=es6 --body="es6 and nodejs"

// Check notes-data.json again

    // [{"title":"es6","body":"es6 and nodejs"}]

// This is a problem as we overwrite the previous saved data

// in notes2 we are going to prevent wiping data in existing note-data2.json file
// by fetching and parsing data to another .json file

/** in app.js require notes2.js */