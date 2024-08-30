const fs=require('fs');
const path=require('path')
const dirPath=path.join(__dirname,'curd');
const filepath=`${dirPath}/apple.txt`;
//fs.writeFileSync(filepath,'This is a simple text file'); //add file


// fs.readFile(filepath,(err,item)=>{    //read file
//     console.log(item)
// })


// fs.appendFile(filepath,' This is name is apple .txtt',(err)=>{  //update file
//     if(!err)
//         console.log("file is updated")
// })



// fs.rename(filepath,`${dirPath}/fruit.txt`,(err)=>{  //rename
//     if(!err)
//         console.log("File name is updated")
// })

//fs.unlinkSync(`${dirPath}/fruit.txt`) // delet file path