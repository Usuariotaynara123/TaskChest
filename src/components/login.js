export default class LoginSection extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode:'closed'});
        shadow.innerHTML = `
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
            <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
            <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="../style/global.css">

            <main class="bg-default shadow-sections" style="height: 70vh; width: 30vw;">
                <section class="container-fluid d-flex justify-content-center h-100 flex-column align-items-center">
                    <h1 class="text-white font-italic font-weight-light">Login</h1>

                    <form class="d-flex justify-content-center w-50 flex-column" id="login">
                        <label for="inputUsername" class="form-label text-white">Username</label>
                        <input class="form-control" type="text" id="inputUsername" placeholder="Usuário...">

                        <label for="inputPassword" class="form-label text-white">Senha</label>
                        <input type="password" id="inputPassword" class="form-control mb-4" aria-describedby="passwordHelpBlock">

                        <button type="submit" class="btn btn-primary w-50">Entrar</button>
                    </form>

                </section>
            </main>
        `

        shadow.getElementById('login').addEventListener('submit', event => {
            event.preventDefault();
          
            fetch('/api/addData', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ })
            })
            .then(response => response.json())
            .then(data => {
              
            })
            .catch(error => console.error('Erro:', error));
        });

        shadow.querySelector('#inputUsername').focus(); //Fazer o focus na div;

        document.querySelector('login-section').addEventListener('focusout', event => {
            event.currentTarget.remove();
        });
    }
}
customElements.define('login-section', LoginSection);