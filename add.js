document.querySelector('.add-todo').addEventListener('click', function(){
    const listArr = [];
    if (inputBox.value !== '' && inputBox.value !== ' '){
    listArr.push(Object.values(createObject()));
    for (const item of listArr){
        const newLi = document.querySelector('.todo-list').appendChild(document.createElement('li')).innerText = `${item[0]}\n${item.slice(1)}`;
        markLi();
    }
    inputBox.value = '';
    }
})
