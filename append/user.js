// node api list https://nodejs.org/api/

const fs = require('fs');
const os = require('os');

let user = os.userInfo();

fs.appendFileSync('user.txt', `Your username is ... ${user.username}`);