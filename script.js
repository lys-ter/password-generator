// DOM variables
const cardsTotal = document.querySelector('.player.cards_total')
const cardsDiv = document.querySelector('.player.cards')

const dealerCardsTotal = document.querySelector('.dealer.cards_total')
const dealerCardsDiv = document.querySelector('.dealer.cards')

const btnHit = document.querySelector('.btn-hit')
const btnStand = document.querySelector('.btn-stand')
const btnNewGame = document.querySelector('.btn-new-game')
const nextActionMsg = document.querySelector('.next_action_msg p')

// Global variables
let total = 0
let dealerTotal = 0
let turn = 'Player'

/**
 * function to get a random value between 1 and 10
 * @returns {number} - A random value
 */
function getRandomCard() { 
    let randomCard = Math.floor(Math.random() * 10) + 1
    return randomCard
}

/**
 * Function to check the status of the game and display adequate message
 * @returns {string} - A Message if the player busts or loses
*/
function totalCheck(playerName, playerTotal) {
    let msg = ''
    if (playerTotal > 21) {
        msg = `${playerName} Bust!`
        endGame()
    } else if (playerTotal === 21) { 
        msg = `${playerName} Wins!`
        endGame()
    }
    nextActionMsg.textContent = msg
}

/**
 * Function that reckons the value of two cards drawn when the game starts for each player
 * @returns {number} - A random value
 */
function startGame() {
        cardBuilder()
        cardBuilder()
        cardBuilder()
        cardBuilder()
}

function cardBuilder() {
    let newCardValue = getRandomCard()
    let newCount = 0
    let currentTurn = turn

    currentTurn === 'Player' ? totalCheck('Player', total) : totalCheck('Dealer', dealerTotal)

    let section = document.createElement('section')
    let h2 = document.createElement('h2')
    let p = document.createElement('p')

    if (turn === 'Dealer') {
        if (dealerTotal >= 17) {
            nextActionMsg.textContent = 'Dealer stands'
            turn = 'Player'
            return
        } else {
            dealerCardsDiv.append(section)
            newCount = document.querySelectorAll('.dealer.cards section').length
            dealerTotal += newCardValue
            dealerCardsTotal.textContent = dealerTotal
            turn = 'Player'
        }
    } 

    else if (turn === 'Player') {
        cardsDiv.append(section)
        newCount = document.querySelectorAll('.player.cards section').length
        total += newCardValue
        cardsTotal.textContent = total
        turn = 'Dealer'
    } 
    
    section.className = `${currentTurn} card-slot`
    console.log(turn, currentTurn)

    section.append(h2)
    h2.textContent = `Card ${newCount}`

    section.append(p)
    p.className = `${currentTurn}-card${newCount}`

    p.textContent = newCardValue
    
    currentTurn === 'Player' ? totalCheck('Player', total) : totalCheck('Dealer', dealerTotal)
}

/**
 * Function to manage the endgame
 */
function endGame() {
    btnNewGame.style.display = 'block'
    btnHit.disabled = true
}

/**
 * Function to resset the game
 */
function resetGame() {
    total = 0
    dealerTotal = 0

    btnNewGame.style.display = 'none'
    btnHit.disabled = false
    btnStand.disabled = false
    cardsTotal.textContent = total

    cardsDiv.innerHTML = ''
    dealerCardsDiv.innerHTML = ''
    nextActionMsg.textContent = ''
}

// Event listeners
btnHit.addEventListener('click', () => {
    cardBuilder()
})

btnStand.addEventListener('click', () => {
    turn = turn === 'Dealer' ? 'Player' : 'Dealer'
    btnHit.disabled = true
    btnStand.disabled = true
    
    nextActionMsg.textContent = 'Player stands'
    if (total >= dealerTotal && dealerTotal >= 17) {
        nextActionMsg.textContent = 'Player Wins!'
    } 
    
    else if (dealerTotal < 17) {
        cardBuilder()
    } 
    
    else {
        nextActionMsg.textContent = 'Dealer Wins!'
    }

    endGame()
})

btnNewGame.addEventListener('click', () => {
    resetGame()
    startGame()
})

// Initializing a first game
startGame()