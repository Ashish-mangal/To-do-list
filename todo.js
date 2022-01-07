var MainTodoContainer=document.getElementById('todos');
var input=document.querySelector('.todo-input');


var addingButton = document.querySelector('.add-item');
var deleteAllBtn = document.querySelector('.deleteBtn');

addingButton.addEventListener('click',function(e){
    if(input.value.trim()){
        var ulTag= document.createElement('ul');
        ulTag.classList.add('todo-list-container');

        var todoList=document.createElement('div');
        todoList.classList.add('todo-list');

        var liTag=document.createElement('li');
        liTag.innerHTML=input.value;
        liTag.classList.add('todo-item');

        var buttonDiv= document.createElement('div');
        buttonDiv.classList.add('button');

        var completeButton= document.createElement('button');
        completeButton.classList.add('completed');
        completeButton.innerHTML='<i class="fas fa-check"></i>';

        var editBtn= document.createElement('button');
        editBtn.classList.add('editBtn');
        editBtn.innerHTML='<i class="far fa-edit"></i>';
        editBtn.onclick= function(){
            editWorking(liTag);
        }

        var trashButton= document.createElement('button');
        trashButton.classList.add('trash');
        trashButton.innerHTML='<i class="fas fa-trash"></i>';

        ulTag.appendChild(todoList);
        todoList.appendChild(liTag);
        todoList.appendChild(buttonDiv);
        buttonDiv.appendChild(completeButton);
        buttonDiv.appendChild(editBtn);
        buttonDiv.appendChild(trashButton);
        
        MainTodoContainer.appendChild(ulTag);
        todoList.addEventListener('click',function(e){
            var items=e.target;
            if(items.classList[0]==='completed'){
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                todo2.classList.add('line-through');
            }
            else if(items.classList[0]==='trash'){
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                var todo3 = todo2.parentElement;
                todo3.classList.add('fall');
                todo3.addEventListener('transitionend',function()
                {
                    todo3.remove();
                })
            }
        });

        input.value='';

    }
    else if(input.value==='')
    {
        alert('PLEASE FILL THE INPUT FIELD IT IS MANDATORY');
    }


}) 

function editWorking(e){
    var editValue=prompt('edit the selected item', e.firstChild.nodeValue);
    e.firstChild.nodeValue=editValue;
}
function deleteAllElements(){
    var gettingULTag=document.querySelectorAll('.todo-list-container');
    for(var i=0;i<gettingULTag.length;i++)
    {
        gettingULTag[i].remove();
    }
    input.value='';

}