"use strict";
const is_absent = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
//UC3
//let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
function getWorkingHours(empCheck) {
  switch (empCheck) {
    case IS_PART_TIME:
      // console.log("Employee is present part-time. ");
      return PART_TIME_HOURS;

    case IS_FULL_TIME:
      //console.log("Employee is present full-time. ");
      return FULL_TIME_HOURS;

    default:
      //console.log("Employee is absent.");
      return 0;
  }
}

// empHrs = getWorkingHours(empCheck);
// let empWage = empHrs * WAGE_PER_HOUR;
// console.log("Employee wage:" + empWage);

//UC 4
//Calculating Wages for a Month assuming 20 Working Days in a Month
const MONTLY_WORKING_DAYS = 20;
let empHrs = 0;
for (let day = 0; day < MONTLY_WORKING_DAYS; day++) {
  let empCheck = Math.floor(Math.random() * 10) % 3;
  empHrs += getWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total working hours: " + empHrs + " | Employee wage: " + empWage);
