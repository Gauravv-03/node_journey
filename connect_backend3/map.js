// const number=[1,2,3,5];
  

// const newarray=number.map(num=>num*3);
// console.log(newarray);


const user=[
    {
        id:1,
        "name":"gaurav",
        "desc":"abc"
    },
    {
         id:2,
        "name":"rohit",
        "desc":"dec"
    },
    {
         id:3,
        "name":"mahesh",
        "desc":"china"
    }
];

const newarray1=user.map((curval,index)=>
`${index+1} + ${curval.name}`);
console.log(newarray1);