"use strickt";

const wrapper = document.querySelector(".wrapper");
const generateBtn = document.querySelector(".form button");
const input = document.querySelector(".form input");
const IMG = document.querySelector(".qr-code img");

generateBtn.addEventListener("click", function () {
  let inputtext = input.value;
  if (!inputtext) return;
  generateBtn.innerHTML = "Generating QR Code...";
  IMG.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputtext} `;
  IMG.addEventListener("load", function () {
    wrapper.classList.add("active");
    generateBtn.innerHTML = "Generate QR Code";
  });
});

input.addEventListener("keyup", function () {
  if (!input.value) {
    wrapper.classList.remove("active");
  }
});
