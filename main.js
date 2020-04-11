const btn = document.querySelector('button')

btn.addEventListener('click', addElement);


const addElement = function (){
    
    const divElement = document.createElement('div');
    document.body.appendChild(divElement);
    
}