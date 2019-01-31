// node api list https://nodejs.org/api/
// we will be using the file system module
// create a file and append to it

/** the module we will be using is fs.appendFile(path, data[, options], callback) */

/*  How to use fs.appendFile use this way if running node v7 or above to avoid TypeError [ERR_INVALID_CALLBACK]: Callback must be a function

fs.appendFile('message.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
 */

// now we have access to all functions available in fs module
const fs = require('fs');
const os = require('os');

// fs.appendFile('append.txt', ' Hard Work Pays Off!', (err) => { // add callback as third arg to append file
//     if (err) {
//         console.log('Unable to write to file!');
//     }
// });

//The callback gets executed when either an error occurs or file successfully gets written

// another to write the file without using callback
// fs.appendFileSync(' append2.txt', 'Hard Work Pays Off!');

// https://nodejs.org/api/os.html#os_os_userinfo_options
// using os to get user info


const user = os.userInfo();
console.log(user);

// To run file in terminal node app.js