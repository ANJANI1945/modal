const showModalBtn = document.getElementById("showModalBtn")
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn")

showModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("clic", function () {
    if (event.target === modal ) {
        modal.style.display = "none";
    }
});