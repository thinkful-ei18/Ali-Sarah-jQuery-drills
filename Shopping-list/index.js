'use strict';
// Requirements
// In terms of user experience, your shopping list app must allow users to:

// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list
// Additionally:

// You must use a CDN - hosted version of jQuery
// Put your application code in a file called index.js and link to it in index.html
// Be sure to put both script elements at the bottom of the < body > element.
// Do not alter index.html or main.css other than adding the links to the external JavaScript inside index.html.Write JavaScript code that works with the existing HTML and CSS to implement the required features.
//   Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().

$(function (){
  $("form button").click(function(event){
    event.preventDefault();
    console.log($('form input').val());
    let add = `<li><span class="shopping-item">${$('form input').val()}</span> <div class="shopping-item-controls"> <button class="shopping-item-toggle"> <span class="button-label">check</span></button> <button class="shopping-item-delete"> <span class="button-label">delete</span></button></div></li>`;
    $('.shopping-list').append(add);
  })
  $('.shopping-item-toggle').click(function(event) {
    console.log(event);
$('.shopping-item').toggleClass('shopping-item__checked');
  })
});

