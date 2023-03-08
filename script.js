//vars
let bg = document.getElementById('bg');
let bgbottom = document.getElementById('bgbottom');
let mount = document.getElementById('mountain');
let logo = document.getElementById('home-logo');
let text = document.getElementById('home-text');
let nav = document.getElementById('nav');
let container = document.getElementById('container');

//move on scroll
window.addEventListener('scroll', () => {
var value = window.scrollY;
bg.style.top = value * 0.5 + 'px';
text.style.top = value * 0.8 + 'px';
logo.style.top = value * 0.8 + 'px';
});

    

//fade on scroll
$(document).ready( () => {
    $(window).scroll(() => {
        if($(this).scrollTop() >200 ){
            $(logo).css({"opacity" : "0"})
        }
        else {
            $(logo).css({"opacity" : "1"})
        }
    })
})

$(document).ready( () => {
    $(window).scroll(() => {
        if($(this).scrollTop() >200 ){
            $(text).css({"opacity" : "0"})
        }
        else {
            $(text).css({"opacity" : "1"})
        }
    })
})

//NAVBAR

$(document).ready( () => {
    $(window).scroll(() => {
        if($(this).scrollTop() >100 ){
            $(nav).addClass('side-nav').removeClass('bottom-nav');
        }
        else {
            $(nav).addClass('bottom-nav').removeClass('side-nav');
        }
    })
})

///FORM

window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Success!";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Something went wrong..";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  