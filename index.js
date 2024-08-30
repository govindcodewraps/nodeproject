//  const colors= require('colors');
// console.log("packageeeeeegbghbg".bgCyan);
// console.warn("step by stedfghjkp");
// console.log("welcome".red);
// console.log(100+88);

// const http = require('http');

// const data= require('./data');

// http.createServer((req,resp)=>{

//     resp.writeHead(200,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(5000);


////all data
// console.log(process.argv[1])
// console.warn("print user input");




// const fs=require('fs');   //create a file and remove with commands
// const input=process.argv;
// if(input[2]=='add')
// {
//     fs.writeFileSync(input[3],input[4])
// }else if(input[2]=='remove')
//     {

//         fs.unlinkSync(input[3])
//     }
//     else{
//         console.log("invalid input")
//     }


const express = require('express');
const app = express();

app.get('', (req, resp) => {
    console.log("data sent by client", req.query.name)
    resp.send('hello, this is home page ' + req.query.name);
});

app.get('/about', (req, resp) => {
    resp.send('Hello, This is About Page');
});

app.get('/detail', (req, resp) => {
    resp.send('Hello, This is Details Page');
    console.warn("details page")
});

app.listen(5000, () => {
    console.log('Server is running on port 5000')
});