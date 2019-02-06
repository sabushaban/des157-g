'use strict';
console.log('reading js');

document.querySelector('#s').addEventListener('click', processForm);

function processForm(evt) {

  var firstL = document.querySelector('#firstL').value;


  var last = document.querySelector('#last').value;

  var age = document.querySelector('#age').value;

  var myMsg = document.querySelector('#myMsg');

  myMsg.innerHTML = ('Hi, my favorite breed is ' + breed + ' I love everything about' + breed + favMovie + ' too!');

  evt.preventDefault();

}
