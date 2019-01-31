// export functions
module.exports.addNote = () => {
    console.log('addNote');
    return 'New note'; // call will return to append data in file user.txt
};
// Note the arrow function does not bind the this keyword or the arguments array.

// Now we can call addNote in app.js
