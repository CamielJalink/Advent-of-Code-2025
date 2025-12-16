import { readFileSync } from "fs";
import runTests from "./index.spec";

export function advent() {
    const stringInput = readFileSync("input/day5-test.txt", "utf-8");
    const input = stringInput.split(/\n\n/gm);
    runTests();
    console.log(input);
}