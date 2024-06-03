const addButton = document.querySelector("button");
const todoLists = document.querySelector("#todoLists")
let todoInput = document.querySelector("#inputText")

addButton.addEventListener("click", () => {
	const inputText = todoInput.value;
	if (inputText.trim() != '') {
		let todoList = document.createElement("li");
		todoList.textContent = inputText;

		todoLists.appendChild(todoList);

		todoInput.value = "";
	}
})