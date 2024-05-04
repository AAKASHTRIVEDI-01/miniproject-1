document.addEventListener('DOMContentLoaded', function() {
    const lengthRange = document.getElementById('length');
    const lengthValue = document.getElementById('lengthValue');
    const generateBtn = document.getElementById('generateBtn');
    const passwordOutput = document.getElementById('passwordOutput');

    lengthValue.textContent = lengthRange.value;d
    lengthRange.addEventListener('input', function() {
      lengthValue.textContent = this.value;
    });
  

    function generatePassword(length) {
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#:,.<>?";
      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
      return password;
    }
  
   
    generateBtn.addEventListener('click', function() {
      const passwordLength = parseInt(lengthRange.value);
      const generatedPassword = generatePassword(passwordLength);
      passwordOutput.value = generatedPassword;
    });
  });
  
