function show(){
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  
}
show();

var sidepage = document.querySelector("#sidepage");
document.querySelector("#navcircle").addEventListener("click",function(dets){
     sidepage.style.left = "0%";
})



gsap.to("#right img",{
  y:"-100vh",
  duration:4,
  repeat:-1,
  ease: Power0.easeNone
})

   
   gsap.from("#nav",{
    y:20,
    opacity:0,
    duration:1
   })
   gsap.from("#textboxp1>h1",{
    onStart: function (){
      $('#textboxp1>h1').textillate({ in: { effect: 'fadeInUp' } });
    },
    opacity:0,
    duration:1
   })
   
   gsap.from("#content>h1",{
    opacity:0,
    y:20,
    stagger:0.3,
    ease:Power1.easeInOut,
    scrollTrigger:{
      trigger:"#content>h1",
      scroller:"#main",
      scrub:5,
      start:"top 90%"
  }
    // onStart: function (){

    //   $('#content>h1').textillate({ in: { effect: 'fadeInUp' } });
    // }
   })

   gsap.from("#page2>#imgbox",{
    opacity:0,
    scrollTrigger:{
      trigger:"#page2>#imgbox",
      scroller:"#main",
      scrub:true,

      start:"top 70%",
      end:"bottom 20%"
  },
  rotateX:60,
  duration:0.1
   })
 gsap.from(".imagebox",{
    opacity:0,
    scrollTrigger:{
      trigger:".imagebox",
      scroller:"#main",
      scrub:true,
      start:"top 50%",
      end:"bottom 20%"
  },
  rotateX:60,
  duration:0.1
   })
   gsap.from("#content2>h1",{
    opacity:0,
    y:20,
    stagger:0.3,
    ease:Power1.easeInOut,
    scrollTrigger:{
      trigger:"#content2>h1",
      scroller:"#main",
      scrub:true,
     
      start:"top 100%"
    }
    // onStart :function(){  $('#content2>h1').textillate({ in: { effect: 'fadeInUp' } });}
  
   })
   gsap.from(".page31",{
    opacity:0,
    scrollTrigger:{
      trigger:".page31",
      scroller:"#main",
      scrub:true,
    
      start:"top 50%",
      end:"bottom 50%"
    },
     rotateX:-
     60
  
   })
   gsap.from(".page32",{
    opacity:0,
    scrollTrigger:{
      trigger:".page32",
      scroller:"#main",
      scrub:true,
     
      start:"top 50%",
      end:"bottom 50%"
    },
     rotateX:-60
  
   })
   gsap.from("#page4>h1",{
    opacity:0,
    y:20,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
      trigger:"#page4>h1",
      scroller:"#main",
      scrub:true,
      start:"top 50%",
      end:"bottom 50%"
    }
   })
   gsap.from("#page4box>.page4boxinr",{
    opacity:0,
    y:50,
    duration:3,
    stagger:2,
    scrollTrigger:{
      trigger:"#page4box>.page4boxinr",
      scroller:"#main",
      scrub:true,
      
      start:"top 50%",
      end:"bottom 50%"
    }
   })
  //   gsap.from("#page5>h2",{
  //   opacity:0,
  //   y:50,
  //   duration:2,
  //   scrollTrigger:{
  //     trigger:"#page5>h2",
  //     scroller:"#main",
  //     scrub:true,
  //     markers:true,
  //      start:"top 50%",
  //     end:"bottom 50%"
  //   }
  //  })
  //   gsap.from("#page5>h1",{
  //   opacity:0,
  //   y:50,
  //   duration:1,
  //   scrollTrigger:{
  //     trigger:"#page5>h2",
  //     scroller:"#main",
  //     scrub:true,
     
  //      start:"top 50%",
  //     end:"bottom 50%"
  //   }
  //  })
  //   gsap.from("#page5>h4",{
  //   opacity:0,
  //   y:10,
  //   duration:0.5,
  //   scrollTrigger:{
  //     trigger:"#page5>h4",
  //     scroller:"#main",
  //     scrub:true,
     
  //      start:"top 70%",
  //     end:"bottom 90%"
  //   }
  //  })
  
  //   gsap.from("#page5>h3",{
  //   opacity:0,
  //   y:10,
  //   duration:0.5,
  //   scrollTrigger:{
  //     trigger:"#page5>h3",
  //     scroller:"#main",
  //     scrub:true,
  //      start:"top 70%",
  //     end:"bottom 90%"
  //   }
  //  })
  gsap.to("#page5>img",{
    rotate:"360deg",
    repeat:-1,
    duration:2,
    ease: Power0.easeNone
  })
  