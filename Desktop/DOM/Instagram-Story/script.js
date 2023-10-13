var sp=document.querySelector("#story-pennal");
var whole=document.querySelector("#whole");

var elem=[
    {dp:"https://images.pexels.com/photos/36469/woman-person-flowers-wreaths.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",story:"https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=400"},
    {dp:"https://images.pexels.com/photos/1572878/pexels-photo-1572878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",story:"https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=400"}
];
var clutter="";
elem.forEach(function(elem,inx){
   clutter +=`<div id="story"><img id="${inx}" src="${elem.dp}" alt="Img not found"></div>`
      console.log(clutter);
})

sp.innerHTML=clutter;

sp.addEventListener("click",function(dets){
    // console.log(dets.target)
   whole.style.display="block"
   whole.style.backgroundImage=`url(${elem[dets.target.id].story})`;

        setTimeout(function(){
            whole.style.display="none"  
        },3000);
})
