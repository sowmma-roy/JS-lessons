#!/usr/bin/env node
//we want to use node to execute this filed


const fs = require('node:fs');
const {cwd} = require('process');

const path = require('path');
const { lstat } = require('node:fs/promises')

const chalk = require('chalk');
const { error } = require('node:console');


const commandLineArgs = process.argv[2] || cwd();
console.log(process.argv)

/*
- need to describe some of these args such as .. === go up one directory
- turn out lstat is working under the impression that the filenames we are passing are in current directory HOWEVER when we are referencing a path with our nls command ex: nls "/some/other/path" -> lstat needs to recevie the realtive path ref from cwd OR absolute path ref to what are referencing via nls

*/

fs.readdir(
    commandLineArgs, (err, files)=>{
    if(err){
        console.log(err);
        return error
    }

    const promisesCollection = []

    //Option 2.1 (Promise interface/wrapper on lstat calls)

    for (let i = 0; i < files.length; i++) {

        //Use a promise on each file-lstat

        const testPromise = new Promise ((resolve, reject) => {
            fs.lstat(path.join(commandLineArgs, files[i]), (err, stats)=>{

                if (err) {
                    reject("Error")
                    throw error
                }

                resolve(stats)                    
            })
        });

        promisesCollection.push(testPromise)


        //Sol-3 - we want to resolve all promises at once, thus commenting below temporarily
        // testPromise
        // .then((stats)=>{
        //     // console.log(stats)
        //     // allStats[i]= (stats.isFile())
        //     console.log(files[i], stats.isFile())
        // })

    }

    //Option3: using Promise.all to aggregarate the results (resovle or reject) from the multiple asynch operations i.e the individual promises
    Promise.all(promisesCollection)
    .then((results)=> {
        //console.log(results)//array of all the stats obj
        //currently not known which file is being referred to which stat

        //loop over the results array and use index
        results.forEach((resultStat, index)=>{

            if (resultStat.isFile()) {
                console.log((files[index]), resultStat.isFile())
            }
            else if (resultStat.isDirectory()) {
                console.log(files[index]+"/", resultStat.isFile())
            }
        })
            

    })

    console.log(chalk.underline('Hello world!'));






    //Option #2.3 using the Fs-Promise based approach

    // async function checkFileType(filenameArg) {
    //     try {
    //         const statsRes = await lstat(filenameArg)
    //         console.log(filenameArg, statsRes.isFile())

    //     } catch (err) {
    //         console.log("error")

    //     }
    // }

    // //need to loop over each file
    // for (let filename of files) {
    //     console.log(filename)
    //     checkFileType(filename)
    // }



})

/*
Try using Stephen's approach of using async and Promises, and Promises.all

*/





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


Refactor1:Callback invoation approach w/array

//BAD IMPLEMENTATION - because of randomness of callback invocation

const allStats = Array(files.length).fill(null)

for (let i = 0; i < files.length; i++) {

    fs.lstat(files[i], (err, stats) => {
        if (err) {
            console.log(err)
            throw error
        }
        allStats[i] = stats

        //.every will return an overall of FALSE if at least 1 item is falsy
        const invokedResults = allStats.every((stats)=>{
            return stats
        })


        if (invokedResults) {
            
            allStats.forEach((resultStat, index) => {

                console.log(files[index], resultStat.isFile())
                
            });
        }
    })
}


Refactor 2: Using Promise/async/await for 1 lstat call at a time




*/