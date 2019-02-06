// Refactored code

// 1. place try catch block inside a function making it reusable instead of having code in different places

// 2. Test new functionally by creating a new note

const fs = require('fs');

// now we have a reusable function that we can call from anywhere
let fetchNotes = () => {

    // handle errors if no files exists this is good as our array is currently empty
    // if file does'nt exists or does exists but has corrupted data
    try {

        // fetch data ... prevent overwriting existing notes in the notes.json file
        let noteString = fs.readFileSync('notes-data.json'); // could have problems

        return JSON.parse(noteString); // returns notes array

    } catch (e) {
        return[]; // our array is currently empty
    }
};

// takes notes array and saves to file system
let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes)); // updates notes.json file
    // no need to return anything
}

let addNote = (title, body) => {
    let notes = fetchNotes(); // simplify even further change notes = [] make call to function instead;
    let note = {
        title,
        body
    };


    // unique title... holds duplicate items/notes so we will not add these note/s
    let duplicateNotes = notes.filter((note) => note.title === title); // filter an array method that takes a callback

    if (duplicateNotes.length === 0) { // if there are no duplicates add these two lines
        notes.push(note); // add note {} to the notes array
        saveNotes(notes); // make call to saveNotes pass in notes array data defined above
        return note; // gets returned to call in app.js
    }

};

let getAll = () => {
    // console.log('Getting all notes', );
    return fetchNotes(); // notes var stores an array of all of the notes
};

let getNote = (title) => {
    // console.log('Getting note', title);
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0]; // returns first item
};

let removeNote = (title) => {
    // fetch note
    let notes = fetchNotes(); // notes var stores an array of all of the notes
    // filter notes, removing the one with title of arg
    let filteredNotes = notes.filter((note) => note.title !== title); //if no match false otherwise true
    // save new note
    saveNotes(filteredNotes);

     // return true if note was removed if there equal false
    return notes.length !== filteredNotes.length;
};
// refactoring code from app.js prevents code being called in two different locations
let logNote = (note) => {
        console.log(`Title: ${note.title} \n Body: ${note.body}`);
};

// define entire object set to export
module.exports = {
    // es6 feature if attribute and value are the same no : or value required
    addNote, // set add note equal to addNote function defined up above
    getAll,
    getNote,
    removeNote,
    logNote
}


// test functionality of duplicating note

// test functionality of removing a note





