#!/usr/bin/env node
//we want to use node to execute this file


const fs = require('node:fs');
const {cwd} = require('process')
const path = require('path')

fs.readdir(
    cwd(), (err, files)=>{
    if(err){
        console.log(err);
        return error
    } else {
        console.log(files);
    }
})



/*
Self-try/comments:

// console.log(cwd);

console.log(path.dirname('.'))

const arg3 = arguments[3]
const arg4 = arguments[4]

console.log(arg3)
console.log(arg4)


//use arugement[4] which already contains the directory path to our program/index.js file -> we want to refer to this 'path-string' and be able to abstract it so that when we run node nls we use the absolute path to our program, which will run and list out the file of the current working directory we are in

*/