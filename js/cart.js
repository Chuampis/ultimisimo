// Llamo la funcion que genera los items del carrito    

itemsGeneradas(carrito);

/////////////////// DECLARO LAS FUNCIONES ////////////////

// Función creadora del HTML de los items de la página de carrito.

function itemsGeneradas(itemsAMostrar) {
    let acumuladorItems = ``;
    itemsAMostrar.forEach(producto => {
        acumuladorItems += `<!-- Comienzo descripción producto -->
        <tr>
            <td data-th="Product">
                <div class="row">
                    <div class="col-md-3 text-left">
                        <img src="${producto.img}" alt=""
                            class="img-fluid d-none d-md-block rounded mb-2 shadow ">
                    </div>
                    <div class="col-md-9 text-left mt-sm-2">
                        <h4>${producto.titulo}</h4>
                    </div>
                </div>
            </td>
            <td data-th="Price">$ ${producto.precio}</td>
            <td data-th="Quantity">
            <span class="badge bg-dark text-white ms-1 rounded-pill" id="cantidad-producto">${producto.cantidad}</span>
            </td>
            <td class="actions" data-th="">
                <div class="text-right">

                    <button onclick="agregarAlCarrito(${producto.id}) ; actualizarCantidad(${producto.id})" class="btn btn-white border-primary bg-white btn-md mb-2">
                        <i class="bi bi-plus h3"></i>
                    </button>

                    <button onclick="reducirCarrito(${producto.id}) ; actualizarCantidad(${producto.id})" class="btn btn-white border-secondary bg-white btn-md mb-2">
                        <i class="bi bi-dash h3"></i>
                    </button>

                    <button onclick="quitarCarrito(${producto.id}) ; actualizarCantidad(${producto.id})" class="btn btn-white border-secondary bg-white btn-md mb-2">
                        <i class="bi bi-trash h3"></i>
                    </button>

                </div>
            </td>
        </tr>

        <!-- Fin descripción producto -->`
    })
    agregarItemsEnHTML(acumuladorItems);
    
}

// Función que inserta el contenido de los items del carrito en el HTML
function agregarItemsEnHTML(items) {
    document.getElementById("items-carrito").innerHTML = items;
};

  // Fetch de precio del dólar para el carrito.
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then(response => response.json())
    .then(data => document.getElementById("dolar-blue").innerHTML = (data[1].casa.venta));
