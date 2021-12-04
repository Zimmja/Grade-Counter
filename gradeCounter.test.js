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

test("If grades === 'Red, Red, Red, Red' then return 'Red: 4'", () => {
  expect(createReportsArr("Red, Red, Red, Red")).toEqual("Red: 4");
});

test("If grades === 'Green, Green, Amber' then return 'Green: 2, Amber: 1'", () => {
  expect(createReportsArr("Green, Green, Amber")).toEqual("Green: 2, Amber: 1");
});
