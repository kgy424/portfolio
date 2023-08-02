// nav
window.onscroll = () => {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0"
  } else {
    document.getElementById("navbar").style.top = "-8rem"
  }
}

let navColor = () => {
  let menuScrollY = pageYOffset;
  // console.log(scrollY)
  let sections = document.querySelectorAll("section[id]")
  //   console.log(sections)

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    //   console.log(sectionHeight)
    let sectionTop = current.offsetTop;
    let sectionId = current.getAttribute("id");
    //   console.log(sectionId)

    let sectionClass = document.querySelector(`.nav_menu a[href*='${sectionId}'`);
    //   console.log(sectionClass)

    if (menuScrollY > sectionTop && menuScrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("nav-link");
    } else {
      sectionClass.classList.remove("nav-link");
    }
  })
}

window.addEventListener("scroll", navColor)


//nav add class
window.addEventListener("scroll", function () {
  let port_section = document.querySelector("#portfolio");
  let navBar = document.querySelector("#navbar");
  let cont_section=document.querySelector("#contact");

  if (pageYOffset >= port_section.offsetTop) {
    navBar.classList.add("CColor")
  } else {
    navBar.classList.remove("CColor")
  }

  if(pageYOffset >= cont_section.offsetTop){
    navBar.classList.remove("CColor")
  }

})

// cookie
let currentCookie = document.cookie;
let cookieCheck = currentCookie.indexOf("kgy");
// console.log(cookieCheck)

if (cookieCheck > -1) {
    document.querySelector(".notice").style.display = "none";
} else {
    document.querySelector(".notice").style.display = "block";
}

document.querySelector(".hide").addEventListener("click", () => {
    let date = new Date();
    date.setMinutes(date.getMinutes() + 1);
    let setCookie = "CookieName=kgy; ";
    setCookie += "expires=" + date.toUTCString();

    document.cookie=setCookie;
})

document.querySelector(".Nclose").addEventListener("click",function(e){
  e.preventDefault();
    this.parentElement.style.display="none";
})

// home panorama
let panoWrap = document.querySelectorAll('.pano_list');
let listWrap = document.querySelectorAll('.list');
let item = document.querySelectorAll('.list li');
let listClone = null;
let itemWidth = item[0].offsetWidth;
let itemLength = item.length; //10개
let move = 0;

let timer;

let init = function () {
  panoWrap.forEach((wrap) => {
    wrap.appendChild(wrap.querySelector('.list').cloneNode(true));
  });
  listClone = document.querySelectorAll('.pano_wrap .list');
  render();
  add();
}

let render = function () {
  // console.log("실행");
  move += 1;
  panoWrap.forEach((wrap, index) => {
    if ((index + 1) % 2 === 0) { // 짝수 번째 pano_list인 경우
      const lists = wrap.querySelectorAll('.list li');
      lists.forEach((list) => {
        list.style.transform = `translateY(${-move}px)`;
      });
    } else {
      const lists = wrap.querySelectorAll('.list li');
      lists.forEach((list) => {
        list.style.transform = `translateY(${move*1.5}px)`;
      });
    }
  });

  timer = window.requestAnimationFrame(render);
};

let add = function () {
  setInterval(function () {
    panoWrap.forEach((wrap) => {
      wrap.appendChild(wrap.querySelector('.list').cloneNode(true));
    });
    listClone = document.querySelectorAll('.pano_wrap .list');
  }, 1000);
}

window.addEventListener('load', function () {
  init();
});


// home logo anmation
var spanText = function spanText(text) {
  var string = text.innerText;
  var spaned = '';
  for (var i = string.length - 1; i >= 0; i--) { // 역순으로 반복
    if (string.substring(i, i + 1) === ' ') {
      spaned += string.substring(i, i + 1); // 공백은 그대로 추가
    } else {
      spaned += '<span>' + string.substring(i, i + 1) + '</span>'; // 공백이 아닌 문자를 <span> 요소로 감싸서 추가
    }
  }
  text.innerHTML = spaned;
}


