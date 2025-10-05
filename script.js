// DOM elements variables
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', "'", '"', ',', '.', '<', '>', '/', '?', '|', '\\', '`', '~']
const defaultSelection = [...lowercase, ...uppercase]

const generatePassBtn = document.querySelector('#btn-generate-password')
const pswdLengthBtn = document.querySelector('#btn-pswd-length')
const password1 = document.querySelector('#password1')
const password2 = document.querySelector('#password2')

const numbersCheck = document.querySelector('#numbers')
const specialCharsCheck = document.querySelector('#special_chars')
const pswdLengthInput = document.querySelector('#btn-pswd-length')

// Global variables
let selection = [...defaultSelection, ...numbers, ...specialChars]
let pswdLength = pswdLengthBtn.value

/**
 * Helper function to update the selection
 */
function updateSelection() {
    selection = [...defaultSelection]
    if (numbersCheck.checked) selection = [...selection, ...numbers]
    if (specialCharsCheck.checked) selection = [...selection, ...specialChars]
}

/**
 * Helper function to generate a random index
 * @returns {number} A random index from the selection array
 */
function randomIndex() { 
    return Math.floor(Math.random() * selection.length)
}

/**
 * Function to generate a password
 * @returns {string} - A random password
 */
function generatePassword() {
    let password = []
    for(let i = 0; i < pswdLength; i++) {
        password.push(selection[randomIndex()])
    }
    return password
}

// Event listeners
numbersCheck.addEventListener('change', updateSelection)
specialCharsCheck.addEventListener('change', updateSelection)
pswdLengthInput.addEventListener('change', updateSelection)

generatePassBtn.addEventListener('click', () => {
    password1.textContent = generatePassword().join('')
    password2.textContent = generatePassword().join('')
})

