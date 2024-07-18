// ===1===//

let string=""
for(let c=1;c<=5;c++)
    {

        for(let r=c;r<=5;r++)
        {
            string +=r
        }
        string += "\n"
    }
    console.log(string);


// ===2===//

let patrn=""
for(let c=5;c>=1;c--)
    {
        for(let s=c;s>1;s--)
            {
                patrn +=" "
            }
        for(let r=5;r>=c;r--)
            {
                patrn+=r
            }
            patrn+="\n"
    }
console.log(patrn);

// ===3===//
console.log("\n");

let pattern1=""
for(let c=1;c<=5;c++)
    {
        for(let s=c;s>1;s--)
            {
                pattern1+=" "
            }
        for(let r=c;r<=5;r++)
            {
                pattern1 +=r
            }
        pattern1+="\n"
    }
console.log(pattern1);

// ===4===//

let pattern2=""
for(let c=1;c<=5;c++)
    {
        for(let r=1;r<=c;r++)
            {
                pattern2+=r
            }
            pattern2+="\n"
    }
console.log(pattern2);

// ===5===//

let pattern3=""
for(let c=1;c<=5;c++)
{
    for(let r=1;r<=5;r++)
        {
           if(r==1 || c==1 || r==5 || c==5)
            {
                pattern3+=" *";
            }
            else{
                pattern3+="  "
            }
        }
        pattern3+="\n"
}
console.log(pattern3);

// ===6===//

let pattern4=""
for(let c=1;c<=5;c++)
    {
        for(let r=1;r<=5;r++)
            {
                if(r==c || r+c==6)
                {   
                        pattern4+=" *"
                }  
                else{
                    pattern4+="  "
                }     
            }
            pattern4+="\n"
    }
console.log(pattern4);

// ===6===//

let pattern5=""
for(let c=1;c<=5;c++)
    {
        for(let r=1;r<=5;r++)
            {
                if(r==c || r+c==6)
                    {
                        pattern5+="   "
                    }
                    else{
                        pattern5+=" *"
                    }
            }
            pattern5+="\n"
    }
    console.log(pattern5);