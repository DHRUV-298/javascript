let sData=[
    {name:"dhruv",english:77,maths:57,science:67,gujrati:77},
    {name:"chirag",english:74,maths:47,science:67,gujrati:17},
    {name:"sanvi",english:67,maths:88,science:97,gujrati:54},
    {name:"darshan",english:65,maths:74,science:37,gujrati:70},
    {name:"jinal",english:89,maths:91,science:97,gujrati:94},
    {name:"yash",english:38,maths:63,science:57,gujrati:70},
    {name:"raju",english:32,maths:30,science:25,gujrati:40},
]

console.log("=====>result<=====");

let pResult=sData.map(r =>{
    let total=r.english+r.maths+r.science+r.gujrati
    r.total =total
    let avg=total/4
    r.avg=avg
    let result=avg>33?"pass":"fail"
    r.result=result
    return {...r,total:total,avg:avg,result:result}
})
console.log(pResult);

console.log("=====>topper<=====");

console.log(sData.find(t =>{
    return t.avg > 90
}));
