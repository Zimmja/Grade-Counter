const createReportsArr = (reportsString) => {
  let grades = createGradesArr(reportsString);
  let formattedGrades = formatGrades(grades);
  let filteredGrades = filterGrades(formattedGrades);
  return filteredGrades.join("\n");
};

const createGradesArr = (repStr) => {
  let spNorm = repStr.split(", ");
  let spEdge = spNorm.map((colArr) => colArr.split(","));
  return spEdge.flat();
};

const formatGrades = (grades) => {
  let checkedGrades = checkGrades(grades);
  return ["Green", "Amber", "Red", "Uncounted"].map((color) =>
    printGrad(color, checkedGrades)
  );
};

const checkGrades = (grades) => grades.map((grade) => checkValidGrade(grade));

const checkValidGrade = (grade) =>
  ["Green", "Amber", "Red"].includes(grade) ? grade : "Uncounted";

const printGrad = (color, gradesVal) => {
  let colCount = gradeCount(gradesVal, color);
  if (colCount === 0) return "";
  return `${color}: ${colCount}`;
};

const gradeCount = (grades, col) => grades.filter((gr) => gr === col).length;

const filterGrades = (grades) => grades.filter((grade) => grade != [""]);

module.exports = createReportsArr;

// createReportsArr("Green, Green,Amber");
