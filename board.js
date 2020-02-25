const board = {
    pieces: [],
    addPiece(piece) {
        this.pieces.push(piece);
    },
    render() {
        this.pieces.forEach(piece => {
            piece.render();
        })
    },
    values: {
        king: 1,
        queen: 9,
        rook: 5,
        knight: 3,
        bishop: 3.25,
        pawn: 1
    },
    pieceMap: {
        king: King,
        queen: Queen,
        rook: Rook,
        bishop: Bishop,
        knight: Knight,
        pawn: Pawn
    },
    imgMap: () => ({
        white: {
            king: whiteKing,
            queen: whiteQueen,
            rook: whiteRook,
            bishop: whiteBishop,
            knight: whiteKnight,
            pawn: whitePawn
        },
        black: {
            king: blackKing,
            queen: blackQueen,
            rook: blackRook,
            bishop: blackBishop,
            knight: blackKnight,
            pawn: blackPawn
        }
    }),
    tables: {
        white: {
            pawn: [
                [100, 100, 100, 100, 100, 100, 100, 100],
                [5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0],
                [1.0, 1.0, 2.0, 3.0, 3.0, 2.0, 1.0, 1.0],
                [0.5, 0.5, 1.0, 2.5, 2.5, 1.0, 0.5, 0.5],
                [0.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 0.0],
                [0.5, -0.5, -1.0, 0.0, 0.0, -1.0, -0.5, 0.5],
                [0.5, 1.0, 1.0, -2.0, -2.0, 1.0, 1.0, 0.5],
                [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
            ],
            knight: [
                [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0],
                [-4.0, -2.0, 0.0, 0.0, 0.0, 0.0, -2.0, -4.0],
                [-3.0, 0.0, 1.0, 1.5, 1.5, 1.0, 0.0, -3.0],
                [-3.0, 0.5, 1.5, 2.0, 2.0, 1.5, 0.5, -3.0],
                [-3.0, 0.0, 1.5, 2.0, 2.0, 1.5, 0.0, -3.0],
                [-3.0, 0.5, 1.0, 1.5, 1.5, 1.0, 0.5, -3.0],
                [-4.0, -2.0, 0.0, 0.5, 0.5, 0.0, -2.0, -4.0],
                [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0]
            ],
            bishop: [
                [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
                [-1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -1.0],
                [-1.0, 0.0, 0.5, 1.0, 1.0, 0.5, 0.0, -1.0],
                [-1.0, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5, -1.0],
                [-1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, -1.0],
                [-1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0],
                [-1.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5, -1.0],
                [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0]
            ],
            rook: [
                [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                [0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5],
                [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
                [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
                [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
                [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
                [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
                [0.0, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0]
            ],
            queen: [
                [-2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0],
                [-1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -1.0],
                [-1.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, -1.0],
                [-0.5, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, -0.5],
                [0.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, -0.5],
                [-1.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.0, -1.0],
                [-1.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, -1.0],
                [-2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0]
            ],
            king: [
                [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
                [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
                [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
                [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
                [-2.0, -3.0, -3.0, -4.0, -4.0, -3.0, -3.0, -2.0],
                [-1.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -1.0],
                [2.0, 2.0, 0.0, 0.0, 0.0, 0.0, 2.0, 2.0],
                [2.0, 3.0, 1.0, 0.0, 0.0, 1.0, 3.0, 2.0]
            ]
        },
        black: {}
    },
    registerClick([x, y]) {
        this.pieces.forEach(piece => {
            if (piece.pos[0] === x && piece.pos[1] === y) {
                if (piece.team === "white" && turn % 2 === 0) {
                    piece.dragging = true;
                } else if (piece.team === "black" && turn % 2 === 1) {
                    piece.dragging = true;
                }
            }
        })
    },
    validMove(piece, [x, y]) {
        const opposingKing = this.pieces.find(p => p.name === "king" && p.team !== piece.team);
        if (opposingKing.pos[0] === x && opposingKing.pos[1] === y) {
            return false;
        }
        if (piece.isValidMove([x, y]) && (x !== piece.pos[0] || y !== piece.pos[1])) {
            const oldPos = piece.pos;
            piece.pos = [x, y];
            let removedPiece;
            let removedIndex;
            this.pieces.forEach((p, index) => {
                if (p.pos[0] === x && p.pos[1] === y && p !== piece) {
                    removedPiece = p;
                    removedIndex = index;
                    this.pieces.splice(index, 1);
                }
            })
            if (
                (this.inCheck("white") && turn % 2 === 0) ||
                (this.inCheck("black") && turn % 2 === 1)) {
                piece.pos = oldPos;
                if (removedPiece) {
                    this.pieces.splice(removedIndex, 0, removedPiece);
                }
                return false;
            } else {
                piece.pos = oldPos;
                if (removedPiece) {
                    this.pieces.splice(removedIndex, 0, removedPiece);
                }
                return true;
            }
        } else if (piece.name === "king" && canCastle[piece.team]) { // Handle castle
            if (piece.team === "white" && !this.inCheck("white")) {
                // King side castle
                if (x === 6 && y === 7) {
                    if (
                        (!this.pieces.some(piece => piece.pos[0] === 5 && piece.pos[1] === 7)) &&
                        (!this.pieces.some(piece => piece.pos[0] === 6 && piece.pos[1] === 7)) &&
                        (this.pieces.some(piece => piece.name === "rook" && piece.pos[0] === 7 && piece.pos[1] === 7))
                    ) {
                        return true;
                    }
                }
                // Queen side castle
                if (x === 2 && y === 7) {
                    if (
                        (!this.pieces.some(piece => piece.pos[0] === 3 && piece.pos[1] === 7)) &&
                        (!this.pieces.some(piece => piece.pos[0] === 2 && piece.pos[1] === 7)) &&
                        (!this.pieces.some(piece => piece.pos[0] === 1 && piece.pos[1] === 7)) &&
                        (this.pieces.some(piece => piece.name === "rook" && piece.pos[0] === 0 && piece.pos[1] === 7))
                    ) {
                        return true;
                    }
                }
            }
            if (piece.team === "black" && !this.inCheck("black")) {
                // King side castle
                if (x === 6 && y === 0) {
                    if (
                        (!this.pieces.some(piece => piece.pos[0] === 5 && piece.pos[1] === 0)) &&
                        (!this.pieces.some(piece => piece.pos[0] === 6 && piece.pos[1] === 0)) &&
                        (this.pieces.some(piece => piece.name === "rook" && piece.pos[0] === 7 && piece.pos[1] === 0))
                    ) {
                        return true;
                    }
                }
                // Queen side castle
                if (x === 2 && y === 0) {
                    if (
                        (!this.pieces.some(piece => piece.pos[0] === 3 && piece.pos[1] === 0)) &&
                        (!this.pieces.some(piece => piece.pos[0] === 2 && piece.pos[1] === 0)) &&
                        (!this.pieces.some(piece => piece.pos[0] === 1 && piece.pos[1] === 0)) &&
                        (this.pieces.some(piece => piece.name === "rook" && piece.pos[0] === 0 && piece.pos[1] === 0))
                    ) {
                        return true;
                    }
                }
            }
        }
    },
    registerRelease([x, y]) {
        this.pieces.forEach(piece => {
            if (piece.dragging) {
                piece.dragging = false;
                if (piece.isValidMove([x, y]) && (x !== piece.pos[0] || y !== piece.pos[1])) {
                    const oldPos = piece.pos;
                    piece.pos = [x, y];
                    let removedPiece;
                    let removedIndex;
                    this.pieces.forEach((p, index) => {
                        if (p.pos[0] === x && p.pos[1] === y && p !== piece) {
                            removedPiece = p;
                            removedIndex = index;
                            this.pieces.splice(index, 1);
                        }
                    })
                    if (
                        (this.inCheck("white") && turn % 2 === 0) ||
                        (this.inCheck("black") && turn % 2 === 1)) {
                        piece.pos = oldPos;
                        if (removedPiece) {
                            this.pieces.splice(removedIndex, 0, removedPiece);
                        }
                    } else {
                        if (piece.name === "king") {
                            canCastle[piece.team] = false;
                        }
                        if (piece.name === "pawn" && piece.team === "white" && y === 0) {
                            this.pieces.splice(this.pieces.indexOf(piece), 1);
                            const queen = Queen({
                                team: "white",
                                pos: [x, y],
                                img: whiteQueen
                            });
                            this.pieces.push(queen);
                        }
                        if (piece.name === "pawn" && piece.team === "black" && y === 7) {
                            this.pieces.splice(this.pieces.indexOf(piece), 1);
                            const queen = Queen({
                                team: "black",
                                pos: [x, y],
                                img: blackQueen
                            });
                            this.pieces.push(queen);
                        }
                        turn += 1;
                    }
                } else if (piece.name === "king" && canCastle[piece.team]) { // Handle castle
                    if (piece.team === "white" && !this.inCheck("white")) {
                        // King side castle
                        if (x === 6 && y === 7) {
                            if (
                                (!this.pieces.some(piece => piece.pos[0] === 5 && piece.pos[1] === 7)) &&
                                (!this.pieces.some(piece => piece.pos[0] === 6 && piece.pos[1] === 7)) &&
                                (this.pieces.some(piece => piece.name === "rook" && piece.pos[0] === 7 && piece.pos[1] === 7))
                            ) {
                                piece.pos = [6, 7];
                                const rook = this.pieces.find(piece => piece.pos[0] === 7 && piece.pos[1] === 7);
                                rook.pos = [5, 7];
                                turn += 1;
                            }
                        }
                        // Queen side castle
                        if (x === 2 && y === 7) {
                            if (
                                (!this.pieces.some(piece => piece.pos[0] === 3 && piece.pos[1] === 7)) &&
                                (!this.pieces.some(piece => piece.pos[0] === 2 && piece.pos[1] === 7)) &&
                                (!this.pieces.some(piece => piece.pos[0] === 1 && piece.pos[1] === 7)) &&
                                (this.pieces.some(piece => piece.name === "rook" && piece.pos[0] === 0 && piece.pos[1] === 7))
                            ) {
                                piece.pos = [2, 7];
                                const rook = this.pieces.find(piece => piece.pos[0] === 0 && piece.pos[1] === 7);
                                rook.pos = [3, 7];
                                turn += 1;
                            }
                        }
                    }
                    if (piece.team === "black" && !this.inCheck("black")) {
                        // King side castle
                        if (x === 6 && y === 0) {
                            if (
                                (!this.pieces.some(piece => piece.pos[0] === 5 && piece.pos[1] === 0)) &&
                                (!this.pieces.some(piece => piece.pos[0] === 6 && piece.pos[1] === 0)) &&
                                (this.pieces.some(piece => piece.name === "rook" && piece.pos[0] === 7 && piece.pos[1] === 0))
                            ) {
                                piece.pos = [6, 0];
                                const rook = this.pieces.find(piece => piece.pos[0] === 7 && piece.pos[1] === 0);
                                rook.pos = [5, 0];
                                turn += 1;
                            }
                        }
                        // Queen side castle
                        if (x === 2 && y === 0) {
                            if (
                                (!this.pieces.some(piece => piece.pos[0] === 3 && piece.pos[1] === 0)) &&
                                (!this.pieces.some(piece => piece.pos[0] === 2 && piece.pos[1] === 0)) &&
                                (!this.pieces.some(piece => piece.pos[0] === 1 && piece.pos[1] === 0)) &&
                                (this.pieces.some(piece => piece.name === "rook" && piece.pos[0] === 0 && piece.pos[1] === 0))
                            ) {
                                piece.pos = [2, 0];
                                const rook = this.pieces.find(piece => piece.pos[0] === 0 && piece.pos[1] === 0);
                                rook.pos = [3, 0];
                                turn += 1;
                            }
                        }
                    }
                }
            }
        });
    },
    snapDragged() {
        this.pieces.forEach(piece => {
            if (piece.dragging) {
                piece.truePos = [mouseX + 5, mouseY + 10];
            }
        })
    },
    inCheck(team) {
        const kingPos = this.pieces.find(piece => piece.name === "king" && piece.team === team).pos;
        let inCheck = false;
        for (const piece of this.pieces.filter(piece => piece.team !== team)) {
            if (piece.isValidMove(kingPos)) {
                inCheck = true;
                break;
            }
        }
        return inCheck;
    },
    checkMate(team) {
        if (!this.inCheck(team)) {
            return false;
        }
        const teamMoves = this.allMoves(team);
        let safe = false;
        teamMoves.forEach(({ piece, to }) => {
            const oldPos = piece.pos;
            piece.pos = to;
            let removedPiece;
            let removedIndex;
            this.pieces.forEach((p, index) => {
                if (p.pos[0] === to[0] && p.pos[1] === to[1] && p !== piece) {
                    removedPiece = p;
                    removedIndex = index;
                    this.pieces.splice(index, 1);
                }
            })
            if (!this.inCheck(team)) {
                safe = true;
            }
            piece.pos = oldPos;
            if (removedPiece) {
                this.pieces.splice(removedIndex, 0, removedPiece);
            }
        });
        return !safe;
    },
    allMoves(team) {
        const validMoves = [];
        this.pieces.forEach(piece => {
            if (piece.team === team) {
                for (let i = 0; i < 8; i++) {
                    for (let j = 0; j < 8; j++) {
                        if (this.validMove(piece, [i, j])) {
                            validMoves.push({
                                piece,
                                to: [i, j]
                            })
                        }
                    }
                }
            }
        });
        return validMoves;
    },
    score() {
        let score = 0;
        this.pieces.forEach(piece => {
            if (piece.team === "black") {
                score -= this.values[piece.name] * (1 + this.tables[piece.team][piece.name][piece.pos[0]][piece.pos[1]] / 25);
                if (piece.name === "king" || piece.name === "queen") {
                    score += 0.1 * (piece.pos[1] / 7);
                }
            } else {
                score += this.values[piece.name] * (1 + this.tables[piece.team][piece.name][piece.pos[0]][piece.pos[1]] / 25);
                if (piece.name === "king" || piece.name === "queen") {
                    score -= 0.1 * ((7 - piece.pos[1]) / 7)
                }
            }
        });
        if (this.checkMate("white")) {
            score -= 10000;
        } else if (this.checkMate("black")) {
            score += 10000;
        }
        if (this.inCheck("white")) {
            score -= 1;
        } else if (this.inCheck("black")) {
            score += 1;
        }
        return score;
    },
    makeMove({ piece, to }) {
        let originalPos = piece.pos;
        let removedPiece;
        let removedIndex;
        let theQueen;
        let theRook;
        let originalRookPos;
        let pieceLostInPromotion;
        let plipIndex;
        return {
            exec() {
                piece.pos = to;
                if (piece.name === "pawn" && piece.team === "white" && to[1] === 0) {
                    pieceLostInPromotion = piece;
                    plipIndex = board.pieces.indexOf(piece);
                    board.pieces.splice(board.pieces.indexOf(piece), 1);
                    const queen = Queen({
                        team: "white",
                        pos: [to[0], to[1]],
                        img: whiteQueen
                    });
                    theQueen = queen;
                    board.pieces.push(queen);

                }
                if (piece.name === "pawn" && piece.team === "black" && to[1] === 7) {
                    pieceLostInPromotion = piece;
                    plipIndex = board.pieces.indexOf(piece);
                    board.pieces.splice(board.pieces.indexOf(piece), 1);
                    const queen = Queen({
                        team: "black",
                        pos: [to[0], to[1]],
                        img: blackQueen
                    });
                    theQueen = queen;
                    board.pieces.push(queen);
                }
                if (piece.name === "king" && originalPos[0] === 4 && originalPos[1] === 7) {
                    if (to[0] === 6 && to[1] === 7) {
                        theRook = board.pieces.filter((piece) => piece.name === "rook" && piece.pos[0] === 7 && piece.pos[1] === 7);
                        originalRookPos = theRook.pos;
                        theRook.pos = [5, 7]
                    } else if (to[0] === 2 && to[1] === 7) {
                        theRook = board.pieces.filter((piece) => piece.name === "rook" && piece.pos[0] === 0 && piece.pos[1] === 7);
                        originalRookPos = theRook.pos;
                        theRook.pos = [3, 7]
                    }
                }
                if (piece.name === "king" && originalPos[0] === 4 && originalPos[1] === 0) {
                    if (to[0] === 6 && to[1] === 0) {
                        theRook = board.pieces.filter((piece) => piece.name === "rook" && piece.pos[0] === 7 && piece.pos[1] === 0);
                        originalRookPos = theRook.pos;
                        theRook.pos = [5, 0]
                    } else if (to[0] === 2 && to[1] === 0) {
                        theRook = board.pieces.filter((piece) => piece.name === "rook" && piece.pos[0] === 0 && piece.pos[1] === 0);
                        originalRookPos = theRook.pos;
                        theRook.pos = [3, 0]
                    }
                }
                board.pieces.forEach((p, index) => {
                    if (p.pos[0] === to[0] && p.pos[1] === to[1] && p !== piece && p !== theQueen) {
                        removedPiece = p;
                        removedIndex = index;
                        board.pieces.splice(index, 1);
                    }
                })
            },
            undo() {
                piece.pos = originalPos;
                if (theRook && originalRookPos) {
                    theRook.pos = originalRookPos;
                }
                if (removedPiece) {
                    board.pieces.splice(removedIndex, 0, removedPiece);
                }
                if (pieceLostInPromotion) {
                    board.pieces.splice(plipIndex, 0, pieceLostInPromotion);
                }
                if (theQueen) {
                    board.pieces.splice(board.pieces.indexOf(theQueen), 1);
                }
            }
        }
    },
    minimax(depth, alpha, beta, maximizingPlayer, top = true) {
        let oldCastle;
        if (top) {
            oldCastle = canCastle;
        }
        const score = this.score();
        if (depth === 0 || Math.abs(score) > 1000) {
            return score;
        }

        let evaluation = maximizingPlayer ? -Infinity : Infinity;
        const team = maximizingPlayer ? "white" : "black";
        for (const m of this.allMoves(team)) {
            const move = this.makeMove(m);
            move.exec();
            turn += 1;
            const newEval = this.minimax(depth - 1, alpha, beta, !maximizingPlayer, false);
            const evalFunc = maximizingPlayer ? max : min;
            move.undo();
            turn -= 1;
            const oldEval = evaluation;
            evaluation = evalFunc(evaluation, newEval);
            if (top && oldEval !== evaluation) {
                this.bestMove = m;
            }
            if (maximizingPlayer) {
                alpha = Math.max(alpha, evaluation)
            } else {
                beta = Math.min(beta, evaluation);
            }
            if (beta <= alpha) {
                break;
            }
        }
        if (top) {
            document.getElementById("val").innerHTML = `Evaluation: ${evaluation.toFixed(3)}`;
        }
        if (top) {
            canCastle = oldCastle;
        }
        return evaluation;
    },
    toString() {
        return this.pieces.map(piece => `${piece.team}-${piece.name}:${piece.pos}`).join("\n") + `\nTurn:${turn}`;
    },
    fromString(string) {
        this.pieces = [];
        string.split("\n").forEach(line => {
            if (line.startsWith("Turn")) {
                turn = Number(line.split(":")[1]);
            } else {
                let [_, team, piece, x, y] = Array.from(/(\w+)-(\w+):(\d),(\d)/.exec(line));
                x = Number(x);
                y = Number(y);
                this.pieces.push(this.pieceMap[piece]({
                    team,
                    pos: [x, y],
                    img: this.imgMap()[team][piece]
                }));
            }
        })
    }
}
Object.keys(board.tables.white).forEach(piece => {
    board.tables.black[piece] = board.tables.white[piece].slice().reverse();
})