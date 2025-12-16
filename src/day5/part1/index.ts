import { readFileSync } from "fs";
import runTests from "./index.spec";

export function advent() {
    const stringInput = readFileSync("input/day5.txt", "utf-8");
    const input = stringInput.split(/\r\n\r\n/gm);
    runTests();
    console.log(countFreshIngredients(input))
}

function countFreshIngredients(input: string[]){
    const ranges = input[0].split(/\r\n/gm);
    const ingredients = input[1].split(/\r\n/gm);
    let numFreshIngredients = 0;

    ingredients.forEach((stringIngredient: string) => {
        const ingredient = BigInt(stringIngredient);
        let isFresh = false;

        for(let i = 0; i < ranges.length; i++){
            const bounds = ranges[i].split("-");
            const lowerBound = BigInt(bounds[0]);
            const upperBound = BigInt(bounds[1]);

            if(ingredient >= lowerBound && ingredient <= upperBound){
                isFresh = true;
                break;
            }
        }

        if(isFresh){
            numFreshIngredients++;
        }
    })
    return numFreshIngredients;
}


// 3-5
// 10-14
// 16-20
// 12-18

// 1
// 5
// 8
// 11
// 17
// 32