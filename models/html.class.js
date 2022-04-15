class HTML {

    static renderProductCard(product, index) {
        return document.getElementById('products').innerHTML += `
        <div class="col-12 col-sm-6 col-4 col-lg-4 mb-4">
            <div onclick="shop.addItem(${index})" class="card">
                <div class="img-container">
                    <img src="${product.image}" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${Format.shortenText(product.title, 20)}</h5>
                    <p class="card-text">${Format.shortenText(product.description, 80)}</p>
                    <a href="#" onclick="event.preventDefault()" class="btn btn-primary">Add to cart</a>
                </div>
            </div>
        </div>
        `;
    }

    static renderCategoriesHTML(arr, id) {
        arr[0].forEach(element => {
            document.getElementById(`${id}`).innerHTML += `
                <ul>
                    <li onclick="loadProducts('${element}')">${element}</li>
                </ul>
            `;
        });
    }

    static $id(id, argument) {
        return document.getElementById(id).innerHTML = argument;
    }

    static renderCart(obj) {
        document.getElementById('cart').innerHTML += `
                <div class="d-flex justify-content-between">
                    <span class="pe-md-1">${obj.amount}</span>  
                    <span class="me-auto">${Format.shortenText(obj.title, 15)} </span> 
                    <span>${Format.currency(obj.price, '€')}</span>
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