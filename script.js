// Select the input, button, and task list
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Add event listener for adding tasks
addTaskButton.addEventListener("click", function() {
    // Get the value from the input field
    const task = taskInput.value;

    // Make sure the task isn't empty
    if (task.trim() !== "") {
        // Create a new list item (li)
        const li = document.createElement("li");
        li.textContent = task;

        // Create a remove button for each task
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function() {
            taskList.removeChild(li); // Remove task from the list
        });

        // Add the button to the list item
        li.appendChild(removeButton);

        // Add the list item to the task list
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = "";
    }
});
