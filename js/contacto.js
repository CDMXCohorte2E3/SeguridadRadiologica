//Validación del formulario
let form = document.getElementById('needs-validation');

let valid = 0;
function validateForm(e){//validateForm
    //No ejecutes
    e.preventDefault();
    let inputNombre = document.getElementById('name');
    let inputEmail = document.getElementById('email');
    let inputAdress = document.getElementById('adress');
    let inputPhone = document.getElementById('phone');
    let inputRfc = document.getElementById('rfc');
    let inputNotes = document.getElementById('notas');

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

    function validateAdress(adress){//validateAdress
      //let expReg= /^[A-Z]+$/;
      let expReg = new RegExp(/^[a-zA-Z-á-ú-0-9 -.#/]+$/)  
      let esValido3 = expReg.test(adress);      
      if(esValido3 == true){//if nombre
          inputAdress.classList.remove('is-invalid')
          inputAdress.classList.add('is-valid')          
          return valid ++;
        }else{
          inputAdress.classList.add('is-invalid')          
      }//if nombre
    }//validateAdress

    validateAdress(inputAdress.value)
    
    if(inputPhone.value.length === 10 || inputPhone.value.length === 12){//if teléfono
        
            inputPhone.classList.remove('is-invalid')
            inputPhone.classList.add('is-valid') 
            valid++;
    }else{
      inputPhone.classList.add('is-invalid')
    }//if teléfono

    if(inputRfc.value.length != 0 || inputRfc.value.length === 0){//if opcional RFC
      inputRfc.classList.remove('is-invalid')
      inputRfc.classList.add('is-valid') 
      valid++;
    }else{
      inputRfc.classList.add('is-valid')
      valid++;
    }//if opcional RFC

    if(inputNotes.value.length != 0 || inputNotes.value.length === 0){//if opcional Notes
      inputNotes.classList.remove('is-invalid')
      inputNotes.classList.add('is-valid') 
      valid++;
    }else{
      inputNotes.classList.add('is-valid')
      valid++;
    }//if opcional Notes

    if (valid==6){
      window.open('mailto:generation.c2.cdmxe3@gmail.com?subject=Contacto&body=body');
    }
    return valid = 0;
}//validateForm

//Eventos

form.addEventListener('submit',validateForm)
