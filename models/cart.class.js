class Cart {

    items = [];
    sumTotal = 0;
    constructor() {
        this.renderCart();
        this.renderItemsCountInCart();
    }

    addItemToCart(item) {
        if (!this.checkIsItemInCart(item)) {
            this.items.push(item);
            this.firstAmount(item);
        } else {
            this.updateAmount(item);
        }
        this.calcTotalSum();
        this.renderCart();
        this.renderTotalSum();
        this.renderItemsCountInCart();

    }

    checkIsItemInCart(arr) {
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
        HTML.$id('total', this.sumTotal);
    }

    discountPrice() {
        let sumTotal = Math.floor(this.sumTotal - (this.sumTotal * 25 / 100));
        HTML.$id('sum-total', sumTotal);
    }

    renderCart() {
        HTML.$id('cart', '');
        this.items.forEach((element) => {
            HTML.renderCart(element);
        });
    }

    renderItemsCountInCart() {
        if (this.itemsCountInCart > 0) {
            HTML.show('items-count-in-cart');
            HTML.$id('items-count-in-cart', this.itemsCountInCart);
        } else {
            HTML.hide('items-count-in-cart');
        }

    }

    get itemsCountInCart() {
        return this.items.length;
    }
}