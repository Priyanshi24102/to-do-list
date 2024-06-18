
let inputs = document.getElementById('inp');
let text = document.querySelector(".text");
let index = null;

function Add() {
    if (inputs.value === "") {
        alert("Please enter a task");
        return;
    }

    if (index === null) {
        let newTask = createNewElement(inputs.value);
        text.appendChild(newTask);
    } else {
        let tasks = document.querySelectorAll('.text ul');
        tasks[index].querySelector('.task-text').textContent = inputs.value;
        index = null;
    }

    inputs.value = "";
}

function createNewElement(taskText) {
    let taskElement = document.createElement('ul');
    taskElement.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="icons">
            <img src="update.png" alt="Update" class="update">
            <img src="images.png" alt="Remove" class="remove">
        </div>
    `;

    taskElement.querySelector('.remove').addEventListener("click", () => taskElement.remove());
    taskElement.querySelector('.update').addEventListener("click", () => {
        inputs.value = taskElement.querySelector('.task-text').textContent;
        for (let i = 0; i < text.children.length; i++) {
            if (text.children[i] === taskElement) {
                index = i; 
                break; 
            }
        }
    });

    return taskElement;
}

