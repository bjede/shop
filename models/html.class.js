class HTML {

    static renderProductCard(product, index) {
        return document.getElementById('products').innerHTML += `
        <div class="product col-12 col-sm-6 col-4 col-lg-4 mb-4">
            <div onclick="shop.addProductToCart(${index})" class="card">
                <div class="img-container">
                    <img src="${product.image}" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${Format.shortenText(product.title, 20)}</h5>
                    <p class="card-text">${Format.shortenText(product.description, 80)}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="h4 text-primary font-weight-bold">${Format.currency(product.price, '€')}</span>
                        <a href="#" onclick="event.preventDefault()" class="btn btn-primary">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    }


    static renderCategories(category) {
            document.getElementById('categories').innerHTML += `
                <a href="#" onclick="shop.filterProductsByCategory('${category}')">
                    ${category.charAt(0).toUpperCase() + category.slice(1)}
                </a>
            `;
    }


    static $id(id, argument) {
        return document.getElementById(id).innerHTML = argument;
    }


    static renderCart(obj) {
        document.getElementById('cart').innerHTML += `
            <div class="item-row d-flex justify-content-between align-items-center">
                <span class="pe-md-1"><strong>${obj.amount} X </strong></span>  
                <span class="me-auto">${Format.shortenText(obj.title, 15)}</span> 
                <span>${Format.currency(obj.price, '€')}</span>
                <div class="d-flex justify-content-between">
                    <span role="button" class="increment-amount" onclick="shop.cart.incrementItemInCart(${obj.id})"></span>
                    <span role="button" class="decrement-amount" onclick="shop.cart.decrementItemInCart(${obj.id})"></span>
                </div>
            </div>
        `;
    }


    static addAciteClass(_class, index) {
        let element = document.querySelectorAll(`${_class}`);
        element.forEach((el, i) => {
            el.classList.remove('active');
            if (i === index) {
                el.classList.add('active');
            }
        })
    }


    static renderDiscountButton() {
        document.getElementById('discount-btn-container').innerHTML = `
            <div class="mt-3 mb-1 d-flex justify-content-end">
                <button onclick="shop.cart.discountPrice()" id="discount-btn" class="btn btn-primary discount">25% Discount</button>
            </div>
        `;
    }


    static showEmptyCartTemplate() {
        document.getElementById('cart').innerHTML = `
        <div class="mb-4 mt-4 empty-cart d-flex justify-content-center align-items-center flex-column">
                <img src="img/shopping_bag_FILL0_wght400_GRAD0_opsz48.png" alt="">
                <p>Shopping cart is empty</p>
            </div>
        `;
    }


    static show(id) {
        return document.getElementById(`${id}`).classList.remove('hide');
    }


    static hide(id) {
        return document.getElementById(`${id}`).classList.add('hide');
    }
}