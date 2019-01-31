// Duplication check

// making the title unique
// Loop through all of the notes after they are loaded
// Check if there are any duplicates.

const fs = require('fs');

let addNote = (title, body) => {
    let notes = [];
    let note = {
        title,
        body
    };

    // handle errors if no files exists this is good as our array is currently empty
    // if file does'nt exists or does exists but has corrupted data
    try {

        // fetch data ... prevent overwriting existing notes in the notes.json file
        let noteString = fs.readFileSync('notes-data.json'); // could have problems

        // take string from file we read and parse it into array
        notes = JSON.parse(noteString);

    } catch (e) {

    }
    // holds duplicate items/notes so we will not add these note/s
    let duplicateNotes = notes.filter( (note) => note.title === title); // filter is an array method that takes an callback

    // test for duplicates
    if (duplicateNotes.length === 0) { // if there are no duplicates add these two lines
        notes.push(note); // add note {} to the notes[] array
        fs.writeFileSync('notes-data.json', JSON.stringify(notes)); // convert object in array to string // updates notes.json file
    }

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

// check notes-data.json to see if duplicate title are body have been added

// now we are able to add notes without having duplicates, However the code is becoming
// quite allot so we will refactor next to make it more manageable we need to make
// all the methods reusable.


