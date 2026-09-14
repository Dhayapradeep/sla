
let heading = document.getElementById("title");

heading.textContent = "Welcome to JavaScript DOM";


let paragraphs = document.querySelectorAll(".para");

paragraphs.forEach(function(paragraph, index) {
    paragraph.textContent = "This is paragraph " + (index + 1);
});