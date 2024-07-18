
let data=[

    {vehicle:"fs-1",passanger:87,destination:"ahemdabad",time:"3 to 4"},
    {vehicle:"express",passanger:66,destination:"ahemdabad",time:"3 to 5"},
    {vehicle:"express",passanger:60,destination:"mumbai",time:"6 to 9"},
    {vehicle:"express",passanger:76,destination:"rajsthan",time:"5 to 6"},
    {vehicle:"kkexp",passanger:66,destination:"kolkata",time:"20 to 25"},
    {vehicle:"ccexp",passanger:66,destination:"chennai",time:"30 to 35"}
]

console.log(data.forEach(d =>{
    console.log(d);
}
))

console.log("========>surat to ahemdabd<========");

console.log(data.filter(s => {
    return s.destination == "ahemdabad"
}))


