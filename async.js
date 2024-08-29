 

// console.log("First Step start")  //droback
// setTimeout(()=>{
//     console.log("Second Step")
// },2000)
// console.log("Third Step")


// let a=10;
// let b=0;

// setTimeout(()=>{
   
//     b=20;
//     console.warn('print value in set time ',b)
// },2000)

// console.warn(a+b)



// resolve issue

let a=20;
let b=0;

console.log("AAAAA");
let waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },2000)
})

waitingData.then((data)=>{
    b=data;
    console.log(a+b)
})



