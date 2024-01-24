const wishlistItemArrayCopy =JSON.parse(localStorage.getItem("wishlistIDno"));
const noOfItems=document.querySelector('.no-of-items');
noOfItems.innerHTML=`<h3>My Wishlist <span style="font-size: 18px; font-weight:400;">${wishlistItemArrayCopy.length}</span></h3>`
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
                <div style="color:grey;">₹${item.original_price}</div>
                <div>${item.discount_percentage}% off</div>
            </div>
            <div class="move-to-bag-button" value="${item.id}"><p value="${item.id}">Move to Bag</p></div>
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

const modalContainer=document.querySelector('.modal-container');
function moveToBag(itemId){
    console.log(`Inside moveToBag Funcrion`);
    let Html=``;
    items.forEach(item=>{
        // console.log(item.id);
        // console.log(itemId);
        if(item.id==itemId)
        {
            console.log(item.id);
        Html+=`    
        <div class="modal">
            <div class="modal-item">
                <div>
                    <img src="../${item.image}" alt="" style="width: 65px; height: 80px; margin-right:15px;">
                </div>
                <div class="product-details-container">
                    <p style="color:#575656;">${item.item_name}</p>
                    <div class="price-list-container">
                        <div  style="font-weight:500;">Rs. ${item.current_price} </div>
                        <div style="color:grey;text-decoration-line: line-through;">${item.original_price}</div>
                        <div style="color:#cc7100e3; font-weight:500;">( ${item.discount_percentage}%Off )</div>
                    </div>
                </div>
            </div>
            <div class=" size-container">
                <div class="select-size"><h3 style="margin-bottom: 3px;">Select Size</h3></div>
                <div class="size-btn-container">
                    <div><p class="size-btn">XS</p></div> <!-- Ww put the class on <p> tag due to event bubbling-->
                    <div><p class="size-btn">S</p></div>
                    <div><p class="size-btn">M</p></div>
                    <div><p class="size-btn">L</p></div>
                    <div><p class="size-btn">XL</p></div>
                </div>
            </div>
            <div  >
                <div><h3 id="modal-add-to-bag-btn" class="modal-item-button">Add To Bag</h3></div>
            </div>
        </div>
        <div class="over-lay"></div>`;
        }
    })
    modalContainer.innerHTML=Html;
    const modal=document.querySelector('.modal');
    modal.classList.add("active");
    const overLay=document.querySelector('.over-lay');
    overLay.classList.add("active-Overlay");
    addItemToBag();
}


const moveToBagBtns=document.querySelectorAll('.move-to-bag-button');
    Array.from(moveToBagBtns).forEach(btn=>{
    btn.addEventListener('click',(e)=>{
    console.log("Iam Move Bag Button");
    let itemId=e.target.getAttribute('value');
    console.log(`This is itemId Value: ${itemId}`);
    moveToBag(itemId);
    })
})


function addItemToBag()
{
    const sizeBtns = document.querySelectorAll('.size-btn');
    let size='';
    if (sizeBtns) {
        Array.from(sizeBtns).forEach(btn=>{
            btn.addEventListener('mouseover', (e) => {
                e.target.style.cursor="pointer";
                e.target.style.borderColor = "#e83c75";
                e.target.style.color = "#e83c75";
            });
            btn.addEventListener('mouseout', (e) => {
                e.target.style.borderColor = "";
                e.target.style.color = "";
            });

            btn.addEventListener('click', (e) => {  //buggy(fix: the color should stay when size is clicked)
                console.log(e.target.innerText);
                size=e.target.innerText;
                console.log(size);
            });
        })
        
    } else {
         console.error("Element with id 'modalAddToBag' not found");
    }

    const modalAddToBagBtn=document.querySelector('.modal-item-button');  //buggy 
    modalAddToBagBtn.addEventListener('click',(e)=>{
        e.target.style.backgroundColor="green";
        if(!size) {
            const selectSize=document.querySelector('.select-size h3');
            const newSpan=document.createElement('span');
            newSpan.innerText='Please select a size!';  //buggy(fix: the text should only display once. Not to be displayed with every button click)
            newSpan.style.color='red';
            newSpan.style.fontSize='10px';
            newSpan.style.fontWeight='400';
            newSpan.style.marginLeft='12px';
            selectSize.append(newSpan);
        }
    })
}
        
