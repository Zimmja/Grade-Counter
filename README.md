- School reports company
- Comma-separated values: test results from schools (each val in string, one grade = one student)
- Green, Green, Amber (e.g.) = Green 2, Amber 1
- "Green: 2\nAmber: 1"
- "Green: 1\nRed: 1\nUncounted: 2"

===========
##Plan

- FUNCTION, input: reportsString
- Green, Green, Amber, Yellow, Gren => reportsArr ["Green", "Green", "Amber", "Uncounted", "Uncounted"]
- Be aware: difficulty in separating based on "," or ", "

- FUNCTION, input: reportsArr
- ["Green", "Green", "Amber"] => (counts each element) countArr [2, 1, 0, 0]

- FUNCTION, input: reportsArr, countArr
- countArr as a basis, create a map => finalArr["Green: 2", "Amber: 1", "Red: 0", "Uncounted: 0"]
- return finalArr.joined with \n
