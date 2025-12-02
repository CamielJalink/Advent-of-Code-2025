import { readFileSync } from "fs";
import UnitTest from "../../helpers/unittest";

export default function advent() {
    const stringInput = readFileSync("input/day1.txt", "utf-8");
    const input = stringInput.split(/\r\n/gm);

    // testcases
    const countRotationsRightTester = new UnitTest<[number,number,number], number>(
        ([a, b, c]) => countRotationsRight(a, b, c)
    );

    countRotationsRightTester.runTests([
        {input: [0,0,100], expected: 1},
        {input: [0,0,50], expected: 0},
        {input: [0,-30,0], expected: 1},
        {input: [0, -120, 200], expected: 4},
        {input: [0, -120, 270], expected: 4},
    ]);

    const countRotationsLeftTester = new UnitTest<[number,number,number], number>(
        ([password, startPos, endPos]) => countRotationsLeft(password, startPos, endPos)
    );

    countRotationsLeftTester.runTests([
        {input: [0,50,0], expected: 1},
        {input: [0,0,-50], expected: 0},
        {input: [0,50,0], expected: 1},
        {input: [0,50,-150], expected: 2},
        {input: [0,100,0], expected: 1}
    ])

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