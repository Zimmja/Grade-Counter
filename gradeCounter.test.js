const createReportsArr = require("./gradeCounter.js");

test("If grades === 'Green' then return 'Green: 1'", () => {
  expect(createReportsArr("Green")).toEqual("Green: 1");
});

test("Else if grades === 'Amber' then return 'Amber: 1'", () => {
  expect(createReportsArr("Amber")).toEqual("Amber: 1");
});

test("Else if grades === 'Amer' then return 'Uncounted: 1'", () => {
  expect(createReportsArr("Amer")).toEqual("Uncounted: 1");
});

test("If grades === 'Green, Green' then return 'Green: 2'", () => {
  expect(createReportsArr("Green, Green")).toEqual("Green: 2");
});
