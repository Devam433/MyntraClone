let slideshowContainer=document.querySelector(".slideshow-container");
slideshowContainer.innerHTML=`
<div class="mySlides fade">
            <img src="../assets/images/banner.jpg" style="width:100%">
        </div>
        
        <div class="mySlides fade">
            <img src="../assets/images/banner2.webp" style="width:100%">
        </div>
        
        <div class="mySlides fade">
            <img src="../assets/images/banner3.webp" style="width:100%">
        </div>
        
        <div class="mySlides fade">
            <img src="../assets/images/banner4.webp" style="width:100%">
        </div>

        <div class="mySlides fade">
            <img src="../assets/images/banner5.webp" style="width:100%">
        </div>  `;

let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) 
    {
        slideIndex = 1
    }   
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000);
}