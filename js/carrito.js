// Función boton pop up
function comprarCart(){
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
}// comprarCart


function DeleteRowFunction() {
    // event.target will be the input element.
    var td = event.target.parentNode; 
    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}

