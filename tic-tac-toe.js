window.addEventListener("DOMContentLoaded", (event) => {
    let board = document.getElementById("tic-tac-toe-board");
    let turn = true;
    let x = [];
    let o = [];
    let gameOver = false;
    let compTurn = Math.random() >= .5;
    let newGameButton = document.getElementById("new-game");
    let hardMode = true;
    let difficultyButton = document.getElementById("difficulty-button")

    difficultyButton.addEventListener("click", e => {
        hardMode = !hardMode
        if (hardMode) {
            difficultyButton.innerText = "Easy"
        } else {
            difficultyButton.innerText = "Hard"
        }
    })
    if (turn === compTurn) {
        computerTurn();
    }
    let player = document.createElement('p');
    if (compTurn === false) {
        player.innerHTML = "User: X Computer: O"
            document.getElementById("game-status").appendChild(player);
    } else {
        player.innerHTML = "User: O Computer: X"
            document.getElementById("game-status").appendChild(player);
    }


    newGameButton.disabled = true;
    let resetButton = document.getElementById("reset-button");
    repopulate();


    board.addEventListener("click", (e) => {
        console.log(e.target.id)
        if (!e.target.style.backgroundImage && !gameOver)  {
            if (turn) {
                x.push(e.target.className);
                e.target.style.backgroundImage =
                "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg)";
                saveStatus();
            checkForWinner(x, 'X');
            } else {
                o.push(e.target.className);
                e.target.style.backgroundImage =
                "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg)"
                saveStatus();
                checkForWinner(o, 'O');
            }
            turn = !turn;
            if (turn === compTurn && !gameOver) {
                if (hardMode) {
                    smartComputer();
                } else {
                    computerTurn();
                }
                
            }
        }

    });

    function computerTurn () {
        let row = Math.floor(3 * Math.random()) + 1;
        let col = Math.floor(3 * Math.random()) + 1;

        let square = `square row-${row} col-${col}`;

        while (!gameOver && (x.includes(square) || o.includes(square))) {
            row = Math.floor(3 * Math.random()) + 1;
            col = Math.floor(3 * Math.random()) + 1;
            square = `square row-${row} col-${col}`;
        }

        let targetSquare = document.getElementsByClassName(square)[0];

          if (turn) {
              x.push(targetSquare.className);
              targetSquare.style.backgroundImage =
                  "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg)";
              saveStatus();
              checkForWinner(x, 'X');
          } else {
              o.push(targetSquare.className);
              targetSquare.style.backgroundImage =
                  "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg)"
              saveStatus();
              checkForWinner(o, 'O');
          }
          turn = !turn;
    }
    function smartComputer(){
        opponentArray = turn ? o : x;
        selfArray = turn ? x : o;
        let diag1 = ["square row-1 col-1", "square row-3 col-3", "square row-2 col-2"];
        let diag2 = ["square row-1 col-3", "square row-3 col-1", "square row-2 col-2"];
        let d1Count = 0;
        for(let sq of diag1){
            if(opponentArray.includes(sq)){
                d1Count++;
            }
        }
        if(d1Count == 2){
            for(let sq of diag1){
                if(!opponentArray.includes(sq) && !selfArray.includes(sq)){
                    targetSquare = document.getElementsByClassName(sq)[0];
                    if (turn) {
                        x.push(targetSquare.className);
                        targetSquare.style.backgroundImage =
                            "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg)";
                        saveStatus();
                        checkForWinner(x, 'X');
                    } else {
                        o.push(targetSquare.className);
                        targetSquare.style.backgroundImage =
                            "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg)"
                        saveStatus();
                        checkForWinner(o, 'O');
                    }
                    turn = !turn;
                    return;
                }
            }
        }
        let d2Count = 0;
        for(let sq of diag2){
            if(opponentArray.includes(sq)){
                d2Count++;
            }
        }
        if(d2Count == 2){
            for(let sq of diag2){
                if(!opponentArray.includes(sq) && !selfArray.includes(sq)){
                    targetSquare = document.getElementsByClassName(sq)[0];
                    if (turn) {
                        x.push(targetSquare.className);
                        targetSquare.style.backgroundImage =
                            "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg)";
                        saveStatus();
                        checkForWinner(x, 'X');
                    } else {
                        o.push(targetSquare.className);
                        targetSquare.style.backgroundImage =
                            "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg)"
                        saveStatus();
                        checkForWinner(o, 'O');
                    }
                    turn = !turn;
                    return;
                }
            }
        }

        for(num=1; num<=3; num++){
            let rowCount = opponentArray.reduce((count, box) => box.includes(`row-${num}`) ? count+1 : count, 0);
            if(rowCount == 2){
                for(col=1; col<=3;col++){
                    let square = `square row-${num} col-${col}`
                    if(!x.includes(square) && !o.includes(square)){
                        targetSquare = document.getElementsByClassName(square)[0];

                        if (turn) {
                            x.push(targetSquare.className);
                            targetSquare.style.backgroundImage =
                                "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg)";
                            saveStatus();
                            checkForWinner(x, 'X');
                        } else {
                            o.push(targetSquare.className);
                            targetSquare.style.backgroundImage =
                                "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg)"
                            saveStatus();
                            checkForWinner(o, 'O');
                        }
                        turn = !turn;
                        return;
                    }
                }
            }
            let colCount = opponentArray.reduce((count, box) => box.includes(`col-${num}`) ? count+1 : count, 0);
            if(colCount == 2){
                for(row=1; row<=3;row++){
                    let square = `square row-${row} col-${num}`
                    if(!x.includes(square) && !o.includes(square)){
                        targetSquare = document.getElementsByClassName(square)[0];
                        if (turn) {
                            x.push(targetSquare.className);
                            targetSquare.style.backgroundImage =
                                "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg)";
                            saveStatus();
                            checkForWinner(x, 'X');
                        } else {
                            o.push(targetSquare.className);
                            targetSquare.style.backgroundImage =
                                "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg)"
                            saveStatus();
                            checkForWinner(o, 'O');
                        }
                        turn = !turn;
                        return;
                    }
                }
            }
        }
        computerTurn();
    }

    function saveStatus(){
        let divs = document.querySelectorAll('div');
        divs.forEach(div => {
            if (div.className.includes("row")) {
                let bgImage = div.style.backgroundImage;
                localStorage.setItem(div.id, bgImage);
            }
        })
    }

    function repopulate(){
        let divs = document.querySelectorAll('div');
        divs.forEach(div => {
            if (div.className.includes("row")) {
                div.style.backgroundImage = localStorage.getItem(div.id);
                if (div.style.backgroundImage.includes('player-x')){
                    x.push(div.className);
                    checkForWinner(x, "X");
                }
                else if (div.style.backgroundImage.includes("player-o")){
                    o.push(div.className);
                    checkForWinner(o, "O");
                }
            }
        });
    }

    newGameButton.addEventListener("click", e => {
        let divs = document.querySelectorAll('div');
        divs.forEach(div => {
            if (div.className.includes("row")) {
                div.style.backgroundImage = "";
            }
        })
        gameOver = false;
        turn = true;
        winner = document.getElementById("game-status");
        winner.innerHTML = ``;
        x = [];
        o = [];
        compTurn = Math.random() >= .5;

        if (compTurn === false) {
            player.innerHTML = "User: X Computer: O"
                document.getElementById("game-status").appendChild(player);

        } else {
            player.innerHTML = "User: O Computer: X"
                document.getElementById("game-status").appendChild(player);
        }

        if (compTurn === turn) {
            computerTurn();
        }

    })

    resetButton.addEventListener('click', e => {
        winner.innerHTML = `Winner: ${!turn?"X":"O"}`
        gameOver = true;
        newGameButton.disabled = false;
    })

    //Check for Winner
    function checkForWinner(arr, team){
        //Checks for Rows and Collumns
        console.log("x:", x,"o:", o);
        console.log(turn);
        for(num=1; num<=3; num++){
            winner = document.getElementById("game-status");
            let rowCount = arr.reduce((count, box) => box.includes(`row-${num}`) ? count+1 : count, 0);
            let colCount = arr.reduce((count, box) => box.includes(`col-${num}`) ? count+1 : count, 0);
            if(rowCount === 3 || colCount === 3){
                winner.innerHTML = `Winner: ${team}`;
                gameOver = true;
                newGameButton.disabled = false;
                return;
            }
        }
        //Checks for Edge Case of Diagonal
        if(arr.includes("square row-2 col-2")){
            if(arr.includes("square row-1 col-1") && arr.includes("square row-3 col-3")){
                winner.innerHTML = `Winner: ${team}`;
                gameOver = true;
                newGameButton.disabled = false;
                return;
            }
            else if(arr.includes("square row-1 col-3") && arr.includes("square row-3 col-1")){
                winner.innerHTML = `Winner: ${team}`;
                gameOver = true;
                newGameButton.disabled = false;
                return;
            }
        }
        //Checks for Draw
        if(x.length + o.length === 9){
            winner.innerHTML = `Winner: none`;
            gameOver = true;
            newGameButton.disabled = false;
            return;
        }
    }
})
