/* let shopByCategoty=document.querySelector('.shopByCategoty');
if(!shopByCategoty){
    return ;
}
shopByCategoty.innerHTML=`
<div><h2 class="tag">SHOP BY CATEGORY</h2></div>
            <div class="categoryItems">
                <a href=""><img class="categoryItemImg" src="../assets/images/categories/1.jpg" alt=""></a>
                <a href=""><img class="categoryItemImg" src="./assets/images/categories/2.jpg" alt=""></a>
                <a href=""><img class="categoryItemImg" src="./assets/images/categories/3.jpg" alt=""></a>
                <a href=""><img class="categoryItemImg" src="./assets/images/categories/4.jpg" alt=""></a>
                <a href=""><img class="categoryItemImg" src="./assets/images/categories/5.jpg" alt=""></a>
                <a href=""><img class="categoryItemImg" src="./assets/images/categories/6.jpg" alt=""></a>
                <a href=""><img class="categoryItemImg" src="./assets/images/categories/7.jpg" alt=""></a>
                <a href=""><img class="categoryItemImg" src="./assets/images/categories/8.jpg" alt=""></a>
                <a href=""><img class="categoryItemImg" src="./assets/images/categories/9.jpg" alt=""></a>
                <a href=""><img class="categoryItemImg" src="./assets/images/categories/10.jpg" alt=""></a>
</div>`; */

 
// export const wishlistItemArray = []; 
// function addToWishlist(itemId){
//     console.log(itemId);
//     if(!wishlistItemArray.includes(itemId,0)){
//         wishlistItemArray.push(itemId);
//     }
//     console.log(wishlistItemArray);
// }


var wishlistItemArray = [];  // store it in the local storage



displayItems();

function displayItems()
{
    let itemsContainer=document.querySelector('.shop-items-container');
    let innerHtml=``;  //this will have all the items 
    items.forEach((item)=>{
    innerHtml+=`
    <div class="item-container">
        <div class="item-image"><img src="${item.image}" style="width: 210px; height: 280px;"/></div>
        <div class="item-info">
            <div class="rating">${item.rating.stars}⭐${item.rating.count}</div>
            <div class="company" style="font-size:16px; font-weight:700;">${item.company}</div>
            <div class="item-name truncate" style="font-size:14px; font-weight:400;"> ${item.item_name} </div>
            <div class="price" style="font-size:14px; font-weight:700;">₹${item.current_price} </div>
            <button class="add-to-wishlist" value="${item.id}"><i class="fa fa-heart-o" aria-hidden="true" ></i> Add To Wishlist</button>
        </div>
    </div>`;
    })  
    itemsContainer.innerHTML=innerHtml;
}

document.querySelectorAll(`.add-to-wishlist`).forEach((button)=>{
    button.addEventListener(`click`,(e)=>{s
        const {target}=e;
        let wishlistIdNo=JSON.stringify(wishlistItemArray);
        localStorage.setItem("wishlistIDno",wishlistIdNo);
        addToWishlist(target.value);
    })
})

function addToWishlist(itemId){
    if(!wishlistItemArray.includes(itemId,0)){
        wishlistItemArray.push(itemId);
    }
    console.log(wishlistItemArray);
}