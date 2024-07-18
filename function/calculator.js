function calculator(o,p,q)
{
    sign=prompt("sign =")
    if(sign=="+")
        {
            console.log(o,"+",p,"+",q,"=");
            return parseInt(o)+parseInt(p)+parseInt(q);
        }
    else if(sign=="-")
        {
            console.log(o,"-",p,"-",q,"=");
            return o-p-q
        }
    else if(sign=="*")
        {
            console.log(o,"*",p,"*",q,"=");
            return o*p*q
        }
    else if(sign=="/")
        {
            console.log(o,"/",p,"/",q,"=");
            return o/p/q
        }
    else{
        console.log("wrong sign");
        return calculator(o,p,q)
    }
}
let a=prompt("first value ="),b=prompt("second value ="),c=prompt("third value =")
console.log(calculator(a,b,c))