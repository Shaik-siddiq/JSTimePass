const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click',()=>{
    let hexcolor ='#' //if u give const then u can't update
    for(let i=0; i < 6; i++){
        hexcolor += hex[getRandomnuber()]
    }
    color.textContent = hexcolor;
    document.body.style.backgroundColor = hexcolor
})

function getRandomnuber(){
    return Math.floor(Math.random()*hex.length)
}