const btn = document.querySelector('.btn');
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


const btn1 = document.querySelector('.btn1');


const addNumber = function(){
    const ulAdd = document.querySelector('ul');
    const ulElement = document.createElement('li');
    ulElement.textContent = number;
    
    if(number%3 == 0) {
        ulElement.classList.add('big');
    }
    ulAdd.appendChild(ulElement);
    number = number + 2;
}

btn1.addEventListener('click', addNumber);