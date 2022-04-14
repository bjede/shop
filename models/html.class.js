class HTML {

    static renderProductCard(product, index) {
        return document.getElementById('products').innerHTML += `
        <div class="col-12 col-sm-6 col-4 col-lg-4 mb-4">
            <div onclick="shop.addItem(${index})" class="card">
                <div class="img-container">
                    <img src="${product.image}" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" onclick="event.preventDefault()" class="btn btn-primary">Go somewhere</a>
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
            <div>
            ${obj.amount}  ${obj.title}  ${obj.price.toFixed(2).replace('.',',')}
            </div>
        `;
    }


}