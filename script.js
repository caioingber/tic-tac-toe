//creating grid boxes

for (let i=0; i < 9; i++) {
    let box = document.createElement('div')
    box.classList.add('game-box')
    box.setAttribute('id', i+1)
    let container = document.querySelector('#game-container')
    container.appendChild(box)
}

//highlighting boxes