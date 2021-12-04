const createReportsArr = (reportsString) => {
  grades = createGradesArr(reportsString);
  // console.log(grades);
  checkedGrades = checkGrades(grades);
  // console.log(checkedGrades);
  gSum = gradeCount(checkedGrades, "Green");
  aSum = gradeCount(checkedGrades, "Amber");
  rSum = gradeCount(checkedGrades, "Red");
  uSum = gradeCount(checkedGrades, "Uncounted");
  // console.log(greenCount);
  returnVal = `${printGrad("Green", gSum)}${printGrad(
    "Amber",
    aSum
  )}${printGrad("Red", rSum)}${printGrad("Uncounted", uSum)}`;
  console.log(`Return :${returnVal}:`);
  return returnVal;
};

const printGrad = (color, colCount) => {
  if (colCount === 0) return "";
  return `${color}: ${colCount}`;
};

const checkGrades = (grades) => {
  return grades.map((grade) => checkValidGrade(grade));
};

const checkValidGrade = (grade) => {
  if (["Green", "Amber", "Red"].includes(grade)) return grade;
  return "Uncounted";
};

const createGradesArr = (repStr) => repStr.split(", ");

const gradeCount = (grades, color) => {
  let gradeMap = grades.map((grade) => {
    return grade === color ? 1 : 0;
  });
  return arrSum(gradeMap);
};

const arrSum = (arr) => arr.reduce((x, y) => x + y);

module.exports = createReportsArr;

createReportsArr("Green, Green");
