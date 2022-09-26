"use strict";
/*######## RECOMENDADO #############*/
//condicional
const body1 = document.querySelector('body');
if (body1)
    body1.style.background = 'red';
//type assertion
const body3 = document.querySelector('body');
body3.style.background = 'red';
//HTMLElement
const input = document.querySelector('.input');
input.value = 'qualquer coisinha';
input.focus();
/*############# NÃO RECOMENDADO ###############*/
//Non-Null assertion(!)
const body2 = document.querySelector('body'); // esclamação no final, fala que existe sim
body2.style.background = 'red';
