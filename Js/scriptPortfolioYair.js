
const URL_JSON = "../db/database.json"
const contenedorHTMLcaratula = document.getElementById("containerNombreAptitudes")
const contenedorHTMLsobreMi = document.getElementById("sobreMi")

fetch (URL_JSON)
.then(response => response.json())
.then(data => {
const FiltroColab = data.filter(colab => colab.nombre.includes ('Yair Sansó') )
for(producto of FiltroColab){
        contenedorHTMLcaratula.innerHTML = `
                <h2 class="nombreColaboradorPortfolio" id="nombre">${producto.nombre} </h2><br>
                <p id="aptitudPortfolio1">${producto.aptitud1} </p> 
                <p id="aptitudPortfolio2">${producto.aptitud2} </p>
        `
        contenedorHTMLsobreMi.innerHTML = `
        <h2 class="sobreMi">Sobre mí</h2><br>
        <p >${producto.detalle1}</p>
        <p >${producto.detalle2}</p>
        <p >Mis hobbies: ${producto.hobbies}</p>
        `

}}
)