//creating grid boxes
let boxes = document.querySelectorAll('.game-box')
let container = document.querySelector('#game-container')
let turn = 0
let whoseTurn = document.querySelector('.turn')
let reset = document.querySelector('.end-game')


for (let i=0; i < boxes.length; i++) {
    boxes[i].setAttribute('id', i+1)
    let color = boxes[i].color
    // highlighting boxes
    function showMark (e) {
        console.log(e)
        turn +=1
        if (turn % 2 === 0 && turn < 10) {
            boxes[i].classList.add('red')
            color = 'red'
            whoseTurn.innerHTML = 'Blue\'s Turn'
        } else if (color !== 'red' && turn < 10) {
            boxes[i].classList.add('blue')
            whoseTurn.innerHTML = 'Red\'s Turn'
            color = 'blue'
            }
        if (color !== 'red' && turn >= 9) {
            whoseTurn.innerHTML = 'Game Over!'
            boxes[i].classList.add('blue')
        }
        boxes[i].removeEventListener('click', showMark)
    }
    boxes[i].addEventListener('click', showMark)
    function resetGame(e) {
        e.preventDefault()
        turn = 0
        boxes[i].classList.remove('blue')
        boxes[i].classList.remove('red')
        boxes[i].addEventListener('click', showMark)
    }  
    reset.addEventListener('click', resetGame)
}

