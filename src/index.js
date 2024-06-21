import './styles.css';
import { createToDoItem, createProject, addProject } from './functionality.js';
import { createProjectOverview, displayCurrentProject, selectActiveProject } from './dom.js';

const projectDatabase = [];
addProject(projectDatabase, "Default", "This is a default project containing tasks that are not assigned to a special project");


const projectList = document.getElementById("projectList");
const currentProjectDisplay = document.getElementById("currentProjectDisplay");
let activeProjectIndex = 0; // Track the active project

// Function to update the active project index
function setActiveProjectIndex(index) {
    activeProjectIndex = index;
}

// Initial rendering of project overview and current project display
createProjectOverview(projectDatabase, projectList, setActiveProjectIndex);
displayCurrentProject(projectDatabase[activeProjectIndex], currentProjectDisplay);


// Function to delete a project
function deleteProject(projectId) {
    // Remove project from projectDatabase based on projectId
    projectDatabase.splice(projectId, 1); // Assuming projectId corresponds to index in array

    // Update project list view
    createProjectOverview(projectDatabase, projectList);
}

// Event delegation for dynamically added delete buttons
projectList.addEventListener('click', function(event) {
    const target = event.target;

    // Check if clicked element is a delete button within a project item
    if (target.classList.contains('deleteProjectBtn')) {
        // Find the parent project item (li element)
        const projectItem = target.closest('.projectItem');

        if (projectItem) {
            const projectId = projectItem.dataset.projectId; // Assuming you have a data attribute for projectId
            deleteProject(projectId);
        }
    }
});

// Add event listeners to project items
selectActiveProject(Array.from(document.querySelectorAll('.projectItem')), projectDatabase, currentProjectDisplay, setActiveProjectIndex);

// Add project modal
const addProjectModal = document.getElementById('addProjectModal');
const addProjectBtn = document.getElementById('addProject');
const closeProjectBtn = document.getElementById('closeProjectModal');
addProjectBtn.addEventListener('click', function() {
    addProjectModal.style.display = 'block';
});
closeProjectBtn.addEventListener('click', function() {
    addProjectModal.style.display = 'none';
});
const projectForm = document.getElementById('projectForm');
projectForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const title = document.getElementById('projectTitle').value;
    addProject(projectDatabase, title);
    createProjectOverview(projectDatabase, projectList, setActiveProjectIndex);
    addProjectModal.style.display = 'none';
});

// Add task modal
const addTaskModal = document.getElementById('addTaskModal');
const addTaskBtn = document.getElementById('addTask');
const closeTaskBtn = document.getElementById('closeTaskModal');
addTaskBtn.addEventListener('click', function() {
    addTaskModal.style.display = 'block';
});
closeTaskBtn.addEventListener('click', function() {
    addTaskModal.style.display = 'none';
});
const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const title = document.getElementById('taskTitle').value;
    const newTask = createToDoItem(title);
    projectDatabase[activeProjectIndex].tasks.push(newTask);
    displayCurrentProject(projectDatabase[activeProjectIndex], currentProjectDisplay);
    addTaskModal.style.display = 'none';
});