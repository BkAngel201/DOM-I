
function StartTimer () {
    let intervalTime = 10 // ms
    let timeLimiter = 10 //in seconds
    let miliSecondCounter = 0
    
    
    // timer elements
    // color initialization
    let secondTensElement = document.getElementById("secondTens")
    secondTensElement.classList.remove("redDigit")
    let secondOnesElement = document.getElementById("secondOnes")
    secondOnesElement.classList.remove("redDigit")
    let colonElement = document.getElementById("colon")
    let msHundredsElement = document.getElementById("msHundreds")
    msHundredsElement.classList.remove("redDigit")
    let msTensElement = document.getElementById("msTens")
    msTensElement.classList.remove("redDigit")

    // Timer Variables
    let secondTens = 0
    let secondOnes = 0
    let msHundreds = 0

    // button Element
    let buttonElement = document.querySelector("button")




    if(buttonElement.textContent == "Start Timer") {
        buttonElement.disabled = true;
        let myInterval = setInterval(function() {
        
            secondTensElement.textContent = secondTens
            secondOnesElement.textContent = secondOnes
            msHundredsElement.textContent = msHundreds
            msTensElement.textContent = miliSecondCounter - 1
            if(secondTens == 1) {
                clearInterval(myInterval)
                secondTensElement.classList.add("redDigit")
                secondOnesElement.classList.add("redDigit")
                msHundredsElement.classList.add("redDigit")
                msTensElement.classList.add("redDigit")
                buttonElement.textContent = "Reset Timer"
                buttonElement.disabled = false
            }
            if(miliSecondCounter == 10) {
                miliSecondCounter = 0
                msHundreds ++
            }
    
            if(msHundreds == 5) {
                colonElement.style.color = 'transparent'
            } else if(msHundreds == 0) {
                colonElement.style.color = 'black'
            }
    
            if(msHundreds == 10) {
                msHundreds = 0
                secondOnes ++
            }
            if(secondOnes == 10) {
                secondOnes = 0
                secondTens ++
            }
            
            miliSecondCounter ++;
            
            
        }, intervalTime)
    } else if(buttonElement.textContent == "Reset Timer") {
        secondTensElement.textContent = 0
        secondOnesElement.textContent = 0
        msHundredsElement.textContent = 0
        msTensElement.textContent = 0
        buttonElement.textContent = "Start Timer"
    }
    
    

    
}
