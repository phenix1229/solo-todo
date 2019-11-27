document.querySelector('.remove-complete').addEventListener('click', function(){
    const todoList = document.querySelector('.todo-list'); 
    document.querySelectorAll('.complete').forEach(item => {
        todoList.removeChild(item);
    });
})