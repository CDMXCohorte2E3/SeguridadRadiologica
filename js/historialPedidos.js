let date = new Date();
document.getElementById("datetime").innerHTML = (date.toLocaleDateString());

if (window.localStorage.getItem("subtotales") != null) {
    function cargarPedidos() {

        let tablaCompras = document.getElementById("tablaOrdenes");
        let ordenes = "";

        let listaOrdenes = JSON.parse(window.localStorage.getItem("subtotales"));
        let listaProductos = JSON.parse(window.localStorage.getItem("productosLocalS"))


        listaOrdenes.forEach(function (orden) {
        
                let ordenIndividual = `
               <tr>
                <td scope="row"> ${listaProductos[orden.identificador-1].titulo} </td>
                <td> ${orden.subtotal} </td>
                <br>
                </tr>
                `
                ordenes += ordenIndividual;
            
        }) // Fin de forEach

        tablaCompras.innerHTML = ordenes;

    }
    cargarPedidos();
}
