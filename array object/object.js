let student=[
    {
        name:"Dhruv",
        english:66,
        science:64,
        maths:60,
        hindi:75,
        gujrati:80   
    },
    {
        name:"yash",
        english:58,
        science:55,
        maths:66,
        hindi:72,
        gujrati:84   
    },
    {
        name:"Dax",
        english:63,
        science:64,
        maths:60,
        hindi:74,
        gujrati:40   
    },
    {
        name:"shyam",
        english:36,
        science:54,
        maths:40,
        hindi:55,
        gujrati:45   
    },
    {
        name:"Darshan",
        english:66,
        science:64,
        maths:50,
        hindi:55,
        gujrati:77   
    },
]

// let t=student.map(f =>{
//     let total=f.english+f.science+f.maths+f.hindi+f.gujrati
//     f.total=total
//     let avg=parseFloat(total/5)
//     f.avg=avg
//     return {...f,total:total,avg:avg}
// })


// using two variable
for (const d in student) {
       console.log(`<=====result of ${student[d].name},====>`);
    for (const k in student[d]) {
            console.log(k,":",student[d][k]);      
    }
   
       console.log("");
    }




// ====================================================
// for (const d in student) {
//         console.log(`<=====result of ${student[d].name},====>`);
//         console.log(`english =${student[d].english}`)
//         console.log(`science =${student[d].science}`)
//         console.log(`maths =${student[d].maths}`)
//         console.log(`hindi =${student[d].hindi}`)
//         console.log(`gujrati =${student[d].gujrati}`)
//         console.log(`total :${student[d].total}`);
//         console.log(`parsentage :${student[d].avg}%`);
  
//         console.log("");
// }