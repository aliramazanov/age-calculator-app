"use strict";

const inputButton = document.querySelector(".input-button");

const date = new Date();
const thisYear = date.getFullYear();
const toDay = date.getDate();
const thisMonth = date.getMonth() + 1;

const dayInput = document.getElementById("day-input");
const dayError = document.getElementById("day-error");
function validateDayInput() {
  const dayValue = dayInput.value;

  if (dayValue === "") {
    dayError.textContent = "This field is required";
  } else if (dayValue > 31 || dayValue < 1) {
    dayError.textContent = "Must be a valid day";
  } else {
    dayError.textContent = "";
  }
}
dayInput.addEventListener("input", validateDayInput);
dayInput.addEventListener("blur", validateDayInput);

const monthInput = document.getElementById("month-input");
const monthError = document.getElementById("month-error");
function validateMonthInput() {
  const monthValue = monthInput.value;

  if (monthValue === "") {
    monthError.textContent = "This field is required";
  } else if (monthValue > 12 || monthValue < 1) {
    monthError.textContent = "Must be a valid month";
  } else {
    monthError.textContent = "";
  }
}
monthInput.addEventListener("input", validateMonthInput);
monthInput.addEventListener("blur", validateMonthInput);

const yearInput = document.getElementById("year-input");
const yearError = document.getElementById("year-error");
function validateYearInput() {
  const yearValue = yearInput.value;

  if (yearValue === "") {
    yearError.textContent = "This field is required";
  } else if (yearValue > thisYear) {
    yearError.textContent = "Must be in the past";
  } else {
    yearError.textContent = "";
  }
}
yearInput.addEventListener("input", validateYearInput);
yearInput.addEventListener("blur", validateYearInput);

inputButton.addEventListener("click", () => {
  const dayInput = Number(document.getElementById("day-input").value);
  const monthInput = Number(document.getElementById("month-input").value);
  const yearInput = Number(document.getElementById("year-input").value);

  let yearsPassed = thisYear - yearInput;
  let yearsWord = "years";
  if (yearsPassed === 1 || yearsPassed === 0) {
    yearsWord = "year";
  }
  const yearsResult = document.getElementById("years-result");
  yearsResult.textContent = `${yearsPassed} ${yearsWord}`;

  let monthsPassed = Math.abs(thisMonth - monthInput);
  let monthsWord = "months";
  if (monthsPassed === 1 || monthsPassed === 0) {
    monthsWord = "month";
  }
  const monthsResult = document.getElementById("months-result");
  monthsResult.textContent = `${monthsPassed} ${monthsWord}`;

  let daysPassed = Math.abs(dayInput - toDay);
  let daysWord = "days";
  if (daysPassed === 1 || daysPassed === 0) {
    daysWord = "day";
  }
  const daysResult = document.getElementById("days-result");
  daysResult.textContent = `${daysPassed} ${daysWord}`;
});
