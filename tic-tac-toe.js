window.addEventListener("DOMContentLoaded", (event) => {
    let board = document.getElementById("tic-tac-toe-board");
    let turn = true;
    console.log(board);
    board.addEventListener("click", (e) => {
        console.log(e.target.id)
        if (!e.target.style.backgroundImage) {
            if (turn) {
                // e.target.innerHtml = "<img src=https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg>"
                e.target.style.backgroundImage =
            "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg)"
            } else {
                e.target.style.backgroundImage = 
                "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg)"
            }
        turn = !turn;
        }
        
    })
})