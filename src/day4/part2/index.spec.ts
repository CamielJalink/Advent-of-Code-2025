import UnitTest from "../../helpers/unittest";
import { pickUpRoll } from ".";

// testcases
export default function runTests() {
    console.log("Hello unit tests!");
    const pickUpRollTester = new UnitTest<[string[],number, number], void>(([map, x, y]) => pickUpRoll(map, x, y));
    
    let map = ["...@..", ".@...."];
    pickUpRollTester.runTest([map, 3, 0]);
}
