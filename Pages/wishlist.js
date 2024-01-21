const wishlistItemArrayCopy =JSON.parse(localStorage.getItem("wishlistIDno"));
// const abc = ['1', '2'];
// console.log(JSON.parse(wishlistItemArrayCopy));
console.log(wishlistItemArrayCopy);
const actualWishlistArrayItems=wishlistItemArrayCopy.map((item)=>{
    for(let i=0;i<items.length;i++)
    {
        if(item==items[i].id)
        {
            return items[i];
        }
    }
})
console.log(actualWishlistArrayItems);



getItem();



function getItem()
{
    let wishlistItemsContainer=document.querySelector('.wishlist-items-container');
    let Html=``;
    actualWishlistArrayItems.forEach(item => {
        Html+=setItem(item);
    });
    wishlistItemsContainer.innerHTML=Html;
}


function setItem(item)
{
    return `<div class="wishlistItem-container">
    <div class="wishlist-item-image"><img src="../${item.image}" style="width: 210px; height: 280px;"/></div>
        <div class="wishlist-item-info">
            <div class="rating">${item.rating.stars}⭐${item.rating.count}</div>
            <div class="company" style="font-size:16px; font-weight:700;">${item.company}</div>
            <div class="item-name truncate" style="font-size:14px; font-weight:400;"> ${item.item_name} </div>
            <div class="price" style="font-size:14px; font-weight:700;">₹${item.current_price} </div>
            <button class="add-to-wishlist" value="${item.id}"><i class="fa fa-heart-o" aria-hidden="true" ></i> Add To Wishlist</button>
        </div>
    </div>`;
}