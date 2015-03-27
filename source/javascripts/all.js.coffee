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
      breakpoint: 768
      settings:
        arrows: true
        centerMode: true
        centerPadding: '60px'
        slidesToShow: 3
    }, {
      breakpoint: 480
      settings:
        arrows: false
        centerMode: true
        centerPadding: '60px'
        slidesToShow: 1
    }
  ]

$('#introduction-texts').slick
  slidesToShow: 1
  slidesToScroll: 1
  arrows: false
  fade: true
  asNavFor: '#introduction-photos'
