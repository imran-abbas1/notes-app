// const fs = require('fs')

// //links.mead.io/nodecourse

// // To create content on file
// //fs.writeFileSync('notes.txt', 'This is a test node file')

// // to append content to file
// fs.appendFileSync('notes.txt', 'This is again  appended text')

// const add = require('./utils.js')

// const sum = add(14,-2)
// console.log(sum)

// const validator = require('validator')
// console.log(notes())
// console.log('et')

// // To check if string is email or not
// //console.log(validator.isEmail('example.com'))

// // To check if url is valid or not
// //console.log(validator.isURL('https://mead.io'))
// console.log(process.argv[2])
// console.log(chalk.green.bold.inverse('success'))


const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


//Customise yargs version
yargs.version('1.0.1')

//creates add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create a list command
yargs.command({
    command: 'list',
    describe: 'Lists all note',
    handler() {
        notes.listNotes()
    }
})

// Create a read command
yargs.command({
    command: 'read',
    describe: 'Reads the note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// Create a remove command


//console.log(yargs.argv)
yargs.parse()


// const command = process.argv[2]

// if (command === 'add') {
//     console.log('Adding Node')
// } else if(command === 'remove') {
//     console.log('Removing Node')
// } else {
//     console.log(chalk.red('Invalid command'))
// }
