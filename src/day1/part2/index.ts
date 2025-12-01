import { readFileSync } from "fs";

export default function advent() {
    const stringInput = readFileSync("input/day1-test.txt", "utf-8");
    const input = stringInput.split(/\r\n/gm);
    console.log(input);
}