let details = document.getElementById("details");
        let button = document.getElementById("detailsBtn");

        button.addEventListener("click", () => {
            details.classList.toggle("show");

            if (details.classList.contains("show")) {
                button.textContent = "Hide Details";
            } else {
                button.textContent = "Show Details";
            }
        });