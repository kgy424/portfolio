const cont_1 = document.getElementById('cont_1');
const cont_2 = document.getElementById('cont_2');
const slider = document.getElementById('slider');
const s_wid = slider.offsetWidth;
const s_li = slider.children;
const indi_bar = document.getElementById('indi_bar');
let win_wid = window.innerWidth;
let s_move_max = (s_wid - (win_wid/2)) * -1;
let s_pos = 0;
let li_pos = 0;
let pct = 0;


cont_1.addEventListener('wheel',function(e){
    e.preventDefault;
    if(e.deltaY > 0){
        cont_2.style.top = `0%`;
    }
});

cont_2.addEventListener('wheel',function(e){
    e.preventDefault;
    if(e.deltaY < 0 && s_pos >= 0){
        setTimeout(()=>{
            cont_2.style.top = `100%`;
        },500);
        return;
    }
    move_slider(e.deltaY);
    on_indicator();
});

function move_slider(amount){
    s_pos -= amount;
    if(s_pos < s_move_max){
        s_pos = s_move_max;
        return;
    }else if(s_pos > 0){
        s_pos = 0;
        return;
    }
    slider.style.transform = `translateX(${s_pos}px)`;
    li_upDown(amount);
    
}

function li_upDown(amount){
    li_pos += amount;
    for(let i=0; i<s_li.length; i++){
        if(i%2 != 0){
            s_li[i].style.transform = `translateY(${li_pos / (i*5)}px)`;
        }else{
            s_li[i].style.transform = `translateY(${-li_pos / (i*5)}px)`;
        }
    }
}

function on_indicator(){
    pct = s_pos * 100 / s_move_max;
    indi_bar.style.clipPath  =`
        polygon(0% 0%, ${pct}% 0%, ${pct}% 100%, 0% 100%)
    `;
}

let pos = {x:0,y:0};
let redSpan;

for(let li of s_li){
    const liDiv = li.getElementsByTagName('DIV')[0];
    liDiv.addEventListener('mouseenter',on_redSpan);
    li.addEventListener('mouseleave',off_redSpan);
}

function on_redSpan(e){
    e = e || window.event;
    pos.x = e.offsetX;
    pos.y = e.offsetY;
    redSpan = this.nextElementSibling;
    redSpan.style.transform = `
        translate(${pos.x}px, ${pos.y}px) scale(100)
    `;
}

function off_redSpan(e){
    e = e || window.event;
    pos.x = e.offsetX;
    pos.y = e.offsetY;
    redSpan.style.transform = `
        translate(${pos.x}px, ${pos.y}px) scale(.1)
    `;
}