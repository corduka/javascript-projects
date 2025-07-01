const unorderedList = document.querySelector("#todo-list");
const buttonEl = document.querySelector("#add-btn");
const inputEl = document.querySelector("#todo-input");

function addTodo() {
  const inputText = inputEl.value.trim();
  if (inputText === "") return;

  // Create li element
  const li = document.createElement("li");
  // 📝 Create span to hold the todo text
  const span = document.createElement("span");
  span.textContent = inputText;

  // ❌ Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.addEventListener("click", function () {
    li.remove(); //remove the parent <li>
  });

  // ✏️ Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.style.marginLeft = "5px";

  editBtn.addEventListener("click", function () {
    if (editBtn.textContent === "✏️") {
      //Switch to edit mode
      const currentSpan = li.querySelector("span");
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = currentSpan.textContent;
      li.insertBefore(editInput, currentSpan);
      li.removeChild(currentSpan);
      editBtn.textContent = "✅";
      editInput.focus(); // optional: focus on the input
    } else {
      //Save mode
      const currentInput = li.querySelector("input");
      const newSpan = document.createElement("span");
      newSpan.textContent = currentInput.value;

      li.insertBefore(newSpan, currentInput);
      li.removeChild(currentInput);
      editBtn.textContent = "✏️";
      // span = newSpan; //Update reference
    }
  });

  // 🧱 Build li
  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  unorderedList.appendChild(li);
  inputEl.value = ""; // clear input after adding

  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });
}
// 🖱 Click Add button
buttonEl.addEventListener("click", addTodo);
// ⌨️ Press Enter in the input
inputEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});
