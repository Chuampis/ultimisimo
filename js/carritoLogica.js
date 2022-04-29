const carrito = validarStorageCarrito();

function validarStorageCarrito() {
    if (localStorage.getItem('carrito') != null) {
        const storageProductos = JSON.parse(localStorage.getItem('carrito'));
        return storageProductos;
    } else{
        return [];
    }
}

document.getElementById('cantidad-prod').innerHTML = carrito.length;