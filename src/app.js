// Import $ for use JQuery
import $ from 'jquery';

// Files Js Popper use for bootstrap
import 'popper.js';

// Files Js framework bootstrap
import 'bootstrap';

// Css efects 
import AOS from 'aos'

// Custom onw style
import './scss/app.scss';

// Tnit AOS efects css
AOS.init({
	easing: 'ease-in-out-sine'
});

// Init to use Hamgurguer menu
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
forEach(hamburgers, function(hamburger) {
  hamburger.addEventListener("click", function() {
	this.classList.toggle("is-active");
  }, false);
});
}

// Scrollspy menu bootstrap
$('body').scrollspy({ target: '#main-nav' });

// Add smooth scrolling
$('#main-nav a').on('click', function (e) {
  // Check for a hash value
  if (this.hash !== '') {
    // Prevent default behavior
    e.preventDefault();

    // Store hash
    const hash = this.hash;

    // Animate smooth scroll
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function () {
      // Add hash to URL after scroll
      window.location.hash = hash;
    });
  }
});
		
// Init Popover
$('[data-toggle="popover"]').popover();

function showPopover() {
	$('#hello').popover('show');
}

function hidePopover() {
	$('#hello').popover('hide');
}

function togglePopover() {
	$('#hello').popover('toggle');
}

// Popover events
$('#hello').on('show.bs.popover', function () {
	console.log('Popover show');
});

$('#hello').on('shown.bs.popover', function () {
	console.log('Popover shown');
});

$('#hello').on('hide.bs.popover', function () {
	console.log('Popover hide');
});

$('#hello').on('hidden.bs.popover', function () {
	console.log('Popover hidden');
});

// Init tooltips
$('[data-toggle="tooltip"]').tooltip();

function showTooltip() {
	$('#hello').tooltip('show');
}

function hideTooltip() {
	$('#hello').tooltip('hide');
}

function toggleTooltip() {
	$('#hello').tooltip('toggle');
}

// Tooltip Events
$('#hello').on('show.bs.tooltip', function () {
	console.log('Tooltip Show');
});

$('#hello').on('shown.bs.tooltip', function () {
	console.log('Tooltip Shown');
});

$('#hello').on('hide.bs.tooltip', function () {
	console.log('Tooltip Hide');
});

$('#hello').on('hidden.bs.tooltip', function () {
	console.log('Tooltip Hidden');
});

// Javascript del template
console.log('Hola mundo...');