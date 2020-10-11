"use strict";
//урок 3


// let cartItem = document.createElement('div');
// cartItem.className="cart-item";
// let picture =  document.createElement('div');
// let imgFluid = document.createElement('img');
// let productName =  document.createElement('div');
// productName.className="product_name";
// let prices =  document.createElement('div');
// // let productText = document.createTextNode('Product 2 name');
// productName.innerText = 'Product 2 name';
// prices.innerText = '23';
// imgFluid.setAttribute('src','./images/prod6.jpg');
// imgFluid.setAttribute('alt','Product 2 name');
// imgFluid.className = "img-fluid w-50";
// picture.appendChild(imgFluid);
// cartItem.appendChild(picture);
// cartItem.appendChild(productName);
// cartItem.appendChild(prices);
// document.querySelector('.cart-items').appendChild(cartItem);
//
// let quantity = document.createElement('div');
// let border = document.createElement('div');
// let cartLeft = document.createElement('i');
// let amount = document.createElement('span');
// let cartRight = document.createElement('i');
// quantity.className = 'quantity';
// amount.textContent = 1;
// border.append(amount);
// cartLeft.className = 'fas fa-caret-left';
// cartRight.className = 'fas fa-caret-right';
// border.insertBefore(cartLeft,border.firstChild);
// border.insertBefore(cartRight,null);
// quantity.append(border);
// let parent = document.querySelector('.cart-item');
// parent.insertBefore(quantity, parent.lastChild);
// // parent.querySelector('.product_name').insertAdjacentHTML('beforeend'," <div class="remove-btn text-right">
// //     <a href="#" class="reset-anchor"><i id="trash" class="fas fa-trash-alt"></i></a>")
// // </div>)
//
// let cont = document.getElementById('MyTemplate').innerHTML;
// let div = document.createElement('div');
// div.innerHTML=cont;
// document.querySelector('.container').append(div);

let cont1 = document.getElementById('cartitem').content;

document.getElementById('addtocart').addEventListener('click',function () {
document.querySelector('.cart-items').append(document.importNode(cont1,true));
})

//урок 4
(function () {
    show_cart.addEventListener("click",() => {
        document.querySelector('.over').classList.add('active');
        sidebar.classList.toggle('show-sidebar');
        subtotals();
    });
    closeBTN.addEventListener('click', () => {
        document.querySelector('.over').classList.remove('active');
        sidebar.classList.toggle('show-sidebar')
    })
})();

class App {
    cart = [];
    cartItems = document.querySelector('.cart-items');
    clearCart = document.querySelector('.clear-cart');

    constructor() {
        const show_cart = document.querySelector('.fa-dolly-flatbed');
        const sidebar = document.querySelector('.sidebar');
        const closeBTN = document.querySelector('.close-btn');
        show_cart.addEventListener("click", function () {
            document.querySelector('.over').classList.add('active');
            sidebar.classList.toggle('show-sidebar');
            subtotals();
        });
        closeBTN.addEventListener('click', function () {
            document.querySelector('.over').classList.remove('active');
            sidebar.classList.toggle('show-sidebar')
        })
    }
}

//5 урок


}