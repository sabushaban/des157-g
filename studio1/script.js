console.log('reading js');

'use strict';

document.querySelector('#s').addEventListener('click', processForm);

function processForm(evt) {

  var breed = document.querySelector('#breed').value;


  var favMovie = document.querySelector('#favMovie').value;


  var myMsg = document.querySelector('#myMsg');

  myMsg.innerHTML = ('Hi, my favorite breed is ' + breed + ' I love everything about' + breed + favMovie + ' too!');

  evt.preventDefault();
}
