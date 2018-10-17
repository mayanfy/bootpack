
// Archivos Js del framework de bootstrap
import 'bootstrap';

// Archivos para los efectos de transicion de las cajas 
import AOS from 'aos'

// Archivos scss del template
import './scss/app.scss';

// Inicializamos AOS
AOS.init({
	easing: 'ease-in-out-sine'
});


  var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
	forEach(hamburgers, function(hamburger) {
	  hamburger.addEventListener("click", function() {
		this.classList.toggle("is-active");
	  }, false);
	});
  }

// Javascript del template
console.log('Hola mundo...');