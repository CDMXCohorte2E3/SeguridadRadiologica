//Validación del formulario
let form = document.getElementById('needs-validation');

let valid = 0;
function validateForm(e){//validateForm
    //No ejecutes
    e.preventDefault();
    let inputEmail = document.getElementById('emailIniciar');
    let inputContraseña = document.getElementById('passwordIniciar');


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

    if (valid==2){
      Toast();
    }
    return valid = 0;
}//validateForm

//Eventos

form.addEventListener('submit',validateForm)


function Toast(){
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    } 
  });

Toast.fire({
  icon: 'success',
  title: 'Inicio de sesión exitoso'
});

}//function Toast

/* Intento de funcion para la tarea.. 8
function iniciarSesion(){

  let inputEmail = document.getElementById('emailIniciar').value;
  let inputContraseña = document.getElementById('passwordIniciar').value;
  
  console.log(inputEmail)

  var comparacionBD = JSON.parse(window.localStorage.getItem("nuevoRegistro"))

  for( i = 0 ; i < comparacionBD.length ; i++){

    if( comparacionBD[i].email == inputEmail ){
        console.log("Entre al primer if")
        if( comparacionBD[i].contrasena == inputContraseña ){
          console.log("¡Contraseña correcta!")
          break
        } else {
          console.log("Contraseña o correo incorrecto")
        } // if para comparar las contraseñas

    } else {
      continue
    } // if para encontrar, o no, el correo
  }

} Att Carlos */

