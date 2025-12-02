import UnitTest from "../../helpers/unittest";
import { checkSequence } from "./index";

// testcases
export default function runTests() {

    // Tests for testinput
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

    console.log("starting tests for real input here");

    checkSequenceTester.runTest("328412-412772", 31153122);

    // checkSequenceTester.runTest("1610-2974", 0);
    // checkSequenceTester.runTest("163-270", 0);
    // checkSequenceTester.runTest("7693600637-7693779967", 0);
    // checkSequenceTester.runTest("352-586", 0);
    // checkSequenceTester.runTest("65728-111612", 0);
    // checkSequenceTester.runTest("734895-926350", 0);
    // checkSequenceTester.runTest("68-130", 0);
    // checkSequenceTester.runTest("183511-264058", 0);
    // checkSequenceTester.runTest("8181752851-8181892713", 0);
    // checkSequenceTester.runTest("32291-63049", 0);
    // checkSequenceTester.runTest("6658-12472", 0);
    // checkSequenceTester.runTest("720-1326", 0);
    // checkSequenceTester.runTest("21836182-21869091", 0);
    // checkSequenceTester.runTest("983931-1016370", 0);
    // checkSequenceTester.runTest("467936-607122", 0);
    // checkSequenceTester.runTest("31-48", 0);
    // checkSequenceTester.runTest("6549987-6603447", 0);
    // checkSequenceTester.runTest("8282771161-8282886238", 0);
    // checkSequenceTester.runTest("7659673-7828029", 0);
    // checkSequenceTester.runTest("2-18", 0);
    // checkSequenceTester.runTest("7549306131-7549468715", 0);
    // checkSequenceTester.runTest("3177-5305", 0);
    // checkSequenceTester.runTest("20522-31608", 0);
    // checkSequenceTester.runTest("763697750-763835073", 0);
    // checkSequenceTester.runTest("5252512393-5252544612", 0);
    // checkSequenceTester.runTest("6622957-6731483", 0);
    // checkSequenceTester.runTest("9786096-9876355", 0);
    // checkSequenceTester.runTest("53488585-53570896", 0);
}
