import UnitTest from "../../helpers/unittest";
import { findJoltage } from ".";

// testcases
export default function runTests() {
    const findJoltageTester = new UnitTest<string, number>((batteryArray: string) => findJoltage(batteryArray));

    findJoltageTester.runTests([
        { input: "987654321111111", expected: 987654321111 },
        { input: "811111111111119", expected: 811111111119 },
        { input: "234234234234278", expected: 434234234278 },
        { input: "818181911112111", expected: 888911112111 },
    ]);
}
