// about > slide images

let buttons=document.querySelectorAll(".about .fourframe .buttonWrap button");
let contentWrap=document.querySelectorAll(".about .fourframe .imageWrap");
let imgArr=document.querySelectorAll(".about .fourframe .imageWrap img");
let pageNum=0;
let totalNum=0;

totalNum=contentWrap.length;
//console.log(totalNum)//3


buttons[0].addEventListener("click",function(){
    prevFunc();
})

buttons[1].addEventListener("click",function(){
    nextFunc();
})

function prevFunc(){
    if(pageNum>0){
        pageNum--;
    }else{
        pageNum=totalNum - 1;
    }

    pageSetFeuc();
};

function nextFunc(){

    if(pageNum<totalNum - 1){
        pageNum++;
    }else{
        pageNum=0;
    }
    pageSetFeuc();
};

function pageSetFeuc(){
    imgArr.forEach((img)=>{
        img.classList.remove("active");
    })

    contentWrap[pageNum].querySelectorAll("img").forEach((img)=>{
        img.classList.add("active");
    })

}

pageSetFeuc();
