// import $ from 'jquery'; // jquery 
import TweenMax from 'gsap'; // gsap
import '../sass/style.scss';
// import Vue from 'vue';
// import '../css/header.css';
// import '../css/footer.css';

 $('body').css('background-color' , '#7126ff');


TweenMax.to('.box' , 2,{
   x: 400,
   y: 300,
   rotation : 180,
   backgroundColor : 'white' ,
   borderRadius: '50%'   
});

new Vue({
   el : '#app',
   data : {
      message : 'hello vue ++'
   }


})