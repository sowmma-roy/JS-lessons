const fs = require('node:fs');


//15 min challenge: use 'readdir' function to get foldername of current directory


fs.readdir('.', (err, files)=>{
    if(err){
        console.log(err);
        return error
    } else {
        console.log(files);
    }
})

 