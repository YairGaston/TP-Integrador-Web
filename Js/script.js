
/* Esto funciona... falta que el nombre sea variable */

/* const URL_JSON = "../db/database.json"
const contenedorHTMLcaratula = document.getElementById("containerNombreAptitudes")

fetch (URL_JSON)
.then(response => response.json())
.then(data => {
    const FiltroColab = data.filter(colab => colab.nombre = ('Jesica Antonin') )
    for(producto of FiltroColab){
        contenedorHTMLcaratula.innerHTML = `
                <h2 class="nombreColaboradorPortfolio" id="nombre">${producto.nombre} </h2><br>
                <p id="aptitudPortfolio1">${producto.aptitud1} </p> 
                <p id="aptitudPortfolio2">${producto.aptitud2} </p>
        `
}}
) */


// -------   las comillas simples se escriben con alt + 96 ----------

let Yair = document.getElementById("clickYair");
Yair.addEventListener("click", filtrarYmostrar);

function filtrarYmostrar(a){
        return a
}
let nom = filtrarYmostrar("Yair Sansó")
alert(nom);


const URL_JSON = "../db/database.json"
const contenedorHTMLcaratula = document.getElementById("containerNombreAptitudes")

fetch (URL_JSON)
.then(response => response.json())
.then(data => {
const FiltroColab = data.filter(colab => colab.nombre = YairNombre)
for(producto of FiltroColab){
        contenedorHTMLcaratula.innerHTML = `
                <h2 class="nombreColaboradorPortfolio" id="nombre">${producto.nombre} </h2><br>
                <p id="aptitudPortfolio1">${producto.aptitud1} </p> 
                <p id="aptitudPortfolio2">${producto.aptitud2} </p>
        `
}}
)





