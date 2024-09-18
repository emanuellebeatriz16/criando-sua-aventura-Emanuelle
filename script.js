const avanca = document.querySelectoeAll('.btn-proximo');

avanca.forEach(button => {
    button.addventlistener('click', function () {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.gaetAttribute('data-proximo');
        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})
