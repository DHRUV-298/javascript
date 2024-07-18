let string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae odit cum laboriosam quaerat dolores, distinctio vero laborum ea unde voluptatem pariatur dolore eligendi saepe tenetur. Distinctio a maiores numquam quidem placeat accusantium ut dolores omnis officiis ipsa consectetur amet ea, corrupti, porro quos natus asperiores sunt at ipsum doloremque."
let a=0,e=0,i=0,o=0,u=0,cnt=0,normal=0;
for(let v=0;v<string.length;v++)
    {
        if(string[v]=="a")
            {
                a++;
            }
        else if(string[v]=="e")
            {
                e++;
            }
        else if(string[v]=="i")
            {
                i++;
            }
        else if(string[v]=="o")
            {
                o++;
            }
        else if(string[v]=="u")
            {
                u++;
            }
        else
        {
            normal++;
        }
        if(string[v]=="a" ||string[v]=="e" || string[v]=="i" || string[v]=="o" ||string[v]=="u")
            {
                cnt++;
            }
    }
console.log(string);
console.log("a=",a);
console.log("e=",e);
console.log("i=",i);
console.log("o=",o);
console.log("u=",u);
console.log("all vowel =",cnt);
console.log("other =",normal);