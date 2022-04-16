
// ../../VGS/vsws


const arrQuerySelector = [
        "#sendTemp",
        "#tossCoin",
        "#counterInc",
        "#counterDec",
        "#counterReset",
        "#dicerollerThrow",
        "#eightBallAnswer",
        "#tossCoinReset"
];

const arrEventRunner= [
    convertCelcius,
    coinToss,
    counterAdd,
    counterDec,
    counterZero,
    diceRoll,
    getEightBall,
    coinReset
];

function innerHtmlFunc(idElement, textString) {
    document.getElementById(idElement).innerHTML = textString;
};


function createClickEventRunner (querySelection, eventRunner){
    for (let x = 0 ; x < eventRunner.length; x++ ) {
    document.querySelector(arrQuerySelector[x]).addEventListener("click",arrEventRunner[x]);
    };
};


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
    document.getElementById("coinHeadsPerc").innerHTML = `Heads: ${(headsPerc*100).toFixed(1)}%`;
    document.getElementById("coinTailsPerc").innerHTML = `Tails: ${(tailsPerc*100).toFixed(1)}%`;

};

function coinReset(){
    tailsResult = 0;
    headsResult = 0;
    document.getElementById("coinBotResult").innerHTML = `Tails: ${tailsResult}`;
    document.getElementById("coinTopResult").innerHTML = `Heads: ${headsResult}`;
    document.getElementById("coinHeadsPerc").innerHTML = `Heads: 0.0%`;
    document.getElementById("coinTailsPerc").innerHTML = `Tailss: 0.0%`;

};

function counterAdd() {
    uCounter +=1;
    document.getElementById("counterBotResult").innerHTML = uCounter;
};

function counterDec() {
    uCounter -= 1;
    document.getElementById("counterBotResult").innerHTML = uCounter;
};

function counterZero() {
    uCounter = 0;
    document.getElementById("counterBotResult").innerHTML = uCounter;
};

function diceRoll(){

    let numDice = document.getElementById("dicerollerDiceNumber").value;
    let numSides = document.getElementById("dicerollerDiceSides").value;
    const hitRoll = Math.round(Number(Math.random()*(20-1)+1));
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
        document.getElementById("dicerollerHitRoll").innerHTML = `${hitRoll} - CRITICAL HIT! Torm take you!!`;
        document.getElementById("dicerollerHitResult").innerHTML = ``;
    } else if (hitRoll == 1) {
        document.getElementById("dicerollerHitRoll").innerHTML = `${hitRoll} - CRITICAL MISS!`;
        document.getElementById("dicerollerHitResult").innerHTML = ``;
    } 
    
    else {

        if ( hitRoll >= hitChance ){
            document.getElementById("dicerollerHitRoll").innerHTML = `to Hit: ${hitChance}`;
            document.getElementById("dicerollerHitResult").innerHTML = `You Rolled ${hitRoll}: HIT`;
            
        } else {
            document.getElementById("dicerollerHitRoll").innerHTML = `to Hit: ${hitChance}`;
            document.getElementById("dicerollerHitResult").innerHTML = `You Rolled ${hitRoll}: MISS`;

        }
    }

    document.getElementById("dicerollerBotResult").innerHTML = String(totalDmg);

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

    document.getElementById("eightballresponse").innerHTML = `${answerList[randNum]}`;

};


