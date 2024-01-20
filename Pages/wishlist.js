// let wishlistItemsContainer=document.querySelector('.wishlist-items-container');
// wishlistItemsContainer.innerHTML=`><img src="../assets/images/cloths/Tee2.webp" style="width: 210px; height: 280px;"/>`
let i=0;
console.log(wishlistItemArray);
displayWishlistItems();
function displayWishlistItems() {
    let wishlistItemsContainer=document.querySelector('.wishlist-items-container');
    let Html=``;  //this will have all the items 
    items.forEach((item)=>{
        
        if(item.id==WishListIds[i])
        console.log(item.id)
    Html+=`
    <div class="wishlistItem-container">
        <div class="wishlist-item-image"><img src="../${item.image}" style="width: 210px; height: 280px;"/></div>
        <div class="wishlist-item-info">
            <div class="rating">${item.rating.stars}⭐${item.rating.count}</div>
            <div class="company" style="font-size:16px; font-weight:700;">${item.company}</div>
            <div class="item-name truncate" style="font-size:14px; font-weight:400;"> ${item.item_name} </div>
            <div class="price" style="font-size:14px; font-weight:700;">₹${item.current_price} </div>
            <button class="add-to-wishlist" value="${item.id}"><i class="fa fa-heart-o" aria-hidden="true" ></i> Add To Wishlist</button>
        </div>
    </div>`;
    i++;
    })
    wishlistItemsContainer.innerHTML=Html;
}

console.log(localStorage.getItem("wishlistIDno"));
const WishListIds=localStorage.getItem("wishlistIDno");
