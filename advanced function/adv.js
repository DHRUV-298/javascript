// function first(a)
// {
//     let b=a,r,sum=0
//     function second() {
//         for(;b!=0;b=parseInt(b/10))
//             {
//                 r=b%10;
//                 sum=sum*10+r;
//             }
//             return sum;
//     }
//     v=second()
//     if(v==a)
//         {   
//             console.log(a,"palindrome number");
//         }
//         else{
//             console.log(a,"is not palindrome number");
//         }
// }
// first(1661)

let a=66,b=12,c=72

if(a<b)
    {
        d=a
        a=b
        b=d
    }
if(a<c)
    {
        e=a
        a=c
        c=e   
    }
if(b<c)
    {
        f=b
        b=c
        c=f
    }

    console.log(a,b,c);
