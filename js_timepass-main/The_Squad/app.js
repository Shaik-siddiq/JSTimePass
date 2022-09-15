const details = [
    {name:"siddiq", age:25},
    {name:"shaik", age:26},
    {name:"muhammad",age:30},
    {name:"sid",age:15},
    {name:"siddiq", age:25},
    {name:"shaik", age:26},
    {name:"muhammad",age:30},
    {name:"sid",age:15}
]
const info = document.querySelector('#ref');
const data = details.map((item)=>{
    return `<div> ${item.name} is ${item.age} years old </div>`;

})
info.innerHTML = data.join('\n');