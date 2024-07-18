
let data=[
    {name:"Yash",Ecode:1503,work:"computor operator",time:"morning"},
    {name:"Yash",Ecode:1503,work:"computor operator",time:"morning"},
    {name:"Yash",Ecode:1503,work:"computor operator",time:"morning"},
    {name:"Yash",Ecode:1503,work:"computor operator",time:"morning"},
    {name:"Yash",Ecode:1503,work:"computor operator",time:"morning"},
    {name:"Dashank",Ecode:1101,work:"computor operator",time:"morning"},
    {name:"Dashank",Ecode:1101,work:"computor operator",time:"morning"},
    {name:"Dashank",Ecode:1101,work:"computor operator",time:"morning"},
    {name:"Dashank",Ecode:1101,work:"computor operator",time:"morning"},
    {name:"Dashank",Ecode:1101,work:"computor operator",time:"morning"},
    {name:"Dashank",Ecode:1101,work:"computor operator",time:"morning"},
    {name:"Darshan",Ecode:2009,work:"computor operator",time:"morning"},
    {name:"Darshan",Ecode:2009,work:"computor operator",time:"morning"},
    {name:"Darshan",Ecode:2009,work:"computor operator",time:"morning"},
    {name:"Darshan",Ecode:20090,work:"reception",time:"morning"},
    {name:"Darshan",Ecode:2009,work:"machine operator",time:"morning"},
    {name:"Darshan",Ecode:2009,work:"machine operator",time:"morning"},
    {name:"Hardik",Ecode:2151,work:"machine operator",time:"night"},
    {name:"Hardik",Ecode:2151,work:"machine operator",time:"night"},
    {name:"Hardik",Ecode:2151,work:"machine operator",time:"night"},
    {name:"Hardik",Ecode:2151,work:"machine operator",time:"night"},
    {name:"Hardik",Ecode:2151,work:"machine operator",time:"night"},
    {name:"Shyam",Ecode:2378,work:"sales man",time:"afternoon"},
    {name:"Syam",Ecode:2378,work:"sales man",time:"afternoon"},
    {name:"Sham",Ecode:2378,work:"sales man",time:"afternoon"},
    {name:"Shya",Ecode:2378,work:"sales man",time:"afternoon"},
    {name:"Darshan",Ecode:2009,work:"sales man",time:"morning"},
]

console.log("=====>employee data<====");
let EmployData = data.map(d =>{
    let etc="#"
    return {...d,etc}
})
console.log(EmployData);

console.log("========>timing<=========");

let morningEm = data.filter((m)=>{
    return m.time == "morning"
})

console.log(morningEm);

console.log("=======>sales man<=======");

let salesEm =data.filter(s =>{
    return s.work == "sales man"
})
 console.log(salesEm);

 console.log("=====>all position<=====");

let positionEm = data.forEach(p =>{
    console.log(p.work);
})




let empcode = data.find(f =>{
    return f.Ecode == 20090
})
console.log(empcode);
