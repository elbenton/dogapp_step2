'use strict';

function getDogImage(numInput) {
  if (numInput < 3) {
  fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
} if (numInput > 50) {
    return alert("Invalid number");
  } else {
    fetch(`https://dog.ceo/api/breeds/image/random/${numInput}`)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson));
  }
}

function watchForm() {
  $("#formNumberOfDogsId").submit(event => {
    event.preventDefault();
    let userNumInput = $("#inputNumberOfDogsId").val();
    getDogImage(userNumInput);
  });
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results').html("");
  responseJson.message.forEach(renderedImg => {
    $('.results').append(`<img src="${renderedImg}" class="results">`);
  });
  $('.hidden').show()
}
$('.hidden').hide()
$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});