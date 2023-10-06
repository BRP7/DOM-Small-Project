var fs=require('fs')
    fs.appendFile("writtenFile",'console.log("done");',function(err){
        console.log("data saved!");
    })