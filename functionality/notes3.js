// handle errors if no files exists

const fs = require('fs');

let addNote = (title, body) => {
    let notes = [];
    let note = {
        title,
        body
    };

    // handle errors if no files exists this is good as our array is currently empty
    // also if exists but has corrupted data
    try {

        // fetch data ... prevent overwriting existing notes in the notes.json file
        let noteString = fs.readFileSync('notes-data.json'); // could have problems

        // take string from file we read and parse it into array
        notes = JSON.parse(noteString);

    } catch (e) {

    }

    // add the note {} to the notes array
    notes.push(note); // now we have an array with one item

    // create json file and content to be saved
    fs.writeFileSync('notes-data.json', JSON.stringify(notes)); // convert object in array to string // updates notes.json file
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

// Run node app.js add --title=codewars --body="Hard work pays off" check result in terminal

// check notes-data.json

// run again with different title and body .... node app.js add --title=PlanIt --body="Stick to the plan"

// check notes-data.json


// in notes4 we will look at making the title unique so we don't have duplicate titles

/** in app.js require notes4.js */
