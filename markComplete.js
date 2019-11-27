const addClass = function(){
    if (event.target.classList.length === 0){
        event.target.classList.add('complete');
    } else if (event.target.classList.length !== 0){
        event.target.classList.remove('complete');
    }
}

const markLi = function(){
    document.querySelectorAll('.todo-list > li').forEach(item => {
        item.addEventListener('click', addClass);
    });
}
