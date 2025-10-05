const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', "'", '"', ',', '.', '<', '>', '/', '?', '|', '\\', '`', '~']
const defaultSelection = [...lowercase, ...uppercase]

let selection = []

console.log(defaultSelection)

const numbersCheck = document.querySelector('#numbers')
const specialCharsCheck = document.querySelector('#special_chars')

function updateSelection() {
    selection = [...defaultSelection]
    if (numbersCheck.checked) selection = [...selection, ...numbers]
    if (specialCharsCheck.checked) selection = [...selection, ...specialChars]
    console.log(selection)
}

numbersCheck.addEventListener('change', updateSelection)
specialCharsCheck.addEventListener('change', updateSelection)