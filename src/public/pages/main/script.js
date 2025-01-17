import Card from "/components/card.js";
import TaskManager from "/components/taskManager.js";
import LoginSection from "/components/login.js";

window.addEventListener('load', async () => { // Quando a página carregar, busca por tarefas do usuário no banco de dados
    if(window.location.pathname != '/'){ //Se o usuário estiver logado.
        const axiosContext = axios.create({baseURL:window.location.href});

        let response = await axiosContext.post('/task/getUserTasks');

        response.data.forEach(task => {
            document.createCard(task)
        });
    }
});

document.createCard = (task) => {// Definindo uma função para criar o card
    document.querySelector('main').appendChild(new Card(task.CategoriaNome, task.status, task.prazo, task.titulo, task.descricao, task.id));
}

document.querySelector('#addTask').addEventListener('click', () => {// Clicar no botão de anotar vai inserir a seção task-manager
    if(window.location.pathname != '/'){
        if(!document.querySelector('body').innerHTML.includes('task-manager') ){
            document.querySelector('body').appendChild(new TaskManager('Anote', '','', '', '', ''));
        }
    }
    else{ // Clicar no botão sem estar logado vai aparecer a seção de login
        if(!document.querySelector('body').innerHTML.includes('login-section')){
            document.querySelector('body').appendChild(new LoginSection());
        }
    }
});

document.querySelector('#doLogin').addEventListener('click', () => { // Clicar no botão de anotar vai inserir a seção login-section
    if(!document.querySelector('body').innerHTML.includes('login-section')){ // Se não tiver nenhuma seção
        document.querySelector('body').appendChild(new LoginSection());
    }
});
