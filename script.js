const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const deleteImg = document.createElement("img");
deleteImg.src = "images/delete.png";
deleteImg.className = "delete-icon";

function showNotes() {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        notesContainer.innerHTML = savedNotes;
    }
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    const inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    notesContainer.appendChild(inputBox);
    inputBox.appendChild(deleteImg.cloneNode(true)); // Clone the delete image for each input box
    inputBox.focus();
    updateStorage();
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-icon")) {
        e.target.parentElement.remove();
        updateStorage();
    }
});

showNotes(); // Load saved notes (if any) after the page is loaded
