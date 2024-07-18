fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((respons) => respons.json())
.then((respons)=>{
    console.log(respons.title);
    document.write(respons.title)
})
.catch((eror) =>{
    console.log(eror);
})