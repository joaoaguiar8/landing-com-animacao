gsap.registerPlugin(ScrollTrigger);

gsap .from (".animate-inicial-txt",{
   duration: 0.7,
   opacity:0,
   y: -150,
   stagger: 0.4,
});
gsap .from (".animate-inicial-img",{
    duration: 0.9,
   opacity:0.5,
    x: 250,
   stagger: 0.
});   
gsap.from(".animate-artigos",{
    duration: 0.8,
    opacity:0.5,
    y: -150,
    stagger: 0.2,
});

gsap.from(".animate-final",{
    scroolTrigger:".animate-final",
    duration: 0.8,
    opacity:0.5,
    y: -200,
    stagger: 0.5,
    delay: 0.5,
});