var spanText02 = function spanText02(text) {
  var string = text.innerText;
  var spaned = '';
  for (var i = 0; i < string.length; i++) {
    if (string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
    else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
  }
  text.innerHTML = spaned;
}


var headline = document.querySelector(".name_text em .text01");
var headline02 = document.querySelector(".name_text em .text02");

spanText(headline);
spanText02(headline02);

let animations = document.querySelectorAll('.animation');

animations.forEach(animation => {
  let letters = animation.querySelectorAll('span');
  letters.forEach((letter, i) => {
    letter.style.animationDelay = (i * 0.1) + 's';
  })
});

// home add class
let plans_text01 = document.querySelector(".plane_text01");
let plans_text02 = document.querySelector(".plane_text02");
let plans_text03 = document.querySelector(".plane_text03");

window.addEventListener("scroll", function () {

  if (window.pageYOffset <= 850) {
    plans_text01.classList.add("play");
  } else {
    plans_text01.classList.remove("play");
  }

  if (window.pageYOffset >= 1050) {
    plans_text01.classList.add("play");
  } else {
    plans_text01.classList.remove("play");
  }

  if (window.pageYOffset >= 1880) {
    plans_text01.classList.add("play");
  } else {
    plans_text01.classList.remove("play");
  }


})


// about > text add class
let about_section = document.querySelector("#about");
let about_kgy = document.querySelector(".about .kgy_info");
let about_tit = document.querySelector(".about .about_tit");

window.addEventListener("scroll", function () {
  if (pageYOffset >= about_section.offsetTop - 1000) {
    about_kgy.classList.add("in")
    about_tit.classList.add("in")
  } else {
    about_kgy.classList.remove("in")
    about_tit.classList.remove("in")
  }
})


// skills add class
let skill_section = document.querySelector(".skills");
let skills = document.querySelectorAll(".easypiechart .container .box_rows");
let skill_tit = document.querySelector(".skill_tit")
let skill_text = document.querySelector(".skill_text")

window.addEventListener("scroll", function () {
  skills.forEach((skill) => {
    if (pageYOffset >= skill_section.offsetTop - 300) {
      skill.classList.add("in");
      skill_tit.classList.add("in");
      skill_text.classList.add("in");
    } else {
      skill.classList.remove("in");
      skill_tit.classList.remove("in");
      skill_text.classList.remove("in");
    }
  });
});

//about springtext
let allText = document.querySelectorAll(".spring");
let delay = 0;

// allText.forEach((el,idx)=>{}) -> el 각각의 아이템 idx는 아이템의 index번호

allText.forEach((el, idx) => {
  el.style.animationDelay = `${delay}s`;
  el.style.zIndex = allText.length - idx;
  el.classList.add("base-ani");

  delay += .15;
})
document.getElementById("five").addEventListener("mousemove", (e) => {
  let innerWidth = window.innerWidth; //viewport(지금 보고있는 화면)의 넯이값
  let innerheight = window.innerHeight; //viewport(지금 보고있는 화면)의 높이값

  let clientX = e.clientX;
  let clientY = e.clientY;
  // console.log(clientX,clientY)

  let percentX = clientX / innerWidth;
  //console.log(percentX)
  let maxRangeX = innerWidth * 0.15;
  let minX = innerWidth / 2 - maxRangeX;
  let maxX = innerWidth / 2 + maxRangeX;
  let difX = maxX - minX;
  let pxOffset = difX * percentX;

  let left = minX + pxOffset;

  let percentY = clientY / innerHeight;
  //console.log(percentX)
  let maxRangeY = innerHeight * 0.15;
  let minY = innerHeight / 2 - maxRangeY;
  let maxY = innerHeight / 2 + maxRangeY;
  let difY = maxY - minY;
  let pxOffsetY = difY * percentY;

  let top = minY + pxOffsetY;

  allText.forEach((el, idx) => {
    //el.animate([],{})

    el.animate([{
      top: `${top}px`,
      left: `${left}px`
    }], {
      duration: 1000,
      fill: 'forwards',
      delay: idx * 50
    })
  })

})

// about text scroll
// let pTag1 = document.querySelector(".first");
let pTag2 = document.querySelector(".second");

// let textArr1 =  "💛 KGY 🤍 💛 KGY 🤍 💛 KGY 🤍 💛 KGY 🤍 💛 KGY 🤍 💛 KGY 🤍 💛 KGY 🤍 💛 KGY 🤍".split(" ");

let textArr2 = "✨ Portfolio ✨ ✨ Portfolio ✨ ✨ Portfolio ✨ ✨ Portfolio ✨ ✨ Portfolio ✨ ✨ Portfolio ✨ ".split(" ");

// let arr=[];
// arr.push(...textArr1)
// console.log(arr)

// let count1 = 0;
let count2 = 0;

// initTexts(pTag1, textArr1);
initTexts(pTag2, textArr2);

function initTexts(element, textArry) {
  textArry.push(...textArry); //8개의 배열에 동일한 배열을 복사하여 배열뒤에 넣음//16개
  // \u00A0 -->javascript에서의 공백을 나타냄
  //console.log(textArry)
  for (let i = 0; i < textArry.length; i++) {
    element.innerHTML += `${textArry[i]}\u00A0\u00A0\u00A0`;
  }
}
//글자입력

function animate() {
  // count1++;
  //console.log(count1)
  count2++;

  // count1 = marqueeText(count1, pTag1, -1);
  count2 = marqueeText(count2, pTag2, 1);

  window.requestAnimationFrame(animate);
  //setInterval의 업그레이드 된 버전
  //animate함수를 다시 실행
}

function marqueeText(count, element, direction) {
  //.scrollWidth--> 보이지 않는 공간일지라도 스크롤해서 확인할수 있는 공간까지의 넓이 , 전체넓이
  //console.log(element.scrollWidth)
  if (count > element.scrollWidth / 2) {
    count = 0;
    element.style.transform = `translate(0,0)`;
  }

  element.style.transform = `translate(${count * direction}px,0)`;
  return count;
}

function scrollHandler() {
  // count1 += 25;
  count2 += 15;
}

animate();

//  -------- port typing
window.addEventListener("scroll", scrollHandler);

document.addEventListener('DOMContentLoaded', function (event) {
  var dataText = ["Let me introduce my WORKS:)"];

  function typeWriter(text, i, fnCallback) {

    if (i < (text.length)) {
      document.querySelector(".port_text h2").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }

  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 5000);
    }
    if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation

  window.addEventListener("scroll", function () {

  })
  StartTextAnimation(0);
});

