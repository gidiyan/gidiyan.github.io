"use strict"

class Storage {
    static saveProducts(product){
        localStorage.setItem('products', JSON.stringify(products));
    }
    static saveCart(cart){
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    static getCart(){
        return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[];
    }
    // static getProduct(id){
    //     let products =JSON.parse(localStorage.getItem('products'));
    //     return products.find(product => product.id === +(id));
    // }
    // static getProducts(){
    //     return JSON.parse(localStorage.getItem("products"));
    // }
}

class Product {
    getProducts(){
        return products.map(item => {
            const id = item.id;
            const name = item.name;
            const price = item.price;
            const img = item.img;
            return {id,name,price,img};
        });
    }
}

class App{
    cart =[];
    cartItems = document.querySelector('.cart-items');
    clearCart= document.querySelector('.clear-cart');
    cartTotal = document.querySelector('.cart-total');
    sidebar = document.querySelector('.sidebar');
    constructor() {
        const closeBTN = document.querySelector('.close-btn');
        const show_cart = document.querySelector('.fa-dolly-flatbed');
        show_cart.addEventListener("click", () => this.opencart());
        closeBTN.addEventListener("click", () => this.closecart());
        this.makeShowcase(products);
        let data = new Product();
        Storage.saveProducts(data.getProducts());
        this.cart = Storage.getCart();
    }
    getProduct = (id) => products.find(product => product.id===+(id));
    createProduct = (data) =>
        `
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
`       ;
    makeShowcase(products)  {
        let result = '';
        products.forEach( item => {
            result+=this.createProduct(item);
        });
        document.querySelector('.showcase').innerHTML = result;
    }
    CreateCartItem(item){
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
        this.cartItems.append(div);
    }
    addProductToCart(item){
        const addToCartButtons = [...document.querySelectorAll('.but-cart')];

        addToCartButtons.forEach( button => {
            const  countItemsInCart = document.querySelector('.count-items-in-cart');
            button.addEventListener('click', event => {
                if(event.target.classList.contains('cart_pressed')) {}
                 else {
                    let cartItem = { ...this.getProduct(event.target.closest('.product').getAttribute('data-id')), amount: 1 };
                    this.cart = [...this.cart,cartItem];
                    this.CreateCartItem(cartItem);
                    event.target.classList.add('cart_pressed');
                    event.target.innerText = "Added to cart";
                    +countItemsInCart.textContent++;
                    if (+(countItemsInCart.textContent)>0){
                        countItemsInCart.classList.add('notempty');
                    } else {
                        countItemsInCart.classList.remove('notempty');
                        countItemsInCart.innerHTML = " ";
                    }
                    Storage.saveCart(this.cart);
                    this.setcartTotal(this.cart)
                }});
        });
    }
    clearcart() {
        this.cart = [];
        while(this.cartItems.children.length>0){
            this.cartItems.removeChild(this.cartItems.children[0]);
        }
        Storage.saveCart(this.cart);
        this.setcartTotal(this.cart);
    }
    filterItem = (cart,currentItem) => cart.filter(item => item.id !== +(currentItem.dataset.id));
    findItem = (cart,findingItem) => cart.find(item =>item.id === +(findingItem.dataset.id));
    actualNavCartCount (cartId,toClear) {
        const  countItemsInCart = document.querySelector('.count-items-in-cart');
        for (let i=0;i<toClear.length;i++) {
            if (toClear.item(i).dataset.id === cartId) {
                this.createProduct(cartId);
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
                        this.setcartTotal(this.cart)
                    }
                }
            }
        }
    }
    renderCart() {
        this.clearCart.addEventListener('click',() => this.clearcart());
        this.cartItems.addEventListener('click',event => {

            if(event.target.classList.contains('fa-trash-alt')){
                this.cart = this.filterItem(this.cart,event.target);
                Storage.saveCart(this.cart);
                this.setcartTotal(this.cart);
                this.cartItems.removeChild(event.target.parentElement.parentElement.parentElement);
                let cartId= event.target.parentElement.parentElement.parentElement.getAttribute('id');
                let toClear = document.querySelectorAll('.product');
                this.actualNavCartCount(cartId,toClear);
            }
            else if(event.target.classList.contains('fa-caret-right')){
                let tmp = this.findItem(this.cart, event.target);
                tmp.amount = tmp.amount+1;
                event.target.previousElementSibling.innerText = tmp.amount;
                this.setcartTotal(this.cart);
                Storage.saveCart(this.cart);
                this.setcartTotal(this.cart);

            }
            else if(event.target.classList.contains('fa-caret-left')){
                let tmp = this.findItem(this.cart, event.target);
                tmp.amount =tmp.amount-1;
                if(tmp.amount>0) {
                    event.target.nextElementSibling.innerText = tmp.amount;
                } else {
                    this.cart = this.filterItem(this.cart,event.target);
                    this.cartItems.removeChild(event.target.parentElement.parentElement.parentElement);
                    let cartId= event.target.parentElement.parentElement.parentElement.getAttribute('id');
                    let toClear = document.querySelectorAll('.product');
                    this.actualNavCartCount(cartId,toClear);
                }
                Storage.saveCart(this.cart);
                this.setcartTotal(this.cart);
            }



        })
    }
    testlike () {
        const testlike = [...document.querySelectorAll('.but-like')];
        const likeMe=document.querySelector('.like_me');
        testlike.forEach(button => {
            button.addEventListener('click', likeevent => {
                if (likeevent.target.classList.contains('btn_pressed')) {
                    likeevent.target.classList.remove('btn_pressed');
                    likeMe.textContent--;
                } else {
                    likeevent.target.classList.add('btn_pressed');
                    likeMe.textContent++;
                }
                if (+(likeMe.textContent) > 0) {
                    likeMe.classList.add('notempty');
                } else {
                    likeMe.classList.remove('notempty');
                    likeMe.innerHTML = "";
                }
            })
        })
    }
    setcartTotal(cart) {
        let  itemsInCart = document.querySelectorAll('.cart-item');
        // let totalInCart = document.querySelector('.cart-total');
        for (let item of itemsInCart){
            const price = item.querySelector('.product_price').textContent;
            let quantity = item.querySelector('.amount').textContent;
            let countsub = quantity*price;
            item.querySelector('.product-subtotal').textContent = parseFloat(countsub.toFixed(2));
        }
        let countTotal =0;
        let itemsTotal =0;
        cart.map(item => {
            countTotal+=item.price*item.amount;
            itemsTotal+=item.amount;
        });
        this.cartTotal.textContent = parseFloat(countTotal.toFixed(2));
    }
    opencart(){
        this.sidebar.classList.toggle("show-sidebar");
        document.querySelector('.over').classList.add('active')
        this.populateCart(this.cart);
    };
    closecart(){
        this.sidebar.classList.remove("show-sidebar");
        document.querySelector('.over').classList.remove('active');
    }

}
(function(){
    const app = new App();
    app.addProductToCart();
    app.renderCart();
    app.testlike();
})();