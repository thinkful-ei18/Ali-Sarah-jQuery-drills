'use strict';
// In this challenge, you'll re-implement FizzBuzz. This time you'll create an event listener that listens for when a user submits a form indicating how high to count. This event should cause the program to create the FizzBuzz sequence up to the number requested by the user.

// For each element in the FizzBuzz sequence, your code should insert an element into the .js-results div that looks like this:

// <div class="fizz-buzz-item">
//   <span>1</span>
// </div>
// If the element's content is the word "fizz", the div with .fizz-buzz-item should also get the class .fizz applied. So:

// <div class="fizz-buzz-item fizz">
//   <span>fizz</span>
// </div>
// If the element's content is the word "buzz" it should get the class ".buzz" applied:

// <div class="fizz-buzz-item buzz">
//   <span>buzz</span>
// </div>
// If its content is the word "fizzbuzz" it should get the class "fizzbuzz" applied:

// <div class="fizz-buzz-item fizzbuzz">
//   <span>fizzbuzz</span>
// </div>
// Your function should append the resulting HTML to the .js-results DOM element.

$(function() {
  $('#number-chooser').click(function(event) {
    event.preventDefault();
    console.log('click');
    let num = $('#number-choice').val();
    let finalFizzBuzz = '';
      const fizzbuzz = '<div class="fizz-buzz-item fizzbuzz"> <span>fizzbuzz</span> </div>';
      const buzz = '<div class="fizz-buzz-item buzz"> <span>buzz</span> </div>';
      const fizz = '<div class="fizz-buzz-item fizz"> <span>fizz</span> </div>';
      let number = '<div class="fizz-buzz-item"> <span>1</span> </div>'
    console.log(num);
    for (let i = 0; i<=num; i++) {
      if (i % 15 === 0) {
        console.log('fizzbuzz');
          finalFizzBuzz += fizzbuzz;
      } else if (i % 5 === 0) {
        console.log('buzz');
        finalFizzBuzz += buzz;
      } else if (i % 3 === 0) {
        console.log('fizz');
        finalFizzBuzz += fizz
      } else {
        console.log(i);
        finalFizzBuzz += `<div class="fizz-buzz-item"> <span> ${i}</span> </div>`;
      }
    } 
    $('.js-results').html(finalFizzBuzz);
  });
});