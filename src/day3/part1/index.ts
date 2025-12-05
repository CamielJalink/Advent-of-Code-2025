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
    const firstBattery: { joltage: string; index: number } = { joltage: "0", index: 0 };

    // The last character in batteryArray may not be the first digit.
    for (let i = 0; i < batteryArray.length - 1; i++) {
        if (batteryArray[i] > firstBattery.joltage) {
            firstBattery.joltage = batteryArray[i];
            firstBattery.index = i;
        }
    }

    // Don't check the battery's before the first battery again.
    const secondBattery: { joltage: string; index: number } = { joltage: "0", index: 0 };
    for (let i = firstBattery.index + 1; i < batteryArray.length; i++) {
        if (batteryArray[i] > secondBattery.joltage) {
            secondBattery.joltage = batteryArray[i];
            secondBattery.index = i;
        }
    }

    return parseInt(firstBattery.joltage + secondBattery.joltage);
}
