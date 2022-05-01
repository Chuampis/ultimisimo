const verCard = JSON.parse(localStorage.getItem('productoAVer'))

function mostrarElProducto(card) {

    document.getElementById('showProducto').innerHTML = `
    <div class="row gx-4 gx-lg-5 align-items-center">
    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="${card.img}" alt="..." /></div>
    <div class="col-md-6">
        <div class="medium mb-1">Stock disponible ${card.stock}</div>
        <h1 class="display-5 fw-bolder">${card.titulo}</h1>
        <div class="fs-5 mb-5">
            <span>$${card.precio}</span>
        </div>
        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
        <div id=stock${card.id} class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
        <div class="d-flex">
            <button class="btn btn mt-auto" href="./tienda/index.html">
            Volver
        </button>
        </div>
    </div>
</div>
</div>
`
}
mostrarElProducto(verCard)