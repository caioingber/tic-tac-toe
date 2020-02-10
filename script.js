let boxes = document.querySelectorAll('.game-box')
let turn = 0
let whoseTurn = document.querySelector('.turn')
let reset = document.querySelector('.end-game')
let blue = []
let red = []
let winningConditions = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]
let matchCount = 0
let isWinner = false;

for (let i=0; i < boxes.length; i++) {
    boxes[i].setAttribute('id', i+1)
    boxes[i].addEventListener('click', showMark)
}


//highlight boxes & determine tie
function showMark (e) {
    e.preventDefault()
    turn +=1
    if (turn % 2 === 0 && turn < 10) {
        e.target.classList.add('red')
        whoseTurn.innerHTML = 'Blue\'s Turn'
        red.push(Number(e.target.id))
        colorName = "Red"
        if(red.length >= 3) {
            compare(red)
        }
    } else {
        e.target.classList.add('blue')
        whoseTurn.innerHTML = 'Red\'s Turn'
        blue.push(Number(e.target.id))
        colorName = "Blue"
        if(blue.length >= 3) {
            compare(blue)
        }           
        }
    if (turn < 9 && isWinner === true) {
        for (let i = 0; i <boxes.length; i++) {
            boxes[i].removeEventListener('click', showMark)
        }
    }
    //checking Tie
    if (turn >= 9 && isWinner === false) {
        whoseTurn.innerHTML = 'It\'s a tie!'
    }
    e.target.removeEventListener('click', showMark)
}



//reset function
function resetGame(e) {
    e.preventDefault()
    turn = 0
    whoseTurn.innerHTML = ""
    for (let i = 0; i <boxes.length; i++){
        boxes[i].classList.remove('blue')
        boxes[i].classList.remove('red')
        boxes[i].addEventListener('click', showMark)
    }
    red = []
    blue = []
    isWinner = false
}  

reset.addEventListener('click', resetGame)


//checkWinner
function compare (color) {
    for (let i = 0; i < winningConditions.length; i++) {
        matchCount = 0
        for (let j = 0; j < color.length; j++) {
            if (color.includes(winningConditions[i][j]) === true) {
                matchCount = matchCount + 1
                if (matchCount === 3) {
                    whoseTurn.innerHTML = `${colorName} Wins!`
                    isWinner = true
                }
            }
        }
    }
}



