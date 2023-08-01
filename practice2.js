// "use strict;";

let emp_hours = 0;
let emp_check = Math.floor(Math.random() * 10) % 3;
function getWorkingHours(emp_check) {
  switch (emp_check) {
    case 1:
      //console.log("Employee is part time");
      return 4;
    case 2:
      //console.log("Employee is full-time");
      return 8;
    default:
      //console.log("Employee is absent");
      return 0;
  }
}
// emp_hours = getWorkingHours(emp_check);
// let empWage = emp_hours * 20;
// console.log("Employee wage: " + empWage);
//UC 4
//Calculating Wages for a Month assuming 20 Working Days in a Month
const MONTHLY_WORKING_DAYS = 20;
for (let day = 1; day <= MONTHLY_WORKING_DAYS; day++) {
  //let emp_check = Math.floor(Math.random() * 10) % 3;
  emp_hours = getWorkingHours(emp_check);
}
let empWage = emp_hours * 20;
console.log("Total working hours: " + emp_hours + " Monthly wage: " + empWage);

//For loop
