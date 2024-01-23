const wishlistItemArrayCopy =JSON.parse(localStorage.getItem("wishlistIDno"));
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
    <div class="wishlist-item-image"><img src="../${item.image}" style="width: 208.7px; height: 280px;"/> 
        <div class="remove-item-from-wishlist-container"><i class="fa fa-times remove-item-from-wishlist" aria-hidden="true" id="1" value="${item.id}"></i></div>
    </div>
        <div class="wishlist-item-info">
        <!-- <div class="rating">${item.rating.stars}⭐${item.rating.count}</div> -->
         <!--   <div class="company" style="font-size:16px; font-weight:700;">${item.company}</div> -->
            <div class="item-name truncate" style="font-size:14px; font-weight:400;"> ${item.item_name} </div>
            <div class="price" style="font-size:14px; font-weight:700;">
                <div>Rs. ${item.current_price} </div>
                <div>₹${item.original_price} </div>
                <div>₹${item.discount_percentage} </div>
            </div>
            <div class="move-to-bag-button"><p>Move to Bag</p></div>
          <!--  <button class="add-to-wishlist" value="${item.id}"><i class="fa fa-heart-o" aria-hidden="true" ></i> Move To Bag</button> -->
        </div>
    </div>`;
}

const removeItemFromWishlistBtn=document.querySelectorAll(".remove-item-from-wishlist");
console.log(removeItemFromWishlistBtn);
Array.from(removeItemFromWishlistBtn).forEach((btn)=>{
    btn.addEventListener(`click`,(e)=>{
        const {target}=e;
        console.log(target.getAttribute('value'));
        let itemId=target.getAttribute('value');
        let indexOfId=wishlistItemArrayCopy.indexOf(itemId);
        wishlistItemArrayCopy.splice(indexOfId,1);
        localStorage.setItem('wishlistIDno',JSON.stringify(wishlistItemArrayCopy));//this resets the modifed array in the local storage.
        location.reload(); //this reloads the current page
    })
})
