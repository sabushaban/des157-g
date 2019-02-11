'use strict';

var phone = document.querySelector('#phone');
var lipstick1 = document.querySelector('#lipstick1');
var usb = document.querySelector('#usb');


var close = document.querySelector('#close')
var lipstickclose = document.querySelector('#lipstickclose')
var overlay = document.querySelector('#overlay')
var overlay1 = document.querySelector('#overlay')

phone.addEventListener('click', function() {
  overlay.style.display = 'block';
})

close.addEventListener('click', function() {
  overlay.style.display = 'none';
})

lipstick.addEventListener('click', function() {
  overlay1.style.display = 'block';
})

lipstickclose.addEventListener('click', function() {
  overlay1.style.display = 'none';
})
