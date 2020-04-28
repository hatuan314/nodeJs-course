// const fs = require('fs');
//
// // fs.writeFileSync('notes.txt', 'My Name is Tuan');
// fs.appendFileSync('notes.txt', '\nI live in Hanoi');

const validator = require('validator');
const getNotes = require('./note');
const chalk = require('chalk');

console.log(getNotes)

console.log(validator.isEmail('hatuan314@gmail.com'))
console.log(chalk.bold.blue('Error!'))