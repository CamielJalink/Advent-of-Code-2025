import { readFileSync } from "fs";

export default function advent() {
    const stringInput = readFileSync("input/day1-test.txt", "utf-8");
    const input = stringInput.split(/\r\n/gm);
    console.log(findPassword(input));
}

function findPassword(input: string[]) {
    let password = 0;
    let currentPosition = 50;

    for( let i = 0; i < input.length; i++ ) {
        let direction = input[i][0];
        let amount = parseInt(input[i].slice(1));

        console.log("---- starting next with " + currentPosition);

        if(direction === "L") {
            currentPosition -= amount;
        } else if(direction === "R") {
            currentPosition += amount;
        }

        if(currentPosition < 0) {
            const numberOfPasses = Math.ceil(Math.abs(currentPosition) / 100);
            password += numberOfPasses;
        }
        else if(currentPosition > 99) {
            const numberOfPasses = Math.floor(Math.abs(currentPosition) / 100);
            password += numberOfPasses;
        }
        else if(currentPosition === 0){
            password++;
        }
        console.log("---------- done with a number ----------- ")
        console.log("------------- password is now: " + password);
        
        console.log(currentPosition);
        currentPosition = currentPosition % 100;
        console.log(currentPosition);

    }
    return password;
}