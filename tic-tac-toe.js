window.addEventListener("DOMContentLoaded", (event) => {
    let board = document.getElementById("tic-tac-toe-board");
    let turn = true;
    let x = [];
    let o = [];
    let gameOver = false;
    console.log(board);
    board.addEventListener("click", (e) => {
        console.log(e.target.id)
        if (!e.target.style.backgroundImage && !gameOver)  {
            if (turn) {
                x.push(e.target.className);
                //console.log(x);
                // e.target.innerHtml = "<img src=https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg>"
                e.target.style.backgroundImage =
            "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg)";
            checkForWinner(x, 'X');
            } else {
                o.push(e.target.className);
                e.target.style.backgroundImage =
                "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg)"
                checkForWinner(o, 'O');
            }
            turn = !turn;
        }

    });
    function checkForWinner(arr, team){
        for(num=0; num<3; num++){
            winner = document.getElementById("game-status");
            let rowCount = arr.reduce((count, box) => box.includes(`row-${num}`) ? count+1 : count, 0);
            let colCount = arr.reduce((count, box) => box.includes(`col-${num}`) ? count+1 : count, 0);
            if(rowCount === 3 || colCount === 3){
                winner.innerHTML = `Winner: ${team}`;
                gameOver = true;
                return;
            }
        }
        if(arr.includes("square row-2 col-2")){
            if(arr.includes("square row-1 col-1") && arr.includes("square row-3 col-3")){
                winner.innerHTML = `Winner: ${team}`;
                gameOver = true;
                return;
            }
            else if(arr.includes("square row-1 col-3") && arr.includes("square row-3 col-1")){
                winner.innerHTML = `Winner: ${team}`;
                gameOver = true;
                return;
            }
        }
        if(x.length + o.length === 9){
            winner.innerHTML = `Winner: none`;
            gameOver = true;
            return;
        }
    }
})
