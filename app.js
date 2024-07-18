let total,avg;
let hin=prompt("hindi ="),sci=prompt("science ="),guj=prompt("gujrati ="),math=prompt("maths ="),eng=prompt("english =")
console.log("hindi =",hin)
console.log("science =",sci);
console.log("gujrati =",guj);
console.log("mathmatics =",math);
console.log("english =",eng);
total=hin+sci+guj+math+eng;
console.log("total =",total);
avg=total/5;
console.log("percetage =",avg);

if(hin>sci && hin>guj && hin>math && hin>eng)
    {
        console.log("hindi =",hin);
    }
else if(sci>guj && sci>math && sci>eng)
    {
        console.log("science =",sci);
    }
else if(guj>math && guj>eng)
    {
        console.log("gujrati =",guj);
    } 
else if(math>eng)
    {
        console.log("mathmatics =",math);
    }
else
    {
        console.log("english =",eng);
    }

