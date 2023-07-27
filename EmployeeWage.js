"use strict";
const is_absent = 0;

//UC1
// let emp_check = Math.floor(Math.random() * 10) % 2;
// if (emp_check == is_absent) {
//   console.log("Employee is absent.");
//   return;
// } else {
//   console.log("Employee is present");
// }
//UC2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
  case IS_PART_TIME:
    empHrs = PART_TIME_HOURS;
    console.log("Employee is present part-time. ");
    break;

  case IS_FULL_TIME:
    empHrs = FULL_TIME_HOURS;
    console.log("Employee is present part-time. ");
    break;

  default:
    empHrs = 0;
    console.log("Employee is absent.");
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee wage:" + empWage);
