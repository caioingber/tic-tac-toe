for (let i=0; i < 9; i++) {
    let box = document.createElement('div')
    box.classList.add('game-box')
    let container = document.querySelector('#game-container')
    container.appendChild(box)
}