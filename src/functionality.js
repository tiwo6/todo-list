function createToDoItem(title, description, startDate, dueDate, priority, project, isCompleted=false) {
    return {
        title,
        description,
        startDate,
        dueDate,
        priority,
        project,
        isCompleted
    };
}

function createProject(title, description, tasks = [], priority, isCompleted=false) {
    return {
        title,
        description,
        tasks,
        priority,
        isCompleted
    };
}

function addProject(projectDatabase, title, description, tasks, priority, isCompleted) {
    const newProject = createProject(title, description, tasks, priority, isCompleted);
    projectDatabase.push(newProject);
}

export {createToDoItem, createProject, addProject};