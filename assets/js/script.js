const buttonPlay = document.querySelector("#btn-play");
const numbersDiv = document.querySelector("#numbers");
const result = document.querySelector("#result");
const userNumbers = [];
let correctNumbers = [];

buttonPlay.addEventListener("click", function(){ 
    result.innerHTML = ""; 
    let numbersArray = generateCasualNumbers();
    numbersDiv.innerHTML = numbersArray;
    let correctNumbers = []; 
    setTimeout(() => numbersDiv.innerHTML = "", 30000); 
    
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            const inputNumber = parseInt(prompt("Inserisci un numero da 1 a 100:"));
            userNumbers.push(inputNumber);

            if (numbersArray.includes(inputNumber)) {
                correctNumbers.push(inputNumber);
            }
        }
        result.innerHTML = `Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers}`;     
        
    }, 31000); 
});

function generateCasualNumbers() {   
    let uniqueNumbers = [];
    while (uniqueNumbers.length < 5) {
        let casualNumbers = Math.floor(Math.random() * 100) + 1;
        if (!uniqueNumbers.includes(casualNumbers)) {
            uniqueNumbers.push(casualNumbers);
        }
    }
    return uniqueNumbers;
}