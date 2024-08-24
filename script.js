function encryptText() {
    let text = document.getElementById("inputText").value;
    document.getElementById("outputImage").style.display = 'none';
    if (!text) return;
    let encryptedText = text.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
    document.getElementById("outputText").innerHTML = encryptedText;
}

function decryptText() {
    let text = document.getElementById("inputText").value;
    if (!text) return;
    let decryptedText = text.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
    document.getElementById("outputText").innerHTML = decryptedText;
}

function copyText() {
    let outputText = document.getElementById("outputText").innerText;
    if (!outputText) return;
    navigator.clipboard.writeText(outputText)
}