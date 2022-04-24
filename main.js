'use strict';
let shop;
let products = [];


async function init() {
    await loadProducts();
    shop = new Shop(products, 'sum-total');
}

async function loadProducts() {
    let product = await fetch(`https://fakestoreapi.com/products`);
    let responseAsJson = await product.json();
    pushToArray(products, responseAsJson);
}

function pushToArray(arr, product) {
    arr.push(product)
}

window.addEventListener('scroll', () => {
    if(window.scrollY > 30){
        document.querySelector('.header').style = 'position: fixed;';
    }else{
        document.querySelector('.header').style = '';
    }
});
