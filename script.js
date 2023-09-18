
var move=document.querySelector("#cursor");

var bt=document.querySelector("#btn") ;
var tl=gsap.timeline();


window.addEventListener("mousemove",function(dets){
        var xvalue=dets.clientX;
        var yvalue=dets.clientY;

        setTimeout(() => {
            move.style.top=yvalue-10+"px";
            move.style.left=xvalue-14+"px";
        }, 100);
})


bt.addEventListener("click",function(){
   tl.reverse();
})


tl.from("#wrapper  ",{
    duration:2,
    scale:0.6,
    ease:'expo.easeInOut',
    opacity:0,
})
tl.from("#whitestrip",{
    duration:2,
    width:0,
    ease:'expo.easeInOut',
    opacity:0,
})
tl.from("#blackcard",{
    duration:2,
    width:0,
    ease:'expo.easeInOut',
    opacity:0,
})
tl.from("linelem h4",{
    duration:2,
    width:0,
    ease:'expo.easeInOut',
    opacity:0,
})
