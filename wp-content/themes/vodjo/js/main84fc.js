$(function() {
  $('.scroll-top').bind('click', function(event) {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    event.preventDefault();
  });
});

/*!
* classie v1.0.0
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
hasClass = function( elem, c ) {
return elem.classList.contains( c );
};
addClass = function( elem, c ) {
elem.classList.add( c );
};
removeClass = function( elem, c ) {
elem.classList.remove( c );
};
}
else {
  hasClass = function( elem, c ) {
return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
if ( !hasClass( elem, c ) ) {
  elem.className = elem.className + ' ' + c;
}
  };
  removeClass = function( elem, c ) {
elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
var fn = hasClass( elem, c ) ? removeClass : addClass;
fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

function init() {
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 100,
    header = document.querySelector("header");
    if (distanceY > shrinkOn) {
        classie.add(header,"invert");
    } else {
      if (classie.has(header,"invert")) {
        classie.remove(header,"invert");
      }
    }
  });
}
window.onload = init();

$(function() {
  var Menu = (function() {
    var toggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');
    var menuList = document.querySelector('.menu-list');
    var brand = document.querySelector('.menu-brand');
    var menuItems = document.querySelectorAll('.menu-item');
    var social = document.querySelector('.menu-social');
    
    var active = false;
    
    var toggleMenu = function() {
      if (!active) {
        menu.classList.add('menu-active');
        menuList.classList.add('menu-list-active');
        brand.classList.add('menu-brand-active');
        social.classList.add('menu-social-active');
        toggle.classList.add('menu-toggle-close');
        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.add('menu-item-active');
        }
        
        active = true;
      } else {
        menu.classList.remove('menu-active');
        menuList.classList.remove('menu-list-active');
        brand.classList.remove('menu-brand-active');
        social.classList.remove('menu-social-active');
        toggle.classList.remove('menu-toggle-close');
        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.remove('menu-item-active');
        }
        
        active = false;
      }
    };
    
    var bindActions = function() {
      toggle.addEventListener('click', toggleMenu, false);
    };
    
    var init = function() {
      bindActions();
    };
    
    return {
      init: init
    };
    
  }());
  
  Menu.init();
}());

$(function() {
  $(".menu-toggle").click(function() {
    $(".header").toggleClass("overlay");
  });
});

$('.client-carousel').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});

$('.testimony').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true
});