gameplay=()=>{
    const player1=Math.floor(Math.random()*6)+1
    const playerpic1=`images/dice${player1}.png`
    document.getElementById('check1').setAttribute('src',playerpic1)

    const player2=Math.floor(Math.random()*6)+1
    const playerpic2=`images/dice${player2}.png`
    document.getElementById('check2').setAttribute('src',playerpic2)

    if(player1>player2){
        document.querySelector('h1').innerHTML=("Player 1 won")
    }
    else if(player1<player2){
        document.querySelector('h1').innerHTML=("Player 2 won")
    }
    else{
        document.querySelector('h1').innerHTML=("Draw")
    }
}