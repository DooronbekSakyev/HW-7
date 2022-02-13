window.addEventListener('load', function (){
    const formAdd = this.document.querySelector('.form');
    const btn = this.document.querySelector('button');
    const todoItem = this.document.querySelector('.todo-list');
    const input = this.document.querySelector('#input-todo');

    formAdd.addEventListener('submit', function (e){
        e.preventDefault(); 
        });


    btn.addEventListener('click', function(){
            let myList = document.createElement('div')
             myList.classList.add('todo-item')
             todoItem.append(myList)
             myList.innerText = input.value
             input.value = ''
            
            myList.addEventListener('click', function(){
                myList.remove();
            });
        });
});