#= require_tree .

$("#navigation").sticky
  topSpacing: 0

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