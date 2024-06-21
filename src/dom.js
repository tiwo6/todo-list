function createProjectOverview(projectDatabase, projectList, setActiveProjectIndex) {
    projectList.innerHTML = "";

    projectDatabase.forEach((project, index) => {
        const projectItem = document.createElement("li");
        projectItem.classList.add("projectItem");
        projectItem.textContent = project.title;
        projectItem.dataset.projectId = index; // Assign a unique ID based on the index

        projectList.appendChild(projectItem);
    });

    // Convert NodeList to an array and call selectActiveProject to add event listeners
    const projectItems = Array.from(projectList.querySelectorAll('.projectItem'));
    selectActiveProject(projectItems, projectDatabase, document.getElementById('currentProjectDisplay'), setActiveProjectIndex);
}

function displayCurrentProject(project, element) {
    element.innerHTML = `
        <h2>${project.title}</h2>
        <ul>
            ${project.tasks.map(task => `<li>${task.title}</li>`).join('')}
        </ul>
    `;
}

function selectActiveProject(projectItems, projectDatabase, currentProjectDisplay, setActiveProjectIndex) {
    projectItems.forEach((projectItem, index) => {
        projectItem.addEventListener('click', () => {
            // Remove 'active' class from any previously active project
            const activeProject = document.querySelector('.active');
            if (activeProject) {
                activeProject.classList.remove('active');
            }
            // Add 'active' class to the clicked project
            projectItem.classList.add('active');
            setActiveProjectIndex(index); // Update the active project index
            displayCurrentProject(projectDatabase[index], currentProjectDisplay);
        });
    });
}

export { createProjectOverview, displayCurrentProject, selectActiveProject };