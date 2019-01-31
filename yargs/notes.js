// setting up functionality

let addNote = (title, body) => {
    console.log('Adding Note', title, body);
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

// pass arguments in terminal to each function to see results

// the following we pass three commands add, title arg and body arg to addNote to app.js

// node app.js add --title=Yarg_testing --body="Welcome to parsing with yargs"

