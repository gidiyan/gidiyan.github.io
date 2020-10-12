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
    static getProduct(id){
        let products =JSON.parse(localStorage.getItem('products'));
        return products.find(product => product.id === +(id));
    }
    static getProducts(){
        return JSON.parse(localStorage.getItem("products"));
    }
}

class Product {
    getProducts(){
        return products.map(item => {
            const id = item.id;
            const name = item.name;
            const price = item.price;
            const img = item.img;
            const category = item.category;
            const subcategory = item.subcategory;
            return {id,name,price,img,category,subcategory};
        });
    }
}

class App {
    cart = [];
    cartItems = document.querySelector('.cart-items');
    clearCart = document.querySelector('.clear-cart');
    cartTotal = document.querySelector('.cart-total');
    countItems = document.querySelector('.count-items-in-cart');
    sidebar = document.querySelector('.sidebar');
    constructor() {
        const closeBTN = document.querySelector('.close-btn');
        const show_cart = document.querySelector('.fa-dolly-flatbed');
        show_cart.addEventListener("click", () => this.opencart());
        closeBTN.addEventListener("click", () => this.closecart());
        if (document.querySelector('.categoriesShow')) {
            this.makeCategories(categories);
        };
        this.makeShowcase(products);
        let data = new Product();
        Storage.saveProducts(data.getProducts());
        this.cart = Storage.getCart();
    }

    getProduct = (id) => products.find(product => product.id === +(id));
    createProduct = (data) =>
        `
       <div class="product cs-1 md-2 tb-3 tb-4 pic-center pic-parent"  data-id="${data.id}">
           <img alt="${data.name}" src="${data.img}" class="img-fluid">
           <strong class="sm-bottom prod-bottom font-size--small">${data.price}</strong>
           <strong class="sm-desc prod-desc">${data.name}</strong>
            <ul class="prod-text">
               <li><button class="but-like sm-button button"><i class="far fa-thumbs-up"></i></button></li>
               <li><button class="sm-cart but-cart"><span class="">Add to Cart</span></button></li>
               <li><button class="sm-button button"><i class="fas fa-info-circle"></i></button></li>
           </ul>
        </div>
`;

    makeShowcase(products) {
        let result = '';
        products.forEach(item => {
            result += this.createProduct(item);
        });
        document.querySelector('.showcase').innerHTML = result;
    }

