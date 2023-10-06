var fs=require('fs')
    fs.writeFile("writtenFile",'console.log("done");',function(err){
        console.log("data saved!");
    })