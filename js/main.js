$('.comingsoonsec_content-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: true,
    dots: true,
    autoplay: false,
    prevArrow: $('.comingsoonsec_content-downpart-viewmore-buttons-left'),
    nextArrow: $('.comingsoonsec_content-downpart-viewmore-buttons-right'),
    responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false
      }
    }
  ]
});

$('.firstsec_catalogitem_content-downpart-leftpart-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  dots: true,
  infinite: true,
  prevArrow: $('.firstsec_catalogitem_content-downpart-leftpart-slider-buttons-left'),
  nextArrow: $('.firstsec_catalogitem_content-downpart-leftpart-slider-buttons-right'),
  asNavFor: '.firstsec_catalogitem_content-downpart-leftpart-slider-nav',

});

$('.firstsec_catalogitem_content-downpart-leftpart-slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.firstsec_catalogitem_content-downpart-leftpart-slider',
  dots: false,
  centerMode: false,
  infinite: false,
  loop: true,
  focusOnSelect: true,
  centerPadding: '0px'
});


$('.advantagessec_content-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: false,
    dots: true,
    autoplay: false,
    prevArrow: $('.advantagessec_content-list-viewmore-buttons-left'),
    nextArrow: $('.advantagessec_content-list-viewmore-buttons-right'),
    responsive: [
    {
      breakpoint: 9000,
      settings: "unslick"
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false
      }
    }
  ]
});

window.addEventListener('DOMContentLoaded', function () {
   MicroModal.init({
      openTrigger: 'data-custom-open',
      closeTrigger: 'data-micromodal-close',
      disableScroll: true,
      disableFocus: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
   });
});

const btnclose = document.querySelector("#closemodal");
var body1 = document.getElementsByTagName('body')[0]

btnclose.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('modal-order');
    body1.setAttribute('style', 'overflow-y: scroll');
});

jQuery(document).ready(function($){
  jQuery(function($){
  $('.modal-order').mouseup(function (e){ // событие клика по веб-документу
    var div = $(".container_modal"); // тут указываем ID элемента
  var div2 = $(".modal-order"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
    
    div2.toggleClass("is-open");
    body1.setAttribute('style', 'overflow-y: scroll');
    console.log(111);
    }
    else{
      console.log(222);
    }
  });
});
});






let yandexmap = document.getElementsByClassName('yandexmap');

if (yandexmap[0]) {
ymaps.ready(function () {
    var myMap = new ymaps.Map('yandexmap', {
        center: [59.931934, 30.363457],
        zoom: 12.5,
        controls: []
    }, 

    {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark1 = new ymaps.Placemark([59.939032, 30.315827], {}, {
      // Опции.
      
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/mapsec_baloon.svg',
      // Размеры метки.
      iconImageSize: [30, 42],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38],
    })

    myMap.geoObjects
        .add(myPlacemark1);
});

}



window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('input[data-tel-input]'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

var nameInputs = document.querySelectorAll('input[data-name-input]');

$(nameInputs).on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^аА-яЯ]/g.exec(that.value);
        console.log(res);
        that.value = that.value.replace(res, '');
    }, 0);
});


var emailInputs = document.querySelectorAll('input[data-email-input]');

$(emailInputs).on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^aA-zZ1234567890@.?!%&()><*-_]/g.exec(that.value);
        console.log(res);
        that.value = that.value.replace(res, '');
    }, 0);
});








/*--------------BURGER MENU-----------------------*/

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const close_popup = document.querySelector("#close_popup");

const body = document.body;

const btn1 = document.getElementsByClassName('header_content-wrap-navmenu-list-item-1')[0];
const btn2 = document.getElementsByClassName('header_content-wrap-navmenu-list-item-2')[0];
const btn3 = document.getElementsByClassName('header_content-wrap-navmenu-list-item-3')[0];
const btn4 = document.getElementsByClassName('header_content-wrap-navmenu-list-item-4')[0];
const btn5 = document.getElementsByClassName('header_content-wrap-navmenu-list-item-5')[0];        
const btn6 = document.getElementsByClassName('header_content-wrap-navmenu-list-item-6')[0];
const btn7 = document.getElementsByClassName('header_content-wrap-navmenu-list-item-7')[0]; 

hamb.addEventListener("click", hambHandler);
close_popup.addEventListener("click", hambHandler);


function hambHandler(e) {
  e.preventDefault();

  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
}


if(btn1) {
  btn1.addEventListener('click', function() {
      console.log(111);
     popup.classList.toggle("open");
     body.classList.toggle("noscroll");
  });
}

if(btn2) {
  btn2.addEventListener('click', function() {
      console.log(111);
     popup.classList.toggle("open");
     body.classList.toggle("noscroll");
  });
}

if(btn3) {
  btn3.addEventListener('click', function() {
      console.log(111);
     popup.classList.toggle("open");
     body.classList.toggle("noscroll");
  });
}

if(btn4) {
  btn4.addEventListener('click', function() {
      console.log(111);
     popup.classList.toggle("open");
     body.classList.toggle("noscroll");
  });
}

if(btn5) {
  btn5.addEventListener('click', function() {
      console.log(111);
     popup.classList.toggle("open");
     body.classList.toggle("noscroll");
  });
}

if(btn6) {
  btn6.addEventListener('click', function() {
      console.log(111);
     popup.classList.toggle("open");
     body.classList.toggle("noscroll");
  });
}

if(btn7) {
  btn7.addEventListener('click', function() {
      console.log(111);
     popup.classList.toggle("open");
     body.classList.toggle("noscroll");
  });
}




window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('input[data-tel-input]'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

var nameInputs = document.querySelectorAll('input[data-name-input]');

$(nameInputs).on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^аА-яЯ]/g.exec(that.value);
        console.log(res);
        that.value = that.value.replace(res, '');
    }, 0);
});







