import UnitTest from "../../helpers/unittest";
import { findJoltage } from ".";

// testcases
export default function runTests() {
    const findJoltageTester = new UnitTest<string, number>((batteryArray: string) => findJoltage(batteryArray));

    findJoltageTester.runTests([
        { input: "987654321111111", expected: 98 },
        { input: "811111111111119", expected: 89 },
        { input: "234234234234278", expected: 78 },
        { input: "818181911112111", expected: 92 },
    ]);
}
