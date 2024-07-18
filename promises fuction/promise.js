console.log("how");

let res = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve("are");
    },2000)})

res.then((data) =>{
    console.log(data);
    console.log("you!");    
})
res.catch((error) =>{
    console.log(error); 
}
)