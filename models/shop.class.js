class Shop {

    cart = new Cart();
    products = [];
    product;


    constructor(products, id) {
        this.products = products;
        this.renderShop(id);
    }

    renderShop(id) {
        this.cart;
        this.renderProducts();
        this.showDiscontPrice(id);
    }

    renderProducts() {
        this.products[0].forEach((product, index) => {
            HTML.renderProductCard(product, index);
        });
    }

    addItem(index) {
        this.cart.addItemToCart(this.products[0][index])
        console.log(parseInt(this.cart.items))
    }

    showDiscontPrice(id) {
        this.cart.discountPrice(id);
    }


}