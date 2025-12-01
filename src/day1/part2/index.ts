import { readFileSync } from "fs";

export default function advent() {
    const stringInput = readFileSync("input/day1.txt", "utf-8");
    const input = stringInput.split(/\r\n/gm);
    console.log(findPassword(input));

    // testcases

    // console.log(countRotationsRight(0, 0, 100)); // 1
    // console.log(countRotationsRight(0, 0, 50)); // 0
    // console.log(countRotationsRight(0, -30, 0)); // 1
    // console.log(countRotationsRight(0, -120, 200)); // 4
    // console.log(countRotationsRight(0, -120, 270)); // 4

    // console.log(countRotationsLeft(0, 50, 0)); // 1
    // console.log(countRotationsLeft(0, 0, -50)); // 0
    // console.log(countRotationsLeft(0, 50, 0)); // 1
    // console.log(countRotationsLeft(0, 50, -150)); // 2
    // console.log(countRotationsLeft(0, 100, 0)); // 1. 
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

        console.log(`After step ${input[i]} the password is at ${password} and the currentPosition at ${currentPosition}`)
    }
    return password;
}

// 50 --> 0 // 1 rotation
function countRotationsLeft(password: number, startPos: number, endPos: number) {
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
function countRotationsRight(password: number, startPos: number, endPos: number) {
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