const btn = document.querySelector('button');
let number = 1;

const addElement = function () {
    const divElement = document.createElement('div');
    divElement.textContent = number;
    
    if(number%5 == 0) {
        divElement.classList.add('circle')
    }
    document.body.appendChild(divElement); 
    number++; 
}

btn.addEventListener('click', addElement);