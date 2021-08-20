// Esto añade al local storage las key-values
if( window.localStorage.getItem("productosLocalS") == null ){
  let prueba = [
    {
      "imagen": "../img/products/img-product_1.jpg",
      "titulo": "Mandil emplomado económico",
      "marca": "Marca Slim Royal",
      "modelo": "E6995",
      "precio": "$2904.90",
      "descripcion" : "0.5mm de plomo|66x95 cm|Con bolsillo|Acabado textil",
      "id": "1"
    },
    {
      "imagen": "../img/products/img-product_2.jpg",
      "titulo": "Mandil emplomado estándar",
      "marca": "Marca Slim Royal",
      "modelo": "S6995",
      "precio": "$3646.65",
      "descripcion" : "0.5mm de plomo|66x95 cm|Con bolsillo|Acabado plástico",
      "id": "2"
    },
    {
      "imagen": "../img/products/img-product_3.jpg",
      "titulo": "Faldón emplomado",
      "marca": "Marca Slim Royale",
      "modelo": "SQUARE",
      "precio": "$1443.25",
      "descripcion" : "0.5mm de plomo,40x40 cm|Tipo falda",
      "id": "3"
    },
    {
      "imagen": "../img/products/img-product_4.jpg",
      "titulo": "Lentes emplomados",
      "marca": "Marca Slim Royale",
      "modelo": "SS-53",
      "precio": "$2873.71",
      "descripcion" : "0.55mm de plomo|Con estuche",
      "id": "4"
    },
    {
      "imagen": "../img/products/img-product_5.jpg",
      "titulo": "Lentes emplomados",
      "marca": "Marca Slim Royale",
      "modelo": "S-53",
      "precio": "$3403.08",
      "descripcion" : "0.5mm de plomo|Con estuche",
      "id": "5"
    },
    {
      "imagen": "../img/products/img-product_6.jpg",
      "titulo": "Googles emplomados",
      "marca": "Marca Slim Royale",
      "modelo": "GOOGLE-HO",
      "precio": "$6344.55",
      "descripcion" : "0.5mm de plomo|Con bolsa de tela",
      "id": "6"
    },
    {
      "imagen": "../img/products/img-product_7.jpg",
      "titulo": "Guantes emplomados",
      "marca": "Marca Slim Royale",
      "modelo": "100 M/L",
      "precio": "$2,911.80",
      "descripcion" : "0.5mm de plomo|350mm de largo|Tamaño mediano o grande",
      "id": "7"
    },
    {
      "imagen": "../img/products/img-product_8.jpg",
      "titulo": "Guantes emplomados",
      "marca": "Marca Shielding",
      "modelo": "XR47",
      "precio": "$2,637.53",
      "descripcion" : "RADIAXON|Equivalente a 0.5mm|de plomo|Tamaño mediano o grande",
      "id": "8"
    },
    {
      "imagen": "../img/products/img-product_9.jpg",
      "titulo": "Collarín emplomado",
      "marca": "Marca Slim Royale",
      "modelo": "STANDAR-O5",
      "precio": "$767.96",
      "descripcion" : "0.5mm de plomo",
      "id": "9"
    },
    {
      "imagen": "../img/products/img-product_10.jpg",
      "titulo": "Collarín emplomado de lujo",
      "marca": "Marca Slim Royale",
      "modelo": "DELUX-O5",
      "precio": "$1,045.49",
      "descripcion" : "0.5mm de plomo",
      "id": "10"
    },
    {
      "imagen": "../img/products/img-product_11.jpg",
      "titulo": "Protectores de gónadas",
      "marca": "Marca Slim Royale",
      "modelo": "S806A",
      "precio": "$1,618.35",
      "descripcion" : "0.5mm de plomo,Juego de 3 piezas:|Grande mediano y chico",
      "id": "11"
    },
    {
      "imagen": "../img/products/img-product_12.jpg",
      "titulo": "Protectores de gónadas",
      "marca": "Marca Slim Royale",
      "modelo": "S806 M/L",
      "precio": "$635.24",
      "descripcion" : "0.5mm de plomo|Una pieza|Tamaño mediano o grande",
      "id": "12"
    }
  ]
  window.localStorage.setItem('productosLocalS',JSON.stringify(prueba))
} // fin de añadir a local storage 

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
              <h6 class="card-subtitle text-muted text-center">${producto.precio}</h6> 
              <p class="card-text"> 
                  <ul style="list-style-position: inside;" id="lista-desor_${producto.id}"> 
                  </ul> 
              </p> 
              <div class="button text-center">      

              <!-- Inicio del modal -->
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalEditarProducto${producto.id}"> Editar
              </button>
              <div class="modal fade" id="modalEditarProducto${producto.id}" tabindex="-1" aria-labelledby="modal-Panel-Edicion" aria-hidden="true">
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

                  <!-- Inicia el form -->                
                  <form action="#" id="act-needs-validation${producto.id}" style="margin-bottom: 20px;" method="POST" novalidate>
                      <!--Formulario de edición-->
                      <div class="form-group">
                          <label for="validationCustom01">Nuevo nombre del producto: </label>
                          <input value="${producto.titulo}" type="text" name="product" class="form-control" id="actualizarNombre${producto.id}" maxlength="31"
                              required>
                          <div class="invalid-feedback">
                              <!--div de leyenda para validación, controla la leyenda con el invalid/valid-->
                              Nombre válido es requerido
                          </div>
                      </div>
                      <div class="form-group">
                          <label for="validationCustom01">Marca:</label>
                          <input value="${producto.marca}" type="text" name="marca" class="form-control" id="actualizarMarca${producto.id}" maxlength="31"
                              required>
                          <div class="invalid-feedback">
                              <!--div de leyenda para validación, controla la leyenda con el invalid/valid-->
                              Marca válida es requerida
                          </div>
                      </div>

                      <div class="form-group">

                                <label for="validationCustom01">Precio: </label>
                                <input value="${producto.precio}" type="text" name="precio" class="form-control" id="actualizarPrecio${producto.id}" maxlength="31"
                                    required>

                                <div class="invalid-feedback">
                                    <!--div de leyenda para validación, controla la leyenda con el invalid/valid-->
                                    Precio válido es requerido
                                </div>
                      </div>


                      <div class="form-group">
                          <label for="validationCustom01">Modelo: </label>
                          <input value="${producto.modelo}" type="text" name="model" class="form-control" id="actualizarModelo${producto.id}" maxlength="31"
                              required>
                          <div class="invalid-feedback">
                              <!--div de leyenda para validación, controla la leyenda con el invalid/valid-->
                              Modelo válido es requerido
                          </div>
                      </div>
                      <div class="form-group">
                          <label for="image">Selecciona una imagen (.jpeg,.jpg,.png)</label>
                          <input type="file" class="form-control-file" name="image" id="image" accept=".jpeg,.jpg,.png">
                          <!-- <input value="${producto.imagen}" type="file" class="form-control-file" name="image" id="image" accept=".jpeg,.jpg,.png" onchange="ValidarTamaño(this);"> -->
                      </div>
                      <div class="form-group">
                          <label for="validationCustom01">Descripción: </label>
                          <textarea class="form-control" name="description" id="actualizarDescripcion${producto.id}" rows="3"
                              maxlength="280" placeholder="Detalle 1 | Detalle 2 | Detalle 3 | Detalle 4">${producto.descripcion}</textarea>
                      </div>
                  </form>
                  <!--Fin de formulario de edición-->


              </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal"> Cancelar </button>
                    <button id="submit_${producto.id}" type="submit" class="btn btn-primary"> Guardar cambios </button>
                  </div>
                </div>
              </div>
            </div>
              </div>   
          </div> <!--card-body--> 
      </div><!--card--> 
      </div>`

        plantilla += card;

    }) // Fin del forEach

    ancla.innerHTML = plantilla;


    productos.forEach(function(producto){
      let tempform = document.getElementById("submit_" + producto.id);
      tempform.addEventListener('click',validateFormS);

    });

} //Fin del anadirProducto


//Función de validación para cada producto

function validateFormS(e){
  
  e.preventDefault();
  let numProductos = e.target.id.split("_")[1]; //trae el id del producto

  validateForm2(numProductos);

}
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
}// fin de  listaElementos

listaElementos(almacenLocal);
// Función para editar productos desde el panel de admin

//Validación del formulario
let form2 = document.getElementById('act-needs-validation');


let valid2 = 0;
function validateForm2(n){//validateForm
    
    let inputProduct = document.getElementById(`actualizarNombre${n}`);
    let inputMarca = document.getElementById(`actualizarMarca${n}`);
    let inputPrice = document.getElementById(`actualizarPrecio${n}`);
    let inputModel = document.getElementById(`actualizarModelo${n}`);
    let inputDescription = document.getElementById(`actualizarDescripcion${n}`);
    let inputImage = document.getElementById('image');

    function validateName(nombre){//validateName
      //let expReg= /^[A-Z]+$/;
      let expReg = new RegExp(/^[-a-zA-Z-á-ú-0-9. ]+$/)  
      let esValido = expReg.test(nombre);
      if(esValido == true){//if nombre
          inputProduct.classList.remove('is-invalid')
          inputProduct.classList.add('is-valid')
          return valid2 ++;
        }else{
          inputProduct.classList.add('is-invalid')
      }//if nombre
    }//validateName
    
    validateName(inputProduct.value)
    
    function validateMarca(marca){//validateMarca
      let expReg = new RegExp(/^[-a-zA-Z-á-ú-0-9. ]+$/)
      let esValido2 = expReg.test(marca);      
      if(esValido2 == true){//if Marca
          inputMarca.classList.remove('is-invalid')
          inputMarca.classList.add('is-valid')          
          return valid2 ++;
        }else{
          inputMarca.classList.add('is-invalid')          
      }//if Marca
    }//validateMarca
    
    validateMarca(inputMarca.value)

    function validatePrice(price){//validateModel
      //let expReg= /^[A-Z]+$/;
      let expReg = new RegExp(/^[-a-zA-Z-á-ú-0-9. ]+$/)
      let esValido3 = expReg.test(price);      
      if(esValido3 == true){//if Price
          inputPrice.classList.remove('is-invalid')
          inputPrice.classList.add('is-valid')          
          return valid2 ++;
        }else{
          inputPrice.classList.add('is-invalid')          
      }//if Price
    }//validatePrice
    validatePrice(inputPrice.value)

    function validateModel(model){//validateModel
      //let expReg= /^[A-Z]+$/;
      let expReg = new RegExp(/^[-a-zA-Z-á-ú-0-9. ]+$/)
      let esValido4 = expReg.test(model);      
      if(esValido4 == true){//if Model
          inputModel.classList.remove('is-invalid')
          inputModel.classList.add('is-valid')          
          return valid2 ++;
        }else{
          inputModel.classList.add('is-invalid')          
      }//if Model
    }//validateModel
    
    validateModel(inputModel.value)
    
    function validateDescription(description){//validateDescription
      //let expReg= /^[A-Z]+$/;
      let expReg = new RegExp(/^[-a-zA-Z-á-ú-0-9.,| ]+$/)
      let esValido5 = expReg.test(description);      
      if(esValido5 == true){//if Description
          inputDescription.classList.remove('is-invalid')
          inputDescription.classList.add('is-valid')          
          return valid2 ++;
        }else{
          inputDescription.classList.add('is-invalid')          
      }//if Description
    }//validateDescription

    validateDescription(inputDescription.value)

    if (valid2==5){      
      guardarCambios(n);
      window.location.reload()
    }
    return valid2 = 0;
}//validateForm



function guardarCambios(id){
  
  let variableLS = JSON.parse(window.localStorage.getItem("productosLocalS"))

  variableLS[id - 1].titulo = document.getElementById("actualizarNombre" + id).value;
  variableLS[id - 1].marca =  document.getElementById("actualizarMarca" + id).value;
  variableLS[id - 1].marca =  document.getElementById("actualizarPrecio" + id).value;
  variableLS[id - 1].modelo = document.getElementById("actualizarModelo" + id).value;
  variableLS[id - 1].descripcion = document.getElementById("actualizarDescripcion" + id).value


  window.localStorage.setItem("productosLocalS",JSON.stringify(variableLS)) // Reenvío la información a la base de datos
  window.location.reload()

}  
// Aquí termina el bloque de funciones para editar los productos 