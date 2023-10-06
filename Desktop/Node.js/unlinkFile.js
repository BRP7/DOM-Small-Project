var fs=require('fs')
    fs.unlink("del.js",function(err){
        console.log("OOps file deleted.......!");
    })