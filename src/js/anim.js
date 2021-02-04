gsap.set('.fromRight', {xPercent:-50, yPercent:-50})

let tl = gsap.timeline({

  scrollTrigger: {
    trigger: "#sec02",
    pin:true,
    start: "center center",
    end: "+=70%",
    scrub: 1,
    markers: false,
  },
  defaults:{duration:1, ease:'none'}
});
tl.from('.fromRight',{ xPercent:180})
tl.to('.fromRight',{width:'50vw', height: '50%'}, '+=1')
tl.to({},{duration:1})