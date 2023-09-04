"use strict";

const inputButton = document.querySelector(".input-button");

inputButton.addEventListener("click", () => {
  const dayInput = Number(document.getElementById("day-input").value);
  const monthInput = Number(document.getElementById("month-input").value);
  const yearInput = Number(document.getElementById("year-input").value);
  const date = new Date();
  const toDay = date.getDate();
  const thisMonth = date.getMonth() + 1;
  const thisYear = date.getFullYear();

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
