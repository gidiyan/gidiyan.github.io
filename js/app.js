"use strict"

let i;
const likeMe=document.querySelector('.like_me');
const cartItems = document.querySelector('.cart-items');
const show_cart = document.querySelector('.fa-dolly-flatbed');
const sidebar = document.querySelector('.sidebar');
const closeBTN = document.querySelector('.close-btn');
const clearCart= document.querySelector('.clear-cart')
const countItemsInCart = document.querySelector('.count-items-in-cart');
const addToCarts = document.getElementsByClassName("but-cart");
let cart =[];




//добавление в корзину
const template = document.getElementById("cartItem").content;
let content = document.getElementById("cartItem").content;
for (let i=0; i<addToCarts.length; i++) {
    addToCarts[i].addEventListener('click', function(e){
        let item = e.target.closest('.product');
        let content = addProductToCart(template, item);
        document.querySelector('.cart-items').append(document.importNode(content, true));
        +countItemsInCart.textContent++;
        if (+(countItemsInCart.textContent)>0){
            countItemsInCart.classList.add('notempty');
        } else {
            countItemsInCart.classList.remove('notempty');
        }
    })
}


//динамическая сетка для продуктов
function createProduct(data) {
return `
       <div class="product cs-1 md-2 tb-3 tb-4 pic-center pic-parent"  data-id="${data.id}">
           <img alt="${data.name}" src="${data.img}" class="img-fluid">
           <strong class="sm-bottom prod-bottom">${data.price}</strong>
           <strong class="sm-desc prod-desc">${data.name}</strong>
            <ul class="prod-text">
               <li><button class="but-like sm-button button"><i class="far fa-thumbs-up"></i></button></li>
               <li><button class="sm-cart but-cart"><span class="">Add to Cart</span></button></li>
               <li><button class="sm-button button"><i class="fas fa-info-circle"></i></button></li>
           </ul>
        </div>
`;
}
let result = '';
products.forEach(function (item) {
result+=createProduct(item);
});
document.querySelector('.showcase').innerHTML=result;


//субтоталыы
function subtotals(){
    let  itemsInCart = document.querySelectorAll('.cart-item');
    let totalInCart = document.querySelector('.cart-total');
    for (let item of itemsInCart){
        let price = item.querySelector('.product_price').textContent;
        let quantity = item.querySelector('.amount').textContent;
        item.querySelector('.product-subtotal').textContent = quantity*price;
    }
    }

//подсчет лайком с убиранием тех, что повторно нажаты
const testlike = [...document.querySelectorAll('.but-like')];
testlike.forEach( button => {
    button.addEventListener('click', likeevent => {
        if (likeevent.target.classList.contains('btn_pressed')) {
            likeevent.target.classList.remove('btn_pressed');
            +likeMe.textContent--;
        } else {
            likeevent.target.classList.add('btn_pressed');
            +likeMe.textContent++;
        }
        if (+(likeMe.textContent)>0){
            likeMe.classList.add('notempty');
        } else {
            likeMe.classList.remove('notempty');
            likeMe.innerHTML = "";
        }
    })
})


function CreateCartItem(item){
    const div=document.createElement('div');
    div.className = "cart-item";
    div.setAttribute('id',item.id);
    div.innerHTML=
        `
                    <div class="picture product-img">
                        <img src="${item.img}" alt="${item.img}" class="img-fluid w-100">
                    </div>
                    <div class="product_name mx-auto">${item.name}</div>
                    <div class="remove-btn text-right">
                        <a href="#" class="reset-anchor"><i id="trash" class="fas fa-trash-alt" data-id="${item.id}"></i></a>
                    </div>
                    <div class="quantity">
                        <div class="border d-flex justify-content-around mx-auto">
                            <i class="fas fa-caret-left" data-id="${item.id}"></i>
                            <span id=cart_count class="border-1 p-1 amount" data-id="${item.amount}">1</span>
                            <i class="fas fa-caret-right" data-id="${item.id}"></i>
                        </div>
                    </div>
                    <div class="price m-auto">
                        $<span class="product_price">${item.price}</span>
                         <span class="subtotal">Total: $<span class="product-subtotal"></span></span>
                    </div>
                    </div>
    `
    cartItems.append(div);
}

