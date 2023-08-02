let giants=document.querySelector(".giants_wrap")
let mega=document.querySelector(".mega_wrap")
let sushi=document.querySelector(".sushi_wrap")
let respon=document.querySelector(".respon_wrap")
let hana=document.querySelector(".hana_wrap")
let php=document.querySelector(".php_wrap")
let react=document.querySelector(".react_wrap")

window.addEventListener("scroll", function () {
    let Wport = window.pageYOffset;
    // console.log(parseInt(Wport))
    let Hport=text.innerHTML = parseInt(Wport)

    if(Hport>=8400){
        giants.classList.add("in")
    }else{
        giants.classList.remove("in")
    }

    if(Hport>=9300){
        mega.classList.add("in")
    }else{
        mega.classList.remove("in")
    }
    
    if(Hport>=10520){
        sushi.classList.add("in")
    }else{
        sushi.classList.remove("in")
    }

    if(Hport>=11570){
        respon.classList.add("in")
    }else{
        respon.classList.remove("in")
    }

    if(Hport>=12600){
        hana.classList.add("in")
    }else{
        hana.classList.remove("in")
    }

    if(Hport>=13550){
        php.classList.add("in")
    }else{
        php.classList.remove("in")
    }

    if(Hport>=15000){
        react.classList.add("in")
    }else{
        react.classList.remove("in")
    }


})


