const addButton = document.querySelector("button");
const todoLists = document.querySelector("#todoLists");
const todoInput = document.querySelector("#inputText");

addButton.addEventListener("click", () => {
	const inputText = todoInput.value;
	if (inputText.trim() != '') {
		const todoList = document.createElement("li");

		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.addEventListener("change", () => {
			if (checkbox.checked) {
				todoList.style.textDecoration = "line-through";
			} else {
				todoList.style.textDecoration = "none";
			}
		});
		todoList.appendChild(checkbox);

		const textNode = document.createTextNode(inputText);
		todoList.appendChild(textNode);

		const removeButton = document.createElement("button");
		removeButton.textContent = "delete";
		removeButton.addEventListener("click", () => {
			todoLists.removeChild(todoList);
		});
		todoList.appendChild(removeButton);

		todoLists.appendChild(todoList);
		todoInput.value = "";
	}
})