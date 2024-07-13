const input = document.getElementById('input');
const botao = document.getElementById('botao');
const lista = document.getElementById('listaTarefas');

const addTarefa = () => {
    const texto = input.value;
    if (texto != '') {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" name="" id="checkbox"><span>${texto}</span> <button class = 'botaoDelete'><img src="lixo.png" alt="" id='lixo'></button>`;

        lista.appendChild(li);

        li.querySelector('.botaoDelete').addEventListener('click', () => {
            li.remove();
        })

        input.value = '';

        li.querySelector('#checkbox').addEventListener('click', () => {
            li.classList.toggle('completado');
        })

    }
}

botao.addEventListener('click', addTarefa);
