var isstatus=document.querySelector("#h3");
var btn=document.querySelector("#b1");
var flag=0;

btn.addEventListener("click",function(){
    if(flag==0){
        isstatus.innerHTML="We Are Now Friend";
        isstatus.style.color="green";
        btn.innerHTML="Remove Friend";
        flag=1;
    }
    else{
        isstatus.innerHTML="Stranger";
        isstatus.style.color="violet";
        btn.innerHTML="Add Friend";
        flag=0;
    }
})