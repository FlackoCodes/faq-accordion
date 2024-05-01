let buttons = document.querySelectorAll('.icon-plus');
let pTags = document.querySelectorAll('p')

const openCloseAccordion = (index)=>{
    pTags[index].classList.toggle('reveal-text')
}


buttons.forEach((button, index) => {
    button.addEventListener('click', ()=> openCloseAccordion(index))
});


