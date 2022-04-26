const superhero = require ("./../app/superhero")

describe("Unite test for superhero", () => {
    test('Case 1: Get a superhero', () => {

        const aironman= new superhero("Iron Man", "Tony Stark", "Robert Downey Jr.")

        expect(aironman.name).toBe("Iron Man")
        expect(aironman.realName).toBe("Tony Stark")
        expect(aironman.actor).toBe("Robert Downey Jr.")
    });
})

/**
describe("Test suite dummy description", () => {
    test('Case  1 dummy', () => {
        const resultOfSomething = 5 + 5
        expect(resultOfSomething).toBe(8);
    });
})
*/