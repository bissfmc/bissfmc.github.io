 const slider = tns({
     container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
     speed: 1300,
   });
 document.querySelector('.prev').addEventListener('click',function () {
     slider.goTo('prev');
 });
 document.querySelector('.next').addEventListener('click',function () {
     slider.goTo('next');
 });
 let menuBtn = document.querySelector('.hamburger');
 let menu = document.querySelector('.previes__tabs');
 
 menuBtn.addEventListener('click', function(){
     menuBtn.classList.toggle('hamburger_active');
     menu.classList.toggle('previes__tabs_active');
 });
 $(window).scroll(function(){
    if ($(this).scrollTop() > 1600 ){
        $('.pageup').fadeIn();
    }else{
        $('.pageup').fadeOut();
    }
 });

 document.body.onload = function() {

    setTimeout(function(){ //код до прилоадера//
        var prelodaer = document.getElementById('cube-loader');
        if(!prelodaer.classList.contains('done'))
        {
            prelodaer.classList.add('done');
        }
    }, 300);

}