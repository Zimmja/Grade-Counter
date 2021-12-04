const createReportsArray = require("./gradeCounter.js").primary;
const gradeCount = require("./gradeCounter.js").secondary;

const simpleTest = "Green";
const twoGreensTest = "Green, Green";
const multiColorTest = "Green, Green, Amber, Green, Amber, Red, Aber";

test("a test returns ['Green']", () => {
  expect(createReportsArray("Green")).toEqual(["Green"]);
});

test("simpleTest returns ['Green']", () => {
  expect(createReportsArray(simpleTest)).toEqual(["Green"]);
});

test("twoGreensTest returns ['Green', 'Green']", () => {
  expect(createReportsArray(twoGreensTest)).toEqual(["Green", "Green"]);
});

test("multiColorTest returns as expected", () => {
  expect(createReportsArray(multiColorTest)).toEqual([
    "Green",
    "Green",
    "Amber",
    "Green",
    "Amber",
    "Red",
    "Aber",
  ]);
});

test("gradeCount takes an array of colours and counts them", () => {
  expect(gradeCount(["Green", "Green"])).toEqual([2, 1, 0, 0]);
});
