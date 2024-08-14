document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="remove">✖</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }

    function handleTaskClick(event) {
        if (event.target.classList.contains('remove')) {
            event.target.parentElement.remove();
        } else if (event.target.tagName === 'SPAN') {
            event.target.parentElement.classList.toggle('completed');
        }
    }
});