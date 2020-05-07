
function StartTimer () {
    let intervalTime = 10 // ms
    let timeLimiter = 10 //in seconds
    let miliSecondCounter = 0

    // timer elements
    let secondTensElement = document.getElementById("secondTens")
    let secondOnesElement = document.getElementById("secondOnes")
    let colonElement = document.getElementById("colon")
    let msHundredsElement = document.getElementById("msHundreds")
    let msTensElement = document.getElementById("msTens")

    // Timer Variables
    let secondTens = 0
    let secondOnes = 0
    let colon = 0
    let msHundreds = 0

   let myInterval = setInterval(function() {
        
        secondTensElement.textContent = secondTens
        secondOnesElement.textContent = secondOnes
        msHundredsElement.textContent = msHundreds
        msTensElement.textContent = miliSecondCounter - 1
        if(secondTens == 1) {
            clearInterval(myInterval)
        }
        if(miliSecondCounter == 10) {
            miliSecondCounter = 0
            msHundreds ++
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
}
