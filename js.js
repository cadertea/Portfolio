var modernSlider = new Swiper ('.swiper-container', {

    slidesPerView: 'auto',
    spaceBetween: 100,
    centeredSlides: true,
    mousewheel: true,

});
window.addEventListener("scroll", function(){
var nav = document.querySelector("nav")
nav.classList.toggle("sticky", window.scrollY > 0);
console.log()


})

var source = "https://github.com/cadertea/work-calender"
$("#img2").on("click",function(){
    $("#img2").attr({
        src: source,
        href: source,
    })

})