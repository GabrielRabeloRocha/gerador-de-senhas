const passwordDisplay = document.getElementById('password-display');
const lengthSlider = document.getElementById('length-slider');
const lengthValue = document.getElementById('length-value');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');

// Atualiza o texto do tamanho da senha em tempo real
lengthSlider.addEventListener('input', (e) => {
    lengthValue.innerText = e.target.value;
});

function generateSecurePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    
    // Cria um array de números aleatórios seguros
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
        // Usa o módulo para escolher um caractere do charset de forma justa
        password += charset[array[i] % charset.length];
    }
    
    return password;
}

generateBtn.addEventListener('click', () => {
    const length = lengthSlider.value;
    passwordDisplay.innerText = generateSecurePassword(length);
});

copyBtn.addEventListener('click', () => {
    const password = passwordDisplay.innerText;
    if (password === "Clique em Gerar") return;
    
    navigator.clipboard.writeText(password);
    alert("Senha copiada para a área de transferência!");
});