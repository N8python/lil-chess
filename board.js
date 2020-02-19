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
    tables: {
        white: {
            pawn: [
                [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
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
            this.pieces.forEach((p, index) => {
                if (p.pos[0] === x && p.pos[1] === y && p !== piece) {
                    removedPiece = p;
                    this.pieces.splice(index, 1);
                }
            })
            if (
                (this.inCheck("white") && turn % 2 === 0) ||
                (this.inCheck("black") && turn % 2 === 1)) {
                piece.pos = oldPos;
                if (removedPiece) {
                    this.pieces.push(removedPiece);
                }
                return false;
            } else {
                piece.pos = oldPos;
                if (removedPiece) {
                    this.pieces.push(removedPiece);
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
                    this.pieces.forEach((p, index) => {
                        if (p.pos[0] === x && p.pos[1] === y && p !== piece) {
                            removedPiece = p;
                            this.pieces.splice(index, 1);
                        }
                    })
                    if (
                        (this.inCheck("white") && turn % 2 === 0) ||
                        (this.inCheck("black") && turn % 2 === 1)) {
                        piece.pos = oldPos;
                        if (removedPiece) {
                            this.pieces.push(removedPiece);
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
            this.pieces.forEach((p, index) => {
                if (p.pos[0] === to[0] && p.pos[1] === to[1] && p !== piece) {
                    removedPiece = p;
                    this.pieces.splice(index, 1);
                }
            })
            if (!this.inCheck(team)) {
                safe = true;
            }
            piece.pos = oldPos;
            if (removedPiece) {
                this.pieces.push(removedPiece)
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
                /*if (piece.name === "king" || piece.name === "queen") {
                    score += 0.1 * (piece.pos[1] / 7);
                } else {*/
                score -= 0.1 * (piece.pos[1] / 7);
                //}
            } else {
                score += this.values[piece.name] * (1 + this.tables[piece.team][piece.name][piece.pos[0]][piece.pos[1]] / 25);
                /*if (piece.name === "king" || piece.name === "queen") {
                    score -= 0.1 * ((7 - piece.pos[1]) / 7)
                } else {*/
                score += 0.1 * ((7 - piece.pos[1]) / 7)
                    //}
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
        let theQueen;
        return {
            exec() {
                piece.pos = to;
                board.pieces.forEach((p, index) => {
                    if (p.pos[0] === to[0] && p.pos[1] === to[1] && p !== piece) {
                        removedPiece = p;
                        board.pieces.splice(index, 1);
                    }
                })
                if (piece.name === "pawn" && piece.team === "white" && to[1] === 0) {
                    board.pieces.splice(board.pieces.indexOf(piece), 1);
                    removedPiece = piece;
                    const queen = Queen({
                        team: "white",
                        pos: [to[0], to[1]],
                        img: whiteQueen
                    });
                    theQueen = queen;
                    board.pieces.push(queen);
                }
                if (piece.name === "pawn" && piece.team === "black" && to[1] === 7) {
                    board.pieces.splice(board.pieces.indexOf(piece), 1);
                    removedPiece = piece;
                    const queen = Queen({
                        team: "black",
                        pos: [to[0], to[1]],
                        img: blackQueen
                    });
                    theQueen = queen;
                    board.pieces.push(queen);
                }
            },
            undo() {
                piece.pos = originalPos;
                if (removedPiece) {
                    board.pieces.push(removedPiece);
                }
                if (theQueen) {
                    board.pieces.splice(board.pieces.indexOf(theQueen), 1);
                }
            }
        }
    },
    minimax(depth, alpha, beta, maximingPlayer, top = true) {
        const startTime = Date.now();
        let oldCastle;
        if (top) {
            oldCastle = canCastle;
        }
        const score = this.score();
        if (depth === 0 || Math.abs(score) > 1000) {
            return score;
        }
        if (maximingPlayer) {
            let maxEval = -Infinity;
            let daMove;
            for (const m of this.allMoves("white")) {
                const move = this.makeMove(m);
                move.exec();
                turn += 1;
                const evaluation = this.minimax(depth - 1, alpha, beta, false, false);
                turn -= 1;
                const oldEval = maxEval;
                maxEval = Math.max(maxEval, evaluation);
                if (top && oldEval !== maxEval && evaluation > oldEval) {
                    this.bestMove = m;
                }
                if (oldEval !== maxEval && evaluation > oldEval) {
                    daMove = m;
                }
                alpha = Math.max(alpha, evaluation);
                move.undo();
                if (top && Date.now() - startTime > 20000) {
                    return maxEval;
                }
                if (beta <= alpha) {
                    break;
                }
            }
            if (top) {
                canCastle = oldCastle;
            }
            return maxEval;
        } else {
            let minEval = Infinity;
            for (const m of this.allMoves("black")) {
                const move = this.makeMove(m);
                move.exec();
                turn += 1;
                const evaluation = this.minimax(depth - 1, alpha, beta, true, false);
                turn -= 1;
                const oldEval = minEval;
                minEval = Math.min(minEval, evaluation);
                if (top && oldEval !== minEval && evaluation < oldEval) {
                    this.bestMove = m;
                }
                beta = Math.min(beta, evaluation);
                move.undo();
                if (top && Date.now() - startTime > 20000) {
                    return minEval;
                }
                if (beta <= alpha) {
                    break;
                }
            }
            if (top) {
                canCastle = oldCastle;
            }
            return minEval;
        }
    }
}
Object.keys(board.tables.white).forEach(piece => {
    board.tables.black[piece] = board.tables.white[piece].slice().reverse();
})