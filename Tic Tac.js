let box=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newBtn=document.querySelector("#newBtn");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");


let turnO= true//player x, player y


const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{

    turnO=true;
    enableBox();
    msgcontainer.classList.remove("hide");
}



box.forEach((box)=>{
    box.addEventListener("click", ()=>{
      //  console.log("box was clicked");
        if(turnO)
        {
        box.innerText="O";
        turnO=false;
        }
        else
        {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});



const checkWinner=()=>{

    for(let pattern of winPatterns){ 

        let pos1Val= box[pattern[0]].innerText;
        let pos2Val= box[pattern[1]].innerText;
        let pos3Val= box[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !="")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
               // console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
   }
};


const showWinner=(winner) =>{
    msg.innerText=`Congratulation Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBox();
};

const disableBox=()=>{
 
    for(let boxes of box)
    boxes.disabled=true;
};


const enableBox=()=>{
 
    for(let bx of box)
    {
    bx.disabled=false;
    bx.innerText = "";
    }
};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
