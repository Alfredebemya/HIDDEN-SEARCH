const input=document.querySelector('.input');
const recherche=document.querySelector('.recherche');
const button=document.querySelector('.button');

button.addEventListener('click',() =>  
    recherche.classList.toggle('active')
    input.focus()
)