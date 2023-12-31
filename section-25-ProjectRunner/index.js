#!/usr/bin/env node

console.log("Test script for watchit program")

const debounce = require('lodash.debounce');
const chokidar = require('chokidar');
const program = require('caporal');
const fs = require('fs');


program
.version('0.0.1')
.argument('[filename]', 'Name of a file to execute')
.action(async ({filename})=>{
    // console.log(args.filename)

    const name = filename || 'index.js'

    //wait until we check the for optional filename argument provided or the index.js
    //when are expecting a promise, we need to prepare if the promise is not fulfilled, in the case for await we can do try-catch
    try {
        await fs.promises.access(name)
        console.log(name + ' is found')
    }
    catch (err) {
        throw new Error('could not find the file ' + name)
    }

    const start = debounce(() => {
        console.log("Starting user's program")

        //run users file
        const userFile = require(`./${name}`)
        console.log("Users file-", userFile)

        //if any changes occur stop existing process and re-start

    }, 100)


    // chokidar.watch('.')
    // .on('add', start)
    // .on('change', () => start)
    // .on('unlink', ()=> start)


    // if ((typeof process !== 'undefined') && 
    // (process.release.name.search(/node|io.js/) !== -1)) { 
    //     console.log('this script is running in Node.js');
    //     return
    // } else { 
    //     console.log('this script is not running in Node.js');

    //     //make the function call itself?
    //     chokidar.watch('.')
    //     .on('add', start)
    //     .on('change', () => start)
    //     .on('unlink', ()=> start)
    // }


    chokidar.watch('.')
    .on('add', start)
    .on('change', () => start)
    .on('unlink', ()=> start)



})

program.parse(process.argv)


/*
- variable naming convention is to name it as the same as the library
- debounce instead of lodash because, lodash is the full library and would not make sense 
- libray returns -> class/object w/a set of functions
- carporal does not return a class/obj (representing the library) but rather a program 
*/

//when we want a function from being called too often, we are going to pass it into the debounce func -> reutrn bakc to us a func that cant be INVOKED TOO OFTEN







/*
Note:
- w/add when chokidar sees the file for the first it run the add callback

- my approach:

1. manual debouncing:
.on('add', () => {

    //start timer
    // console.log("About to start a timer")
    const myTimer = setTimeout(()=>{
        //file added code
        console.log("File Added")
    }, 80)
    // console.log("----", myTimer)

    //cancel timer
    // console.log("About to cancel existing timer")
    clearTimeout(myTimer)
    
})


*/
