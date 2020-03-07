const BOARD_SIZE = 600;
const BOARD_MARGIN = 20;
const TILE_SIZE = BOARD_SIZE / 8;
let turn = 0;
let winner;
let canCastle = {
    white: true,
    black: true
}
let blackBishop;
let blackKing;
let blackKnight;
let blackPawn;
let blackQueen;
let blackRook;
let whiteBishop;
let whiteKing;
let whiteKnight;
let whitePawn;
let whiteQueen;
let whiteRook;
let lastBoard;
let boardHistory = [];
let depth;
let AIEnabled;

function endTurn() {
    if (board.checkMate("white") && !winner) {
        winner = "Black";
        Swal.fire("Checkmate - Black Wins!")
    } else if (board.checkMate("black") && !winner) {
        winner = "White";
        Swal.fire("Checkmate - White Wins!")
    } else if ((board.allMoves("white").length === 0 || board.allMoves("black").length === 0) && !winner) {
        winner = "Draw";
        Swal.fire("Stalemate")
    }
}

function preload() {
    blackBishop = loadImage("assets/black-bishop.png")
    blackKing = loadImage("assets/black-king.png");
    blackKnight = loadImage("assets/black-knight.png");
    blackPawn = loadImage("assets/black-pawn.png");
    blackQueen = loadImage("assets/black-queen.png");
    blackRook = loadImage("assets/black-rook.png");
    whiteBishop = loadImage("assets/white-bishop.png");
    whiteKing = loadImage("assets/white-king.png");
    whiteKnight = loadImage("assets/white-knight.png");
    whitePawn = loadImage("assets/white-pawn.png");
    whiteQueen = loadImage("assets/white-queen.png");
    whiteRook = loadImage("assets/white-rook.png");
}

function setup() {
    createCanvas(BOARD_SIZE + 200, BOARD_SIZE)
    board.addPiece(King({
        pos: [4, 7],
        team: "white",
        img: whiteKing
    }));
    board.addPiece(Queen({
        pos: [3, 7],
        team: "white",
        img: whiteQueen
    }));
    board.addPiece(Bishop({
        pos: [2, 7],
        team: "white",
        img: whiteBishop
    }));
    board.addPiece(Bishop({
        pos: [5, 7],
        team: "white",
        img: whiteBishop
    }));
    board.addPiece(Knight({
        pos: [1, 7],
        team: "white",
        img: whiteKnight
    }));
    board.addPiece(Knight({
        pos: [6, 7],
        team: "white",
        img: whiteKnight
    }));
    board.addPiece(Rook({
        pos: [0, 7],
        team: "white",
        img: whiteRook
    }));
    board.addPiece(Rook({
        pos: [7, 7],
        team: "white",
        img: whiteRook
    }));
    for (let i = 0; i < 8; i++) {
        board.addPiece(Pawn({
            pos: [i, 6],
            team: "white",
            img: whitePawn
        }))
    }
    board.addPiece(King({
        pos: [4, 0],
        team: "black",
        img: blackKing
    }));
    board.addPiece(Queen({
        pos: [3, 0],
        team: "black",
        img: blackQueen
    }));
    board.addPiece(Bishop({
        pos: [2, 0],
        team: "black",
        img: blackBishop
    }));
    board.addPiece(Bishop({
        pos: [5, 0],
        team: "black",
        img: blackBishop
    }));
    board.addPiece(Knight({
        pos: [1, 0],
        team: "black",
        img: blackKnight
    }));
    board.addPiece(Knight({
        pos: [6, 0],
        team: "black",
        img: blackKnight
    }));
    board.addPiece(Rook({
        pos: [0, 0],
        team: "black",
        img: blackRook
    }));
    board.addPiece(Rook({
        pos: [7, 0],
        team: "black",
        img: blackRook
    }));
    for (let i = 0; i < 8; i++) {
        board.addPiece(Pawn({
            pos: [i, 1],
            team: "black",
            img: blackPawn
        }))
    }
}
let counter = 0;

