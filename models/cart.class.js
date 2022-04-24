class Cart {

    items = [];
    sumTotal = 0;
    discountActive = false;

    
    constructor() {
        this.renderCart();
        this.renderItemsCountInCart();
        this.showEmptyCartTemplate();
    }


    addItemToCart(item) {
        if (!this.isProductInCart(item)) {
            this.items.push(item);
            this.firstAmount(item);
        } else {
            this.updateAmount(item);
        }
        this.updateCart();
    }


    showEmptyCartTemplate() {
        HTML.showEmptyCartTemplate();
        HTML.hide('btn');
        document.querySelector('.sum-info').classList.add('hide');
    }


    isProductInCart(arr) {
        return this.items.some(el => el.id == arr.id);
    }


    firstAmount(item) {
        this.items.find(el => el.id == item.id).amount = 1;
    }


    updateAmount(item) {
        this.items.find(el => el.id == item.id).amount++
    }


    calcTotalSum() {
        this.sumTotal = this.items.reduce((acc, el) => acc + el.amount * el.price, 0);
    }


    renderTotalSum() {
        if (!this.discountActive) {
            HTML.$id('total', Format.currency(this.sumTotal, ' €'));
        } else {
            HTML.$id('total',Format.currency(this.sumTotal, ' €'));
            this.discountPrice();
        }
        this.resetCart();
    }


    discountPrice() {
        this.discountActive = true;
        this.updateDiscountPrice();
    }


    updateDiscountPrice() {
        let sumTotal = Math.floor(this.sumTotal - (this.sumTotal * 25 / 100));
        this.updateDiscountDomElements(sumTotal);
    }


    updateDiscountDomElements(sumTotal) {
        HTML.$id('discount-price','NEW PRICE: ' + Format.currency(sumTotal, ' €'));
        HTML.hide('discount-btn');
        this.crossOutPrice();
        HTML.show('discount-info');
    }


    crossOutPrice() {
        document.getElementById('total-text').classList.add('line-through');
        document.getElementById('total').classList.add('line-through');
    }


    renderCart() {
        if (this.numberOfItemsInCart > 0) {
            HTML.$id('cart', '');
            this.items.forEach((element) => {
                HTML.renderCart(element);
            });
            this.showOrderButton();
            HTML.renderDiscountButton();
            document.querySelector('.sum-info').classList.remove('hide');
        } else {
            this.showEmptyCartTemplate();
        }
    }


    showOrderButton() {
         HTML.show('btn');
    }


    renderItemsCountInCart() {
        if (this.numberOfItemsInCart > 0) {
            HTML.show('items-count-in-cart');
            HTML.$id('items-count-in-cart', this.numberOfItemsInCart);
        } else {
            HTML.hide('items-count-in-cart');
        }
    }


    updateCart() {
        this.renderCart();
        this.calcTotalSum();
        this.renderTotalSum();
        this.renderItemsCountInCart();
    }


    incrementItemInCart(product) {
        this.items.find(el => el.id === product).amount++;
        this.updateCart();
    }


    decrementItemInCart(product) {
        const amount = this.items.find(el => el.id === product).amount--;
        this.removeProductFromCart(product, amount);
        this.updateCart();
    }


    removeProductFromCart(product, amount) {
        const index = this.items.findIndex(el => el.id === product)
        if (amount == 1) return this.items.splice(index, 1);
    }


    resetCart() {
        if (this.numberOfItemsInCart === 0) {
            document.getElementById('total-text').classList.remove('line-through');
            document.getElementById('total').classList.remove('line-through');
            document.getElementById('discount-btn').classList.add('hide');
            document.getElementById('discount-info').classList.add('hide');
        }
    }


    get numberOfItemsInCart() {
        return this.items.length;
    }
}