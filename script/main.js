
// ../../VGS/vsws


function fetchPoke(){
    const userPoke = document.getElementById("urlPoke").value
    const baseUrl = `https://pokeapi.co/api/v2`
    const url = `${baseUrl}/pokemon/${userPoke}`

        fetch(url)
            .then(res => 
                res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(`error ${err}`);
            });


};




const arrQuerySelector = [
        "#sendTemp",
        "#tossCoin",
        "#counterInc",
        "#counterDec",
        "#counterReset",
        "#dicerollerThrow",
        "#eightBallAnswer",
        "#tossCoinReset",
        "#selectRock",
        "#selectPaper",
        "#selectScissors",
        "#searchPoke"
];

const arrEventRunner = [
        convertCelcius,
        coinToss,
        counterAdd,
        counterDec,
        counterZero,
        diceRoll,
        getEightBall,
        coinReset,
        janKenStart,
        janKenStart,
        janKenStart,
        fetchPoke,

];

function innerHtmlFunc(idElement, textString) {
    // assembly for innerHTML
    // created to make my js page look "less messy"

    return document.getElementById(idElement).innerHTML = textString;
};


function createClickEventRunner (querySelection, eventRunner){
    //  to add event listener, create #id string in arrQuerySelection 
    //  and the function triggered by click in arrEventRunner 

    for (let x = 0 ; x < eventRunner.length; x++ ) {

        document.querySelector(querySelection[x]).addEventListener("click",eventRunner[x]);
    };
};

function randIntRang(minRange, maxRange) {
    return (Math.random()*(maxRange - minRange)+1).toFixed(0);
}

createClickEventRunner(arrQuerySelector, arrEventRunner);

var uCounter = 0;
innerHtmlFunc("counterBotResult", uCounter);

var headsResult = 0
var tailsResult = 0

function dateLearn() {
    let currentDate = new Date();
    let gitMonth = currentDate.toLocaleString('default',{month: 'long'});
    let weekArr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    alert(`Welcome!`);
    alert(`Hi Today is ${weekArr[currentDate.getDay()]}, ${gitMonth} ${currentDate.getDate()}`);
    
};

function convertCelcius() {
    let uInp = Number(document.getElementById('tempInput').value);
    if (isNaN(uInp)){
        alert('ERROR: Please enter Number Values');
        document.location.reload(true);

    } else {
        result = ((uInp-32) *5/9).toFixed(1);
        document.getElementById("upperTemp").innerHTML = "Temp in Celcius: "
        document.getElementById('lowerTemp').innerHTML = `${result} C`;
    }

};

function coinToss () {

    let result = (Math.random().toFixed(1)*10)%2;
    let totalCount = 0;

    let headsPerc = 0;
    let tailsPerc = 0;

    if (result == 1 ){
        headsResult += 1;
        innerHtmlFunc("coinTopResult", `Heads: ${headsResult}`);
    } else {
        tailsResult += 1;
        innerHtmlFunc("coinBotResult", `Tails: ${tailsResult}`);
    }

    totalCount = headsResult + tailsResult;
    tailsPerc = tailsResult/totalCount;
    headsPerc = headsResult/totalCount;

    innerHtmlFunc("coinHeadsPerc",`Heads: ${(headsPerc*100).toFixed(1)}%`);
    innerHtmlFunc("coinTailsPerc",`Tails: ${(tailsPerc*100).toFixed(1)}%`);

};

function coinReset(){

    tailsResult = 0;
    headsResult = 0;
    innerHtmlFunc("coinBotResult", `Tails: ${tailsResult}`);
    innerHtmlFunc("coinTopResult", `Heads: ${headsResult}`);
    innerHtmlFunc("coinHeadsPerc", `Heads: 0.0%`);
    innerHtmlFunc("coinTailsPerc", `Tailss: 0.0%`);

};

function counterAdd() {
    uCounter +=1;
    innerHtmlFunc("counterBotResult", uCounter);
};

function counterDec() {
    uCounter -= 1;
    innerHtmlFunc("counterBotResult", uCounter);
};

function counterZero() {
    uCounter = 0;
    innerHtmlFunc("counterBotResult", uCounter);
};

function diceRoll(){

    const hitRoll = Math.round(Number(Math.random()*(20-1)+1));

    let numDice = document.getElementById("dicerollerDiceNumber").value;
    let numSides = document.getElementById("dicerollerDiceSides").value;
    let armorClass = Number(document.getElementById("dicerollerAC").value);
    let hitThaco = Number(document.getElementById("dicerollerTHACO").value);

    let hitChance = hitThaco - armorClass;
    let totalDmg = 0;


    innerHtmlFunc("dicerollerTopResult", `Total damage from ${numDice}D${numSides}:`);


    do {

        totalDmg += Math.round(Math.random()*(numSides-1)+1);
        numDice -= 1;

    } while (numDice != 0);


    if (hitRoll == 20 ){

        innerHtmlFunc("dicerollerHitRoll", `${hitRoll} - CRITICAL HIT! Torm take you!!`);
        innerHtmlFunc("dicerollerHitResult", ``);

    } else if (hitRoll == 1) {

        innerHtmlFunc("dicerollerHitRoll", `${hitRoll} - CRITICAL MISS!`);
        innerHtmlFunc("dicerollerHitResult", ``);

    } 
    
    else {

        if ( hitRoll >= hitChance ) {

            innerHtmlFunc("dicerollerHitRoll", `to Hit: ${hitChance}`);
            innerHtmlFunc("dicerollerHitResult", `You Rolled ${hitRoll}: HIT`);

            
        } else {

            innerHtmlFunc("dicerollerHitRoll", `to Hit: ${hitChance}`);
            innerHtmlFunc("dicerollerHitResult", `You Rolled ${hitRoll}: MISS`);

        }
    }

    innerHtmlFunc("dicerollerBotResult", String(totalDmg));

};

function getEightBall() {
    
    const answerList = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy, try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
    ];

    let randNum = Math.round(Math.random()*(answerList.length-1));

    innerHtmlFunc("eightballResponse", `${answerList[randNum]}`);

};

function janKenStart(event) {

    function checkWinner(pC,aC){

        if ((pC == 'Rock' && aC == 'Scissors') || 
        (pC == 'Paper' && aC == 'Rock') ||
        (pC == 'Scissors' && aC == 'Paper')
        ){
            innerHtmlFunc("jankenResult", `Result: You're a Winner!`);
        
        } else if ((pC == 'Rock' && aC == 'Rock') || 
        (pC == 'Paper' && aC == 'Paper') ||
        (pC == 'Scissors' && aC == 'Scissors')
        ){
            innerHtmlFunc("jankenResult", `Result: Tie Tie!`);

        } else {

            innerHtmlFunc("jankenResult", `Result: You Lose!`);

        }

    };

    let pChoice = event.target.innerHTML;
    let bChoice = janKenPo();

    innerHtmlFunc("jankenPlayerChoice",`PLAYER: ${pChoice}`);
    innerHtmlFunc("jankenAIChoice",`AI: ${bChoice}`);

    checkWinner(pChoice,bChoice);

};



function janKenPo(){
  let x = Math.random();
  let result = x < 0.33 ? 'Rock': x < 0.66 ? 'Paper' : 'Scissors';
  return result;
};

