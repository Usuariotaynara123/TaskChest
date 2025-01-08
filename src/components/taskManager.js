class TaskManager extends HTMLElement{
    constructor(action, id, tittle = '', description = '', term = '', category = ''){
        super();

        this.action = action;
        this.id = id;

        this.tittle = tittle;
        this.description = description;
        this.term = term;
        this.category = category;
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode:'closed'});
        shadow.innerHTML = `
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
            <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
            <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="../src/pages/style/global.css">

            <main class="bg-default shadow-sections" style="height: 90vh; width: 35vw; min-height: 500px;">
                <section class="container-fluid d-flex justify-content-center flex-column align-items-center">
                    <h1 class="text-white font-italic h1 font-weight-light text-nowrap text-center">${this.action} sua tarefa</h1>

                    <form class="d-flex justify-content-center w-50 flex-column" action="">
                        <label for="inputTittle" class="form-label text-white">Título</label>
                        <input class="form-control" type="text" id="inputTittle">

                        <label for="inputDesc" class="form-label text-white">Descrição</label>
                        <textarea class="form-control" id="inputDesc" rows="5" style="resize: none; width: 20vw;"></textarea>

                        <label for="inputTerm" class="form-label text-white" >Prazo</label>
                        <input class="form-control mb-3" type="date" id="inputTerm">
                        
                        <div class="container-fluid d-flex justify-content-between" style="width: 20vw;" >
                            <div class="d-flex flex-column text-white">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="category" id="radioEstudos">
                                    <label class="form-check-label" for="radioEstudos">
                                        Estudos
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="category" id="radioTrabalho" checked>
                                    <label class="form-check-label" for="radioTrabalho">
                                        Trabalho
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="category" id="radioDiaadia" checked>
                                    <label class="form-check-label" for="radioDayToDay">
                                        Dia-a-dia
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="category" id="radioOutros" checked>
                                    <label class="form-check-label" for="radioOthers">
                                        Outros
                                    </label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary w-50 h-25">Confirmar</button>
                        </div>
                    </form>
                </section>
            </main>
        `

        shadow.querySelector('#inputTittle').value = this.tittle;
        shadow.querySelector('#inputDesc').value = this.description;
        shadow.querySelector('#inputTerm').value = this.term;
        try{ shadow.querySelector('#radio' + this.category).checked = true; }catch(error){}
    }
}
customElements.define('task-manager', TaskManager);