function createProjectOverview(projectDatabase, projectList) {
    projectList.innerHTML = '';

    projectDatabase.forEach(project => {
        const projectItem = document.createElement('li');
        projectItem.classList.add('projectItem'); 
        projectItem.textContent = project.title;
        projectList.appendChild(projectItem);
    });
}

export {createProjectOverview};