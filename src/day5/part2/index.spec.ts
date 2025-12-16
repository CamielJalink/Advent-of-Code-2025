import UnitTest from "../../helpers/unittest";
import { attemptToMergeRanges } from ".";

// testcases
export default function runTests() {
    const tester = new UnitTest<[bigint[][], bigint[], bigint[]], bigint[][]>(
        ([newRanges, range, target]) => attemptToMergeRanges(newRanges, range, target)
    )

    // when range is the same as target, return target. 
    tester.runTest([[], [5n,10n], [5n,10n]], [[5n,10n]]);
    // when range is within target, return target.
    tester.runTest([[], [7n,9n], [5n,10n]], [[5n,10n]]);

    // when target is the same as range, return range. 
    tester.runTest([[], [5n, 10n], [5n, 10n]], [[5n, 10n]]);
    // when target is within range, return range.
    tester.runTest([[], [5n, 10n], [6n, 9n]], [[5n, 10n]]);

    // when ranges lowerbound is lower than targets, but upperbound is within targets. 
    tester.runTest([[], [3n, 8n], [5n, 10n]], [[3n, 10n]]);
    // when ranges upperbound is higher than targets, but lowerbound is within targets. 
    tester.runTest([[], [7n, 12n], [5n, 10n]], [[5n, 12n]]);

    tester.runTest([[], [1n, 4n], [5n, 10n]], [[1n, 4n], [5n, 10n]]);
}