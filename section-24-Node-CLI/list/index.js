#!/usr/bin/env node
//we want to use node to execute this file


const fs = require('node:fs');
const {cwd} = require('process')
const path = require('path');
// const { error } = require('node:console');


const chalk = require('chalk');


fs.readdir(
    cwd(), (err, files)=>{
    if(err){
        console.log(err);
        return error
    } else {

        //looping over the array to check if file or folder

        /*
        Pseudo Code:
        - need path-directory of given folder
        - add the fileName from the array
        - based on control via fs.stat method, apply color
        */

        for (let fileItem of files){

            // console.log(fileItem);

            console.log(chalk.red("chalk test"));


            fs.stat(`${cwd()}/${fileItem}`, (err, stats) => {
                if (err) {
                    console.log(err)
                    throw error
                }

                if (stats.isFile()){
                    // console.log(chalk.yellow(fileItem))
                    console.log('\x1b[93m%s\x1b[0m', fileItem)
                } else if(stats.isDirectory()){
                    console.log('\x1b[96m%s\x1b[0m', fileItem+"/")

                    // console.log(chalk.red(fileItem+"/"))
  
                } else {
                    console.log(fileItem)
                }
            })
        }


    }
})





/*
Self-try/comments:

1

// console.log(cwd);
console.log(path.dirname('.'))

const arg3 = arguments[3]
const arg4 = arguments[4]

console.log(arg3)
console.log(arg4)

//use arugement[4] which already contains the directory path to our program/index.js file -> we want to refer to this 'path-string' and be able to abstract it so that when we run node nls we use the absolute path to our program, which will run and list out the file of the current working directory we are in


2 trying to use the chalk library

a) using stackoverflow apporach1 - w/async
//chalk not working, because recent installed version of check is using ESM package, which need 'import' instead of 'require' + other changes in package.json


// const chalk = require('chalk').then(m=>m.default);

async function useChalk(){
    const _chalk = await chalk
    console.log(chalk.red(fileItem+"/"))
}

b) uninstall and install older chalk version compatible with require - did not work though

*/