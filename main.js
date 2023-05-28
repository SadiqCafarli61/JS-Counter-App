const counter = document.querySelector('#counter')
const btns = document.querySelectorAll('.btn')
let count = 0

btns.forEach((btn) =>{
    btn.addEventListener('click', (e) => {
        const element = e.currentTarget.classList
        if(element.contains('increase')){
            count++;
        } 
        else if(element.contains('decrease')){
            count--
        } else{
            count = 0
        }
        if(count > 5){
            counter.style.color = "red"
        } 
        if(count == 0){
            counter.style.color = "gray"
        }
        if(count < 0){
            counter.style.color = "blue"
        }
        counter.textContent = count
    })
   
})
