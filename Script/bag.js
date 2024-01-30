const bagItemsId=JSON.parse(localStorage.getItem("itemdIdForBag")) || [];//we get the ids stored in local storage
const actualBagItemsId= bagItemsId.map(id=>{
    for(let i=0;i<items.length;i++)
    {
        if(id==items[i].id){
            return items[i];
        }
    }
})
// console.log("actualBagItemsId");
// console.log(actualBagItemsId);
setBagItem();
function setBagItem(){
    const bagLyoutLeft=document.querySelector('.bag-layout-left');
    let Html=``;
    actualBagItemsId.forEach(item=>{
        Html+=getBagItem(item);
    })
    bagLyoutLeft.innerHTML=Html;
}
function getBagItem(item){
    return `<div class="bag-item">
    <div class="bag-item-left">
        <div>
            <img src="../${item.image}" alt="">
            <input type="checkbox" name="" id="">
        </div>
    </div>
    <div class="bag-item-right">
        <div class="item-details">
            <div class="item-name-cross"> 
                <h3>${item.company}</h3>
                <i class="fa fa-times remove-item-from-bag" aria-hidden="true" id="1" style="font-size: large;" value="${item.id}"></i>
            </div>
            <p>${item.item_name}</p>
        </div>
        
        <div class="size-qty"> <!-- Size and Qnty-->
            <div class="update-size">Size :</div> <!--Size-->
            <div class="update-qty">Qty :</div><!--Qnty-->
        </div>
    
        <div class="price" style="font-size:14px; font-weight:700;">
            <div>Rs ${item.current_price}</div>
            <div style="color:grey; text-decoration: line-through;">₹${item.original_price}</div>
            <div>${item.discount_percentage}%Off</div>
        </div>
        <div style="font-size:14px;">
            <p><span style="font-weight:600;">14 day</span> return available</p>
        </div>
    </div>
    </div>`
}

//code for removing bag item

const removeItemFromBagBtns=document.querySelectorAll('.remove-item-from-bag');
Array.from(removeItemFromBagBtns).forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        let itemId=e.target.getAttribute("value");
        // console.log("this is item id "+itemId);
        openModal(itemId);
    })
})

function openModal(itemId){
    console.log("This is actualBagItemId"+actualBagItemsId);
    console.log(bagItemsId);
    console.log(itemId);
    const modalContainer=document.querySelector('.modal-container');
    let Html=``;
    for(let i=0;i<actualBagItemsId.length;i++)
    {
        if(itemId==actualBagItemsId[i].id){
            console.log("yes");
            console.log(actualBagItemsId[i].id);
            Html+=`<div class="remove-bagitem-modal">
            <div class="item-details">
                <div>
                    <img src="../${actualBagItemsId[i].image}" alt="" style="width: 50px; height: 60px;">
                </div>
                <div class="item-details-name">
                    <div><p style="font-size: 15px; font-weight: 700;">Move from Bag</p></div>
                    <div><p style="font-size: 13px;">Are you sure you want to move this item from bag?</p></div>
                </div>
            </div>
            <div class="remove-bagItem">
                <div class="remove-bagItem-btn" onclick="remmoveItem('${actualBagItemsId[i].id}')"><h4>REMOVE</h4></div> <!--Here '$ {actualBagItemsId[i].id}' quotes is used because Js sometimes automatically converts string to number and vice versa If value is a String '001' it becomes Number 1 -->
                <div class="remove-bagItem-btn" style="color: brown; border-left: 1px solid rgb(215, 215, 215);" onclick="moveItemToWishlist(${actualBagItemsId[i].id})"><h4>MOVE TO WISHLIST</h4></div>
            </div>
        </div>
        <div class="over-lay"></div>`;
        }
    }
    modalContainer.innerHTML=Html;
}
function remmoveItem(itemId){
    console.log(itemId);
    console.log("RemoveItemId"+itemId);
    let indexOfId=bagItemsId.indexOf(itemId);
    bagItemsId.splice(indexOfId,1);
    localStorage.setItem("itemdIdForBag",JSON.stringify(bagItemsId));
    location.reload();
}