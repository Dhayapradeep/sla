let box = document.getElementById("box");
        let button = document.getElementById("colorBtn");

        button.addEventListener("click", () => {
            box.classList.toggle("green");
        });