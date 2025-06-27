function adicionarMeta() {
    const meta = document.getElementById('meta').value;
    if (meta.trim() !== '') {
        const lista = document.getElementById('listaMetas');
        const item = document.createElement('li');
        item.textContent = meta;
        lista.appendChild(item);
        document.getElementById('meta').value = '';
    }
}

function salvarAnotacao() {
    const texto = document.getElementById('anotacao').value;
    if (texto.trim() !== '') {
        const areaAnotacoes = document.getElementById('minhasAnotacoes');
        const novaAnotacao = document.createElement('p');
        novaAnotacao.textContent = texto;
        areaAnotacoes.appendChild(novaAnotacao);
        document.getElementById('anotacao').value = '';
    }
}
