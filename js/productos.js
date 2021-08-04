let pruebaJson = [
    {
      "imagen": "../img/products/img-product_1.jpg",
      "titulo": "Mandil emplomado económico",
      "marca": "Marca Slim Royal",
      "modelo": "E6995",
      "li1": "0.5mm de plomo",
      "li2": "66x95 cm",
      "li3": "Con bolsillo",
      "li4": "Acabado textil",
      "descripcion" : "0.5mm de plomo,66x95 cm,Con bolsillo,Acabado textil",
      "id": "1"
    },
    {
      "imagen": "../img/products/img-product_2.jpg",
      "titulo": "Mandil emplomado estándar",
      "marca": "Marca Slim Royal",
      "modelo": "S6995",
      "li1": "0.5mm de plomo",
      "li2": "66x95 cm",
      "li3": "Con bolsillo",
      "li4": "Acabado plástico",
      "descripcion" : "0.5mm de plomo,66x95 cm,Con bolsillo,Acabado plástico",
      "id": "2"
    },
    {
      "imagen": "../img/products/img-product_3.jpg",
      "titulo": "Faldón emplomado",
      "marca": "Marca Slim Royale",
      "modelo": "SQUARE",
      "li1": "0.5mm de plomo",
      "li2": "40x40 cm",
      "li3": "Tipo falda",
      "li4": "<br>",
      "descripcion" : "0.5mm de plomo,40x40 cm,Tipo falda",
      "id": "3"
    },
    {
      "imagen": "../img/products/img-product_4.jpg",
      "titulo": "Lentes emplomados",
      "marca": "Marca Slim Royale",
      "modelo": "SS-53",
      "li1": "0.55mm de plomo",
      "li2": "Con estuche",
      "li3": "<br>",
      "li4": " <br>",
      "descripcion" : "0.55mm de plomo,Con estuche",
      "id": "4"
    },
    {
      "imagen": "../img/products/img-product_5.jpg",
      "titulo": "Lentes emplomados",
      "marca": "Marca Slim Royale",
      "modelo": "S-53",
      "li1": "0.5mm de plomo",
      "li2": "Con estuche",
      "li3": " <br>",
      "li4": "<br> ",
      "descripcion" : "0.5mm de plomo,Con estuche",
      "id": "5"
    },
    {
      "imagen": "../img/products/img-product_6.jpg",
      "titulo": "Googles emplomados",
      "marca": "Marca Slim Royale",
      "modelo": "GOOGLE-HO",
      "li1": "0.5mm de plomo",
      "li2": "Con bolsa de tela",
      "li3": " <br>",
      "li4": "<br> ",
      "descripcion" : "0.5mm de plomo,Con bolsa de tela",
      "id": "6"
    },
    {
      "imagen": "../img/products/img-product_7.jpg",
      "titulo": "Guantes emplomados",
      "marca": "Marca Slim Royale",
      "modelo": "100 M/L",
      "li1": "0.5mm de plomo",
      "li2": "350mm de largo",
      "li3": "Tamaño mediano o grande",
      "li4": "<br> ",
      "descripcion" : "0.5mm de plomo,350mm de largo,Tamaño mediano o grande",
      "id": "7"
    },
    {
      "imagen": "../img/products/img-product_8.jpg",
      "titulo": "Guantes emplomados",
      "marca": "Marca Shielding",
      "modelo": "XR47",
      "li1": "RADIAXON",
      "li2": "Equivalente a 0.5mm de plomo",
      "li3": "Tamaño mediano o grande",
      "li4": "",
      "descripcion" : "RADIAXON,Equivalente a 0.5mm,    de plomo,Tamaño mediano o grande",
      "id": "8"
    },
    {
      "imagen": "../img/products/img-product_9.jpg",
      "titulo": "Collarín emplomado",
      "marca": "Marca Slim Royale",
      "modelo": "STANDAR-O5",
      "li1": "0.5mm de plomo",
      "li2": "<br> ",
      "li3": "<br> ",
      "li4": "<br> ",
      "descripcion" : "0.5mm de plomo",
      "id": "9"
    },
    {
      "imagen": "../img/products/img-product_10.jpg",
      "titulo": "Collarín emplomado de lujo",
      "marca": "Marca Slim Royale",
      "modelo": "DELUX-O5",
      "li1": "0.5mm de plomo",
      "li2": "<br> ",
      "li3": "<br> ",
      "li4": "<br> ",
      "descripcion" : "0.5mm de plomo",
      "id": "10"
    },
    {
      "imagen": "../img/products/img-product_11.jpg",
      "titulo": "Protectores de gónadas",
      "marca": "Marca Slim Royale",
      "modelo": "S806A",
      "li1": "0.5mm de plomo",
      "li2": "Juego de 3 protectores: grande mediano y chico",
      "li3": "<br>",
      "li4": "<br>",
      "descripcion" : "0.5mm de plomo,Juego de 3 protectores,    grande mediano y chico",
      "id": "11"
    },
    {
      "imagen": "../img/products/img-product_12.jpg",
      "titulo": "Protectores de gónadas",
      "marca": "Marca Slim Royale",
      "modelo": "S806 M/L",
      "li1": "0.5mm de plomo",
      "li2": "Una pieza",
      "li3": "Tamaño mediano o grande",
      "li4": " <br>",
      "descripcion" : "0.5mm de plomo,Una pieza,Tamaño mediano o grande",
      "id": "12"
    }
  ]

  function searchOnDatabase(idProductos) {
    const productoFitrado = arregloProductos.find(producto => {
        return producto.id == parseInt(idProductos)
    })
    console.log(productoFitrado)
    return productoFitrado;
}
function anadirProducto(productos){

    const ancla = document.getElementById("productos");
    let plantilla = "";
    
    productos.forEach(function(producto){

        let card = `
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 div-centered" style="margin-top:100px;">
        <div class="card" style="width: 18rem;"> 
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
                  <button class="btn btn-info btn-add-car">Comprar</button>   
                </div>   
            </div> <!--card-body--> 
        </div><!--card--> 
        </div>`

        plantilla += card;

    }) // Fin del forEach

    ancla.innerHTML = plantilla;

} //Fin del anadirProducto
anadirProducto(pruebaJson);

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


