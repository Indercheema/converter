'use strict';

/*
    JavaScript Basics
    Inderjeet Cheema

    Converter
*/
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}
function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}
const form = select('form');
const c2f = select('.c2f');
const f2c = select('.f2c');
const cel = select('.number-one');
const mode = select('.mode');
const btn = select('.get-result');
const output = select('.output p');
const sectionDark = select('.dark-mode');
const heading = select('h2');
const label = select('.my-label');
const label1 = select('.my-label1');
const input = select('input');


onEvent('click', btn, function(){

    if(c2f.checked){

        output.innerText = (1.8*cel.value)+32;

    }else if(f2c.checked){

        output.innerText = (cel.value - 32)/1.8

    } else if (cel.value === '') {
        output.innerText = 'Please Enter valid Number';

    } else if (f2c.checked === false && c2f.checked === false) {
        output.innerText = 'Please Select To Fahrenheit or To Celsius';

}
});

onEvent('click', mode, function () {
    sectionDark.classList.toggle('light-mode');
    heading.classList.toggle('h22');
    label.classList.toggle('label-dark');
    label1.classList.toggle('label-dark');
    mode.value = 'Dark Mode';
    cel.classList.toggle('number-dark');
    output.classList.toggle('dark');
});