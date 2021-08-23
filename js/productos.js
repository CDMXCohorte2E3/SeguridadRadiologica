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
      "titulo": "Lentes emplomados premium",
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
      "titulo": "Guantes emplomados RADIAXON",
      "marca": "Marca Shielding",
      "modelo": "XR47",
      "precio": "$2,637.53",
      "descripcion" : "Equivalente a 0.5mm|de plomo|Tamaño mediano o grande",
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
      "titulo": "Protector de gónadas",
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

                  <button class="btn btn-info btn-add-car" onclick="anadirCarrito(${producto.id});">Comprar</button>   

                </div>   
            </div> <!--card-body--> 
        </div><!--card--> 
        </div>`
        plantilla += card;
    }) // Fin del forEach
    ancla.innerHTML = plantilla;
} //Fin del anadirProducto
anadirProducto(almacenLocal);


// Función boton pop up
const botonClase = document.getElementsByClassName("btn-add-car");
for(i=0 ; i < botonClase.length ; i++){
  botonClase[i].addEventListener('click', function(){
      new Swal({
        icon: 'success',
        title: 'AGREGADO AL CARRITO',
        showConfirmButton: false,
        timer: 1500,
        position: 'center',
      })
  })//addEventListener 
} // fin del for

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

// funcion para añadir producto al carrito de compras. Al hacer click crea un JSON en el local storage y almacena el id del producto que se compró 
// La idea es solo guardar los id de los productos en local storage, para usarlos en carrito.html y cargar lo que el usuario dio en "Comprar"
// La función se ejecuta al hacer click en "Comprar" del productos.html
function  anadirCarrito(arg_id){ 

  // empujarTmp es la variable a pushear en el JSON para los productos agregados
  let empujarTmp = {
    "identificador" : arg_id
  }
  
  // Si la base local está vacía, la creo y le añado empujarTmp
  if( window.localStorage.getItem("identificadoresLocalS") == null ){
    
    let jsonTmp = [];
    jsonTmp.push(empujarTmp);
    window.localStorage.setItem("identificadoresLocalS",JSON.stringify(jsonTmp));
    
  // Si la base local no está vacía entonces me traigo la base y pusheo empujarTmp  
  }else if ( window.localStorage.getItem("identificadoresLocalS") != null ){

    let localSNotNull = JSON.parse(window.localStorage.getItem("identificadoresLocalS"));
    localSNotNull.push(empujarTmp);  // Este push es lo que me provoca que siempre se agreguen productos y se repitan, estén o no repetidos. Meterlo bajo un if
    window.localStorage.setItem("identificadoresLocalS", JSON.stringify(localSNotNull));  
        

  }

}

/*
Este else evita que se añadan repeticiones, pero solo respecto al primer item "comprado"
else if ( window.localStorage.getItem("identificadoresLocalS") != null ){


    let localSNotNull = JSON.parse(window.localStorage.getItem("identificadoresLocalS"));

    for( i = 0 ; i < localSNotNull.length ; i++){ // algo debe cambiar en el i = 0 ...

      if( localSNotNull[i].identificador == arg_id ){ // El primer valor que toma es [0], por eso el primer elemento en agregar es el que no me deja repetir
        
        console.log("Entré al if dentro del for")
        // localSNotNull[i].repeticiones = localSNotNull[i].repeticiones + 1 
        break;

      } else {
        
        console.log("Entré al else dentro del for")
        localSNotNull.push(empujarTmp);  // Este push es lo que me provoca que siempre se agreguen productos, estén o no repetidos. Meterlo bajo un if
        window.localStorage.setItem("identificadoresLocalS", JSON.stringify(localSNotNull));  
        break;
  
      }

    }// Fin del for-i

}
*/

/*

function removerUnRepetido(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function removeTodoRepetidos(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}
// Usage
console.log(removeItemOnce([2,5,9,1,5,8,5], 5))
console.log(removeItemAll([2,5,9,1,5,8,5], 5))

*/
