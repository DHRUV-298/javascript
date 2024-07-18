function palp()
{
    let p=prompt("number =")  
    let n,sum=0,r;
    for(n=p;n>0;n=parseInt(n/10))
        {
            r=n%10;
            sum=sum*10+r;
        }
    if(sum==p)
    {
        console.log("palindrome number");
    }
    else
    {
        console.log("is not palindrome number");
    }
}

function palpr(){
    let start=prompt("start ="),end=prompt("end =")
    for(start;start<=end;start++)  
        {
            let d,r,sum=0;
            for(d=start;d!=0;d=parseInt(d/10))
                {
                    r=d%10;
                    sum=sum*10+r;
                if(sum==start)
                    {
                            console.log(start);   
                    }
                }
        }
}

function prspy()
{
    let start=prompt("start ="),end=prompt("end =")
    for(start;start<=end;start++)
        {
            let j,sum=0,temp=1,r;
            for(j=start;j!=0;j=parseInt(j/10))
                {
                    r=j%10;
                    sum=sum+r;
                    temp=temp*r;
                    
                }
                if(sum==temp)
                    {
                        console.log(start);
                    }
        }
}