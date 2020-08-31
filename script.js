const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const alerta = document.getElementById('alerta')

var listaTareas = []



function addTodo(nombre) {
  if(checkearNombreValido(nombre)){
    itemCountSpan.innerHTML = parseInt(itemCountSpan.innerText,10) + 1
    uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerText,10) + 1
    listaTareas.push("<li><input type='checkbox' onchange='changeCheck(this)'>"+nombre+"</li>")
    list.innerHTML = listaTareas
  }

  
}
function changeCheck(event){
  if(event.checked){
    uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerText,10) -1
  }else{
    uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerText,10) +1
  }
}
function checkearNombreValido(nombre){
  if(nombre.length==0){
    alerta.innerHTML = "Debe agregar el nombre"
    alerta.className = "error"
    return false
  }else{
    alerta.innerHTML = ""
    alerta.className = "correcto"
    return true
  }
}
