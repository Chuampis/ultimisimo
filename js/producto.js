const verCard = JSON.parse(localStorage.getItem('productoAVer'))

function mostrarElProducto(card) {

    document.getElementById('showProducto').innerHTML = `
    <div class="row gx-4 gx-lg-5 align-items-center">
    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="${card.img}" alt="..." /></div>
    <div class="col-md-6">
        <div class="medium mb-1">Stock disponible ${card.stock}</div>
        <h1 class="display-5 fw-bolder">${card.titulo}</h1>
        <div class="fs-5 mb-5">
            <span class="text-decoration-line-through">$45.00</span>
            <span>$${card.precio}</span>
        </div>
        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
        <div id=stock${card.id} class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
        <div class="d-flex">
            <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style="max-width: 3rem" />
            <button class="btn btn-outline-dark flex-shrink-0" type="button">
                <i class="bi-cart-fill me-1"></i>
                Add to cart
            </button>
        </div>
    </div>
</div>
</div>
`
}
mostrarElProducto(verCard)

/*

const verCard = JSON.parse(localStorage.getItem('productoAVer'))

function mostrarElProducto(card) {
    const containerCard = document.getElementById('showProducto')
    let verProducto = document.createElement('div')
    console.log(verCard )
    verProducto.className = 'card'
    verProducto.innerHTML = `
    <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="${card.img}" alt="..." /></div>
                    <div class="col-md-6">
                        <div class="small mb-1">SKU: BST-498</div>
                        <h1 class="display-5 fw-bolder">${card.titulo}</h1>
                        <div class="fs-5 mb-5">
                            <span class="text-decoration-line-through">$45.00</span>
                            <span>$${card.precio}</span>
                        </div>
                        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                        <div id=stock${card.id} class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                        <div class="d-flex">
                            <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style="max-width: 3rem" />
                            <button class="btn btn-outline-dark flex-shrink-0" type="button">
                                <i class="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    `
    console.log(verProducto)
    containerCard.appendChild(card)
}
mostrarElProducto(verCard)
*/