function draw() {
    background(255);
    // Draw the board
    stroke(0);
    strokeWeight(2);
    fill(0, 0, 0, 0)
    rect(0, 0, BOARD_SIZE, BOARD_SIZE)
    noStroke();
    fill(0);
    textSize(20)
    textAlign(LEFT);
    text(`Turn: ${turn % 2 === 0 ? "White" : "Black"}`, BOARD_SIZE + BOARD_MARGIN, 20);
    if (winner) {
        text(`Winner: ${winner}`, BOARD_SIZE + BOARD_MARGIN, 60);
    }
    text(`The AI is playing as \nBlack`, BOARD_SIZE + BOARD_MARGIN, 100);
    /*if (turn % 2 === 0) {
        lastBoard = board.toString();
        counter += 1;
        if (counter === 10) {
            board.minimax(3, -Infinity, Infinity, true);
            const move = board.makeMove(board.bestMove);
            move.exec();
            counter = 0;
            if (board.checkMate("white") && !winner) {
                winner = "Black";
                Swal.fire("Checkmate - Black Wins!")
            } else if (board.checkMate("black") && !winner) {
                winner = "White";
                Swal.fire("Checkmate - White Wins!")
            } else {
                turn += 1;
            }
        }
    }*/
    if (turn % 2 === 1 && !winner && AIEnabled.checked) {
        counter += 1;
        if (counter === 10) {
            boardHistory.push(board.toString());
            board.minimax(Number(depth.value), -Infinity, Infinity, false);
            const move = board.makeMove(board.bestMove);
            move.exec();
            counter = 0;
            endTurn();
            turn += 1;
        }
    }

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (i % 2 === 0) {
                if (j % 2 === 1) {
                    fill(69, 40, 11)
                    rect(i * TILE_SIZE, j * TILE_SIZE, TILE_SIZE, TILE_SIZE);
                } else {
                    fill(199, 131, 62)
                    rect(i * TILE_SIZE, j * TILE_SIZE, TILE_SIZE, TILE_SIZE);
                }
            }
            if (i % 2 === 1) {
                if (j % 2 === 0) {
                    fill(69, 40, 11)
                    rect(i * TILE_SIZE, j * TILE_SIZE, TILE_SIZE, TILE_SIZE);
                } else {
                    fill(199, 131, 62)
                    rect(i * TILE_SIZE, j * TILE_SIZE, TILE_SIZE, TILE_SIZE);
                }
            }
        }
    }
    board.snapDragged();
    board.render();
}
const mousePos = () => {
    return [Math.floor(mouseX / TILE_SIZE), Math.floor(mouseY / TILE_SIZE)];
}

function mousePressed() {
    if (!winner) {
        board.registerClick(mousePos());
    }
}

function mouseReleased() {
    boardHistory.push(board.toString());
    if (!winner) {
        board.registerRelease(mousePos());
    }
    endTurn();
}

function loadBoard(key) {
    board.fromString(localStorage["board:" + key])
}

function deleteBoard(key) {
    localStorage.removeItem("board:" + key);
    updateBoards();
}

function updateBoards() {
    boards.innerHTML = "";
    boards.innerHTML += "<ul>"
    Object.keys(localStorage).filter(key => key.startsWith("board:")).map(key => key.replace("board:", "")).forEach(key => {
        boards.innerHTML += `<li>${key} <button onclick="loadBoard('${key}')"><i class="fa fa-envelope-open-o"></i></button><button onclick="deleteBoard('${key}')"><i class="fa fa-trash"></i></button></li>`
    })
    boards.innerHTML += "</ul>"
}
window.onload = () => {
    const boards = document.getElementById("boards");
    depth = document.getElementById("depth");
    AIEnabled = document.getElementById("enabled");
    document.getElementById("saveBoard").addEventListener("click", () => {
        Swal.fire({
            title: "Enter a name to save your board under:",
            input: "text"
        }).then((result) => {
            if (result.value !== "") {
                localStorage["board:" + result.value] = board.toString();
                updateBoards();
            }
        })
    })
    document.getElementById("boardsSaved").addEventListener("click", () => {
        if (boards.hasAttribute("hidden")) {
            updateBoards();
            boards.removeAttribute("hidden");
        } else {
            boards.setAttribute("hidden", "true");
        }
    })
    document.getElementById("undo").addEventListener("click", () => {
        if (boardHistory.length > 1) {
            if (turn % 2 === 0) {
                boardHistory.pop()
            }
            boardHistory.pop()
            board.fromString(boardHistory.pop())
        }
    })
    depth.addEventListener("change", () => {
        if (depth.value < 1 || depth.value > 4) {
            if (depth.value < 1) {
                Swal.fire({
                    icon: "error",
                    title: "Invalid Minimax Depth",
                    text: "The minimax depth you entered was less than 1. A minimax depth of 0 literally dosen't search any moves. A negative minimax depth makes no sense. These minimax depths obviously aren't of any help to the Chess AI, so you sadly cannot input them."
                })
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Invalid Minimax Depth",
                    text: "The minimax depth you entered was above 4. This would technically work - but a minimax depth of 5 would take up to an hour to compute one move. A depth of 10 would take longer than the known age of the universe. So let's keep it to a depth of 4 and under."
                })
            }
            depth.value = 3;
        }
    })
}
