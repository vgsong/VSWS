class Ringo extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        
    }
}




function rotateInterests() {
    const myInterests = ["cycling", "programming", "reading","retro-gaming"];

    let arrLen = myInterests.length;

    // document.getElementById("chgtext").innerHTML = myInterests[Math.floor(Math.random()*arrLen-0)+0];
    
    for (let contador = 0; contador < 4; contador++){

    document.getElementById("chgtext").innerHTML = contador
    // document.getElementById("chgtext").innerHTML = myInterests[Math.floor(Math.random()*arrLen)]
    console.log(contador)


}






}