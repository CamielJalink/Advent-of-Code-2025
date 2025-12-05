import { readFileSync } from "fs";
import runTests from "./index.spec";

export function advent() {
    const stringInput = readFileSync("input/day3.txt", "utf-8");
    const input = stringInput.split(/\r\n/gm);
    runTests();
    console.log(findTotalJoltage(input));
}

function findTotalJoltage(batteryArrays: string[]) {
    let totalJoltage = 0;

    batteryArrays.forEach((batteryArray: string) => {
        totalJoltage += findJoltage(batteryArray);
    });

    return totalJoltage;
}

export function findJoltage(batteryArray: string) {
    let battery: { joltage: string; index: number } = { joltage: "0", index: -1 };
    let joltage = "";

    for (let i = 11; i >= 0; i--) {
        battery = findNextBattery(batteryArray, battery.index, i);
        joltage += battery.joltage;
    }

    return parseInt(joltage);
}

function findNextBattery(batteryArray: string, startIndex: number, indexLimit: number) {
    // Don't check the battery's before the previous battery's index again.
    const battery: { joltage: string; index: number } = { joltage: "0", index: 0 };
    for (let i = startIndex + 1; i < batteryArray.length - indexLimit; i++) {
        if (batteryArray[i] > battery.joltage) {
            battery.joltage = batteryArray[i];
            battery.index = i;
        }
    }

    return battery;
}
