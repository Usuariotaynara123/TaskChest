import Card from "../../components/card.js";
import TaskManager from "../../components/taskManager.js";
import LoginSection from "../../components/login.js";

document.querySelector('#addTask').addEventListener('click', () => {
    if(!document.querySelector('body').innerHTML.includes('task-manager')){
        document.querySelector('body').appendChild(new TaskManager('Anote', '','', '', '', ''));
    }
});

document.querySelector('main').appendChild(new Card('dia-a-dia', 0, '2025-01-13', 'Entregar o projeto', 'Entrega e aprensentação do projeto'))

document.querySelector('#doLogin').addEventListener('click', () => {
    if(!document.querySelector('body').innerHTML.includes('login-section') && !document.querySelector('body').innerHTML.includes('task-manager')){
        document.querySelector('body').appendChild(new LoginSection());
    }
});
