$(document).ready(function() {
    $('#form-tarefa').on('submit', function(e) {
        e.preventDefault(); 

        const nomeTarefa = $('#nome-tarefa').val();

        if (nomeTarefa.trim() !== '') {
            // Cria um novo item de lista com a tarefa
            const novaTarefa = $('<li></li>').text(nomeTarefa);
            
            // Adiciona o item à lista de tarefas
            $('#lista-tarefas').append(novaTarefa);
            
            // Limpa o campo de texto
            $('#nome-tarefa').val('');
        }
    });

    // Ao clicar em "Limpar Tarefas", remove todas as tarefas da lista
    $('#botao-cancelar').click(function() {
        $('#lista-tarefas').empty(); // Remove todas as tarefas
    });

    // Ao clicar em uma tarefa, aplica o efeito de riscar
    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
