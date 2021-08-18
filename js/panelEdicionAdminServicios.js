//Validación del formulario
let form = document.getElementById('needs-validation');

let valid = 0;
function validateForm(e){//validateForm
    //No ejecutes
    e.preventDefault();
    let inputNombre = document.getElementById('nombre');
    let inputParrafo = document.getElementById('parrafo');
    let inputParrafo2 = document.getElementById('parrafo2');
    let inputParrafo3 = document.getElementById('parrafo3');
    let inputParrafoRes = document.getElementById('parrafoRes');
    
    function validateName(nombre){//validateName
      //let expReg= /^[A-Z]+$/;
      let expReg = new RegExp(/^[-a-zA-Z-á-ú-0-9. ]+$/)  
      let esValido = expReg.test(nombre);      
      if(esValido == true){//if nombre
          inputNombre.classList.remove('is-invalid')
          inputNombre.classList.add('is-valid')          
          return valid ++;
        }else{
          inputNombre.classList.add('is-invalid')          
      }//if nombre
    }//validateName
    
    validateName(inputNombre.value)
    
    function validateParrafo(parrafo){//validateParrafo
      //let expReg= /^[A-Z]+$/;
      let expReg = new RegExp(/^[-a-zA-Z-á-ú-0-9. ]+$/)
      let esValido2 = expReg.test(parrafo);      
      if(esValido2 == true){//if Marca
          inputParrafo.classList.remove('is-invalid')
          inputParrafo.classList.add('is-valid')          
          return valid ++;
        }else{
          inputParrafo.classList.add('is-invalid')          
      }//if Marca
    }//validateParrafo
    
    validateParrafo(inputParrafo.value)

    if(inputParrafo2.value.length != 0 || inputParrafo2.value.length == 0){//if opcional Parrafo2
      inputParrafo2.classList.remove('is-invalid')
      inputParrafo2.classList.add('is-valid') 
      valid++;
    }else{
      inputParrafo2.classList.add('is-valid')
      valid++;
    }//if opcional Parrafo2

    if(inputParrafo3.value.length != 0 || inputParrafo3.value.length == 0){//if opcional Parrafo3
      inputParrafo3.classList.remove('is-invalid')
      inputParrafo3.classList.add('is-valid') 
      valid++;
    }else{
      inputParrafo3.classList.add('is-valid')
      valid++;
    }//if opcional Parrafo3

    if(inputParrafoRes.value.length != 0 || inputParrafoRes.value.length == 0){//if opcional ParrafoRes
      inputParrafoRes.classList.remove('is-invalid')
      inputParrafoRes.classList.add('is-valid') 
      valid++;
    }else{
      inputParrafoRes.classList.add('is-valid')
      valid++;
    }//if opcional ParrafoRes
    
    if (valid==5){      
      //nuevoProducto();
    }
    return valid = 0;
}//validateForm

//Eventos

form.addEventListener('submit',validateForm)

// Función para agregar un producto nuevo...

function nuevoProducto(evento){
  
  let inputProduct = document.getElementById('product').value;
  let inputMarca = document.getElementById('marca').value;
  let inputModel = document.getElementById('model').value;
  let inputDescription = document.getElementById('description').value;
  let inputImage = document.getElementById('image').value;

  // Aquí se "hace JSON" los valores que puso el admin en añadir producto
  const caracteristicasProducto = {
    "imagen": inputImage,
    "titulo" : inputProduct, 
    "marca": inputMarca,
    "modelo" : inputModel,
    "descripcion" : inputDescription,
    "id" : traerLocalStorage.length + 1
  }

  let traerLocalStorage = JSON.parse(window.localStorage.getItem("productosLocalS")) // Me traigo la base de datos  
  traerLocalStorage.push(caracteristicasProducto) // Como la base es un array, le hago push  
  window.localStorage.setItem("productosLocalS",JSON.stringify(traerLocalStorage)) // Reenvío la información a la base de datos

}