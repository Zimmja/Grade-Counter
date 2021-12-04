const createReportsArr = (reportsString) => {
  let grades = createGradesArr(reportsString);
  let formattedGrades = formatGrades(grades);
  let returnVal = formattedGrades.join("");
  console.log(`Return: :${returnVal}:`);
  return returnVal;
};

formatGrades = (grades) => {
  let checkedGrades = checkGrades(grades);
  return ["Green", "Amber", "Red", "Uncounted"].map((color) =>
    printGrad(color, checkedGrades)
  );
};

const printGrad = (color, gradesVal) => {
  let colCount = gradeCount(gradesVal, color);
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
