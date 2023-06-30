//html 읽고나서 mainjs에서 실행해라
$(function () {

    $('.main_slide').slick({
        vertical: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,

    })


    //클릭햇을때 기능하게해라->모바일 버튼을 눌럿을때 this(mobile_btn) 눌럿다뗏다햇을때 작동하게
    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on')
        $('.gnb').toggleClass('on')
        $('.h1').toggleClass('on')
    })


})