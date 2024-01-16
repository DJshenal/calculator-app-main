const display = document.getElementById('display');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

function clicktoshow(input){
    display.value += input;
}

function del(){
    const currentValue = display.value;
      display.value = currentValue.slice(0, -1);
}

function reset(){
    display.value=('');
}

function calcute(){
    try{
        display.value= eval(display.value);
    }catch(error){
        display.value= 'Error';
    }
}

one.addEventListener('click',function(){
    var body = document.querySelector('body');
    var toggle = document.getElementById('circle')
    body.classList.add('active1');
    body.classList.remove('active2');
    body.classList.remove('active3');
    toggle.style.left='0%';
})

two.addEventListener('click',function(){
    var body = document.querySelector('body');
    var toggle = document.getElementById('circle')
    body.classList.add('active2');
    body.classList.remove('active1');
    body.classList.remove('active3');
    toggle.style.left='35%';
})

three.addEventListener('click',function(){
    var body = document.querySelector('body');
    var toggle = document.getElementById('circle')
    body.classList.add('active3');
    body.classList.remove('active1');
    body.classList.remove('active2');
    toggle.style.left='65%';
})
