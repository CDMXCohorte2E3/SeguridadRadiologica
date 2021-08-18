// Esto añade al local storage las key-values
if( window.localStorage.getItem("productosLocalS") == null ){
  let prueba = [
    {
      "imagen": "../img/products/img-product_1.jpg",
      "titulo": "Mandil emplomado económico",
      "marca": "Marca Slim Royal",
      "modelo": "E6995",
      "descripcion" : "0.5mm de plomo|66x95 cm|Con bolsillo|Acabado textil",
      "id": "1",
      "habilitado": "true"
    },
    {
      "imagen": "../img/products/img-product_2.jpg",
      "titulo": "Mandil emplomado estándar",
      "marca": "Marca Slim Royal",
      "modelo": "S6995",
      "descripcion" : "0.5mm de plomo|66x95 cm|Con bolsillo|Acabado plástico",
      "id": "2",
      "habilitado": "true"
    },
    {
      "imagen": "../img/products/img-product_3.jpg",
      "titulo": "Faldón emplomado",
      "marca": "Marca Slim Royale",
      "modelo": "SQUARE",
      "descripcion" : "0.5mm de plomo,40x40 cm|Tipo falda",
      "id": "3",
      "habilitado": "true"
    },
    {
      "imagen": "../img/products/img-product_4.jpg",
      "titulo": "Lentes emplomados",
      "marca": "Marca Slim Royale",
      "modelo": "SS-53",
      "descripcion" : "0.55mm de plomo|Con estuche",
      "id": "4",
      "habilitado": "true"
    },
    {
      "imagen": "../img/products/img-product_5.jpg",
      "titulo": "Lentes emplomados",
      "marca": "Marca Slim Royale",
      "modelo": "S-53",
      "descripcion" : "0.5mm de plomo|Con estuche",
      "id": "5",
      "habilitado": "true"
    },
    {
      "imagen": "../img/products/img-product_6.jpg",
      "titulo": "Googles emplomados",
      "marca": "Marca Slim Royale",
      "modelo": "GOOGLE-HO",
      "descripcion" : "0.5mm de plomo|Con bolsa de tela",
      "id": "6",
      "habilitado": "true"
    },
    {
      "imagen": "../img/products/img-product_7.jpg",
      "titulo": "Guantes emplomados",
      "marca": "Marca Slim Royale",
      "modelo": "100 M/L",
      "descripcion" : "0.5mm de plomo|350mm de largo|Tamaño mediano o grande",
      "id": "7",
      "habilitado": "true"
    },
    {
      "imagen": "../img/products/img-product_8.jpg",
      "titulo": "Guantes emplomados",
      "marca": "Marca Shielding",
      "modelo": "XR47",
      "descripcion" : "RADIAXON|Equivalente a 0.5mm|de plomo|Tamaño mediano o grande",
      "id": "8",
      "habilitado": "true"
    },
    {
      "imagen": "../img/products/img-product_9.jpg",
      "titulo": "Collarín emplomado",
      "marca": "Marca Slim Royale",
      "modelo": "STANDAR-O5",
      "descripcion" : "0.5mm de plomo",
      "id": "9",
      "habilitado": "true"
    },
    {
      "imagen": "../img/products/img-product_10.jpg",
      "titulo": "Collarín emplomado de lujo",
      "marca": "Marca Slim Royale",
      "modelo": "DELUX-O5",
      "descripcion" : "0.5mm de plomo",
      "id": "10",
      "habilitado": "true"
    },
    {
      "imagen": "../img/products/img-product_11.jpg",
      "titulo": "Protectores de gónadas",
      "marca": "Marca Slim Royale",
      "modelo": "S806A",
      "descripcion" : "0.5mm de plomo,Juego de 3 piezas:|Grande mediano y chico",
      "id": "11",
      "habilitado": "true"
    },
    {
      "imagen": "../img/products/img-product_12.jpg",
      "titulo": "Protectores de gónadas",
      "marca": "Marca Slim Royale",
      "modelo": "S806 M/L",
      "descripcion" : "0.5mm de plomo|Una pieza|Tamaño mediano o grande",
      "id": "12",
      "habilitado": "true"
    }
  ]
  window.localStorage.setItem('productosLocalS',JSON.stringify(prueba))
}  // fin de añadir a local storage 

// Cambio a uso del local storage para trabajar con el JSON

let almacenLocal = JSON.parse(window.localStorage.getItem("productosLocalS")) // Extraje la información que almacené en local storage


