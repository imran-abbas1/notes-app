const fs = require('fs')
const chalk = require('chalk')
  
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {

    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added'))
    } else {
        console.log(chalk.red('Note title taken'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
  const newNotes = notes.filter((note) => note.title !== title)
    
    if (notes.length > newNotes.length) {
        console.log(chalk.green.inverse('Note Removed sucessfully'))
        saveNotes(newNotes)
    } else {
        console.log(chalk.red ('No note found'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue('Your Notes'))
    notes.forEach(element => {
        console.log(chalk.inverse(element.title))
    });

}

const readNote = (title) => {
    const notes = loadNotes()
    const nodeToRead = notes.find((note) => note.title === title)
    if(nodeToRead) {
        console.log(chalk.inverse(nodeToRead.title))
        console.log(nodeToRead.body)
    } else {
        console.log(chalk.red('No Note found'))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}