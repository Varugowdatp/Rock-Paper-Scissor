let userScore=0;
let compScore=0;
const msgs=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice")
const userScorePara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#Computer-score");
const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    console.log("draw");
    msgs.innerText="Game Draw 😒 Play again";
    msgs.style.backgroundColor="orange";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msgs.innerText=`You Win 😎Your ${userChoice} beats ${compChoice}`;
        msgs.style.backgroundColor="green";
        console.log("u win");

    }else{
        compScore++;
        compScorepara.innerText=compScore;
        msgs.innerText=`You lose 🫤 ${compChoice} beats your ${userChoice}`;
          msgs.style.backgroundColor="red";
        console.log("u lose");
    }
}
const playGame=(userChoice)=>{
    const compChoice=genComputerChoice();
    console.log("computer choice",compChoice);
    if(userChoice==compChoice){
    drawGame();
    }else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice=="paper"?false:true;

        }else if(userChoice=="papre"){
            userWin=compChoice=="scissors"?false:true;
        }else{
            userWin=compChoice=="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log(" user choice",userChoice);
        playGame(userChoice);
    });
});