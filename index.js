"use strict";

const selectElement = function (nameElement) {
  return document.querySelector(nameElement);
};

const selectElementAll = function (nameElement) {
  return document.querySelectorAll(nameElement);
};

//
const btns = selectElementAll(".container__btn-box__btn");
const btnSubmit = selectElement(".container__btn-submit");
const showScore = selectElement(".x");
const contaienr = {
  one: selectElement(".container"),
  two: selectElement(".container-2"),
};

//
contaienr["two"].classList.add("hide");

let x;
const arr = new Set([0, 1, 2, 3, 4]);
for (const [y, f] of Object.entries(btns)) {
  f.addEventListener("click", function () {
    x = Number(y) + 1;
    f.classList.add("active-selector");
    arr.delete(x - 1);

    for (const x of arr) {
      btns[x].classList.remove("active-selector");
    }

    arr.add(x - 1);
  });
}

btnSubmit.addEventListener("click", function () {
  if (x) {
    contaienr["two"].classList.remove("hide");
    contaienr["one"].classList.add("hide");
    showScore.textContent = x;
  } else {
    btnSubmit.textContent = "pls select score!";
  }
});
