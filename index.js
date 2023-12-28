var setaDireita = window.document.getElement.getEelementById("setad")
var setaEsquerda = window.document.getElement.getEelementById("setae")
var Leonardo = window.document.getElement.getEelementById("Leonardo")
var Samantha = window.document.getElement.getEelementById("Samantha")
var Bruna = window.document.getElement.getEelementById("Bruna")

function RolarParaDireita() {
  Leonardo.style = "display:none"
  Bruna.style = "display:flex"
  setaDireita.style = "display:none"
  setaEsquerda.style = "display:flex; margin-top:55px"
}
function RolarParaEsquerda() {
Leonardo.style = "display: flex"
Bruna.style = "display: none"
setaDireita.style = "display:flex; margin-top:55px"
setaEsquerda.style = "display:none"

}