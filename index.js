const konamiCode = document.createElement('p')
const buttonFirst = document.createElement('button')
const buttonSecond = document.createElement('button')
const logo = document.querySelector('.konami-logo')

const sequenceOneCheck = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a','Enter']
const sequenceTwoCheck = ['ArrowRight','ArrowLeft','ArrowDown','ArrowUp','a','b','Enter']

const sequenceOneText = ['↑','↑','↓','↓','←','→','←','→','B','A','Enter']
const sequenceTwoText = ['→','←','↓','↑','A','B','Enter']

document.body.append(konamiCode)
konamiCode.append(buttonFirst, buttonSecond)

konamiCode.style.fontSize = "40px"
buttonFirst.style.fontSize = "25px"
buttonSecond.style.fontSize = "25px"

buttonFirst.innerText = "Code A"
buttonSecond.innerText = "Code B"

buttonFirst.addEventListener('click', function() {
konamiCode.innerHTML = "<span>↑</span> ↑ ↓ ↓ ← → ← → B A Enter" 
keyLogic(sequenceOneCheck, sequenceOneText)
})

buttonSecond.addEventListener('click', function() {
konamiCode.innerHTML = "<span>→</span> ← ↓ ↑ A B Enter" 
keyLogic(sequenceTwoCheck, sequenceTwoText)
})


function keyLogic(sequence, text) {
let sequenceArray = []
document.addEventListener("keydown", function(event) {
    
    sequenceArray.push(event.key)

    if(checkIncorrectSequence(sequenceArray, sequence)) {
        logo.classList.remove("combo")
        sequenceArray = []
    }

    if(correctCode(sequenceArray, sequence)) {
        alert("You have unlocked the path, good for you")
        logo.classList.add("combo")
        sequenceArray = []
    }

    generateHTML(sequenceArray, text)

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

function generateHTML(currentSequence, sequenceText) {
    let html = ``
    for (let i = 0; i < sequenceText.length; i++) {
        if(currentSequence.length === i) {
            html += `<span>${sequenceText[i]}</span> `
        }
        else {
            html += `${sequenceText[i]} `
        }
    }

    konamiCode.innerHTML = html
}