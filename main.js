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
    lastBoard = board.toString();
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
    if (turn % 2 === 1) {
        lastBoard = board.toString();
        counter += 1;
        if (counter === 10) {
            board.minimax(3, -Infinity, Infinity, false);
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
    if (!winner) {
        const daBoard = board.toString();
        const oldTurn = turn;
        board.registerRelease(mousePos());
        if (oldTurn !== turn) {
            lastBoard = daBoard;
        }
    }
    if (board.checkMate("white") && !winner) {
        winner = "Black";
        Swal.fire("Checkmate - Black Wins!")
    } else if (board.checkMate("black") && !winner) {
        winner = "White";
        Swal.fire("Checkmate - White Wins!")
    }
}