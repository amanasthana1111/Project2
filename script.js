function aman(){
    var a = document.querySelector(".page1cont")
var curser = document.querySelector(".curser")

a.addEventListener("mousemove",function(dets){
    gsap.to(curser,{
        x:dets.x,
        y:dets.y
    })
})
a.addEventListener("mouseenter",function(dets){
    gsap.to(curser,{
        scale:1

    })
})
a.addEventListener("mouseleave",function(dets){
    gsap.to(curser,{
        scale: 0
    })
})
}

aman()



gsap.from(".rejo ",{
    y:100,
    duration:1.5,
    delay:1,
    opacity:0,
    stagger:0.5
})
gsap.from(".outer ",{
    y:100,
    duration:1,
    delay:2,
    opacity:0,
    stagger:0.5
})
gsap.from(".upper ",{
    y:100,
    duration:1,
    delay:2.5,
    opacity:0,
    stagger:0.5
})
gsap.from(".part2 ",{
    y:100,
    duration:1,
    delay:2.6,
    opacity:0,
    stagger:0.5
})
gsap.from(".rrr ,.underline",{
    y:100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.5
})