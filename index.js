const konamiCode = document.createElement('p')
const buttonFirst = document.createElement('button')
const buttonSecond = document.createElement('button')
const logo = document.querySelector('.konami-logo')

const sequenceOneCheck = ['↑','↑','↓','↓','←','→','←','→','B','A','Enter']
const sequenceTwoCheck = ['→','←','↓','↑','A','B','Enter']

document.body.append(konamiCode)
konamiCode.append(buttonFirst, buttonSecond)

konamiCode.style.fontSize = "40px"
buttonFirst.style.fontSize = "25px"
buttonSecond.style.fontSize = "25px"

buttonFirst.innerText = "Code A"
buttonSecond.innerText = "Code B"

buttonFirst.addEventListener('click', function() {
konamiCode.innerText = "↑ ↑ ↓ ↓ ← → ← → B A Enter" 
keyLogic(sequenceOneCheck)
})

buttonSecond.addEventListener('click', function() {
konamiCode.innerText = "→ ← ↓ ↑ A B Enter"
keyLogic(sequenceTwoCheck)
})


function keyLogic(sequence) {
let sequenceArray = []
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        sequenceArray.push('↑')
    }

    if (event.key === "ArrowDown") {
        sequenceArray.push('↓')
    }

    if (event.key === "ArrowLeft") {
        sequenceArray.push('←')
    }

    if (event.key === "ArrowRight") {
        sequenceArray.push('→')
    }

    if (event.key === "b") {
        sequenceArray.push('B')
    }

    if (event.key === "a") {
        sequenceArray.push('A')
    }

    if (event.key === "Enter") {
        sequenceArray.push('Enter')
    }

    if(checkIncorrectSequence(sequenceArray, sequence)) {

        sequenceArray = []
    }

    if(correctCode(sequenceArray, sequence)) {
        alert("You have unlocked the path, good for you")
        logo.animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(360deg)' }
          ], {
            duration: 5000,
            iterations: Infinity
          })
        sequenceArray = []
    }

});

}

function checkIncorrectSequence(currentSequence, sequence) {
    let number = 0
    for(let i = 0; i < currentSequence.length; i++) {
        if(currentSequence[i] === sequence[i]) {
            number++
        }
    }
    return number !== currentSequence.length
    
}

function correctCode(currentSequence, sequence) {
    return currentSequence.length === sequence.length
}
