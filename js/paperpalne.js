// paperplane-timeline01
let airplane = document.querySelector(".paperplane");
let airplaneScrollTimeline = document.querySelector(".paperplane-timeline01");


airplane.animate([{
        offsetDistance: "100%",offset:0
    },{
        offsetDistance: "40%",offset:0.5
    },{
        offsetDistance: "0%",offset:1
    },
], {
    fill: 'both',
    timeline: new ScrollTimeline({
        scrollOffsets: [{
                target: airplaneScrollTimeline,
                edge: "start",
                threshold: 1
            },
            {
                target: airplaneScrollTimeline,
                edge: "end",
                threshold: 1
            },
        ]
    })
})

// 비행기 뒤로가기
let preScrollY = 0;

window.addEventListener("scroll", function () {
    if (pageYOffset >= preScrollY) { 
        airplane.classList.remove("up", "down")
        airplane.classList.add("down")
    }else{
        airplane.classList.remove("up", "down")
        airplane.classList.add("up")
    }
    preScrollY=pageYOffset;
    
})


//bgc
let bgc01 = document.querySelector(".paperplane-timeline01_bg");

bgc01.animate([{
        backgroundColor: '#000',
        opacity: 0
    },
    {
        backgroundColor: '#000',
        opacity: 1
    },
    {
        backgroundColor: '#000',
        opacity: 1
    },
    {
        backgroundColor: '#000',
        opacity: 1
    },
    {
        backgroundColor: '#000',
        opacity: 1
    },{
        backgroundColor: '#000',
        opacity: 1
    },{
        backgroundColor: '#000',
        opacity: 1
    },{
        backgroundColor: '#000',
        opacity: 1
    },{
        backgroundColor: '#000',
        opacity: 1
    },{
        backgroundColor: '#000',
        opacity: 1
    },
], {
    fill: 'both',
    timeline: new ScrollTimeline({
        scrollOffsets: [{
                target: document.body,
                edge: "start",
                threshold: 1
            },
            {
                target: document.body,
                edge: "end",
                threshold: 1
            }
        ]
    })
})