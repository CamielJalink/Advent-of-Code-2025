import UnitTest from "../../helpers/unittest";
import { countRotationsRight, countRotationsLeft } from "./index";

// testcases
export default function runTests() {
    const countRotationsRightTester = new UnitTest<[number,number,number], number>(
        ([password, startPos, endPos]) => countRotationsRight(password, startPos, endPos)
    );
    countRotationsRightTester.runTest([0,0,100], 1);

    countRotationsRightTester.runTests([
        {input: [0,0,100], expected: 1},
        {input: [0,0,50], expected: 0},
        {input: [0,-30,0], expected: 1},
        {input: [0, -120, 200], expected: 4},
        {input: [0, -120, 270], expected: 4},
    ]);

    const countRotationsLeftTester = new UnitTest<[number,number,number], number>(
        ([password, startPos, endPos]) => countRotationsLeft(password, startPos, endPos)
    );

    countRotationsLeftTester.runTests([
        {input: [0,50,0], expected: 1},
        {input: [0,0,-50], expected: 0},
        {input: [0,50,0], expected: 1},
        {input: [0,50,-150], expected: 2},
        {input: [0,100,0], expected: 1}
    ])
}
