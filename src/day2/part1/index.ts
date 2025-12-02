import { readFileSync } from "fs";
import runTests from "./index.spec";

export function advent() {
    const stringInput = readFileSync("input/day2.txt", "utf-8");
    // runTests();
    findSumOfInvalidIDs(stringInput);
}

function findSumOfInvalidIDs(sequenceString: string){
    const sequences: string[] = sequenceString.split(",");
    let sumOfInvalidIDs = 0;
    sequences.forEach((sequence: string) => {
        const sequenceSum: number = checkSequence(sequence);
        sumOfInvalidIDs += sequenceSum;
    });

    console.log(`The sum of invalid IDs is ${sumOfInvalidIDs}`);
}

export function checkSequence(sequence: string): number{
    const [lowerbound, upperbound] = sequence.split("-");
    let invalidIDs = 0;
    let currentID = lowerbound;
    const upperboundInt = parseInt(upperbound);
    const lowerboundInt = parseInt(lowerbound);

    let withinBounds = true;
    while(withinBounds) {
        // All uneven sequences are valid and don't need to be checken. 
        if(currentID.length %2 !== 0) {
            const length = currentID.length;
            currentID = "1";
            for(let i = 0; i < length; i++){
                currentID += "0";
            }
        }

        const currentIDInt = parseInt(currentID);

        if(currentIDInt > upperboundInt || currentIDInt < lowerboundInt) {
            withinBounds = false;
        } else {
            const length = currentID.length / 2;
            const firstHalf = currentID.substring(0, length);
            const secondHalf = currentID.substring(length);

            if(firstHalf === secondHalf) {
                invalidIDs += currentIDInt;
            }

            currentID = determineNextID(firstHalf, secondHalf);
        }
    }

    return invalidIDs;
}

export function determineNextID(firstHalf: string, secondHalf: string) {
    // this is only the case with the very first number. 
    if(firstHalf !== secondHalf) {
        return firstHalf + firstHalf;
    }

    let nextFirstHalfNum = parseInt(firstHalf) + 1;
    return nextFirstHalfNum.toString() + nextFirstHalfNum.toString();
}