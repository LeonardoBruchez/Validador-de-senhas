const password = document.querySelector('input#password')
const ruleLength = document.querySelector('li#ruleLength')
const ruleNumber = document.querySelector('li#ruleNumber')
const ruleUpper = document.querySelector('li#ruleUpper')
const ruleSpecial = document.querySelector('li#ruleSpecial')
const passwordStrenght = document.querySelector('p#passwordStrength')
const toggleButton = document.querySelector('button#togglePassword')

function passwordValidator(){
  const passwordValue = password.value
  const lengthRegex = /.{8,}/ // Procura por qualquer sequencia de 8 ou mais caracteres
  const numberRegex = /[0-9]/ // Procura por qualquer número de 0 a 9
  const upperRegex = /[A-Z]/ // Detecta se há uma letra maiúscula
  const specialRegex = /[^a-zA-Z0-9]/ // Procura qualquer caractere especial

  const isLengthValid = lengthRegex.test(passwordValue)
  //.test pega o resultado da Regex e verifica se ela esta sendo validada,resultado = true ou false

  ruleLength.classList.toggle('valid', isLengthValid)
  ruleLength.classList.toggle('invalid',!isLengthValid)
  // o sinal ! a sintaxe deixa negativo.

  const isNumberValid = numberRegex.test(passwordValue)
  ruleNumber.classList.toggle('valid',isNumberValid)
  ruleNumber.classList.toggle('invalid',!isNumberValid)

  const isUpperValid = upperRegex.test(passwordValue)
  ruleUpper.classList.toggle('valid',isUpperValid)
  ruleUpper.classList.toggle('invalid',!isUpperValid)

  const isSpecialValid = specialRegex.test(passwordValue)
  ruleSpecial.classList.toggle('valid',isSpecialValid)
  ruleSpecial.classList.toggle('invalid',!isSpecialValid)

  const isStrong = isLengthValid && isNumberValid && isUpperValid && isSpecialValid
  if(isStrong){
    passwordStrength.textContent = 'Sua senha é valida!'
    passwordStrenght.style.color = 'green'
  }else{
    passwordStrenght.textContent = 'A senha não está dentro dos conformes!'
    passwordStrenght.style.color = 'Red'
  }

}

function toggleVisibility() {
    if (password.type === 'password') {
        // Ação IF (Senhas Ocultas)
        password.type = 'text'; 
        toggleButton.textContent = 'Ocultar';
    } else {
        // Ação ELSE (Senhas Visíveis)
        password.type = 'password';
        toggleButton.textContent = 'Mostrar';
    }
}

toggleButton.addEventListener('click',toggleVisibility)


password.addEventListener('keyup',passwordValidator)
