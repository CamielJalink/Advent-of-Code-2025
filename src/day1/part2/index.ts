import { readFileSync } from "fs";

export default function advent() {
    const stringInput = readFileSync("input/day1-test.txt", "utf-8");
    const input = stringInput.split(/\r\n/gm);
    console.log(findPassword(input));
    // console.log(countRotations(0, 80, 150)); // should be 1.
    // console.log(countRotations(0, -5, 5)); // should be 1.
    // console.log(countRotations(0, -101, 101)); // should be 3.
    // console.log(countRotations(0, -120, 100)); // should be 3
    // console.log(countRotations(0, -130, -110)); // should be 0
    // console.log(countRotations(0, 180, 200)); // should be 1;
    // console.log(countRotations(0, 0, 150)); // should be 1;
    // console.log(countRotations(0, -5, 0)); // should be 1;
    // console.log(countRotations(0, -200, 400)); // should be 6
    // console.log(countRotations(0, 0, 5)); // should be 0
    // console.log(countRotations(0, -5, 0)); // should be 1.


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
            password = countRotations(password, nextPosition, currentPosition);
        } else if(direction === "R") {
            nextPosition = currentPosition + amount;
            password = countRotations(password, currentPosition, nextPosition);
        }
        currentPosition = nextPosition;

        console.log(`After step ${input[i]} the password is at ${password} and the currentPosition at ${currentPosition}`)
    }
    return password;
}

function countRotations(password: number, startPos: number, endPos: number) {

    console.log(`going to check from ${startPos} to ${endPos}`);

    // If we are in the same 'hundred', we haven't passed a zero.
    if(Math.ceil(startPos / 100) === Math.ceil(endPos / 100)){
        return password;
    } 
    else {
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
    }
    return password;
}