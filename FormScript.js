
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