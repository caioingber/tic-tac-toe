//creating grid boxes
let boxes = document.querySelectorAll('.game-box')
let container = document.querySelector('#game-container')
let turn = 0
let whoseTurn = document.querySelector('.turn')

for (let i=0; i < boxes.length; i++) {
    boxes[i].setAttribute('id', i+1)
    let color = boxes[i].color
    // highlighting boxes
    function showMark () {
        turn += 1
        if (turn % 2 === 0 && turn < 10) {
            boxes[i].classList.add('red')
            color = 'red'
            whoseTurn.innerHTML = 'Blue\'s Turn'
        } else if (turn >= 9) {
            whoseTurn.innerHTML = 'Game Over!'
            boxes[i].classList.add('blue')
        }
        else {
            if (color !== 'red' && turn < 10) {
            boxes[i].classList.add('blue')
            whoseTurn.innerHTML = 'Red\'s Turn'
            }
        }
    }
    boxes[i].addEventListener('click', showMark)
}

