var main=document.querySelector("#main");
var curs=document.querySelector("#curs");

main.addEventListener("mousemove",function(dets){
    curs.style.top=dets.y+"px";
    curs.style.left=dets.x+"px";
    
})