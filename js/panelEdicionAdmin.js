//Validación del formulario
let form = document.getElementById('needs-validation');
//Editar las clases
//Traer el elemento al cual quiero hacer document.getEle
//1. Leyendo el listado actual de clases elemento.classList
//2. Agrego un estilo elemento.classList.add('nuevaClase')
//3. Elemento elemento.value
let valid = 0;
function validateForm(e){//validateForm
    //No ejecutes
    e.preventDefault();
    let inputProduct = document.getElementById('product');
    let inputMarca = document.getElementById('marca');
    let inputModel = document.getElementById('model');
    let inputDescription = document.getElementById('description');
    let inputImage = document.getElementById('image');

    console.log(typeof(inputProduct.value))
    //let inputZipcode = document.getElementById('zipCode')
    
    //console.log(inputNombre.value)
    console.log(inputProduct.classList)

    function validateName(nombre){//validateName
      //let expReg= /^[A-Z]+$/;
      let expReg = new RegExp(/^[-a-zA-Z-á-ú-0-9. ]+$/)  
      let esValido = expReg.test(nombre);
      console.log(esValido);
      if(esValido == true){//if nombre
          inputProduct.classList.remove('is-invalid')
          inputProduct.classList.add('is-valid')
          console.log('Hey si es mayor a =0')
          return valid ++;
        }else{
          inputProduct.classList.add('is-invalid')
          console.log('Esta vacío intenta nuevamente');
      }//if nombre
    }//validateName
    
    validateName(inputProduct.value)
    
    function validateMarca(marca){//validateMarca
      //let expReg= /^[A-Z]+$/;
      let expReg = new RegExp(/^[-a-zA-Z-á-ú-0-9. ]+$/)
      let esValido2 = expReg.test(marca);
      console.log(esValido2);
      if(esValido2 == true){//if Marca
          inputMarca.classList.remove('is-invalid')
          inputMarca.classList.add('is-valid')
          console.log('Hey si es mayor a =0')
          return valid ++;
        }else{
          inputMarca.classList.add('is-invalid')
          console.log('Esta vacío intenta nuevamente');
      }//if Marca
    }//validateMarca
    
    validateMarca(inputMarca.value)

    function validateModel(model){//validateModel
      //let expReg= /^[A-Z]+$/;
      let expReg = new RegExp(/^[-a-zA-Z-á-ú-0-9. ]+$/)
      let esValido3 = expReg.test(model);
      console.log(esValido3);
      if(esValido3 == true){//if Model
          inputModel.classList.remove('is-invalid')
          inputModel.classList.add('is-valid')
          console.log('Hey si es mayor a =0')
          return valid ++;
        }else{
          inputModel.classList.add('is-invalid')
          console.log('Esta vacío intenta nuevamente');
      }//if Model
    }//validateModel
    
    validateModel(inputModel.value)
    
    // if(inputPrice.value.length > 0){//if price
        
    //         inputPrice.classList.remove('is-invalid')
    //         inputPrice.classList.add('is-valid') 
    //         valid++;
    // }else{
    //   inputPrice.classList.add('is-invalid')
    // }//if price


    // function ValidarTamaño(obj){
    //   var uploadFile = obj.files[0];
     
    //   var img = new Image();
    //   img.onload = function (){
    //       if (this.width.toFixed(0) != 413 && this.height.toFixed(0) != 531){
    //             alert("La imagen debe ser de tamaño 413px por 531px.");
    //             $('#foto').val("");
    //       }
          
    //       };
    //   img.src = URL.createObjectURL(uploadFile);
    //   }

    // function validateImage(image){
    //   let uploadFile = image.files[0];
    //   let img = new Imagen();
    //   img.onload
    // }//ValidateImage

    function validateDescription(description){//validateDescription
      //let expReg= /^[A-Z]+$/;
      let expReg = new RegExp(/^[-a-zA-Z-á-ú-0-9.| ]+$/)
      let esValido4 = expReg.test(description);
      console.log(esValido4);
      if(esValido4 == true){//if Description
          inputDescription.classList.remove('is-invalid')
          inputDescription.classList.add('is-valid')
          console.log('Hey si es mayor a =0')
          return valid ++;
        }else{
          inputDescription.classList.add('is-invalid')
          console.log('Esta vacío intenta nuevamente');
      }//if Description
    }//validateDescription

    validateDescription(inputDescription.value)

    if (valid==4){
      console.log('Done');
      nuevoProducto();
      window.location.reload()
    }
    return valid = 0;
}//validateForm

//Eventos

form.addEventListener('submit',validateForm)

// Función para agregar un producto nuevo...

function nuevoProducto(evento){
  
  console.log(valid);
  //evento.preventDefault()
  let inputProduct = document.getElementById('product').value;
  let inputMarca = document.getElementById('marca').value;
  let inputModel = document.getElementById('model').value;
  let inputDescription = document.getElementById('description').value;
  let inputImage = document.getElementById('image').value;

  let traerLocalStorage = JSON.parse(window.localStorage.getItem("productosLocalS")) // Me traigo la base de datos

  // Aquí se "hace JSON" los valores que puso el admin en añadir producto
  const caracteristicasProducto = {
    "imagen": inputImage,
    "titulo" : inputProduct, 
    "marca": inputMarca,
    "modelo" : inputModel,
    "descripcion" : inputDescription,
    "id" : traerLocalStorage.length + 1 // valor de prueba
  }

  console.log(traerLocalStorage) // La veo en consola para tener una referencia
  traerLocalStorage.push(caracteristicasProducto) // Como la base es un array, le hago push
  console.log(traerLocalStorage) // La veo y comparo
  window.localStorage.setItem("productosLocalS",JSON.stringify(traerLocalStorage)) // Reenvío la información a la base de datos

}