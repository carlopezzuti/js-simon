const container = document.querySelector(".container");
const btn = document.querySelector("button")

btn.addEventListener("click", function(){
    const simonArray = generateRandomNumbers(5, 20);
    container.innerHTML = simonArray.join(" ");

    setTimeout(() => container.innerHTML = "", 3000)

    setTimeout(function(){
        let userArray = [];
        for(let i = 1; i <= 5; i++){
            let userNumber = parseInt(prompt(`Scrivi il ${i}° numero che ricordi`));
            userArray.push(userNumber)  
        }
        let comparation = whichBelongsTo(simonArray, userArray);

        if (comparation.length === 5){
            alert(`Hai vinto! I numeri erano ${simonArray.join(" ")} e tu li hai indovinati tutti!`);
        } else {
            alert(`Hai perso. I numeri erano ${simonArray.join(" ")} e tu hai invece scritto ${userArray.join(" ")}, per un totale di ${comparation.length} punti.`)
        }
    }, 3500)
})

function generateRandomNumbers(num, max){
    let randomNumbers = []
    while(randomNumbers.length < num){
        let newNum = Math.floor(Math.random() * (max) +1);
        if (!randomNumbers.includes(newNum)){
            randomNumbers.push(newNum);
        }
    }
    return randomNumbers;
}

function whichBelongsTo(array1, array2){
    let numbers = []
    for (let i = 0; i < 5; i++){
        console.log(array2[i])
        if (array1.includes(array2[i])){
            console.log("Appartiene", array2[i])
            numbers.push(array2[i])
        }
    }
    return numbers
}