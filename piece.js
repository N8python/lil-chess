const Piece = ({
    name,
    url,
    isValidMove = () => true
}) => ({
    team,
    pos,
    img
}) => ({
    name,
    team,
    pos,
    isValidMove,
    truePos: null,
    dragging: false,
    render() {
        if (this.dragging) {
            const [x, y] = this.truePos;
            textAlign(CENTER);
            textSize(30);
            fill(team === "black" ? 50 : 200);
            image(img, x - 75 / 2, y - 75 / 2)
        } else {
            const [x, y] = this.pos;
            if (x > 7 || x < 0 || y > 7 || y < 0) {
                throw new Error(`Invalid position: [${x}, ${y}]`)
            }
            image(img, x * TILE_SIZE, y * TILE_SIZE)
        }
    }
})

const King = Piece({
    name: "king",
    url: "K",
    isValidMove(newPos) {
        let validSquare = Math.hypot(this.pos[0] - newPos[0], this.pos[1] - newPos[1]) <= Math.SQRT2;
        board.pieces.forEach(piece => {
            if (piece.pos[0] === newPos[0] && piece.pos[1] === newPos[1] && this.team === piece.team) {
                validSquare = false;
            }
        })
        return validSquare;
    }
})
const look = ({
    xDir,
    yDir,
    team,
    pos,
    newPos
}) => {
    let found = false;
    const curr = [...pos];
    while (true) {
        if (curr[0] === newPos[0] && curr[1] === newPos[1]) {
            found = true;
            break;
        }
        curr[0] += xDir;
        curr[1] += yDir;
        if (curr[0] < 0 || curr[0] > 7) {
            break;
        }
        if (curr[1] < 0 || curr[1] > 7) {
            break;
        }
        let collided = false;
        board.pieces.forEach(piece => {
            if (piece.pos[0] === curr[0] && piece.pos[1] === curr[1]) {
                collided = true;
                if (piece.team !== team && curr[0] === newPos[0] && curr[1] === newPos[1]) {
                    found = true;
                }
            }
        })
        if (collided) {
            break;
        }
    }
    return found;
}
const Queen = Piece({
    name: "queen",
    url: "Q",
    isValidMove(newPos) {
        const results = [];
        const config = {
            team: this.team,
            pos: this.pos,
            newPos
        }
        results.push(look({
            ...config,
            xDir: 1,
            yDir: 0,
        }))
        results.push(look({
            ...config,
            xDir: 1,
            yDir: -1,
        }))
        results.push(look({
            ...config,
            xDir: 0,
            yDir: -1,
        }))
        results.push(look({
            ...config,
            xDir: -1,
            yDir: -1,
        }))
        results.push(look({
            ...config,
            xDir: -1,
            yDir: 0,
        }))
        results.push(look({
            ...config,
            xDir: -1,
            yDir: 1,
        }))
        results.push(look({
            ...config,
            xDir: 0,
            yDir: 1,
        }))
        results.push(look({
            ...config,
            xDir: 1,
            yDir: 1,
        }))
        return results.some(result => result === true);
    }
})

const Rook = Piece({
    name: "rook",
    url: "R",
    isValidMove(newPos) {
        const results = [];
        const config = {
            team: this.team,
            pos: this.pos,
            newPos
        }
        results.push(look({
            ...config,
            xDir: 1,
            yDir: 0,
        }))
        results.push(look({
            ...config,
            xDir: -1,
            yDir: 0,
        }))
        results.push(look({
            ...config,
            xDir: 0,
            yDir: -1,
        }))
        results.push(look({
            ...config,
            xDir: 0,
            yDir: 1,
        }))
        return results.some(result => result === true);
    }
})

const Bishop = Piece({
    name: "bishop",
    url: "B",
    isValidMove(newPos) {
        const results = [];
        const config = {
            team: this.team,
            pos: this.pos,
            newPos
        }
        results.push(look({
            ...config,
            xDir: 1,
            yDir: -1,
        }))
        results.push(look({
            ...config,
            xDir: -1,
            yDir: -1,
        }))
        results.push(look({
            ...config,
            xDir: -1,
            yDir: 1,
        }))
        results.push(look({
            ...config,
            xDir: 1,
            yDir: 1,
        }))
        return results.some(result => result === true);
    }
})
const Knight = Piece({
    name: "knight",
    url: "N",
    isValidMove(newPos) {
        const diffX = Math.abs(this.pos[0] - newPos[0]);
        const diffY = Math.abs(this.pos[1] - newPos[1]);
        const landed = (diffX === 2 && diffY === 1) || (diffX === 1 && diffY === 2);
        for (const piece of board.pieces) {
            if (newPos[0] === piece.pos[0] && newPos[1] === piece.pos[1] && piece.team === this.team) {
                return false;
            }
        }
        return landed;
    }
})
const Pawn = Piece({
    name: "pawn",
    url: "p",
    isValidMove(newPos) {
        const inStartingPos = this.team === "white" ? this.pos[1] === 6 : this.pos[1] === 1;
        const yDiff = this.pos[1] - newPos[1];
        const xDiff = Math.abs(this.pos[0] - newPos[0]);
        for (const piece of board.pieces) {
            if (piece.pos[0] === newPos[0] && piece.pos[1] === newPos[1] && piece.team === this.team) {
                return false;
            }
        }
        if (this.team === "white") {
            if (Math.abs(newPos[0] - this.pos[0]) === 1 && newPos[1] === this.pos[1] - 1) {
                for (const piece of board.pieces) {
                    if (piece.pos[0] === newPos[0] && piece.pos[1] === newPos[1]) {
                        return true;
                    }
                }
            }
            if (yDiff > 0 && yDiff <= 1 + Number(inStartingPos) && xDiff === 0) {
                for (const piece of board.pieces) {
                    if (piece.pos[0] === newPos[0] && piece.pos[1] === newPos[1]) {
                        return false;
                    }
                    if (yDiff === 2 && piece.pos[0] === newPos[0] && piece.pos[1] === newPos[1] + 1) {
                        return false;
                    }
                }
                return true;
            }
        } else if (this.team === "black") {
            if (Math.abs(newPos[0] - this.pos[0]) === 1 && newPos[1] === this.pos[1] + 1) {
                for (const piece of board.pieces) {
                    if (piece.pos[0] === newPos[0] && piece.pos[1] === newPos[1]) {
                        return true;
                    }
                }
            }
            if (yDiff < 0 && yDiff >= -1 - Number(inStartingPos) && xDiff === 0) {
                for (const piece of board.pieces) {
                    if (piece.pos[0] === newPos[0] && piece.pos[1] === newPos[1]) {
                        return false;
                    }
                    if (yDiff === -2 && piece.pos[0] === newPos[0] && piece.pos[1] === newPos[1] - 1) {
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    }
})