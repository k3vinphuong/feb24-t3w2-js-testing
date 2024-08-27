const {niceLogger, messageRepeater} = require("../src/niceLogger.js");

test("niceLogger returns Hello world!", () => {
    
    expect(niceLogger()).toBe("Hello world!");
});

describe("niceLogger function tests", () => {
    
})