// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
        document.getElementById("upBtn").style.display = "block";
    else 
        document.getElementById("upBtn").style.display = "none";
};

 
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//---------------------------------

var responsiveSlider = function(){
// Form----------------------------
const addressBtn = document.querySelector("#location-form");
addressBtn.addEventListener("click", function () {
    document.querySelector(".location-form").style.display = "flex";
});

const addressCloseBtn = document.querySelector("#location-form-close");
addressCloseBtn.addEventListener("click", function () {
    document.querySelector(".location-form").style.display = "none";
});   

//Slider----------------------------
const rightbtn  = document.querySelector(".fa-chevron-right");
const leftbtn =document.querySelector(".fa-chevron-left");
const imgNum=document.querySelectorAll(".slider-content-left-pic img")
const imgNumberLi=document.querySelectorAll(".slider-content-left-text li")
let index=0;

rightbtn.addEventListener("click",function(){
    index=index+1;
    if(index>imgNum.length-1)
    {
        index=0;
    }
    document.querySelector(".slider-content-left-pic").style.right = index* 100 +"%";
    
    //-------- Đồng bộ với hoạt động thẻ li
    removeactive()
    imgNumberLi[index].classList.add("active")
})

leftbtn.addEventListener("click",function(){
    index=index-1;
    if(index<0)
    {
        index=imgNum.length-1;
    }
    document.querySelector(".slider-content-left-pic").style.right = index* 100+"%";
    //-------- Đồng bộ với hoạt động thẻ li
    removeactive()
    imgNumberLi[index].classList.add("active")
})
//----------------------------------


imgNumberLi.forEach(function(image,index){

    image.addEventListener("click",function(){
        document.querySelector(".slider-content-left-pic").style.right = index* 100 +"%";
        removeactive()
        image.classList.add("active")

    })
})
function removeactive(){
    let imgactive = document.querySelector(".active")
    imgactive.classList.remove("active")
}

//-----------------------------------

function imgAuto(){
    index=index+1;
    if(index>imgNum.length-1)
    {
        index=0;
    }
    removeactive()
    document.querySelector(".slider-content-left-pic").style.right = index* 100 +"%";
    imgNumberLi[index].classList.add("active")
}
setInterval(imgAuto,5000)

//---------------------------------------------------------------
const rightbtntwo  = document.querySelector(".fa-chevron-right-two");
const leftbtntwo =document.querySelector(".fa-chevron-left-two");
const imgNumtwo=document.querySelectorAll(".product-sale-content-items-list")

rightbtntwo.addEventListener("click",function(){
    index=index+1;
    if(index>imgNumtwo.length-1)
    {
        index=0;
    }
    document.querySelector(".product-sale-content-items").style.right = index* 100 +"%";
})

leftbtntwo.addEventListener("click",function(){
    index=index-1;
    if(index<0)
    {
        index=imgNumtwo.length-1;
    }
    document.querySelector(".product-sale-content-items").style.right = index* 100+"%";
})
}

//---------------------------------------------
function toggleFav(icon) {
    const heartIcon = icon; // Lấy phần tử biểu tượng trái tim được click

    if (heartIcon.style.backgroundColor === "red") {
        // Nếu đã yêu thích, thay đổi thành trạng thái không yêu thích
        heartIcon.style.backgroundColor = "transparent"; 
    } else {
        // Nếu chưa yêu thích, thay đổi thành trạng thái yêu thích
        heartIcon.style.backgroundColor = "red";
    }
}


window.onload = function() {
    responsiveSlider();  
  }


