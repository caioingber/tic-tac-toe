//creating grid boxes
let boxes = document.querySelectorAll('.game-box')
let container = document.querySelector('#game-container')
let turn = 0

for (let i=0; i < boxes.length; i++) {
    boxes[i].setAttribute('id', i+1)
    let color = boxes[i].color
    // highlighting boxes
    function showMark () {
        turn += 1
        if (turn % 2 === 0) {
            boxes[i].classList.add('red')
            color = 'red'
        } else {
            if (color !== 'red') {
            boxes[i].classList.add('blue')
            }
        }
    }
    boxes[i].addEventListener('click', showMark)
}

