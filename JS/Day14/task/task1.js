let text = document.getElementById("text");
let button = document.getElementById("toggleBtn");

        button.addEventListener("click", () => {
            text.classList.toggle("show");
        });