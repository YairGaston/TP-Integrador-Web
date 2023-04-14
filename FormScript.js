
let currentStep = 1;

function nextStep() {
  document.getElementById(`paso${currentStep}`).style.display = "none";
  currentStep++;
  if (currentStep > 3) {
    currentStep = 3;
  }
  document.getElementById(`paso${currentStep}`).style.display = "block";
}

function prevStep() {
  document.getElementById(`paso${currentStep}`).style.display = "none";
  currentStep--;
  if (currentStep < 1) {
    currentStep = 1;
  }
  document.getElementById(`paso${currentStep}`).style.display = "block";
}

function submitForm() {
  // Lógica para enviar el formulario
  alert("Le Agradecemos su confianza. Formulario enviado");
}

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



                /* Utilizo API de DolarSi (Oficial y Blue) */
const URL_JSON = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
/* Obtengo los elementos del documento */
const Moneda1 = document.getElementById("Moneda1")
const Moneda3 = document.getElementById("Moneda2")
const btnRefresh = document.querySelector("#btnRefresh");
/* Obtengo, transformo, filtro y muestro los datos obtenidos de la API para el dolar oficial */
fetch (URL_JSON)
.then(response => response.json())
.then(data => {
const FiltroTipo = data.filter(tipo => tipo.casa.nombre.includes ('Dolar Oficial') )
for(producto of FiltroTipo){

    const valorReunión = 30.00
    const valorReuniónMoneda = (valorReunión).toLocaleString('us-US',{style: 'currency',currency: 'USD'})

let hora = new Date().getHours();
let min = new Date().getMinutes();
let sec = new Date().getSeconds();
let dia = new Date().getDay()+9;
let mes = new Date().getMonth()+1; 
let año = new Date().getFullYear();
let ahora = dia+"/"+mes+"/"+año+" - "+hora+":"+min+":"+sec;

Moneda1.innerHTML = `
<div class="containerCambioOficial">
        <h2 class="nombreCambio">Cotización  ${producto.casa.nombre}</h2>
        <p class="ahora">Actualizado: ${ahora}</p>
        <p class="valorReunion">La tarifa de la reunión es de:<strong> ${valorReuniónMoneda}</strong></p>
        <p class="compraOficial">Cotización Compra:<strong><strong> $ ${producto.casa.compra }</strong></p> 
        <p class="ventaOficial">Cotización venta:<strong> $ ${producto.casa.venta}</strong> </p>
        <p class="totalArsAlOficial">Total tarifa en ARS (Pesos):<strong> $ ${ parseFloat( ((producto.casa.venta).replace(',','.'))*valorReunión).toFixed(2).replace('.',',')}</strong> </p>
        </div>
        `
    }}
    )

/* Para actualizar los montos  */

btnRefresh.addEventListener("click", () =>{

    fetch (URL_JSON)
    .then(response => response.json())
    .then(data => {
    const FiltroTipoOficial = data.filter(tipo => tipo.casa.nombre.includes ('Dolar Oficial') )
    for(producto of FiltroTipoOficial){

        const valorReunión = 30.00
        const valorReuniónMoneda = (valorReunión).toLocaleString('us-US',{style: 'currency',currency: 'USD'})

    let hora = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let dia = new Date().getDay()+9;
    let mes = new Date().getMonth()+1; 
    let año = new Date().getFullYear();
    let ahora = dia+"/"+mes+"/"+año+" - "+hora+":"+min+":"+sec;

        Moneda1.innerHTML = `
        <div class="containerCambioOficial">
        <h2 class="nombreCambio">Cotización  ${producto.casa.nombre}</h2>
        <p class="ahora">Actualizado: ${ahora}</p>
        <p class="valorReunion">La tarifa de la reunión es de:<strong> ${valorReuniónMoneda}</strong></p>
        <p class="compraOficial">Cotización Compra:<strong><strong> $ ${producto.casa.compra }</strong></p> 
        <p class="ventaOficial">Cotización venta:<strong> $ ${producto.casa.venta}</strong> </p>
        <p class="totalArsAlOficial">Total tarifa en ARS (Pesos):<strong> $ ${ parseFloat( ((producto.casa.venta).replace(',','.'))*valorReunión).toFixed(2).replace('.',',')}</strong> </p>
                </div>
        `
    }}
    )
})


/* Obtengo, transformo, filtro y muestro los datos obtenidos de la API para el dolar blue */
fetch (URL_JSON)
.then(response => response.json())
.then(data => {
const FiltroTipo = data.filter(tipo => tipo.casa.nombre.includes ('Dolar Blue') )
for(producto of FiltroTipo){

    const valorReunión = 30.00
    const valorReuniónMoneda = (valorReunión).toLocaleString('us-US',{style: 'currency',currency: 'USD'})

let hora = new Date().getHours();
let min = new Date().getMinutes();
let sec = new Date().getSeconds();
let dia = new Date().getDay()+9;
let mes = new Date().getMonth()+1; 
let año = new Date().getFullYear();
let ahora = dia+"/"+mes+"/"+año+" - "+hora+":"+min+":"+sec;

Moneda2.innerHTML = `
<div class="containerCambioBlue">
<h2 class="nombreCambio">Cotización  ${producto.casa.nombre}</h2>
<p class="ahora">Actualizado: ${ahora}</p>
<p class="valorReunion">La tarifa de la reunión es de:<strong> ${valorReuniónMoneda}</strong></p>
<p class="compraOficial">Cotización Compra:<strong><strong> $ ${producto.casa.compra }</strong></p> 
<p class="ventaOficial">Cotización venta:<strong> $ ${producto.casa.venta}</strong> </p>
<p class="totalArsAlOficial">Total tarifa en ARS (Pesos):<strong> $ ${ parseFloat( ((producto.casa.venta).replace(',','.'))*valorReunión).toFixed(2).replace('.',',')}</strong> </p>
        </div>
        `
    }}
    )

/* Para actualizar los montos  */

btnRefresh.addEventListener("click", () =>{

    fetch (URL_JSON)
    .then(response => response.json())
    .then(data => {
    const FiltroTipoOficial = data.filter(tipo => tipo.casa.nombre.includes ('Dolar Blue') )
    for(producto of FiltroTipoOficial){

        const valorReunión = 30.00
        const valorReuniónMoneda = (valorReunión).toLocaleString('us-US',{style: 'currency',currency: 'USD'})

    let hora = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let dia = new Date().getDay()+9;
    let mes = new Date().getMonth()+1; 
    let año = new Date().getFullYear();
    let ahora = dia+"/"+mes+"/"+año+" - "+hora+":"+min+":"+sec;

        Moneda2.innerHTML = `
        <div class="containerCambioBlue">
        <h2 class="nombreCambio">Cotización  ${producto.casa.nombre}</h2>
        <p class="ahora">Actualizado: ${ahora}</p>
        <p class="valorReunion">La tarifa de la reunión es de:<strong> ${valorReuniónMoneda}</strong></p>
        <p class="compraOficial">Cotización Compra:<strong><strong> $ ${producto.casa.compra }</strong></p> 
        <p class="ventaOficial">Cotización venta:<strong> $ ${producto.casa.venta}</strong> </p>
        <p class="totalArsAlOficial">Total tarifa en ARS (Pesos):<strong> $ ${ parseFloat( ((producto.casa.venta).replace(',','.'))*valorReunión).toFixed(2).replace('.',',')}</strong> </p>
                </div>
        `
    }}
    )
})