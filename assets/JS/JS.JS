const abrirjanela = document.querySelectorAll('.janela .abrir');

abrirjanela.forEach((abrir) => {
    abrir.addEventListener('click', (e) => {
        const janela = abrir.parentElement;
        const isOpen = janela.classList.contains('open');

        if (isOpen) {
            janela.classList.remove('open');
        } else {
            janela.classList.add('open');
        }
    })
}

)