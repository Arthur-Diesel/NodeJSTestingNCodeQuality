import { cat, oneString } from "./index.ts";
import { describe, expect, it, jest } from "@jest/globals";

describe("Cat", () => {
    it("Should Woof!", () => {
        expect(cat()).toEqual("Woof!");
    })
})

describe("One", () => {
    it("Should be string", () => {
        expect(oneString()).toStrictEqual("1");
    })
})

/*
describe("One", () => {
    it("Should be an int", () => {
        expect(oneString()).toStrictEqual(1);
    })
})
*/

/*

Callback

test('...', done => and it ('...', done => ))

If done: Waits until done is called to be finished!

test("...", done => {
    function callback(value) {
        try {
            expect(value).toBe("...");
            done();
        } catch (error) {
            done(error);
        }
    }
})

it("...", (done) => {

})

*/


/*

Promises

Assertion -> .then or .catch

().then(value => expect(value).toBe("value"));
().catch(err => expect(err).toBeInstanceOf(Error));

async

await expect(()).resolves.toEqual();
await expect(()).rejects.toBeInstanceOf(Error);

*/

/*
Test doubles
replacement for an arbitrary component of executable code (module/method)
looks and behaves in a similar way to what it replaces
simplified version w/ deterministic behavior (do the same expected thing)

* Configured during the test setup

+ Isolation
+ Consistency
+ Fast

(test stubs, spies, mock objects, fake objects, dummy objects)

Test Stub
Simulates behaviors by taking complete control over the response.
Won't responde unless programmed to.
Temporarily replaces real component

Test Spy
Observers interactions with tested code.

Mock Object
Expectation around how something is called.

Fake Object
Working implementation of a component that takes a shortcut, typically, for performance reasons.
** Replace database with an in-memory array

Dummy object
Provides a parameter for a tested method.

** In Jest, everything is a mock!
*/

/*

jest.fn() // Mocks a single function!
// Returns undefined by default;
// Optionally accepts a mock implementation;

jest.mock(moduleName) // Mocks a module!

jest.fn().mockResolvedValue("...");

jest.spyOn(object, methodName) // Mocks a module + Spies on methodName!

*/

describe("Mock Functions!", () => {
    it("Undefined", () => {
        const mockFunction = jest.fn();
        expect(mockFunction()).toBeUndefined();
    })

    it("Truthy", () => {
        const newMockFunction = jest.fn(() => true);
        expect(newMockFunction()).toBeTruthy();
    })

    it("mockImplementation", () => {
        const mockFunction = jest.fn();
        mockFunction.mockImplementation(() => true);
        expect(mockFunction()).toBeTruthy();
    })

    it("mockCalls", () => {
        const mockFunction = jest.fn();
        expect(mockFunction.mock.calls.length).toBe(0);
        expect(mockFunction).toHaveBeenCalledTimes(0);
        expect(mockFunction()).toBeUndefined();
        expect(mockFunction).toBeCalled();
        // expect(mockFunction).toHaveBeenCalledWith("value");
        // expect(mockFunction.mock.calls[0]).toEqual(["value"]);
        // expect(mockFunction).toHaveBeenLastCalledWith("value");
    })
})

/*

fn does not automatically backup, restore

*/

/*
jest.mock()

before require!

jest.mock("./etc.js")
require("/etc.js")
*/

/*
beforeAll(fn, timeout) runs before tests in file/group start
beforeEach(fn, timeout) runs before each test
afterAll() runs after tests end
afterEach()
*/

/*

describe('tests', () => {
    let reservations;

    beforeAll(() => {
        jest.mock("./reservations");
        reservations = require("./reservations");
    })

    afterAll(() => {
        jest.unmock("./reservations");
    })
})

*/

/*

Mocking module dependencies

describe("...", () => {
    jest.mock("...", () => () => {
        fn: () => {
            return "Ok!"
        }
    })

    afterAll(() => {
        jest.unmock("...");
    })
})


*/


/*

const spy = jest.spyOn(object, methodName);

methodName(value);

expect(spy).toBeCalledWith(value);
expect(spy).toHaveBeenCalledTimes(1);

spy.mockRestore(object);

*/
