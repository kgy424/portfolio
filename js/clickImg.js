// --------------- youth
let clickImg01=document.querySelector("#clickImg01");
let youthImg=document.getElementById("youthImg");
let youth_images=[
    "img/card01_002.jpg",
    "img/card01_003.jpg",
    "img/card01_004.jpg",
    "img/card01_001.jpg",
];

let currentIndex=0;

youthImg.addEventListener("click",function(){
    let currentImg=youth_images[currentIndex];
    youthImg.src=currentImg;
    currentIndex++;
    if(currentIndex>=youth_images.length){
        currentIndex=0
    }
});
// ------------- local
let clickImg02=document.querySelector("#clickImg02");
let localImg=document.getElementById("localImg");
let local_images=[
    "img/card02_002.png",
    "img/card02_003.png",
    "img/card02_004.png",
    "img/card02_005.png",
    "img/card02_006.png",
    "img/card02_001.png",
];


localImg.addEventListener("click",function(){
    let currentImg=local_images[currentIndex];
    localImg.src=currentImg;
    currentIndex++;
    if(currentIndex>=local_images.length){
        currentIndex=0
    }
});


// --------------- yeonuri
let clickImg03=document.querySelector("#clickImg03");
let yeonuriImg=document.getElementById("yeonuriImg");
let yeonuri_images=[
    "img/card03_002.jpg",
    "img/card03_003.jpg",
    "img/card03_005.jpg",
    "img/card03_006.jpg",
    "img/card03_007.jpg",
    "img/card03_008.jpg",
    "img/card03_001.jpg",
];

yeonuriImg.addEventListener("click",function(){
    let currentImg=yeonuri_images[currentIndex];
    yeonuriImg.src=currentImg;
    currentIndex++;
    if(currentIndex>=yeonuri_images.length){
        currentIndex=0
    }
});