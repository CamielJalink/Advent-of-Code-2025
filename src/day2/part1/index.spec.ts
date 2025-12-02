import UnitTest from "../../helpers/unittest";
import { checkSequence, determineNextID } from "./index";

// testcases
export default function runTests() {
    const determineNextIDTester = new UnitTest<[string ,string], string>(
        ([firstHalf, secondHalf]) => determineNextID(firstHalf, secondHalf)
    );
    
    determineNextIDTester.runTest(["1", "1"], "22");

    const checkSequenceTester = new UnitTest<string, number>((sequenceString: string) => checkSequence(sequenceString));
    checkSequenceTester.runTest("11-22", 33);
    checkSequenceTester.runTest("95-115", 99);
    checkSequenceTester.runTest("998-1012", 1010);
    checkSequenceTester.runTest("1188511880-1188511890", 1188511885);
    checkSequenceTester.runTest("222220-222224", 222222);
    checkSequenceTester.runTest("1698522-1698528", 0);
    checkSequenceTester.runTest("446443-446449", 446446);
    checkSequenceTester.runTest("38593856-38593862", 38593859);
    checkSequenceTester.runTest("565653-565659", 0);
}
