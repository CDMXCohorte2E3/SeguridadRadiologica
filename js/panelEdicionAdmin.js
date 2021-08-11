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
    let inputPrice = document.getElementById('price');
    let inputNotes = document.getElementById('notas');

    console.log(typeof(inputProduct.value))
    //let inputZipcode = document.getElementById('zipCode')
    
    //console.log(inputNombre.value)
    console.log(inputProduct.classList)

    function validateName(nombre){
      //let expReg= /^[A-Z]+$/;
      let expReg = new RegExp(/^[a-zA-Z ]+$/)
      let esValido2 = expReg.test(nombre);
      console.log(esValido2);
      if(esValido2 == true){//if nombre
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
    
    if(inputPrice.value.length > 0){//if teléfono
        
            inputPrice.classList.remove('is-invalid')
            inputPrice.classList.add('is-valid') 
            valid++;
    }else{
      inputPrice.classList.add('is-invalid')
    }//if teléfono

    if(inputNotes.value.length != 0 || inputPrice.value.length === 0){//if opcional
      inputNotes.classList.remove('is-invalid')
      inputNotes.classList.add('is-valid') 
      valid++;
    }else{
      inputNotes.classList.add('is-valid')
      valid++;
    }//if opcional

    if (valid==4){
      window.open('mailto:generation.c2.cdmxe3@gmail.com?subject=Contacto&body=body');
    }
    return valid = 0;
}//validateForm

//Eventos

form.addEventListener('submit',validateForm)