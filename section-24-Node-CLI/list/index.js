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

        //BAD IMPLEMENTATION - because of randomness of callback invocation

        const allStats = Array(files.length).fill(null)

        for (let i = 0; i < files.length; i++) {

            fs.lstat(files[i], (err, stats) => {
                if (err) {
                    console.log(err)
                    throw error
                }

                // else {
                //     console.log(files[i], stats.isFile())
                //     callbackResults[i] = `${files[i]} - ${stats.isFile()}`
                //     // console.log(callbackResults)
                // }

                // if (stats.isFile()) {
                //     callbackResults[i] = files[i]
                // } else {
                //     callbackResults[i] = files[i]
                // }
                
                // console.log(callbackResults)

                // console.log(stats)
                allStats[i] = stats

                //.every will return an overall of FALSE if at least 1 item is falsy
                const invokedResults = allStats.every((stats)=>{
                    return stats
                })


                if (invokedResults) {
                    
                    // for (resultStats of invokedResults) {
                    //     console.log(files[i], resultStats.isFile())
                    // }
                    //for of loop is not iterable


                    allStats.forEach((resultStat, index) => {

                        console.log(files[index], resultStat.isFile())
                        
                    });

                }


        






                // if (stats.isFile()){
                //     // console.log(chalk.yellow(fileItem))
                //     console.log('\x1b[93m%s\x1b[0m', fileName)

                //     //
                // } else if(stats.isDirectory()){
                //     console.log('\x1b[96m%s\x1b[0m', fileName+"/")

                //     // console.log(chalk.red(fileItem+"/"))
  
                // } else {
                //     console.log(fileName)
                // }


            })


        }


        console.log(allStats)

        // if (callbackResults.includes(!null)){
        //     //all our callbacks have been invoked, now we can print and order our files
        //     console.log(callbackResults)
        // }

        // console.log(callbackResults)


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