function numbers(g)
{
    let r,sum=0,temp,asum=0,ssum=0,stemp=1
    for(b=g;b!=0;b=parseInt(b/10))
        {
            r=b%10;
            sum=sum*10+r;
            temp=r*r*r
            asum+=temp
            ssum+=r;
            stemp*=r
        }
    if(sum==g)
        {
            console.log(g,"palindrome number");
        }
    else if(asum==g)
        {
            console.log(g,"armstrong number");
        }
    else if(ssum==stemp)
        {
            console.log(g,"spy number");
        }
    else{
        console.log(g,"random number");
    }
}
let number=prompt("write a number =")
console.log(numbers(number));