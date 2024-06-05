var nav=document.querySelector("nav");
nav.addEventListener("mouseenter",function(){
    let tl=gsap.timeline()
    tl.to("#line",{
        
        height:"20vh",
    })
    tl.to("nav h5",{
        duration:1,
        display:"block",
    })
    tl.to("nav h5 span",{
        y:0,
        
        stagger:{
            amount:0.5,
        },
    })
})
nav.addEventListener("mouseleave",function(){
    let tl=gsap.timeline()

    tl.to("nav h5 span",{
        y:25,
        
        stagger:{
            amount:0.2,
        },
    })
    tl.to("nav h5",{
        display:"none",
        duration:0.1,
    })
    tl.to("#line",{
        height:0,
        duration:0.2,
    })
})
gsap.from("#page2-left p",{
    opacity:0,
    duration:3,
    delay:0.8,
    y:300,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page2-left p",
        scroller:"body",
     
        start:"top 85%",
        end:"top 90%",
        scrub:2,
    }
})
gsap.from("#page2-left h5",{
    opacity:0,
    duration:3,
    delay:0.8,
    y:300,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page2-left h5",
        scroller:"body",
        
        start:"top 150%",
        end:"top 80%",
        scrub:2,
    }
})

gsap.from("#page2-right h4",{
    opacity:0,
    duration:3,
    delay:0.8,
    y:300,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page2-right h4",
        scroller:"body",
        
        start:"top 85%",
        end:"top 90%", 
        scrub:2,
    }
})
var icon=document.querySelector("#page3 i")
var video=document.querySelector("#page3 video")
icon.addEventListener("click",function(){
    video.play();
    gsap.to(video,{
       transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0
    })
})
video.addEventListener("click",function(){
    video.pause();
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
         opacity:0,
         borderRadius:"30px",
     })
})
gsap.to("#page5 div",{
    x:40,
    duration:1,
    stagger:0.4,
    repeat:-1,
    yoyo:true,
})
gsap.from("#page4 h2",{
    opacity:0,
    duration:3,
    delay:0.8,
    x:300,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page4 h2",
        scroller:"body",
       
        start:"top 70%",
        end:"top 40%",
        scrub:2,
    }
})
gsap.from("#page4 h3",{
    opacity:0,
    duration:3,
    delay:0.8,
    x:300,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page4 h3",
        scroller:"body",
       
        start:"top 70%",
        end:"top 40%",
        scrub:2,
    }
})

var img=document.querySelector("#page6 #righty img")
var vds=document.querySelector("#page6 #righty video")
img.addEventListener("mouseenter",function(){
    vds.play();
    gsap.to(vds,{
        transform:"scaleX(1) scaleY(1)",
         opacity:1,
         borderRadius:0,
     })
})
var imga=document.querySelector("#page7 #righty img")
var vdss=document.querySelector("#page7 #righty video")
imga.addEventListener("mouseenter",function(){
    vdss.play();
    gsap.to(vdss,{
        transform:"scaleX(1) scaleY(1)",
         opacity:1,
         borderRadius:0,
     })
})
gsap.from("#page10 h2",{
    opacity:0,
    duration:3,
    delay:0.8,
    y:300,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page10 h2",
        scroller:"body",
        start:"top 85%",
        end:"top 57%",
        scrub:2,
    }
})
gsap.from("#page10 p",{
    opacity:0,
    duration:3,
    delay:0.8,
    y:300,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page10 p",
        scroller:"body",  
        start:"top 85%",
        end:"top 57%",
        scrub:2,
    }
})
gsap.from("#page13 .aha h3",{
    x:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page13 .aha h3",
        scroller:"body",
        start:"top 30%",
        end:"top 10%",
    }
})
var tl=gsap.timeline()
tl.from("#page1",{
    opacity:0,
    duration:0.3,
    delay:0.2
})
tl.from("#page1",{
    transform:"scaleX(0.7) scaleY(0.2)",
    borderRadius:"40%",
    duration:0.7,
    ease:"expo.out",
})
tl.from("nav",{
    opacity:0,
})
tl.from("#page1 h1,#page1 p,#page1 div",{
    opacity:0,
    duration:0.3,
    stagger:0.2,
})
gsap.from("#page8 h2",{
    opacity:0,
    duration:3,
    delay:0.8,
    x:300,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page8 h2",
        scroller:"body",
       
        start:"top 70%",
        end:"top 40%",
        scrub:2,
    }
})
gsap.from("#page9 #right p",{
    opacity:0,
    duration:3,
    delay:0.8,
    x:300,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page9 #right p",
        scroller:"body",
       
        start:"top 70%",
        end:"top 40%",
        scrub:2,
    }
})
gsap.from("#page11 h1",{
    opacity:0,
    duration:3,
    delay:0.8,
    y:300,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page11 h1",
        scroller:"body",
     
        start:"top 85%",
        end:"top 90%",
        scrub:2,
    }
})
gsap.from("#page12 #rightu h4",{
    opacity:0,
    duration:3,
    delay:0.8,
    y:300,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page12 #rightu h4",
        scroller:"body",
        
        start:"top 150%",
        end:"top 80%",
        scrub:2,
    }
})
gsap.from("#page12 #rightu h5",{
    opacity:0,
    duration:3,
    delay:0.8,
    y:300,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page12 #rightu h5",
        scroller:"body",
        
        start:"top 150%",
        end:"top 80%",
        scrub:2,
    }
})