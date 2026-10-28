const radio1 = document.querySelector("#radio1")
const radio2 = document.querySelector("#radio2")
const radio3 = document.querySelector("#radio3")

const produto1 = document.querySelector("#produto1")
const produto2 = document.querySelector("#produto2")
const produto3 = document.querySelector("#produto3")

function atualizarDestaque() {
  produto1.classList.toggle("ativo", radio1.checked)
  produto2.classList.toggle("ativo", radio2.checked)
  produto3.classList.toggle("ativo", radio3.checked)
}

radio1.addEventListener("change", atualizarDestaque)
radio2.addEventListener("change", atualizarDestaque)
radio3.addEventListener("change", atualizarDestaque)

atualizarDestaque()
