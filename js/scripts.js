import $ from 'jquery';
import TweenMax from 'gsap';

$('body').css('background-color','green');


TweenMax.to('.box',2,{
  x : 400,
  roration : 180,
  backgroundColor : 'white',
  borderRadius : '50%'
})

let age = 26;

console.log(age);