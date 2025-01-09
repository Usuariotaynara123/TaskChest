import Card from "/components/card.js";
import TaskManager from "/components/taskManager.js";
import LoginSection from "/components/login.js";

document.querySelector('#addTask').addEventListener('click', () => {
    if(!document.querySelector('body').innerHTML.includes('task-manager')){
        document.querySelector('body').appendChild(new TaskManager('Anote', '','', '', '', ''));
    }
});

document.querySelector('#doLogin').addEventListener('click', () => {
    if(!document.querySelector('body').innerHTML.includes('login-section') && !document.querySelector('body').innerHTML.includes('task-manager')){
        document.querySelector('body').appendChild(new LoginSection());
    }
});
