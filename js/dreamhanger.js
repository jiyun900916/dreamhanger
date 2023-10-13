$(function() {
  $('.iconSeach').on('click', function() {
      $('.grayBox').fadeIn(500)
      $('.searchArea').stop().animate({
          top: 0,
          opacity: 1
      },800)
  });
  $('.btnClose').on('click', function() {
      $('.grayBox').fadeOut(500)
      $('.searchArea').stop().animate({
          top: '-150%',
          opacity: 0
      },600)
  })
})


$(function(){
  let $header = $('#header')

  
      //.Math.floor - 자바스크립트 내장함수 -정수값을 반환
      //.Offset() - 요소의 위치값
      //.Offset().top / .Offset().left()/.scrollTop()/.scrollLeft() -right/bottom 없음. (늘이는 포인트라서, top left를 기준)
  var headerTop  = Math.floor($header.offset(200).top)
  console.log(headerTop) //200
  //변수는 $txt2/headerTop //text()메소드



 





//스크롤 이벤트
$(window).scroll(function(){
  //스크롤 양을 변수에 저장
  let i = Math.floor($(this).scrollTop());// 스크롤의 움직임에 따라서 스크롤 증가 값을변수에 저장
  //console.log(i)
  $txt1.text(i)
  
  if (headerTop < i) { //headerTop 200보다 i(스크롤양)가 더 크면
      $header.addClass('on');
      $('.btnTop').fadeIn() 
  } else {
      $header.removeClass('on')
      $('.btnTop').fadeOut() 
  }

  
});
});