//-----------port tabmenu
function openTab(evt, indexName) {
  let tabcont = document.getElementsByClassName("tabcont");
  // console.log(tabcont)//배열

  for (let i = 0; i < tabcont.length; i++) {
    tabcont[i].style.display = "none";
  }

  let tablinks = document.
  getElementsByClassName("tablinks")
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  // currentTarget=this
  // console.log(evt.currentTarget)

  evt.currentTarget.classList.add("active");
  document.getElementById(indexName).style.display = "block";


}

document.getElementById("defaultOpen").click();


// ---------------- personal bgc
let perBg = document.querySelector(".contact");

perBg.animate([{
  backgroundColor: '#f1f1f1',
}, {
  backgroundColor: '#ffd600',
}, {
  backgroundColor: '#ffd600',
}, {
  backgroundColor: '#ffd600',
}, ], {
  fill: 'both',
  timeline: new ScrollTimeline({
    scrollOffsets: [{
        target: perBg,
        edge: "start",
        threshold: 1
      },
      {
        target: perBg,
        edge: "end",
        threshold: 1
      }
    ]
  })
})

// -------------- contact time
const clock = document.querySelector(".tit03");

function getClock(){
  const d = new Date();
  const h = String(d.getHours()).padStart(2,"0");
  const m = String(d.getMinutes()).padStart(2,"0");
  const s = String(d.getSeconds()).padStart(2,"0");
  clock.innerText = `It's ${h}:${m}:${s} now :)`;
}

getClock(); //맨처음에 한번 실행
setInterval(getClock, 1000); //1초 주기로 새로실행

// --------------- contact add class
let contact_section = document.querySelector("#contact");
let tit01 = document.querySelector(".tit01");
let tit02 = document.querySelector(".tit02");
let tit03 = document.querySelector(".tit03");
let contact_info = document.querySelector(".contact_info");
let spin_text_wrap = document.querySelector(".spin_text_wrap");
let copyright = document.querySelector(".copyright");
let cont_ment = document.querySelector(".cont_ment");

window.addEventListener("scroll", function () {
  if (pageYOffset >= contact_section.offsetTop - 350) {
    tit01.classList.add("in")
  } else {
    tit01.classList.remove("in")
  }
  if (pageYOffset >= contact_section.offsetTop - 300) {
    tit02.classList.add("in")
  } else {
    tit02.classList.remove("in")
  }
  if (pageYOffset >= contact_section.offsetTop - 250) {
    tit03.classList.add("in")
  } else {
    tit03.classList.remove("in")
  }

  if (pageYOffset >= contact_section.offsetTop +300 ) {
    contact_info.classList.add("in")
    spin_text_wrap.classList.add("in")
    copyright.classList.add("in")
    cont_ment.classList.add("in")
  } else {
    contact_info.classList.remove("in")
    spin_text_wrap.classList.remove("in")
    copyright.classList.remove("in")
    cont_ment.classList.remove("in")
  }
})