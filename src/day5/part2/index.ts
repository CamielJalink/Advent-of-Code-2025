import { readFileSync } from "fs";
import runTests from "./index.spec";

export function advent() {
    const stringInput = readFileSync("input/day5-test.txt", "utf-8");
    const input = stringInput.split(/\r\n\r\n/gm);
    runTests();
    console.log(countFreshIngredients(input[0]));
}

function countFreshIngredients(input: string){
    const stringRanges = input.split(/\r\n/gm);
    let ranges = stringRanges.map((stringRange: string) => {
            const bounds = stringRange.split("-");
            const lowerBound = BigInt(bounds[0]);
            const upperBound = BigInt(bounds[1]);
            return [lowerBound, upperBound];
    })

    let numberOfRanges = ranges.length;
    let previousNumberOfRanges = 0;

    while(numberOfRanges !== previousNumberOfRanges) {
        previousNumberOfRanges = ranges.length;
        let newRanges: bigint[][] = [];

        for(let i = 0; i < ranges.length; i++) {
            const range = ranges[i];

            for(let j = 0; j < ranges.length; j++){
                const target = ranges[j];

                // don't compare a range with itself.
                if(i !== j) {
                    // see if you can merge the ranges together to a single range. Else add both ranges to the newRanges array. 
                    newRanges = attemptToMergeRanges(newRanges, range, target);
                }
            }
        }

        numberOfRanges = newRanges.length;
        ranges = newRanges;
    }
}

export function attemptToMergeRanges(newRanges: bigint[][], range: bigint[], target: bigint[]) {
    const rangeLB = range[0];
    const rangeUB = range[1];
    const targetLB = target[0];
    const targetUB = target[1];
    

    if(rangeLB === targetLB && rangeUB === targetUB){
        newRanges.push(range);
    }
    // if range is inside of target, add target to newRanges.
    else if(rangeLB >= targetLB && rangeUB <= targetUB) {
        newRanges.push(target);
    } else if(targetLB >= rangeLB && targetUB <= rangeUB) {
        newRanges.push(range);
    } 
    // if ranges lowerbound is within target, but ranges upperbound is higher than targets upperbound.
    else if(rangeLB >= targetLB && rangeLB < targetUB && rangeUB >= targetUB) {
        newRanges.push([targetLB, rangeUB]);
    } 
    // if ranges lowerbound is lower than targets, but ranges upperbound within targets range.
    else if(rangeLB <= targetLB && rangeUB > targetLB && rangeUB <= targetUB) {
        newRanges.push([rangeLB, targetUB]);
    } 
    // else, we need both numbers. 
    else {
        newRanges.push(range);
        newRanges.push(target);
    }

    return newRanges;
}