function anadirProducto(productos){

    const ancla = document.getElementById("productos");
    let plantilla = "";
    
    productos.forEach(function(producto){

        let card = `
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 div-centered" style="margin-top:100px;">
        <div class="card"> 
        <img src="${producto.imagen}" class="card-img-top" alt="..."> 
            <div class="card-body"> 
                <h4 class="card-title text-center">${producto.titulo}</h4> 
                <h6 class="card-subtitle mb-2 text-muted text-center">${producto.marca}</h6> 
                <h6 class="card-subtitle mb-2 text-muted text-center">${producto.modelo}</h6> 
                <p class="card-text"> 
                    <ul style="list-style-position: inside;" id="lista-desor_${producto.id}"> 

                    </ul> 
                </p> 
                <div class="button text-center">      

                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal${producto.id}"> Editar
                </button>

                <div class="modal fade" id="exampleModal${producto.id}" tabindex="-1" aria-labelledby="modal-Panel-Edicion" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="modal-Panel-Edicion"> Edición de ${producto.titulo} </h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    <div class="adminForm">

                    <h4>Panel de edición</h4>

                    <form action="#" id="act-needs-validation" style="margin-bottom: 20px;" method="POST" novalidate>
                        <!--Formulario de edición-->
                        <div class="form-group">

                            <label for="validationCustom01">Nuevo nombre del producto: </label>
                            <input type="text" name="product" class="form-control" id="actualizarNombre${producto.id}" maxlength="31"
                                required>

                            <div class="invalid-feedback">
                                <!--div de leyenda para validación, controla la leyenda con el invalid/valid-->
                                Nombre válido es requerido
                            </div>
                        </div>

                        <div class="form-group">

                            <label for="validationCustom01">Marca:</label>
                            <input type="text" name="marca" class="form-control" id="actualizarMarca${producto.id}" maxlength="31"
                                required>

                            <div class="invalid-feedback">
                                <!--div de leyenda para validación, controla la leyenda con el invalid/valid-->
                                Marca válida es requerida
                            </div>
                        </div>


                        <div class="form-group">

                            <label for="validationCustom01">Modelo: </label>
                            <input type="text" name="model" class="form-control" id="actualizarModelo${producto.id}" maxlength="31"
                                required>

                            <div class="invalid-feedback">
                                <!--div de leyenda para validación, controla la leyenda con el invalid/valid-->
                                Modelo válido es requerido
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="image">Selecciona una imagen (.jpeg,.jpg,.png)</label>
                            <input type="file" class="form-control-file" name="image" id="image" accept=".jpeg,.jpg,.png">
                            <!-- <input type="file" class="form-control-file" name="image" id="image" accept=".jpeg,.jpg,.png" onchange="ValidarTamaño(this);"> -->

                        </div>


                        <div class="form-group">
                            <label for="validationCustom01">Descripción: </label>
                            <textarea class="form-control" name="description" id="actualizarDescripcion${producto.id}" rows="3"
                                maxlength="280" placeholder="Detalle 1 | Detalle 2 | Detalle 3 | Detalle 4"></textarea>
                        </div>

                    </form>
                    <!--Formulario de edición-->
                </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal"> Cancelar </button>
                      <button onclick="guardarCambios(${producto.id})" type="button" class="btn btn-primary"> Guardar cambios </button>


                    </div>
                  </div>
                </div>
              </div>

                </div>   
            </div> <!--card-body--> 
        </div><!--card--> 
        </div>`
        if( producto.habilitado == "true" ){
        plantilla += card;
        }

    }) // Fin del forEach

    ancla.innerHTML = plantilla;

} //Fin del anadirProducto
anadirProducto(almacenLocal);

function listaElementos(json){
  let descr,spl,myDiv;
  for( i = 0 ; i < json.length ; i++ ){
    let descr = json[i].descripcion;
    let spl = descr.split("|"); 
    let myDiv = document.getElementById("lista-desor_" + json[i].id);
  
  for (let j = 0; j < 4; j++) { 
    if (j < spl.length){         
      myDiv.innerHTML +="<li>"+ spl[j] + "</li>";     
    } else {         
      myDiv.innerHTML +="<br/>"
    }// else       
  }//for j
}// for i
}//fin de listaElementos
listaElementos(almacenLocal);


// -------------------------------------------       Aquí inicio el intento de editar productos desde el panel de admin

function guardarCambios(id_producto_a_editar){
  
  let variableLS = JSON.parse(window.localStorage.getItem("productosLocalS"))

  variableLS[id_producto_a_editar - 1].titulo = document.getElementById("actualizarNombre" + id_producto_a_editar).value;
  variableLS[id_producto_a_editar - 1].marca =  document.getElementById("actualizarMarca" + id_producto_a_editar).value;
  variableLS[id_producto_a_editar - 1].modelo = document.getElementById("actualizarModelo" + id_producto_a_editar).value;
  variableLS[id_producto_a_editar - 1].descripcion = document.getElementById("actualizarDescripcion" + id_producto_a_editar).value

  window.localStorage.setItem("productosLocalS",JSON.stringify(variableLS)) // Reenvío la información a la base de datos
  window.location.reload()

}  
// Aquí termina el bloque de funciones para editar los productos 