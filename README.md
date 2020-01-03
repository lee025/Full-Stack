# All the Things

All the Things is an easy to use app, single-page web application the helps you keep track of all the things want to remember so you can focus on doing those things!
![alt text](app/assets/images/readme-login.png?raw=true 'login-page')


## Technologies
* Ruby on Rails
* React
* Redux
* JavaScript
* PostgreSQL
* Webpack
* HTML
* CSS

## Features
 * Secure User Authenication
     * User passwords are stored via BCrypt
 * Lists
     * Users can create, edit and remove lists to keep tasks organized
     * List Summary provies a quick way to keep track of the total number of tasks as well as the number of completed tasks
 * Tasks
     * Users can create tasks for lists 
     * Task Detail breaks down all the details for each task including: task name, task list, due date, and notes
     * Task Navigation allows a User to mark a task complete/incomplete and delete a task
 
### List CRUD
All the things offers a simple and intuitive way to create, edit, and delete lists. 
The list modal is a single component that that will render the correct form depending on what the user selects.

![alt text](app/assets/images/readme-modal.png?raw=true 'list-modal')

### Task CRUD
Users also are able to create, edit and delete tasks. Added features include marking them as complete/incomplete and adding a due date. Deleting and toggling completion are accessible only via the Task Navigation bar that is rendered once a task is selected. 

## Future Improvements
- [ ] List Navigation DropDown Menu
- [ ] Tabs for Completed/Incomplete tasks
- [ ] Tags for tasks
- [ ] Search functionality
- [ ] Attachments for tasks
- [ ]
