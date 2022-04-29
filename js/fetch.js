const baseProductos = JSON.parse('productos.json')
document.getElementById('calzadoBtn').addEventListener('click', cargarCalzadoJSON);

function cargarCalzadoJSON() {
    fetch('productos.json')
        .then(function(res) {
            console.log(res);
        })
}

