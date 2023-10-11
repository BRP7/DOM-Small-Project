var img=document.querySelector("img");
var love_icon=document.querySelector("i");
img.addEventListener("dblclick",function(){
    //  console.log("hello");
    love_icon.style.transform=" translate(-50%,-50%) scale(1)";
    love_icon.style.opacity="0.8";


    setTimeout(function(){
        love_icon.style.opacity="0"; 
    },1000);
    setTimeout(function(){
        love_icon.style.transform=" translate(-50%,-50%) scale(0)";
     
    },1500)

})