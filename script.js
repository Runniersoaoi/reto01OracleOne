function transformText(encryptPreference) {
  let requestedText = document.getElementById("unencryptedtext").value;
  const regexForText = /^[^A-Z]*$/;

  if (regexForText.test(requestedText)) {
    if (encryptPreference) {
      requestedText = requestedText
        .replace(/e/gim, "enter")
        .replace(/o/gim, "ober")
        .replace(/i/gim, "imes")
        .replace(/a/gim, "ai")
        .replace(/u/gim, "ufat");
    } else {
      requestedText = requestedText
        .replace(/enter/gim, "e")
        .replace(/ober/gim, "o")
        .replace(/imes/gim, "i")
        .replace(/ai/gim, "a")
        .replace(/ufat/gim, "u");
    }
    const hideMessageElement = document.getElementById("hide-message");
    hideMessageElement.style.display = "block";
    hideMessageElement.textContent = requestedText;

    document.getElementById("btn-copiar").style.display = "block";
    document.getElementById("image-encrypted-area").style.display = "none";
    document.getElementById("title-encrypted-area").style.display = "none";
    document.getElementById("description-encrypted-area").style.display =
      "none";
  } else {
    alert("No se pueden ingresar mayusculas");
  }
}

function copyText() {
  const textToCopy = document.getElementById("hide-message").textContent;
  navigator.clipboard
    .writeText(textToCopy)
    .then(function () {
      alert("Texto copiado al portapapeles!");
    })
    .catch(function (error) {
      console.error("Error al copiar texto: ", error);
    });
}

const btnEncrypt = document.getElementById("btn-encriptar");
const btnDecrypt = document.getElementById("btn-desencriptar");
const btnCopy = document.getElementById("btn-copiar");

btnEncrypt.addEventListener("click", () => transformText(true));
btnDecrypt.addEventListener("click", () => transformText(false));
btnCopy.addEventListener("click", () => copyText());
