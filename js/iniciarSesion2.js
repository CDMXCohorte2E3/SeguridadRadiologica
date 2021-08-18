
//Validación del formulario
let form = document.getElementById('needs-validation');

let valid = 0;
function validateForm(e){//validateForm
    //No ejecutes
    e.preventDefault();
    let inputNombre = document.getElementById('name');
    let inputApellidos = document.getElementById('lastName');
    let inputEmail = document.getElementById('emailRegistrar');
    let inputPhone = document.getElementById('phone');
    let inputContraseña = document.getElementById('passwordRegistrar');
    let inputConfirmarContraseña = document.getElementById('confirmPassword');

    function validateName(nombre){
      //let expReg= /^[A-Z]+$/;
      let expReg = new RegExp(/^[a-zA-Z-á-ú ]+$/)  
      let esValido2 = expReg.test(nombre);      
      if(esValido2 == true){//if nombre
          inputNombre.classList.remove('is-invalid')
          inputNombre.classList.add('is-valid')          
          return valid ++;
        }else{
          inputNombre.classList.add('is-invalid')          
      }//if nombre
    }//validateName
    
    validateName(inputNombre.value)

    function validateLastName(apellidos){
        //let expReg= /^[A-Z]+$/;
        let expReg = new RegExp(/^[a-zA-Z-á-ú ]+$/)  
        let esValido2 = expReg.test(apellidos);        
        if(esValido2 == true){//if apellido
            inputApellidos.classList.remove('is-invalid')
            inputApellidos.classList.add('is-valid')            
            return valid ++;
          }else{
            inputApellidos.classList.add('is-invalid')            
        }//if apellidos
      }//validateLastName
      
      validateLastName(inputApellidos.value)

    function validateEmail(email){//validateEmail
      let expReg = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);
      let esValido = expReg.test(email);      
      if(esValido == true ){//if email 
        inputEmail.classList.remove('is-invalid')
        inputEmail.classList.add('is-valid')        
        return valid++;
      }else{
        inputEmail.classList.add('is-invalid')        
      }//if email
    }//validateEmail

    validateEmail(inputEmail.value)

    function validatePassword(password){//validatePassword
      let expReg = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[/$@*#!%?&._-]).{6,12}$/);
      let esValido = expReg.test(password);      
      if(esValido == true ){//if email 
        inputContraseña.classList.remove('is-invalid')
        inputContraseña.classList.add('is-valid')        
        return valid++;
      }else{
        inputContraseña.classList.add('is-invalid')        
      }//if Password
    }//validatePassword

    validatePassword(inputContraseña.value)

    if(inputConfirmarContraseña.value == inputContraseña.value){//ifConfirmarContraseña
      inputConfirmarContraseña.classList.remove('is-invalid');
      inputConfirmarContraseña.classList.add('is-valid');
      valid++;
    }else{
      inputConfirmarContraseña.classList.add('is-invalid')
    }//if ConfirmarContraseña

    
    if(inputPhone.value.length === 10 || inputPhone.value.length === 12){//if teléfono
        
            inputPhone.classList.remove('is-invalid')
            inputPhone.classList.add('is-valid') 
            valid++;
    }else{
      inputPhone.classList.add('is-invalid')
    }//if teléfono

    if (valid==6){
      window.open('mailto:generation.c2.cdmxe3@gmail.com?subject=Contacto&body=body');
      nuevoRegistro();
    }
    return vaid = 0;
}//validateForm

//Eventos

form.addEventListener('submit',validateForm)

function nuevoRegistro(evento){
    
    let inputNombre = document.getElementById('name').value;
    let inputApellidos = document.getElementById('lastName').value;
    let inputEmail = document.getElementById('emailRegistrar').value;
    let inputPhone = document.getElementById('phone').value;
    let inputContraseña = document.getElementById('passwordRegistrar').value;
    let inputConfirmarContraseña = document.getElementById('confirmPassword');
  
    // Aquí se "hace JSON" los valores que puso el admin en añadir producto
    const datosRegistro = {
        "nombre": inputNombre,
        "apellidos": inputApellidos,
        "email": inputEmail,
        "telefono": inputPhone,
        "contrasena": inputContraseña
    }
    if( window.localStorage.getItem("nuevoRegistro") === null ){        
        let primerRegistro = []
        primerRegistro[0] = datosRegistro
        window.localStorage.setItem("nuevoRegistro",JSON.stringify(primerRegistro))
    } else{

        let registrosDB = JSON.parse(window.localStorage.getItem("nuevoRegistro")) // Me traigo la base de datos
        registrosDB.push(datosRegistro) // Como la base es un array, le hago push
        window.localStorage.setItem("nuevoRegistro",JSON.stringify(registrosDB)) // Reenvío la información a la base de datos
    } // fin de if
} // fin de nuevoRegistro