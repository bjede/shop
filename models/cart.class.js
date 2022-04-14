class Cart {

    items = [];
    sumTotal = 0;
    constructor() {
        this.renderCart();
    }

    addItemToCart(item) {
        if(!this.checkIsItemInCart(item)){
            this.items.push(item);
            this.firstAmount(item);
        }else{
            this.updateAmount(item);
        }
        this.calcTotalSum();
        this.renderCart();
        this.renderTotalSum();
    }

    checkIsItemInCart(arr){
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
}