const headerNav=document.querySelector(".header-nav");
headerNav.innerHTML=`<div class="logoContainer"><img src="./assets/images/myntra_logo.webp" alt="logo" style="width: 60px; height: 45px;"></div>
<nav class="navBar">
    <ul>
        <div><li style="list-style-type: none;">MEN</li></div>
        <div><li style="list-style-type: none;">WOMEN</li></div>
        <div><li style="list-style-type: none;">KIDS</li></div>
        <div><li style="list-style-type: none;">HOME & LIVING</li></div>
        <div><li style="list-style-type: none;">BEAUTY</li></div>
        <div><li style="list-style-type: none;">STUDIO</li></div>
    </ul>
</nav>
<div class="searchBar">
    <div>
        <i class="fa fa-search fa-md searchIcon" aria-hidden="true"></i>
    </div>
    <input type="text" name="searchbar  " id="" placeholder="Search for products, brands and more" >
</div>
<div class="actionBar">
    <div class="actionContainer">
        <span class="material-symbols-outlined">
            person
            </span>
        <span style="font-size: small; margin-top: 1px; font-weight: 500;">Profile</span>
    </div>
    <a href="./Pages/wishlist.html">
        <div class="actionContainer">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
        <span style="font-size: small; margin-top: 6px; font-weight: 500;">Wishlist</span>
    </div>
    </a>
    
    <div class="actionContainer">
        <i class="fa fa-shopping-bag" aria-hidden="true"></i>
        <span style="font-size: small; font-weight: 500; margin-top: 6px; font-weight: 500;">Bag</span>
    </div>
</div>`;

document.addEventListener("DOMContentLoaded", ()=>{
    //navigation hover effecr
    let navItems=document.querySelectorAll("ul > div");
    const color = [ "#EF4040","#FF52A2","#FD8D14","#FFCD4B","#9ADE7B","#C51605"];

    navItems.forEach(function (div, index){
        div.addEventListener("mouseover",function (){
            div.style.borderColor=color[index];
        });
                            
        div.addEventListener("mouseout", ()=>{
            div.style.borderColor="";
        });
    });
})