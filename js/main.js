const head = document.querySelector('.head'); 
const face = document.querySelector('.face'); 




function wink () {
    face.innerHTML = (';D'); 
}

function unWink () {
    face.innerHTML = (':(')
}

head.addEventListener('click', wink)
head.addEventListener('mouseout',unWink)