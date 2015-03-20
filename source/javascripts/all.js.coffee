#= require_tree .

$("#navigation").sticky
  topSpacing: 0

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

$('#introduction-texts').slick
  slidesToShow: 1
  slidesToScroll: 1
  arrows: false
  asNavFor: '#introduction-photos'
  mobileFirst: true
