const addInput = document.querySelector(".add-input")
const addBtn = document.querySelector('.add-btn')
const todoList = document.querySelector('.todo-list')

let allTodos = JSON.parse(localStorage.getItem('todos')) || []

addBtn.addEventListener("click", () =>{
    addNewItem()
})
addInput.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter'){
       addNewItem()
    }
})
const addNewItem = () =>{
    if(addInput.value.trim() === '') {
        alert("Please enter you item!")
        addInput.value = ''
        return
    }
    allTodos = [...allTodos, addInput.value]
    localStorage.setItem('todos', JSON.stringify(allTodos))
    addInput.value = ''
    drawList(allTodos)

}
const drawItem = (itemText) => {
    const li = document.createElement("li")
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between')
    const span = document.createElement('span')
    span.textContent = itemText
    const button = document.createElement('button')
    button.classList.add('btn','btn-danger', 'btn-sm', 'delete-btn')
    button.textContent = 'delete'
    li.appendChild(span)
    li.appendChild(button)
    todoList.appendChild(li)
}

const clickDeleteBtn = () => {
    const deleteButtons = document.querySelectorAll('.delete-btn')
    deleteButtons.forEach((deleteBtn, btnIndex) => {
        deleteBtn.addEventListener('click', () => {
            allTodos = allTodos.filter((todoFromStorage, indexFromStorage) => btnIndex !== indexFromStorage)
            localStorage.setItem('todos', JSON.stringify(allTodos))
            drawList(allTodos)
        })
    })
}
const drawList = (array) => {
    todoList.innerHTML = ''
    array.forEach((todo) => {
        drawItem(todo)
    })
    clickDeleteBtn()
}
drawList(allTodos)
