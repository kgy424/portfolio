
// ------------
let text = document.querySelector(".god")
window.addEventListener("scroll", function () {
    let Wscroll = window.pageYOffset;
    // console.log(parseInt(Wscroll))
    text.innerHTML = parseInt(Wscroll)
})

//-----------------
 //  skills
 let counterDate = $('.box h3');
 let executed = false;

 $(window).scroll(function () {
     let $scroll = $(this).scrollTop() + 400;
     let $offset = $('.easypiechart').offset().top;

     if ($scroll > $offset) {
         pieChart()

         if (!executed) {
             counterDate.each(function () {
                 let currrent = $(this);
                 let target = currrent.attr('data-rate');

                 $({
                     rate: 0
                 }).animate({
                     rate: target
                 }, {
                     duration: 2500,
                     progress: function () {
                         let now = this.rate;

                         currrent.text(Math.ceil(now) + "%")
                     }
                 })
             })
             executed = true
         }
     }
 })

 function pieChart() {
     $('.chart').easyPieChart({
         barColor: '#FFD600',
         scaleColor: false,
         trackColor: '#373737',
         lineWidth: 15,
         size: 180,
         animate: 2500,
         lineCap: "butt"
     });

 }

 // --------------------slick
 $(document).ready(function () {
    $('.magazine_wrap').slick({
        autoplay: true,
    });
    $('.magazine_wrap').get(0).slick.setPosition()
});

// ------------------
var $container=$('#progress'),
$progressBar=$('.progress-bar'),
$progressText=$('.progress-text'),
imgLoad=imagesLoaded('body'),
imgTotal=imgLoad.images.length,//이미지가 모두 몇개인지를 알기위해
imgLoaded=0,//로드되는 이미지수
current=0,//전체대비 로드된수의 진행률을 반영
/* progressTimer=setInterval(function(){
    updateProgess()
},1000/60);*/
progressTimer=setInterval(updateProgress,1000/60);

//animate에서 중간중간에 할일 progress
imgLoad.on( 'progress', function(  ) {
imgLoaded++;
//console.log(imgLoaded);
});


function updateProgress(){
//진행률 -> bar  50 /192*100
var target= imgLoaded/imgTotal*100;
//console.log(target);
current +=(target - current) *0.5;
console.log(current);
$progressBar.css({width:current+"%"});
$progressText.text(Math.ceil(current)+"%");

if(current>99.9){
    clearInterval(progressTimer);
    $container.addClass('progress-complete');
   //A.animate({width:100%},시간,이징,끝나면할일) 
$progressBar.add($progressText).delay(100).animate({
    opacity:0
},250,function(){
    $container.animate({top:"-100%"},500,'easeInOutCubic');
})
    
}

}