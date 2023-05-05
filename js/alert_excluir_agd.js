
const janelaCancelar = document.getElementById("janela_cancelar");

//função que ao clicar no botao vermelho aparece o alert de confirmação
function btnCancelar() {
    janelaCancelar.style.display = "block";
}
//função que ao clicar no botao vermelho o alert fecha
function btnFechar() {
    janelaCancelar.style.display = "none";
}
// função que ao clicar fora da janela fecha o alert
window.onclick = function(event) {
    if (event.target == janelaCancelar) {
       janelaCancelar.style.display = "none";
    }
    }


const btnConfirmar = document.getElementById("btn_confirmar");

function confirmarCancelamento() {
    
}
