console.log("Javascript loaded!");

//global vars
let headsqty = 0;
let tailsqty = 0;
let total = 0;
let coinImage = document.querySelector("#penny")
let coinHeads = "penny-heads.jpg"
let coinTails = "penny-tails.jpg"
let resultHeader = document.querySelector("#announcement")
let headcount = document.querySelector("#heads-qty")
let tailcount = document.querySelector("#tails-qty")
let headsptgtext = document.querySelector("#heads-ptg")
let tailsptgtext = document.querySelector("#tails-ptg")
//Flip Button Code
let flipButton = document.querySelector("#flip-button");

flipButton.addEventListener('click', function(){
    console.log("Flip button clicked!");
    //flipper code
    let outcome
    let coinflip = Math.floor(Math.random() * 2)
    if (coinflip === 0){ //Heads
        console.log("Heads!")
        headsqty = headsqty + 1
        
        headcount.textContent = headsqty
        coinImage.setAttribute("src", coinHeads)
        resultHeader.textContent = "Heads!"

    }else{ //Tails
        console.log("Tails!")
        tailsqty = tailsqty + 1
       
        tailcount.textContent = tailsqty
        coinImage.setAttribute("src", coinTails)
        resultHeader.textContent = "Tails!"

    } //end else
    //Calculating percentages
    total = total + 1;
    
        headsptgtext.textContent = Math.floor((headsqty / total)*100) + "%"
    
        tailsptgtext.textContent = Math.floor((tailsqty / total)*100) + "%"
    
}) //end function, end flipButton statement

//Clear Button Code
let clearButton = document.querySelector("#clear-button")

clearButton.addEventListener('click',function(){
    console.log("Clearing the board!")
    total = 0;
    headsqty = 0;
    tailsqty = 0;
    headcount.textContent = headsqty
    tailcount.textContent = tailsqty
    headsptgtext.textContent = 0 + " %"  
    tailsptgtext.textContent = 0 + " %"

})

