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