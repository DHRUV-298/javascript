let number=prompt("chose number =")
let d,r,sum=0,temp,tsum=0,ssum=0,stemp=1;
for(d=number;d!=0;d=parseInt(d/10))
    {
        r=d%10;
        sum=sum*10+r;
        temp=r*r*r;
        tsum=tsum+temp;
        ssum += r;
        stemp *=r;
    }
    if(number==sum)
        {
            console.log(number,"palindrome number")
        }
    else if(number==tsum)
        {
            console.log(number,"armstrong number");
        }
    else if(stemp==ssum)
        {
            console.log(number,"spy number");
        }
    else{
        console.log("randome number");
    }