    CreateCartItem(item) {
        const div = document.createElement('div');
        div.className = "cart-item";
        div.setAttribute('id', 'id' + item.id);
        div.innerHTML =
            `
                    <div class="picture product-img">
                        <img src="${item.img}" alt="${item.img}" class="img-fluid w-100">
                    </div>
                    <div class="product_name mx-auto">${item.name}</div>
                    <div class="remove-btn text-right">
                        <a href="#" class="reset-anchor"><i id="trash" class="fas fa-trash-alt" data-id=${item.id}></i></a>
                    </div>
                    <div class="quantity">
                        <div class="border d-flex justify-content-around mx-auto">
                            <i class="fas fa-caret-left" data-id=${item.id}></i>
                            <span id=cart_count class="border-1 p-1 amount">${item.amount}</span>
                            <i class="fas fa-caret-right" data-id=${item.id}></i>
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

    addProductToCart(item) {
        const addToCartButtons = [...document.querySelectorAll('.but-cart')];
        addToCartButtons.forEach(button => {
            const countItemsInCart = document.querySelector('.count-items-in-cart');
            button.addEventListener('click', event => {
                // let product = this.getProduct(event.target.closest('.product').getAttribute('data-id'));
                // let incart = this.cart.some(elem => elem.id === product.id);
                // console.log(product);
                // console.log(incart);
                // if(incart){
                //     this.cart.forEach(elem => {
                //         if(elem.id === product.id){
                //             elem.amount += 1;
                //         }
                //     })}
                // else
                    if (event.target.classList.contains('cart_pressed')) {} else {
                    let cartItem = {
                        ...this.getProduct(event.target.closest('.product').getAttribute('data-id')),
                        amount: 1
                    };
                    this.cart = [...this.cart, cartItem];
                    this.CreateCartItem(cartItem);
                    event.target.classList.add('cart_pressed');
                    event.target.innerText = "Added to cart";
                    +countItemsInCart.textContent++;
                    if (+(countItemsInCart.textContent) > 0) {
                        countItemsInCart.classList.add('notempty');
                    } else {
                        countItemsInCart.classList.remove('notempty');
                        countItemsInCart.innerHTML = " ";
                    }
                    Storage.saveCart(this.cart);
                }
            });
        });
    }

    clearcart() {
        this.cart = [];
        while (this.cartItems.children.length > 0) {
            this.cartItems.removeChild(this.cartItems.children[0]);
        }
        Storage.saveCart(this.cart);
        this.setcartTotal(this.cart);
    }

    filterItem = (cart, currentItem) => cart.filter(item => item.id !== +(currentItem.dataset.id));
    findItem = (cart, findingItem) => cart.find(item => item.id === +(findingItem.dataset.id));

    actualNavCartCount(cartId) {
        const toClear = document.querySelectorAll('.product');
        const countItemsInCart = document.querySelector('.count-items-in-cart');
        for (let i = 0; i < toClear.length; i++) {
            if (+(toClear.item(i).getAttribute('data-id')) === +(cartId.substr(2,2))) {
                this.createProduct(cartId.substr(2,2));
                let y = document.querySelectorAll('.cart_pressed');
                console.dir(y);
                for (let i = 0; i < y.length; i++) {
                    if (+(y[i].parentElement.parentElement.parentElement.parentElement.dataset.id) === +(cartId.substr(2,2))) {
                        y[i].textContent = "ADD TO CART";
                        y[i].classList.remove('cart_pressed');
                        +countItemsInCart.textContent--;
                        if (+(countItemsInCart.textContent) > 0) {
                            countItemsInCart.classList.add('notempty');
                        } else {
                            countItemsInCart.classList.remove('notempty');
                            countItemsInCart.innerHTML = "";
                        }
                        this.setcartTotal(this.cart);
                        Storage.saveCart(this.cart);
                    }
                }
            }
        }
    }

    renderCart() {
        this.clearCart.addEventListener('click', () => this.clearcart());
        this.cartItems.addEventListener('click', event => {
            if (event.target.classList.contains('fa-trash-alt')) {
                this.cart = this.filterItem(this.cart, event.target);
                event.target.closest('.cart-item').remove();
                Storage.saveCart(this.cart);
                let cartId = event.target.parentElement.parentElement.parentElement.getAttribute('id');
                this.actualNavCartCount(cartId);
            } else if (event.target.classList.contains('fa-caret-right')) {
                let tmp = this.findItem(this.cart, event.target);
                tmp.amount = tmp.amount + 1;
                event.target.previousElementSibling.innerText = tmp.amount;
                this.setcartTotal(this.cart);
                Storage.saveCart(this.cart);

            } else if (event.target.classList.contains('fa-caret-left')) {
                let tmp = this.findItem(this.cart, event.target);
                if (tmp !== undefined && tmp.amount > 1) {
                    tmp.amount = tmp.amount - 1;
                    event.target.nextElementSibling.innerText = tmp.amount;
                } else {
                    this.cart = this.filterItem(this.cart, event.target);
                    event.target.closest('.cart-item').remove();
                    let cartId = event.target.parentElement.parentElement.parentElement.getAttribute('id');
                    this.actualNavCartCount(cartId);
                }
                Storage.saveCart(this.cart);
                this.setcartTotal(this.cart);
            }
        })
    }

    testlike() {
        const testlike = [...document.querySelectorAll('.but-like')];
        const likeMe = document.querySelector('.like_me');
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

        let tmpTotal = 0;
        cart.map(item => {
            tmpTotal = item.price * item.amount;
            this.cartItems.querySelector(`#id${item.id} .product-subtotal`).textContent = parseFloat(tmpTotal.toFixed(2));
        });
        this.cartTotal.textContent = parseFloat(cart.reduce((previous, current) => previous + current.price * current.amount, 0).toFixed(2));
        this.countItems.textContent = cart.reduce((previous,currnet) => previous+currnet.amount,0);
    }

    opencart() {
        this.sidebar.classList.toggle("show-sidebar");
        document.querySelector('.over').classList.add('active')
        this.cartItems.innerHTML='';
        this.cart = Storage.getCart();
        this.populateCart(this.cart);
        this.setcartTotal(this.cart);
    }

    closecart() {
        this.sidebar.classList.remove("show-sidebar");
        document.querySelector('.over').classList.remove('active');
    }

    populateCart(cart) {
        cart.forEach(item => this.CreateCartItem(item));
    }

    createCategory(category) {
        return `
         <a class="cat-overflow" data-category="${category.name}" href="#"><img alt="categories block" src="${category.img}" class="img-fluid transform"><strong class="text-inside1 category-item" data-category="${category.name}">"${category.name}"</strong></a>
        `
    }

    makeCategories(categories) {
        for (let i = 0; i < 3; i++) {
            let div = document.createElement('div');
            div.className = "cs-3 tb-3";
            div.innerHTML = this.createCategory(categories[i]);
            document.querySelector('.categoriesShow').append(div);
        }
    }

    categoriesList() {
        if (document.querySelector('.categories-list')) {
            let result = ``;
            subcategories.forEach(element => {
                result += `<li class="incol mb-2 mt-3"><a class="reset_anchor  subcategory-item" href="#" data-subcategory="${element.name}">${element.name}</a></li>`;
            });
            document.querySelector('.categories-list').innerHTML = result;
        }
    }

    renderCategory() {
        const categories = document.querySelector('.categories');
        categories.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('category-item')) {
                const category = target.dataset.category;
                const categoryFilter = items => items.filter(item => item.category.includes(category));
                this.makeShowcase(categoryFilter(Storage.getProducts()));
            } else if (
                target.classList.contains('subcategory-item')) {
                const subcategory = target.dataset.subcategory;
                const categoryFilter = items => items.filter(item => item.subcategory.includes(subcategory));
                this.makeShowcase(categoryFilter(Storage.getProducts()));
            } else {
                const categoryFilter = items => items.filter(item => item.category.includes(category));
                this.makeShowcase((Storage.getProducts()));
            }
            this.addProductToCart();
            this.renderCart();
        });
    }

    selectPicker() {
        if (document.querySelector('.selectpicker')) {
            let selectpicker = document.querySelector('.selectpicker')
            selectpicker.addEventListener('change', () => {
                switch (selectpicker.value) {
                    case 'low-high':
                        this.makeShowcase(Storage.getProducts().sort(this.compareValue('price', 'asc')));
                        break;
                    case 'high-low':
                        this.makeShowcase(Storage.getProducts().sort(this.compareValue('price', 'desc')));
                        break;
                    case 'popularity':
                        this.makeShowcase(Storage.getProducts().sort(this.compareValue('id', 'asc')));
                        break;
                    default:
                        this.makeShowcase(Storage.getProducts().sort(this.compareValue('id', 'asc')));
                        break;
                }
            });
        }


    }

    compareValue(key,order = 'asc'){
        return function innerSort(a,b) {
            if(!a.hasOwnProperty(key) || (!b.hasOwnProperty(key))) {
                return 0;
            }
            const varA= (typeof a[key] === 'string') ? a[key].toUpperCase():a[key];
            const varB= (typeof b[key] === 'string') ? b[key].toUpperCase():b[key];
            let comparison =0;
            if (varA>varB){comparison=1;} else if (varA<varB) {comparison=-1;} return ((order==='desc')?(comparison*(-1)):comparison);
        }
    };
}

(function(){
    const app = new App();
    app.addProductToCart();
    app.renderCart();
    app.testlike();
    app.renderCategory();
    app.categoriesList();
    app.selectPicker();
})();