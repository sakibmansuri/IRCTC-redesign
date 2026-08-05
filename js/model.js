const loginModel = document.getElementById("loginModel");
const closeBtn = document.querySelector(".close-btn");

document.addEventListener("click", function (e) {

    if (e.target.closest(".book-btn")) {

        loginModel.style.display = "flex";

    }

});

closeBtn.addEventListener("click", function () {

    loginModel.style.display = "none";

});

window.addEventListener("click", function (e) {

    if (e.target === loginModel) {

        loginModel.style.display = "none";

    }

});