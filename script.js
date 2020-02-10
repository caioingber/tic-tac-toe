//creating grid boxes
let boxes = document.querySelectorAll('.game-box')
let container = document.querySelector('#game-container')
let turn = 0
let whoseTurn = document.querySelector('.turn')
let reset = document.querySelector('.end-game')
let blue = []
let red = []
let winningConditions = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]
let matchCount = 0
let isWinner = false;
let body = document.querySelector('body')

for (let i=0; i < boxes.length; i++) {
    boxes[i].setAttribute('id', i+1)
    // highlighting boxes
    function showMark (e) {
        e.preventDefault()
        turn +=1
        if (turn % 2 === 0 && turn < 10) {
            boxes[i].classList.add('red')
            whoseTurn.innerHTML = 'Blue\'s Turn'
            red.push(Number(e.target.id))
            colorName = "Red"
            if(red.length >= 3) {
                compare(red)
            }
        } else {
            boxes[i].classList.add('blue')
            whoseTurn.innerHTML = 'Red\'s Turn'
            blue.push(Number(e.target.id))
            colorName = "Blue"
            if(blue.length >= 3) {
                compare(blue)
            }           
            }
        if (turn >= 9 && isWinner === false) {
            whoseTurn.innerHTML = 'It\'s a tie!'
            // boxes[i].classList.add('blue')
        }
        boxes[i].removeEventListener('click', showMark)
    }
    boxes[i].addEventListener('click', showMark)
    if (turn < 9 && isWinner === true) {
        boxes[i].removeEventListener('click', showMark)
    }
    function resetGame(e) {
        e.preventDefault()
        turn = 0
        whoseTurn.innerHTML = ""
        boxes[i].classList.remove('blue')
        boxes[i].classList.remove('red')
        red = []
        blue = []
        boxes[i].addEventListener('click', showMark)
    }  
    reset.addEventListener('click', resetGame)
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
}



