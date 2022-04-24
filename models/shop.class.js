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
    }


    renderProducts() {
        this.products[0].forEach((product, index) => {
            HTML.renderProductCard(product, index);
        });
    }


    addProductToCart(index) {
        this.cart.addItemToCart(this.products[0][index])
    }


    filterProductsByCategory(product, index){
        HTML.$id('products', '');
        HTML.addAciteClass('.category', index)
        this.products[0].forEach((el, i) => {
            if(el.category == product){
              HTML.renderProductCard(el, i)
            }else if(product == 'all'){
              HTML.renderProductCard(el, i)
            }
        });
      }
}