function getProduct(id) {
    return products.find(product => product.id===+(id));

}

function addProductToCart(){
    const addToCartButtons = [...document.querySelectorAll('.but-cart')];
    addToCartButtons.forEach( button => {
        button.addEventListener('click',event => {
            if(event.target.classList.contains('cart_pressed')) {} else {
            let cartItem = { ...getProduct(event.target.closest('.product').getAttribute('data-id')), amount: 1 };
            cart = [...cart,cartItem];
            CreateCartItem(cartItem);
            event.target.classList.add('cart_pressed');
            event.target.innerText = "Added to cart";
            +countItemsInCart.textContent++;
            if (+(countItemsInCart.textContent)>0){
                countItemsInCart.classList.add('notempty');
            } else {
                countItemsInCart.classList.remove('notempty');
                countItemsInCart.innerHTML = " ";
            }
            subtotals();
        }});
    });
}

function clearcart() {
cart = [];
while(cartItems.children.length>0){
    cartItems.removeChild(cartItems.children[0]);
}
subtotals();
}

const filterItem = (cart,currentItem) => cart.filter(item => item.id !== +(currentItem.dataset.id));
const findItem = (cart,findingItem) => cart.find(item =>item.id === +(findingItem.dataset.id));

function actualNavCartCount (cartId,toClear) {
    for (let i=0;i<toClear.length;i++) {
        if (toClear.item(i).dataset.id === cartId) {
            createProduct(cartId);
            let y = document.querySelectorAll('.cart_pressed');
            for (let i=0;i<y.length;i++) {
                if (y[i].parentElement.parentElement.parentElement.parentElement.dataset.id === cartId){
                    y[i].innerText = "ADD TO CART";
                    y[i].classList.remove('cart_pressed');
                    +countItemsInCart.textContent--;
                    if (+(countItemsInCart.textContent)>0){
                        countItemsInCart.classList.add('notempty');
                    } else {
                        countItemsInCart.classList.remove('notempty');
                        countItemsInCart.innerHTML = "";
                    }
                    subtotals();
                }
            }
        }
    }
}
function renderCart() {
clearCart.addEventListener('click',() => clearcart());
cartItems.addEventListener('click',event => {

    if(event.target.classList.contains('fa-trash-alt')){
        cart = filterItem(cart,event.target);
        cartItems.removeChild(event.target.parentElement.parentElement.parentElement);
        let cartId= event.target.parentElement.parentElement.parentElement.getAttribute('id');
        let toClear = document.querySelectorAll('.product');
        actualNavCartCount(cartId,toClear);
                                                                    }
    else if(event.target.classList.contains('fa-caret-right')){
        let tmp = findItem(cart, event.target);
        tmp.amount = tmp.amount+1;
        event.target.previousElementSibling.innerText = tmp.amount;
        subtotals();

    }
    else if(event.target.classList.contains('fa-caret-left')){
        let tmp = findItem(cart, event.target);
        tmp.amount =tmp.amount-1;
        if(tmp.amount>0) {
            event.target.nextElementSibling.innerText = tmp.amount;
        } else {
            cart = filterItem(cart,event.target);
            cartItems.removeChild(event.target.parentElement.parentElement.parentElement);
            let cartId= event.target.parentElement.parentElement.parentElement.getAttribute('id');
            let toClear = document.querySelectorAll('.product');
            actualNavCartCount(cartId,toClear);
        }
        subtotals();
    }



})
}


show_cart.addEventListener("click", () => {sidebar.classList.toggle("show-sidebar");document.querySelector('.over').classList.add('active')});
closeBTN.addEventListener("click", () => {sidebar.classList.remove("show-sidebar");document.querySelector('.over').classList.remove('active')});
addProductToCart();
renderCart();

