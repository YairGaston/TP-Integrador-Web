
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
  alert("Le Agradecemos se confianza. Formulario enviado");
}