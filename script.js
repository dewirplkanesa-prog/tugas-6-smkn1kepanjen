const btnTema = document.querySelector("#btnToggleTema");
const iconTema = btnTema.querySelector("i");

btnTema.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        iconTema.classList.remove("fa-moon");
        iconTema.classList.add("fa-sun");
    } else {
        iconTema.classList.remove("fa-sun");
        iconTema.classList.add("fa-moon");
    }

});