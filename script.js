const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      addTask(taskText, false);
      taskInput.value = "";
    }
  });
  function addTask(text, completed) {
    // Create task item and set text
    const taskItem = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = text;
    taskItem.appendChild(taskText);
  
    // Mark as completed if applicable
    if (completed) {
      taskItem.classList.add("completed");
    } else {
      taskItem.classList.remove("completed");
    }
  
    // Create and add "Complete" button
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    taskItem.appendChild(completeButton);
    completeButton.addEventListener("click", () => {
      taskItem.classList.toggle("completed");
    });
  
    // Create and add "Edit" button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    taskItem.appendChild(editButton);
  
    // Add logic for editing a task
    editButton.addEventListener("click", () => {
      const newText = prompt("Enter new task text:");
      if (newText) {
        taskText.textContent = newText;
      }
    });
  
    // Create and add "Delete" button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    taskItem.appendChild(deleteButton);
    taskList.addEventListener("click", (event) => {
      if (event.target === deleteButton) {
        event.target.parentElement.remove();
      }
    });
    // Append buttons to task item and task item to list
  
    taskList.appendChild(taskItem);
  }