<<<<<<< HEAD
function listaElementos(json){
  let descr,spl,myDiv;
  for( i = 0 ; i < json.length ; i++ ){
    let descr = json[i].descripcion;
    let spl = descr.split(","); 
    let myDiv = document.getElementById("lista-desor_" + json[i].id);
  // }
  for (let j = 0; j < 4; j++) {     // Necesito este ciclo, porque para la card 4 en adelante siempre es falso i = 4 < spl.length
    if (j < spl.length){         
      myDiv.innerHTML +="<li>"+ spl[j] + "</li>";     
    } else {         
      myDiv.innerHTML +="<br/>"
    }// else       
  }//for j
}
}
listaElementos(pruebaJson);

/*
let lis = "0.55m de plomo"; // Obtengo la descripción del JSON
let a = lis.split("|"); // Convierto dicha descripción: String -> Array
let myDiv = document.getElementById("div_lis"); // Traigo mi elemento contener de los <li>
myDiv.innerHTML = "<ul>";
for (let i = 0; i < 4; i++) {
  if (i<a.length){ // Si i es menor que la longitud de mi Array...
    myDiv.innerHTML +="<li>"+ a[i] + "</li>";
  } else {        
    myDiv.innerHTML +="<br/>"     
  }// else       
  }//for i 
  myDiv.innerHTML += "</ul>";
=======
/*
let lis = "0.55m de plomo";
let a = lis.split("|");
let myDiv = document.getElementById("div_lis");
myDiv.innerHTML = "<ul>";
for (let i = 0; i < 4; i++) {
    if (i<a.length){
        myDiv.innerHTML +="<li>"+a[i] + "</li>";
    } else {
        myDiv.innerHTML +="<br/>"
    }// else 
    
}//for i
myDiv.innerHTML += "</ul>";
>>>>>>> bd07ecf7952bbcbdefc3118dbc782a456210a14b
*/