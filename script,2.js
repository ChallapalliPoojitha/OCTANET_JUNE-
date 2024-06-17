// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const priorityInput = document.getElementById('priority');
    const categoryInput = document.getElementById('category');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);

    function addTask(event) {
        event.preventDefault();

        const taskText = taskInput.value;
        const dueDate = dueDateInput.value;
        const priority = priorityInput.value;
        const category = categoryInput.value;

        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        const taskDetails = document.createElement('div');
        taskDetails.classList.add('task-details');

        taskDetails.innerHTML = `
            <strong>${taskText}</strong>
            <small>Due: ${dueDate} | Priority: ${priority} | Category: ${category}</small>
        `;

        const completeButton = document.createElement('button');
        completeButton.classList.add('complete');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskDetails);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);

        taskInput.value = '';
        dueDateInput.value = '';
        priorityInput.value = 'low';
        categoryInput.value = 'work';
    }
});