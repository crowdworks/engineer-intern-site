#= require_tree .

new WOW({}).init()

$("#navigation").sticky
  topSpacing: 0

smoothScrollTo = (position, speed = 700) ->
  $('body, html').animate scrollTop: position, speed

$('#navigation a').on 'click',  ->
  $('#navigation .navbar-collapse').collapse('hide')

$('#navigation .navbar-brand').on 'click', (event) ->
  event.preventDefault()
  smoothScrollTo 0, 1000

$('#menu .navbar-nav li > a').on 'click', (event) ->
  event.preventDefault()
  link = $(this).attr 'href'
  position = $(link).offset().top
  smoothScrollTo position

$('#introduction-texts').slick
  slidesToShow: 1
  slidesToScroll: 1
  arrows: false
  swipe: false
  asNavFor: '#introduction-photos'

$('#introduction-photos').slick
  centerMode: true
  centerPadding: '10px'
  slidesToShow: 3
  focusOnSelect: true
  asNavFor: '#introduction-texts'
  responsive: [
    {
      breakpoint: 1000
      settings:
        arrows: true
        centerMode: true
        centerPadding: '5px'
        slidesToShow: 1
    }
  ]

$('img.lazy').lazyload
  effect: "fadeIn"
