const createReportsArr = (reportsString) => {
  let grades = createGradesArr(reportsString);
  let checkedGrades = checkGrades(grades);
  let formattedGrades = formatGrades(checkedGrades);
  let returnVal = formattedGrades.join("");
  console.log(`Return: :${returnVal}:`);
  return returnVal;
};

formatGrades = (checkedGrades) => {
  let formattedGrades = [];
  formattedGrades.push(printGrad("Green", checkedGrades));
  formattedGrades.push(printGrad("Amber", checkedGrades));
  formattedGrades.push(printGrad("Red", checkedGrades));
  formattedGrades.push(printGrad("Uncounted", checkedGrades));
  return formattedGrades;
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
