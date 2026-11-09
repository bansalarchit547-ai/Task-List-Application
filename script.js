 let tasks = JSON.parse(
            localStorage.getItem("tasks")
        ) || [];

        // Function to display tasks
        function displayTasks() {

            let taskList = document.getElementById("taskList");

            taskList.innerHTML = "";

            tasks.forEach(function(task, index) {

                let li = document.createElement("li");

                let span = document.createElement("span");
                span.textContent = task;

                let deleteBtn = document.createElement("button");

                deleteBtn.textContent = "Delete";
                deleteBtn.className = "delete";

                deleteBtn.onclick = function() {
                    deleteTask(index);
                };

                li.appendChild(span);
                li.appendChild(deleteBtn);

                taskList.appendChild(li);

            });
        }

        // Function to add task
        function addTask() {

            let input = document.getElementById("taskInput");

            let task = input.value.trim();

            if (task === "") {
                alert("Please enter a task!");
                return;
            }

            tasks.push(task);

            saveTasks();

            input.value = "";

            displayTasks();
        }

        // Function to delete task
        function deleteTask(index) {

            tasks.splice(index, 1);

            saveTasks();

            displayTasks();
        }

        // Save tasks in LocalStorage
        function saveTasks() {

            localStorage.setItem(
                "tasks",
                JSON.stringify(tasks)
            );
        }

        // Display saved tasks when page loads
        displayTasks();