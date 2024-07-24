let completedTaskCount = 0;
const newTaskBtn = document.getElementById('addBtn');
const completedInfo = document.getElementById("completed-task");

newTaskBtn.addEventListener('click', function(){
    let title = prompt("Enter the task name : ");
    let desc = prompt("Enter the description : ");

    if(title != '' && desc != ''){
        const newDiv = document.createElement('div');
        const titleHeading = document.createElement('h3');
        const description = document.createElement('p');
        const removeBtn = document.createElement('button');
        const completeBtn = document.createElement('button');
        const editBtn = document.createElement('button');
    
        newDiv.className = 'newTask';
        completeBtn.className = "ctrl-btn";
        removeBtn.className = "ctrl-btn";
        editBtn.className = "ctrl-btn";
        completeBtn.classList.add("cmpBtn");
        removeBtn.classList.add("rmv-btn");
        editBtn.classList.add("edit-btn");
    
    
        titleHeading.textContent = title;
        description.textContent = desc;
        removeBtn.textContent = "Remove";
        completeBtn.textContent = "Mark as completed";
        editBtn.textContent = "Edit";
    
        newDiv.insertAdjacentElement("afterbegin", titleHeading);
        newDiv.insertAdjacentElement("beforeend", description);
        newDiv.insertAdjacentElement("beforeend", completeBtn);
        newDiv.insertAdjacentElement("beforeend", editBtn);
        newDiv.insertAdjacentElement("beforeend", removeBtn);
    
        const container = document.getElementsByClassName('container')[0];
        container.appendChild(newDiv)
    
        //Adding event listeners to the buttons;
        completeBtn.addEventListener('click', function(){
            const targetCard = completeBtn.parentElement;
            container.removeChild(targetCard);
            completedTaskCount++;
            completedInfo.innerText = `Task Completed : ${completedTaskCount}`;
        });

        removeBtn.addEventListener('click', function(){
            const targetCard = completeBtn.parentElement;
            container.removeChild(targetCard);
        })

        editBtn.addEventListener('click', function(){
            const targetCard = completeBtn.parentElement;
            const editTitle = targetCard.getElementsByTagName("h3")[0];
            const editDescription = targetCard.getElementsByTagName("p")[0];
            
            let newTitle = prompt("Enter the new title : ");
            let newDescription = prompt("Enter the new description : ");

            editTitle.innerText = newTitle;
            editDescription.innerText = newDescription;
        })
    }
    else{
        alert("Task must have Title and Description.");
    }
})
