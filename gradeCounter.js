const createReportsArray = (reportsString) => {
  let reportsArr = reportsString.split(", ");
  // console.log(splitByCom);
  return reportsArr;
};

const gradeCount = (reportsArr) => {};

module.exports = { primary: createReportsArray, secondary: gradeCount };

// - FUNCTION, input: reportsString
// - Green, Green, Amber, Yellow, Gren => reportsArr ["Green", "Green", "Amber", "Uncounted", "Uncounted"]
// - Be aware: difficulty in separating based on "," or ", "

// - FUNCTION, input: reportsArr
// - ["Green", "Green", "Amber"] => (counts each element) countArr [2, 1, 0, 0]
