
// Función boton pop up
window.onload = function () {
    const btnAdd = document.getElementById('btn-orden');
    btnAdd.addEventListener('click', function () {
        new swal({
            icon: 'success',
            title: "ORDEN CREADA",
            text: 'Tu orden ha sido creada, en breve te contactaremos' ,
            position: 'center',
            type: "success"
        }).then(okay => {
            if (okay) {
                window.location.href = "./historialPedidos.html";
            }
        });
    })//addEventListener 
}// window.onload
