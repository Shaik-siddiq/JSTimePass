const colors =['green','red','rgba(133,122,200)','#f15025']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click',()=>{
    const colornumbered = getrandomnumber()
    document.body.style.backgroundColor=colors[colornumbered]
    color.textContent=colors[colornumbered]
})

function getrandomnumber(){
    return Math.floor( Math.random() * colors.length )
}