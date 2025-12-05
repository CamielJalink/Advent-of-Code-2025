import { readFileSync } from "fs";
import runTests from "./index.spec";

export function advent() {
    const stringInput = readFileSync("input/day4.txt", "utf-8");
    const input = stringInput.split(/\r\n/gm);
    runTests();
    console.log(findRolls(input));
}

function findRolls(map: string[]) {
    const moveableRolls: Roll[] = [];

    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x] === "@") {
                const roll = new Roll(x, y);
                if (roll.countNeighbors(map) < 4) {
                    moveableRolls.push(roll);
                }
            }
        }
    }

    return moveableRolls.length;
}

class Roll {
    x: number;
    y: number;
    neighbors: number[][] = [];

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    countNeighbors(map: string[]) {
        for (let yDiff = -1; yDiff < 2; yDiff++) {
            for (let xDiff = -1; xDiff < 2; xDiff++) {
                const neighborY = this.y + yDiff;
                const neighborX = this.x + xDiff;

                if (this.coordIsValid(neighborX, neighborY, map)) {
                    if (map[neighborY][neighborX] === "@") {
                        this.neighbors.push([neighborX, neighborY]);
                    }
                }
            }
        }

        return this.neighbors.length;
    }

    coordIsValid(neighborX: number, neighborY: number, map: string[]) {
        if (neighborX === this.x && neighborY === this.y) {
            return false;
        }
        if (neighborY < 0 || neighborY >= map.length) {
            return false;
        }
        if (neighborX < 0 || neighborX >= map[0].length) {
            return false;
        }
        return true;
    }
}
