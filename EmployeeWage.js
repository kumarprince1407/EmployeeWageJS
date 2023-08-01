"use strict";
const is_absent = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(empCheck) {
  switch (empCheck) {
    case IS_PART_TIME:
      return PART_TIME_HOURS;

    case IS_FULL_TIME:
      return FULL_TIME_HOURS;

    default:
      return 0;
  }
}

//UC5
//Calculate Wages till a condition of total working hours of 160 or max days of 20 is reached for a month
const TOTAL_WORKING_HOURS = 160;
const MONTLY_WORKING_DAYS = 20;
let totalEmpHours = 0;
let totalEmpDays = 1;

//UC 6- Store the Daily Wage along with the Total Wage - Save in an Array the Daily Wage
function calcDailyWage(emp_hours) {
  return emp_hours * WAGE_PER_HOUR;
}
let empDailyWageArr = new Array();

while (
  totalEmpHours <= TOTAL_WORKING_HOURS &&
  totalEmpDays < MONTLY_WORKING_DAYS
) {
  totalEmpDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  let emp_hours = getWorkingHours(empCheck);
  totalEmpHours += getWorkingHours(empCheck);
  empDailyWageArr.push(calcDailyWage(emp_hours));
}

let empWage = totalEmpHours * WAGE_PER_HOUR;
console.log(
  "Total working days: " +
    totalEmpDays +
    " | Total working hours :" +
    totalEmpHours +
    " | Monthly employee wage: " +
    empWage
);
//console.log(empDailyWageArr);// Just for reference: prints the daily wage array
