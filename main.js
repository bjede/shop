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
    console.log(responseAsJson);
    pushToArray(products, responseAsJson);
}

function pushToArray(arr, product) {
    arr.push(product)
}
