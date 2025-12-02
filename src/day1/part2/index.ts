import { readFileSync } from "fs";
import runTests from "./index.spec";

export function advent() {
    const stringInput = readFileSync("input/day1.txt", "utf-8");
    const input = stringInput.split(/\r\n/gm);
    runTests();
    console.log(findPassword(input));
}

function findPassword(input: string[]) {
    let password = 0;
    let currentPosition = 50;

    for( let i = 0; i < input.length; i++ ) {
        const direction = input[i][0];
        const amount = parseInt(input[i].slice(1));
        let nextPosition = 0;

        if(direction === "L") {
            nextPosition = currentPosition - amount;
            password = countRotationsLeft(password, currentPosition, nextPosition);
        } else if(direction === "R") {
            nextPosition = currentPosition + amount;
            password = countRotationsRight(password, currentPosition, nextPosition);
        }
        currentPosition = nextPosition;
    }
    return password;
}

export function countRotationsLeft(password: number, startPos: number, endPos: number) {
    if(endPos % 100 === 0) {
        password++;
    }

    if(startPos %100 === 0) {
        password--;
    }

    let stillChecking = true;
    let hundred = Math.floor(startPos / 100) * 100;

    while(stillChecking){
        // We have gone too far, end loop
        if(hundred <= endPos) {
            stillChecking = false;
        }
        else {
            password++;
            hundred-=100;
        }
    }

    return password;
}

// For when the endPos is higher than the startPos.
export function countRotationsRight(password: number, startPos: number, endPos: number) {
    let stillChecking = true;
    if(startPos % 100 === 0) {
        password--;
    }

    let hundred = Math.ceil(startPos / 100) * 100;
    while(stillChecking){
        // We have gone too far, end loop
        if(hundred > endPos) {
            stillChecking = false;
        }
        else {
            password++;
            hundred+=100;
        }
    }
    return password;
}