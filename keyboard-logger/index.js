const fs = require('fs');
const stdin = process.openStdin();

const fileName = './log.txt'

//opens a file and creates if it doesn't exist
function createFile() {
    try {
        fs.writeFileSync(fileName, "", { flag: 'a+' })
        console.log("File opened")
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

/**
 * write data to the file
 * @param {string} data data from user input
 */
function writeToFile(data) {
    try {
        fs.appendFileSync(fileName, `${data}`)
        console.log("Type: ")
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

// listen to user's keyboard input
function listenKeyboardInput() {
    // create file if doesn't exist
    createFile()
    // listen to keyboard input
    console.log("Type: ")
    stdin.resume();
    stdin.on('data', function (keydata) {
        writeToFile(keydata.toString())
    })
}

// start main function
listenKeyboardInput()