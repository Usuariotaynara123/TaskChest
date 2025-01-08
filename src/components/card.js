export default class Card extends HTMLElement{
    constructor(category, status = false, term, tittle, descricao){
        super();
        this.category = category;
        this.status = status;
        this.term = term;
        this.descricao = descricao;
        this.tittle = tittle;

        let iconConcluded = '<g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M21.546 5.111a1.5 1.5 0 0 1 0 2.121L10.303 18.475a1.6 1.6 0 0 1-2.263 0L2.454 12.89a1.5 1.5 0 1 1 2.121-2.121l4.596 4.596L19.424 5.111a1.5 1.5 0 0 1 2.122 0"/></g>'
        let iconEstudos = '<path d="M31 8.80768L16 1.29999L1 8.80768L16 16.3154L31 8.80768ZM31 8.80768V16.3154" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.625 12.5615V21.9461C6.625 21.9461 7.47812 25.7 16 25.7C24.5238 25.7 25.375 21.9461 25.375 21.9461V12.5615" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
        let iconTrabalho = '<path d="M3.66666 24.7C2.84166 24.7 2.13566 24.4487 1.54866 23.9462C0.961657 23.4436 0.667656 22.8387 0.666656 22.1316V8.00525C0.666656 7.29893 0.960657 6.6945 1.54866 6.19194C2.13666 5.68939 2.84266 5.43769 3.66666 5.43683H9.66666V2.86841C9.66666 2.16209 9.96066 1.55766 10.5487 1.0551C11.1367 0.552549 11.8427 0.300844 12.6667 0.299988H18.6667C19.4917 0.299988 20.1982 0.551693 20.7862 1.0551C21.3742 1.55851 21.6677 2.16295 21.6667 2.86841V5.43683H27.6667C28.4917 5.43683 29.1982 5.68853 29.7862 6.19194C30.3742 6.69535 30.6677 7.29979 30.6667 8.00525V22.1316C30.6667 22.8379 30.3732 23.4427 29.7862 23.9462C29.1992 24.4496 28.4927 24.7008 27.6667 24.7H3.66666ZM3.66666 22.1316H27.6667V8.00525H3.66666V22.1316ZM12.6667 5.43683H18.6667V2.86841H12.6667V5.43683Z" fill="white"/>'
        let iconDiaADia = '<path fill-rule="evenodd" clip-rule="evenodd" d="M28.0224 12.5H26.1451V14.3772H28.0224V12.5Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28.0318 18.1148V15.5233C28.6806 15.4065 29.2674 15.0642 29.6885 14.5569C30.1096 14.0496 30.3379 13.4099 30.3332 12.7506C30.3311 12.3823 30.2552 12.0182 30.1102 11.6796C29.9651 11.3411 29.7537 11.0351 29.4885 10.7795L19.6706 1.10524C19.1432 0.587105 18.4332 0.297168 17.6939 0.298037L17.6892 0.30273C16.9528 0.301583 16.2452 0.588999 15.7181 1.10337L14.5289 2.26912C14.3251 1.95285 14.0453 1.69266 13.7151 1.51231C13.3849 1.33196 13.0148 1.23719 12.6385 1.23665H10.583C9.98252 1.23814 9.40717 1.47771 8.98312 1.90283C8.55906 2.32794 8.32092 2.90388 8.32092 3.50433V8.38512L5.85894 10.8105C5.49095 11.1735 5.23082 11.6314 5.10748 12.1334C4.98414 12.6354 5.0024 13.1617 5.16025 13.654C5.3181 14.1462 5.60935 14.585 6.00162 14.9216C6.3939 15.2582 6.87183 15.4795 7.38231 15.5608V22.8247H6.4437V16.2704C5.6053 15.9379 4.91568 15.313 4.50242 14.5113C4.08915 13.7096 3.9802 12.7854 4.19572 11.9096C4.3616 11.2393 4.70911 10.6278 5.20004 10.1422L7.38231 7.99278V5.92971C5.67967 5.96068 4.30648 7.37705 4.30648 9.11629H4.23045C2.66391 9.11629 1.38364 10.4078 1.38364 12.011V12.6042C1.38364 13.1964 1.56573 13.7502 1.86233 14.2167C1.39488 14.4934 1.00786 14.8874 0.73966 15.3598C0.471457 15.8321 0.331385 16.3664 0.333333 16.9096C0.333333 18.6197 1.69901 20.0089 3.38007 20.0089H5.02639V22.8247C3.99392 22.8247 3.14917 23.6695 3.14917 24.7019H29.4303C29.4301 24.4331 29.3722 24.1674 29.2605 23.9229C29.1487 23.6784 28.9858 23.4607 28.7827 23.2846C28.9691 22.998 29.1159 22.6914 29.2229 22.3648C29.4585 21.6683 29.4931 20.9194 29.3228 20.2041C29.1524 19.4888 28.7841 18.8359 28.2598 18.3203L28.2533 18.3147C28.1821 18.2451 28.1082 18.1784 28.0318 18.1148ZM13.014 3.50433V5.46791L10.1981 8.24526V3.50433C10.1978 3.45343 10.2074 3.40295 10.2266 3.35577C10.2457 3.3086 10.274 3.26566 10.3097 3.2294C10.3454 3.19314 10.3879 3.16428 10.4348 3.14445C10.4817 3.12463 10.5321 3.11424 10.583 3.11387H12.6385C12.6891 3.11383 12.7392 3.12402 12.7858 3.14382C12.8323 3.16362 12.8744 3.19262 12.9095 3.22909C12.9445 3.26556 12.9719 3.30874 12.9898 3.35604C13.0078 3.40334 13.016 3.45378 13.014 3.50433ZM9.25953 22.8247V12.7065L17.6911 4.39508L26.1452 12.7206V14.3772H26.1545V17.2447C25.6843 17.168 25.2041 17.1773 24.7372 17.2719V14.1106C24.7363 13.9327 24.6651 13.7623 24.5393 13.6365C24.4135 13.5107 24.2431 13.4396 24.0652 13.4386H20.7162C20.5383 13.4396 20.3679 13.5107 20.2421 13.6365C20.1163 13.7623 20.0452 13.9327 20.0442 14.1106V17.4596C20.0452 17.6375 20.1163 17.8079 20.2421 17.9337C20.3679 18.0596 20.5383 18.1307 20.7162 18.1317H22.9848C22.5824 18.4761 22.2516 18.8965 22.0115 19.3688C21.5073 19.54 21.0602 19.8472 20.7195 20.2565C20.3788 20.6657 20.1578 21.1611 20.0808 21.6881C20.0658 21.7538 20.0576 21.8207 20.0564 21.8889C20.0477 21.9643 20.0437 22.0402 20.0442 22.1161V22.1255C20.0448 22.3676 20.0733 22.6007 20.1296 22.8247H19.1056C19.1056 22.3094 18.7658 21.8861 18.3519 21.8861H18.1651V14.4917C18.1651 13.9088 17.7361 13.4386 17.2039 13.4386H13.4964C12.9642 13.4386 12.5353 13.9088 12.5353 14.4917V21.8861H12.3504C11.9374 21.8861 11.5967 22.3094 11.5967 22.8247H9.25953ZM21.1142 22.8247C21.2634 23.2086 21.5328 23.5315 21.8745 23.7539H26.9148V23.7633L26.9317 23.7539C27.3833 23.5114 27.7627 23.154 28.0318 22.7177C28.1569 22.5144 28.257 22.2978 28.3321 22.0682C28.5134 21.5381 28.5408 20.9676 28.4112 20.4226C28.2817 19.8776 28.0004 19.3804 27.6 18.9886C27.0463 18.4383 26.2969 18.1301 25.5163 18.1317C24.343 18.1317 23.3199 18.8281 22.8319 19.8268C22.7835 19.9285 22.7142 20.0187 22.6284 20.0917C22.5427 20.1647 22.4425 20.2186 22.3344 20.2501C21.621 20.4763 21.0954 21.1174 21.0016 21.8795C20.9922 21.8983 20.9922 21.9171 21.0016 21.9359C20.9828 21.9922 20.9828 22.0579 20.9828 22.1245C20.9828 22.3723 21.0297 22.6079 21.1142 22.8247ZM16.759 19.0703C16.8835 19.0703 17.0029 19.0208 17.0909 18.9328C17.1789 18.8448 17.2283 18.7254 17.2283 18.601C17.2283 18.4765 17.1789 18.3571 17.0909 18.2691C17.0029 18.1811 16.8835 18.1317 16.759 18.1317C16.6346 18.1317 16.5152 18.1811 16.4272 18.2691C16.3392 18.3571 16.2897 18.4765 16.2897 18.601C16.2897 18.7254 16.3392 18.8448 16.4272 18.9328C16.5152 19.0208 16.6346 19.0703 16.759 19.0703Z" fill="white"/>'
        let iconOutros = '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.36134 2.76585C7.58821 2.48789 7.71172 2.12026 7.70585 1.74039C7.69998 1.36053 7.56519 0.998095 7.32987 0.729449C7.09456 0.460802 6.7771 0.306918 6.44436 0.300216C6.11163 0.293514 5.78961 0.434516 5.54614 0.693519L3.02883 3.56741L2.22398 2.64855C1.98051 2.38955 1.65849 2.24854 1.32576 2.25525C0.993026 2.26195 0.675563 2.41583 0.440249 2.68448C0.204936 2.95312 0.070145 3.31556 0.0642743 3.69542C0.0584036 4.07529 0.181911 4.44292 0.408777 4.72088L2.12123 6.67591C2.36205 6.95049 2.68848 7.10472 3.02883 7.10472C3.36918 7.10472 3.69562 6.95049 3.93643 6.67591L7.36134 2.76585ZM11.5911 3.19596C11.2505 3.19596 10.9238 3.35044 10.6829 3.62542C10.4421 3.9004 10.3068 4.27335 10.3068 4.66223C10.3068 5.05111 10.4421 5.42406 10.6829 5.69904C10.9238 5.97402 11.2505 6.1285 11.5911 6.1285H28.7157C29.0563 6.1285 29.383 5.97402 29.6238 5.69904C29.8647 5.42406 30 5.05111 30 4.66223C30 4.27335 29.8647 3.9004 29.6238 3.62542C29.383 3.35044 29.0563 3.19596 28.7157 3.19596H11.5911ZM11.5911 11.0161C11.2505 11.0161 10.9238 11.1706 10.6829 11.4455C10.4421 11.7205 10.3068 12.0935 10.3068 12.4823C10.3068 12.8712 10.4421 13.2442 10.6829 13.5192C10.9238 13.7941 11.2505 13.9486 11.5911 13.9486H28.7157C29.0563 13.9486 29.383 13.7941 29.6238 13.5192C29.8647 13.2442 30 12.8712 30 12.4823C30 12.0935 29.8647 11.7205 29.6238 11.4455C29.383 11.1706 29.0563 11.0161 28.7157 11.0161H11.5911ZM28.7157 22.7462H11.8052C11.4645 22.7462 11.1379 22.5918 10.897 22.3168C10.6561 22.0418 10.5208 21.6689 10.5208 21.28C10.5208 20.8911 10.6561 20.5181 10.897 20.2432C11.1379 19.9682 11.4645 19.8137 11.8052 19.8137H28.7157C29.0563 19.8137 29.383 19.9682 29.6238 20.2432C29.8647 20.5181 30 20.8911 30 21.28C30 21.6689 29.8647 22.0418 29.6238 22.3168C29.383 22.5918 29.0563 22.7462 28.7157 22.7462ZM7.36134 8.51364C7.60186 8.78856 7.73695 9.16124 7.73695 9.5498C7.73695 9.93836 7.60186 10.311 7.36134 10.586L3.93643 14.496C3.69562 14.7706 3.36918 14.9248 3.02883 14.9248C2.68848 14.9248 2.36205 14.7706 2.12123 14.496L0.408777 12.541C0.282592 12.4068 0.181382 12.2449 0.111185 12.065C0.0409885 11.8852 0.00324254 11.691 0.00019988 11.4941C-0.00284278 11.2972 0.0288798 11.1017 0.0934754 10.9191C0.158071 10.7365 0.254216 10.5707 0.376175 10.4314C0.498134 10.2922 0.643408 10.1824 0.803331 10.1087C0.963254 10.035 1.13455 9.99874 1.307 10.0022C1.47945 10.0057 1.64952 10.0488 1.80706 10.1289C1.96461 10.2091 2.1064 10.3246 2.22398 10.4687L3.02883 11.3875L5.54614 8.51364C5.78696 8.23905 6.11339 8.08482 6.45374 8.08482C6.7941 8.08482 7.12053 8.23905 7.36134 8.51364ZM7.36134 20.3611C7.48753 20.2269 7.58874 20.065 7.65894 19.8851C7.72913 19.7053 7.76688 19.5111 7.76992 19.3142C7.77296 19.1174 7.74124 18.9218 7.67665 18.7392C7.61205 18.5566 7.51591 18.3908 7.39395 18.2516C7.27199 18.1123 7.12671 18.0026 6.96679 17.9288C6.80687 17.8551 6.63557 17.8189 6.46312 17.8223C6.29067 17.8258 6.1206 17.8689 5.96306 17.949C5.80551 18.0292 5.66372 18.1447 5.54614 18.2888L3.02883 21.1627L2.22398 20.2438C1.98051 19.9848 1.65849 19.8438 1.32576 19.8505C0.993026 19.8572 0.675563 20.0111 0.440249 20.2797C0.204936 20.5484 0.070145 20.9108 0.0642743 21.2907C0.0584036 21.6706 0.181911 22.0382 0.408777 22.3161L2.12123 24.2712C2.36205 24.5458 2.68848 24.7 3.02883 24.7C3.36918 24.7 3.69562 24.5458 3.93643 24.2712L7.36134 20.3611Z" fill="white"/>'
        
        this.icons = {
            'estudos': iconEstudos,
            'trabalho': iconTrabalho,
            'dia-a-dia': iconDiaADia,
            'outros': iconOutros,
            'concluded': iconConcluded
        };
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode:'closed'});
        shadow.innerHTML = `
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
            <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
            <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="../style/global.css">

            <div class="card text-center border-${this.category} g-col-1 col-height" style='max-width: 22vw'>
                <div class="card-header container-fluid d-flex bg-${this.category} text-white rounded-0 align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                        <svg id="icon-var" xmlns="http://www.w3.org/2000/svg" width="32" height="27" viewBox="0 0 32 27" fill="none">${this.icons[this.category]}</svg></button>
                        <p class="ms-2 text-capitalize h4">${this.category}</p>
                    </div>
                    <button type="button" class="btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M4 21.5C4.07971 21.5097 4.16029 21.5097 4.24 21.5L8.24 20.5C8.41744 20.4578 8.57997 20.3679 8.71 20.24L21 7.91003C21.3725 7.5353 21.5816 7.0284 21.5816 6.50003C21.5816 5.97165 21.3725 5.46475 21 5.09003L19.42 3.50003C19.2343 3.31407 19.0137 3.16655 18.7709 3.06591C18.5281 2.96526 18.2678 2.91345 18.005 2.91345C17.7422 2.91345 17.4819 2.96526 17.2391 3.06591C16.9963 3.16655 16.7757 3.31407 16.59 3.50003L4.3 15.79C4.17079 15.9206 4.07774 16.0826 4.03 16.26L3.03 20.26C2.99406 20.3894 2.98454 20.5247 3.00203 20.6579C3.01951 20.791 3.06363 20.9193 3.13176 21.035C3.19989 21.1507 3.29063 21.2515 3.39856 21.3314C3.5065 21.4113 3.62942 21.4687 3.76 21.5C3.83971 21.5097 3.92029 21.5097 4 21.5ZM18 4.91003L19.59 6.50003L18 8.09003L16.42 6.50003L18 4.91003ZM5.91 17.01L15 7.91003L16.59 9.50003L7.49 18.6L5.38 19.12L5.91 17.01Z" fill="white"/></svg></button>
                </div>

                <div class="card-body bg-default text-white text-start">
                    <h5 class="card-title h5">
                        ${this.tittle}
                    </h5>
                    <p class="card-text">
                        ${this.descricao}
                    </p>
                </div>

                <div class="card-footer container-fluid d-flex justify-content-between bg-${this.category} text-white rounded-0 align-items-center">
                    <button type="button" class="btn"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.96148 0.472628C2.62766 0.161568 2.18613 -0.00777501 1.72992 0.000274354C1.2737 0.00832372 0.838422 0.193138 0.51578 0.51578C0.193138 0.838422 0.00832372 1.2737 0.000274354 1.72992C-0.00777501 2.18613 0.161568 2.62766 0.472628 2.96148L4.51115 7L0.472628 11.0385C0.161568 11.3723 -0.00777501 11.8139 0.000274354 12.2701C0.00832372 12.7263 0.193138 13.1616 0.51578 13.4842C0.838422 13.8069 1.2737 13.9917 1.72992 13.9997C2.18613 14.0078 2.62766 13.8384 2.96148 13.5274L7 9.48885L11.0385 13.5274C11.3723 13.8384 11.8139 14.0078 12.2701 13.9997C12.7263 13.9917 13.1616 13.8069 13.4842 13.4842C13.8069 13.1616 13.9917 12.7263 13.9997 12.2701C14.0078 11.8139 13.8384 11.3723 13.5274 11.0385L9.48885 7L13.5274 2.96148C13.8384 2.62766 14.0078 2.18613 13.9997 1.72992C13.9917 1.2737 13.8069 0.838422 13.4842 0.51578C13.1616 0.193138 12.7263 0.00832372 12.2701 0.000274354C11.8139 -0.00777501 11.3723 0.161568 11.0385 0.472628L7 4.51115L2.96148 0.472628Z" fill="white"/></svg></button>
                    <time></time>
                    <svg id="status" class="me-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0"/><path d="M12 7v5l3 3"/></g></svg>
                </div>
            </div>
        `
        if(this.status){//
            shadow.querySelector('#status').innerHTML = this.icons.concluded;
        }

        shadow.querySelector('time').innerHTML = this.formatarData(this.term);
    }

    formatarData(dataISO) {
        const partes = dataISO.split('-');
        const ano = partes[0];
        const mes = partes[1];
        const dia = partes[2];
        return `${dia}/${mes}/${ano}`;
    }
    
}
customElements.define('task-card', Card);