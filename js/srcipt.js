console.log("Mam nadzieję, że udało mi się przebrnąć przez moduł 3")

let button = document.querySelector(".button")
let body = document.querySelector(".body")

button.addEventListener("click", () => {
    body.classList.toggle("body--dark");
    button.innerText = body.classList.contains("body--dark") ? "Włącz jaśniejsze tło" : "Włącz ciemniejsze tło";
});



