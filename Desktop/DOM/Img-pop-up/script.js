var div=document.querySelectorAll("#div");
var main=document.querySelector("#main");
var img=document.querySelectorAll("#div img");

div.forEach(function(val){
val.addEventListener("mouseenter",function(){
    val.childNodes[3].style.opacity=1;
})
val.addEventListener("mousemove",function(det){
    val.childNodes[3].style.left=det.x+"px";
})

val.addEventListener("mouseleave",function(){
    val.childNodes[3].style.opacity=0;
})
})



