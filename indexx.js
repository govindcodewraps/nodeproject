const fs=require('fs');
//fs.writeFileSync('apple.txt','this is apple file');// for single file generate
const path = require('path');
const dirPath=path.join(__dirname,'files');// __direname provide current director path   find folder path
//console.warn(dirPath)
// for(i=0;i<5;i++){
//     //fs.writeFileSync("hello"+i+".txt","a simple text file")

//     fs.writeFileSync(dirPath+`/helloi${i}.txt`,"a simple text file"+i)
// }
fs.readdir(dirPath,(err,filess)=>{ //  call back function // arrow function
   // console.warn(filess)
filess.forEach((items)=>{
    console.log("File name is :",items)
})
})