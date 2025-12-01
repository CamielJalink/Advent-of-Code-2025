import { readFileSync } from "fs";

export default function advent() {
    const stringInput = readFileSync("input/day1.txt", "utf-8");
    const input = stringInput.split(/\r\n/gm);
    console.log(findPassword(input));
}

function findPassword(input: string[]) {
    let password = 0;
    let currentPosition = 50;

    for( let i = 0; i < input.length; i++ ) {
        let direction = input[i][0];
        let amount = parseInt(input[i].slice(1));

        if(direction === "L") {
            currentPosition -= amount;
        } else if(direction === "R") {
            currentPosition += amount;
        }

        currentPosition = currentPosition % 100;

        if(currentPosition === 0) {
            password++;
        }
    }
    return password;
}