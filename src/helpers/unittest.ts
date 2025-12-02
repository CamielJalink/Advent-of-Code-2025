export default class UnitTest<TInput, TOutput> {
    private fn: (input: TInput) => TOutput;

    constructor(fn: (input: TInput) => TOutput){
        this.fn = fn;
    }

    runTest(input: TInput, expected: TOutput) {
        const output = this.fn(input);
        if(output !== expected) {
            console.error(`Test with input ${input} returned ${output}. Expected ${expected}`);
        } else {
            console.log("Passed test");
        }
    }

    runTests(tests: {input: TInput, expected: TOutput}[]) {
        tests.forEach((test) => {
            this.runTest(test.input, test.expected);
        });
    }
}