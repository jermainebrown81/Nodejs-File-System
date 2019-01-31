const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

// access the third item in the array which is command for our note application.
let command = process.argv[2];
console.log(process.argv); // list commands in array

console.log('command: ', command);

if (command === 'add') {
    console.log('Adding new note!');
} else if (command === 'list') {
    console.log('Listing all notes!');
} else if (command === 'read') {
    console.log('reading note');
} else if (command === 'remove') {
    console.log('removing note');
} else {
    console.log('Command not recognized');
}

// run in terminal
// node app.js remove --title='titlename'

/*
[ '/usr/local/bin/node',
  '/Development/Programs/nodejs/01_Note_App/04_user_input/app.js',
  'remove',
  '--title=titlename' ]
command:  remove
removing note

 */


// Summary
// we are able to get input from user
// We now have support for various commands
// now we can run more complex command in terminal i.e remove by --title

// The problem with this application is it is not very easy to use.

// 1. We have to parse out key which is --title and the value which is secrets 2

// when we used the command which is the third arg it was a lot easier to use. but as we
// get more complex this will become a pain with all the parsing.

// So to avoid this we use a third party module called yargs to make parsing the
// command line arguments effortless.


/*  Summary 2
1. We can use command line arguments to pass data into our app.
2. inside of the app use (process.argv) to grab information and do something with it.
3. we used if statements to run different code depending on command user wants to use.

parsing key values pairs is much more complex yargs resolves this.
 */








