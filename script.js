const emailPat = new RegExp("[a-z0-9]+@[a-z]+.[a-z]+");
const btn = document.querySelector(".notify");
const input = document.querySelector("#email");
const error = document.querySelector(".error-text");

btn.addEventListener("click", (event) => {
    if(!emailPat.test(input.value)) {
        error.style.display = "block";
        error.style.visibility = "visible";
        error.style.opacity = "1";
    }
});