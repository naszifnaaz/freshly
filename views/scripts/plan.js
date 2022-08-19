// Plan page Scripts

let columns = document.querySelectorAll("#column");

let continueButton = document.querySelector(".continue-btn");
continueButton.addEventListener("click", () => {
    window.location.href = "days.html";
})

columns.forEach(item => {
    item.addEventListener("click", () => {
        item.style.backgroundColor = "#cce2e1";
    });
});

