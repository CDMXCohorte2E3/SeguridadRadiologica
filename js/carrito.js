/*
// Función boton pop up
window.onload = function () {
    const btnAdd = document.getElementById('btn-orden');
    btnAdd.addEventListener('click', function () {
        new swal({
            icon: 'success',
            title: "ORDEN CREADA",
            text: 'Tu orden ha sido creada, en breve te contactaremos' ,
            position: 'center',
         }).then(okay => {
            if (okay) {
                window.location.href = "./historialPedidos.html";
            }
        });
    })//addEventListener 
}// window.onload


function DeleteRowFunction() {
    // event.target will be the input element.
    var td = event.target.parentNode; 
    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}

//funcion para añadir producto al carrito de compras
// import { anadirCarrito } from './js/productos.js';

*/

// let listaCompras = JSON.parse(window.localStorage.getItem("identificadoresLocalS"));


// Esta función me añade los productos al carrito. Estos productos lo agregué desde productos.html al hacer click en "comprar"
function cargarCompras(){
    
    let tablaCompras = document.getElementById("tablaCompras");
    let compraIndividual = "";

    let listaCompras = JSON.parse(window.localStorage.getItem("identificadoresLocalS"));
    let listaProductos = JSON.parse(window.localStorage.getItem("productosLocalS"));

    listaCompras.forEach(function(compra){

        let fila = `
        <td scope="row" class="productoCarrito"> ${listaProductos[compra.identificador].titulo} </td>
        <td><input type="number" value="1"></td>
        <td style="text-align: center;">

            <button type="button" class="btn btn-outline-danger" value="Delete Row" onclick="eliminarCompra(${compra.identificador})">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 
                        .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 
                        .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z">
                    </path>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1
                         0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 
                         1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z">
                    </path>
                </svg>
                Eliminar
            </button>
        </td> <br>
        `
        compraIndividual += fila;

    }) // Fin de forEach

    tablaCompras.innerHTML = compraIndividual;

}
cargarCompras();