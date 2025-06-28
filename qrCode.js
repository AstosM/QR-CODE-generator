const btnElement = document.querySelector(".btn")
const imgElement = document.getElementById("qr-img")
const boxElement = document.getElementById("img-box")
const inputElement = document.getElementById("qr-txt")
btnElement.addEventListener("click", () => {
    if (inputElement.value.length > 0) {
        imgElement.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputElement.value}`
        boxElement.classList.add("show-img")
    }
}) 