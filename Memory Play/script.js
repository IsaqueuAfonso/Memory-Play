const scree1 = document.querySelector(".screen1")
const scree2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xattempts = 1

btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", enterClick)

function handleTryClick(event) {
  event.preventDefault()

  const imputNumber = document.querySelector("#imputNumber")

  if (Number(imputNumber.value) < 0 || Number(imputNumber.value) > 10) {
    alert("Digite um número.")
    xattempts--
  } else if (imputNumber.value == "") {
    alert("Digite um valor.")
    xattempts--
  } else if (Number(imputNumber.value) == randomNumber) {
    toggle()

    scree2.querySelector(
      "h2"
    ).innerText = `Você acertou em ${xattempts} tentativa(s)`
  }

  imputNumber.value = ""
  xattempts++
}

function handleResetClick() {
  toggle()
  randomNumber = Math.round(Math.random() * 10)
  xattempts = 1
}

function enterClick(enter) {
  if (enter.key == "Enter" && scree1.classList.contains("hide")) {
    handleResetClick()
  }
}

function toggle() {
  scree1.classList.toggle("hide")
  scree2.classList.toggle("hide")
}
