console.log("<====== student result ======>");
function result(e,h,s)
{
   
   return parseInt(e)+parseInt(h)+parseInt(s)
}
function avarage(h)
{
   let H=parseFloat(h/3)
   return H
}
let rollno,namme,english,hindi,science
  console.log("roll no.=",rollno=prompt("roll no.="));
   console.log("student name =",namme=prompt("student  name="));
   console.log("english =",english=prompt("english ="));
   console.log("hindi =",hindi=prompt("hindi ="));
   console.log("science =",science=prompt("science ="));

console.log("total =",result(english,hindi,science));
console.log("avarage =",j=avarage(result(english,hindi,science)),"%");
if(j>=90)
   {
      console.log("a+ grade");
   }
else if(j>=80)
   {
      console.log("a grade");
   }
else if(j>=70)
   {
      console.log("b+ grade");
   }
else if(j>=60)
   {
      console.log("b grade");
   }
else if(j>=50)
   {
      console.log("c grade");
   }
else if(j>=35)
   {
      console.log("d grade");
   }
else
   {
      console.log("fail");
   }