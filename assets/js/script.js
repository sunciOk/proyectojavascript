
function removeButton() {
    let btn = document.getElementById("donateBtn");
    btn.remove();
}
function showAlert() {
    var select = document.getElementById("tipo");
    var selectedOption = select.options[select.selectedIndex].text;
    alert("Has seleccionado: " + selectedOption);
  }
var contar = 0;

function incrementarContador(id) {
    var contador = document.getElementById(id);
    contador.innerText = parseInt(contador.innerText) + 1;
  }