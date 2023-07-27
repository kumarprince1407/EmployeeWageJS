"use strict";
const is_absent = 0;

//UC1
let emp_check = Math.floor(Math.random() * 10) % 2;
if (emp_check == is_absent) {
  console.log("Employee is absent.");
  return;
} else {
  console.log("Employee is present");
}
