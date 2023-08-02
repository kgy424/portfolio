let container=document.querySelector('#progress');
let progressText=document.querySelector('.progress-text');
let imgLoad=imagesLoaded('body');
let imgTotal=imgLoad.images.length;
let imgLoaded=0;
let current=0;
let progressTimer;
let topValue;

progressTimer=setInterval(updateProgess,1000/60);


imgLoad.on( 'progress', function( instance, image ) {
    imgLoaded++;
  });


  function updateProgess(){
    let target=(imgLoaded/imgTotal)*100;
    // console.log(target)
    current += (target - current)*0.1;

    progressText.innerHTML=Math.ceil(current)+"%";//ceil=올림

    if(current>99.9){
        clearInterval(progressTimer);//setinterval멈추기
        //setInterval을 멈추기 위해선 그 함수를 반드시 변수에서 할당해야함.

    container.classList.add("progress-complete")
    topValue=0;
    setInterval(()=>{
        topValue += 20;
        container.style.top=-topValue+"%";
    },10)
    }


  }