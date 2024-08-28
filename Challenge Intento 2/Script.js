// Obtener los elementos del DOM
const textInput = document.getElementById('text');
const optionSelect = document.getElementById('option');
const submitButton = document.getElementById('submit');
const copyButton = document.getElementById('copy');
const resultDiv = document.getElementById('result');

// Definir las funciones de encriptación y desencriptación
const encryptionMap = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};

const decryptionMap = {};
for (const key in encryptionMap) {
  decryptionMap[encryptionMap[key]] = key;
}

// Función para encriptar el texto
function encryptText(text) {
  return text.replace(/[eiaou]/g, (match) => encryptionMap[match]);
}

// Función para desencriptar el texto
function decryptText(text) {
  return text.replace(/(enter|imes|ai|ober|ufat)/g, (match) => decryptionMap[match]);
}

// Agregar evento de click al botón de submit
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const text = textInput.value.toLowerCase();
  const option = optionSelect.value;

  let result;
  if (option === 'encrypt') {
    result = encryptText(text);
  } else {
    result = decryptText(text);
  }

  resultDiv.innerText = result;
});

// Agregar evento de click al botón de copiar
copyButton.addEventListener('click', () => {
  const resultText = resultDiv.innerText;
  navigator.clipboard.writeText(resultText);
});