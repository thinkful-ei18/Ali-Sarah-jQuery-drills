'use strict';

$(function (){
  const shoppingList = $('.js-shopping-list');
  $('#js-shopping-list-form').on('submit', function(event){
    event.preventDefault();
    let add = (
      `<li class="js-shopping-list-item">
        <span class="shopping-item">${ $('.js-shopping-list-entry').val() }</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    );
    shoppingList.append(add);
  });

  shoppingList
    .on('click', '.shopping-item-toggle', function (event) {
      $(event.target)
        .closest('.js-shopping-list-item').find('.shopping-item').toggleClass('shopping-item__checked');
    })
    .on('click', '.shopping-item-delete', function (event) {
      $(event.target).closest('.js-shopping-list-item').remove();
    });
});
