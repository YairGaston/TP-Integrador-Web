/* Acciones desencadenadas por el menu de hamburguesa y enlaces a páginas del sitio */
/* ejemplo para agregar clase a un elemento nav.classList.add("enlacesMenu"); */

const   btnMenu = document.querySelector("#btn-menu");
const   btnContact = document.querySelector("#btn-contacto");
const   btnNos = document.querySelector("#btn-nosotros");
const   btnSolu = document.querySelector("#btn-soluciones");
const   btnOfi = document.querySelector("#btn-oficinas");
const   btnReu = document.querySelector("#btn-reunion");
const   nav = document.querySelector("#enlaces");

                btnMenu.addEventListener("click", () =>{
                        nav.classList.toggle("enlacesVisibles");
                })
                btnContact.addEventListener("click", () =>{
                        nav.classList.toggle("enlacesVisibles");
                })
                btnNos.addEventListener("click", () =>{
                        nav.classList.toggle("enlacesVisibles");
                })
                btnSolu.addEventListener("click", () =>{
                        nav.classList.toggle("enlacesVisibles");
                })
                btnOfi.addEventListener("click", () =>{
                        nav.classList.toggle("enlacesVisibles");
                })
                btnReu.addEventListener("click", () =>{
                        nav.classList.toggle("enlacesVisibles");
                })

/* Acciones que desencadenan el filtrado y devolución por pantalla de los datos de cada colaborador */

/* Esto funciona... falta que el nombre sea variable */

const URL_JSON = "../db/database.json"
const contenedorHTMLcaratula = document.getElementById("containerNombreAptitudes")
const contenedorHTMLsobreMi = document.getElementById("sobreMi")

fetch (URL_JSON)
.then(response => response.json())
.then(data => {
const FiltroColab = data.filter(colab => colab.nombre.includes ('Gustavo Müller') )
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