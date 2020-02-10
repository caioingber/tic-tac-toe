//creating grid boxes
let boxes = document.querySelectorAll('.game-box')
let container = document.querySelector('#game-container')
let turn = 0

for (let i=0; i < 9; i++) {
    boxes[i].setAttribute('id', i+1)
    boxes[i].changed = false
    // highlighting boxes
    function showMark () {
        turn += 1
        if (turn % 2 === 0) {
            boxes[i].classList.add('red')
        } else {
            boxes[i].classList.add('blue')
        }
    }
    boxes[i].addEventListener('click', showMark)
}

