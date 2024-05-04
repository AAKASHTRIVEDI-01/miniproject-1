document.addEventListener('DOMContentLoaded', function() {
    const lengthRange = document.getElementById('length');
    const lengthValue = document.getElementById('lengthValue');
    const generateBtn = document.getElementById('generateBtn');
    const passwordOutput = document.getElementById('passwordOutput');
  
    // Display initial password length value
    lengthValue.textContent = lengthRange.value;
  
    // Update password length value when slider is moved
    lengthRange.addEventListener('input', function() {
      lengthValue.textContent = this.value;
    });
  
    // Generate password function
    function generatePassword(length) {
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#:,.<>?";
      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
      return password;
    }
  
    // Generate password on button click
    generateBtn.addEventListener('click', function() {
      const passwordLength = parseInt(lengthRange.value);
      const generatedPassword = generatePassword(passwordLength);
      passwordOutput.value = generatedPassword;
    });
  });
  