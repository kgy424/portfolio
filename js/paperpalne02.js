// paperplane-timeline02
let airplane2 = document.querySelector(".paperplane02");
let airplaneScrollTimeline2 = document.querySelector(".paperplane-timeline02");


airplane2.animate([{
    offsetDistance: "0%",offset:0
},{
    offsetDistance: "100%",offset:1
}
], {
    fill: 'both',
    timeline: new ScrollTimeline({
        scrollOffsets: [{
                target: airplaneScrollTimeline2,
                edge: "start",
                threshold: 1
            },
            {
                target: airplaneScrollTimeline2,
                edge: "end",
                threshold: 1
            },
        ]
    })
})

// 비행기 뒤로가기
let preScrollY2 = 0;

window.addEventListener("scroll", function () {
    if (pageYOffset >= preScrollY2) {
        airplane2.classList.remove("up", "down")
        airplane2.classList.add("down")
    }else{
        airplane2.classList.remove("up", "down")
        airplane2.classList.add("up")
    }
    preScrollY2=pageYOffset;
    
})
