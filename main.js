$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();

        const tarefaDia = $('#tarefa-dia').val();
        const novaTarefa = $('#nova');

        $(`<li>${tarefaDia}</li>`).appendTo(novaTarefa);
    
        $(novaTarefa).fadeIn('slow');
        $('#tarefa-dia').val('');
    });
    
    $('#nova').on('click','li', function(e){
        $(e.target).toggleClass('completed');
    });
    
    $('#botao-cancelar').click(function(){
        $('#nova').empty();
    })

})

