const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let tareasPendientes=0;
let totalTareas=0;


function addTodo() {
  let lista = document.createElement("li");
  lista.classname=classNames.TODO_ITEM;
  
  let checkbox= document.createElement("input");
  checkbox.classname = classNames.TODO_CHECKBOX;
  checkbox.type = "checkbox";

  totalTareas ++
  itemCountSpan.innerText=totalTareas.toString();
  tareasPendientes++;
  uncheckedCountSpan.innerText=tareasPendientes.toString();

  checkbox.onchange=function(){
    if(checkbox.click){
    tareasPendientes--;
    }else{
    tareasPendientes++;
    }
    uncheckedCountSpan.innerText=tareasPendientes.toString();
  }

  let texto = document.createElement("span");
  texto.classname=classNames.TODO_TEXT;
  texto.setAttribute("editable", true);
  texto.innerHTML = `Tarea Nro. ${totalTareas}`;  

  lista.appendChild(checkbox);
  lista.appendChild(texto);
  list.appendChild(lista);
  
  
}
