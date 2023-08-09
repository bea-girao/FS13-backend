function remove(id) {
    fetch(`http://localhost:8000/disciplinas/${id}`, {method: 'DELETE'});

    location.href="" //recarrega a pagina
}

function cadastrar() {
    event.preventDefault();

    fetch('http://localhost:8000/disciplinas', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            nome: document.getElementById('nome').value,
            carga_horaria: document.getElementById('carga_horaria').value
        })
    })
    //.then(res => res.json())
    //.then(status => {})
}

fetch('http://localhost:8000/disciplinas')
    .then(res => res.json())
    .then(dados => {
        dados.map(cada => {
            table_disciplinas.innerHTML += `
                <tr>
                    <td>${cada.id}</td>
                    <td>${cada.nome}</td>
                    <td>${cada.carga_horaria}</td>
                    <td>
                        <button class="btn btn-primary">Editar</button>
                        <button onclick="remove(${cada.id})" class="btn btn-danger">Excluir</button>
                    </td>
                </tr>
            `;
        })
    });