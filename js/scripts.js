// CREO ARRAY PRODUCTOS
const productos = [
    { id: 0, categoria: 'Calzado', titulo: 'Alpargatas Animal Print', precio: 2200, stock: 0, img: "/assets/images/tienda/img001.jpg" },
    { id: 1, categoria: 'Calzado', titulo: 'Alpargatas Azul', precio: 1750, stock: 10, img: "/assets/images/tienda/img002.jpg" },
    { id: 2, categoria: 'Cuchillos', titulo: 'Cuchillo Criollo', precio: 1400, stock: 5, img: "/assets/images/tienda/img003.jpg" },
    { id: 3, categoria: 'Cuchillos', titulo: 'Cuchillo La Mission', precio: 800, stock: 20, img: "/assets/images/tienda/img004.jpg" },
    { id: 4, categoria: 'Bolsos', titulo: 'Chuna Autobag', precio: 2200, stock: 0, img: "/assets/images/tienda/img005.jpg" },
    { id: 5, categoria: 'Bolsos', titulo: 'Bolso Matero Chuna Amarillo', precio: 2200, stock: 0, img: "/assets/images/tienda/img006.jpg" },
    { id: 6, categoria: 'Mates', titulo: 'Mates Chuna', precio: 2200, stock: 15, img: "/assets/images/tienda/img007.jpg" },
    { id: 7, categoria: 'Mates', titulo: 'Mates Jarrito', precio: 2000, stock: 20, img: "/assets/images/tienda/img008.jpg" },
    { id: 8, categoria: 'Accesorios Calzado', titulo: 'Plantillas Corderito', precio: 200, stock: 0, img: "/assets/images/tienda/img009.jpg" },
    { id: 9, categoria: 'Accesorios Calzado', titulo: 'Plantillas Ortopedicas', precio: 220, stock: 80, img: "/assets/images/tienda/img010.jpg" },
];

const agregarAlCarrito = (idProducto) => {
    const valorDeCantidad = document.getElementById(
        `cantidad-${idProducto}`
    ).value;

    // Buscando el producto a agregar
    const productoAgregado = productos.find(producto => producto.id === idProducto);
    productoAgregado.cantidad = valorDeCantidad;

    // Agregando al carrito
    carrito.push(productoAgregado);

    // Actualizando el storage del carrito
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Actualizando el html
    document.getElementById("cantidad-prod").innerHTML = carrito.length;

    // Agrego Libreria Toastify
    Toastify({
        text: `Agregaste ${productoAgregado.titulo} al carrito` ,
        duration: 1600,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: false,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #8c140b, #dfc8a5)",
        },
        onClick: function(agregarAlCarrito){} // Callback after click
      }).showToast();
    };


    // Captura para ir a Detalle Producto
    const irAlProducto = (idProducto) => {
    // Busca el producto
    const productoQueQuiereVer = productos.find(producto => producto.id === idProducto);

    localStorage.setItem("productoAVer", JSON.stringify(productoQueQuiereVer));
};

generarCards(productos);

function generarCards(productosAMostrar) {
    let acumuladorDeCards = ``;
    productosAMostrar.forEach((elementoDelArray) => {
        acumuladorDeCards += `<div class="col mb-5">
        <div class="card h-100">
            <!-- Sale badge-->
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
                ${(elementoDelArray.stock > 0) ? 'Disponible' : 'Sin stock'}
            </div>
            <!-- Product image-->
            <img class="card-img-top" src="${elementoDelArray.img}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${elementoDelArray.titulo}</h5>
                    <!-- Product price-->
                    <span class="text-muted text-decoration-line-through">$20.00</span>
                    <input value="1" min="1" id="cantidad-${elementoDelArray.id}" type="number" placeholder="cantidad">
                    $${elementoDelArray.precio}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" >
                <div class="text-center">
                    <button 
                        onclick="agregarAlCarrito(${elementoDelArray.id})"
                        class="btn btn mt-auto" href="#">
                        Agregar al Carrito
                    </button>
                    <a 
                        onclick="irAlProducto(${elementoDelArray.id})"
                        class="btn btn mt-auto" href="detalle.html">
                        Detalle Producto
                    </a>
                </div>
            </div>
        </div>
    </div>`;
    });
    mostrarCardsEnElHTML(acumuladorDeCards);
}

function mostrarCardsEnElHTML(cards) {
    document.getElementById("listado-productos").innerHTML = cards;
};

// LOGIN //
function userName(event) {
    event.target.style.backgroundColor = '#dfc8a5';
    const valorDelInput = event.target.value;
    if (valorDelInput === "") {
        event.target.style.backgroundColor = "#8c140b"
    } else {
        event.target.style.backgroundColor = "#dfc8a5"
    }
}
function password(event) {
    event.target.style.backgroundColor = '#dfc8a5';
    const valorDelInput = event.target.value;
    if (valorDelInput.length < 8) {
        event.target.style.backgroundColor = "#8c140b"
    } else {
        event.target.style.backgroundColor = "#dfc8a5"
    }
}

// BUSCADOR DE PRODUCTOS //
const buscaProductos = document.querySelector('#buscaProductos');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado')

const filtrar = () => {
    resultado.innerHTML = '';

    const texto = buscaProductos.value.toLowerCase();

    for (let elementoDelArray of productos) {
        let titulo = elementoDelArray.titulo.toLowerCase();
        if (titulo.indexOf(texto) !== -1) {
            resultado.innerHTML += `
    <ul>
    <li>${elementoDelArray.titulo}</li>
    <li>$${elementoDelArray.precio}</li>
    </ul>`
        }
    }
    if (resultado.innerHTML === '') {
        resultado.innerHTML += `
    <li>Producto No Encontrado</li>
    `
    }
}

boton.addEventListener('click', filtrar)
buscaProductos.addEventListener('keyup', filtrar)
// FIN BUSCADOR