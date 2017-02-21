console.log('Starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');
const argv = require('yargs');

var command = process.argv[2];

console.log('Process', process.argv);
console.log('yargs', argv);


if(command == 'List'){
    console.log("List all the notes");
    notes.addNote(argv.title, argv.body);
}else if (command == 'Add'){
    console.log("Add new note");
}else if (command == 'Remove'){
    console.log('Remove notes');
}else if(command == 'Read'){
    console.log('Read all the notes');
}else {
    console.log('Command is not defined');
}
//console.log(command);

// console.log(_.isString(1));

// var res = notes.add(10, 30);
// console.log(res);

// var user = os.userInfo();
// console.log(user);
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);