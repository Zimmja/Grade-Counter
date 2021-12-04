const createReportsArr = (reportsString) => {
  let grades = createGradesArr(reportsString);
  let formattedGrades = formatGrades(grades);
  let filteredGrades = filterGrades(formattedGrades);
  let returnVal = filteredGrades.join("\n");
  console.log(`Return: :${returnVal}:`);
  return returnVal;
};

const createGradesArr = (repStr) => repStr.split(", ");

const formatGrades = (grades) => {
  let checkedGrades = checkGrades(grades);
  return ["Green", "Amber", "Red", "Uncounted"].map((color) =>
    printGrad(color, checkedGrades)
  );
};

const checkGrades = (grades) => grades.map((grade) => checkValidGrade(grade));

const checkValidGrade = (grade) => {
  if (["Green", "Amber", "Red"].includes(grade)) return grade;
  return "Uncounted";
};

const printGrad = (color, gradesVal) => {
  let colCount = gradeCount(gradesVal, color);
  if (colCount === 0) return "";
  return `${color}: ${colCount}`;
};

const gradeCount = (grades, col) => grades.filter((gr) => gr === col).length;

const filterGrades = (grades) => grades.filter((grade) => grade != [""]);

module.exports = createReportsArr;

createReportsArr("Green, Green");
