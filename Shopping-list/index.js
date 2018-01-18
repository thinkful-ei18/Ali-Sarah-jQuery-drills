'use strict';

$(function (){
  $("form button").click(function(event){
    event.preventDefault();
    console.log($('form input').val());
    let add = `<li><span class="shopping-item">${$('form input').val()}</span> <div class="shopping-item-controls"> <button class="shopping-item-toggle"> <span class="button-label">check</span></button> <button class="shopping-item-delete"> <span class="button-label">delete</span></button></div></li>`;
    $('.shopping-list').append(add);
  })
  $('ul').on('click', '.shopping-item-toggle', function (event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
  $('ul').on('click', '.shopping-item-delete', function (event) {
    $(this).closest('li').remove();
  });
});