$(document).foundation();

// open overlays
$('#8w').on('click', function() {
  $('.overlay-one').addClass('is-active')
});
$('#ko').on('click', function() {
  $('.overlay-two').addClass('is-active')
});
$('#banner-btn').on('click', function() {
  $('.overlay-three').addClass('is-active')
});

// close overlays
$('.close-overlay-one').on('click', function() {
  $('.overlay-one').removeClass('is-active')
});
$('.close-overlay-two').on('click', function() {
  $('.overlay-two').removeClass('is-active')
});
$('.close-overlay-three').on('click', function() {
  $('.overlay-three').removeClass('is-active')
});
