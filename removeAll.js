document.querySelector('.remove-all').addEventListener('click', function(){
    const todoList = document.querySelector('.todo-list'); 
    document.querySelectorAll('li').forEach(item => {
        todoList.removeChild(item);
    });
})

