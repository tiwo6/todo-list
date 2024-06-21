import './styles.css';
import { createToDoItem, createProject, addProject } from './functionality.js';
import { createProjectOverview} from './dom.js';


const projectDatabase = [];


addProject(projectDatabase,"Default", "This is a default project containing tasks that are not assigned to a special project");
addProject(projectDatabase,"Default", "This is a default project containing tasks that are not assigned to a special project");
addProject(projectDatabase,"Default", "This is a default project containing tasks that are not assigned to a special project");
addProject(projectDatabase,"Default", "This is a default project containing tasks that are not assigned to a special project");

console.log(projectDatabase);

const projectList = document.getElementById("projectList");

createProjectOverview(projectDatabase, projectList);
