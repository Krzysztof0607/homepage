{
    const welcome = () => {
        console.log("Mam nadzieję, że udało mi się przebrnąć przez moduł 3")
    }

    welcome();

    const toggleBackground = () => {

        const body = document.querySelector(".body")
        body.classList.toggle("body--dark");
        button.innerText = body.classList.contains("body--dark") ? "Włącz jaśniejsze tło" : "Włącz ciemniejsze tło";
    };
    const init = () => {
        const button = document.querySelector(".button")
        button.addEventListener("click",toggleBackground);

    };
    
    init();
};