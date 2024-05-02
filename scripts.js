let plusIcons = document.querySelectorAll('.icon-plus');
let minusIcons = document.querySelectorAll('.icon-minus');
let pTags = document.querySelectorAll('p')


const openClosePlusIcon = (index)=>{
    pTags[index].classList.toggle('reveal-text');
    plusIcons[index].style.display = 'none'
    minusIcons[index].style.display = 'inline'

}

const openCloseMinusIcon = (index)=>{
    pTags[index].classList.toggle('reveal-text');
    minusIcons[index].style.display = 'none'
    plusIcons[index].style.display = 'inline'

}

plusIcons.forEach((plusIcon, index) => {
    plusIcon.addEventListener('click', ()=> openClosePlusIcon(index))
});

minusIcons.forEach((minusIcon, index) => {
    minusIcon.addEventListener('click', ()=> openCloseMinusIcon(index))
});
