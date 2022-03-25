const addInput = document.querySelector(".add-input")
const addBtn = document.querySelector('.add-btn')
const todoList = document.querySelector('.todo-list')





addBtn.addEventListener("click", () =>{
    if (addInput.value.length === 0) {
        alert("Enter item name")
    }
    const li = document.createElement("li")
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between')
    const span = document.createElement('span')
    span.textContent = addInput.value
    const button = document.createElement('button')
    button.classList.add('btn','btn-danger', 'btn-sm', 'delete-btn')
    button.textContent = 'delete'

    li.appendChild(span)
    li.appendChild(button)
    todoList.appendChild(li)
    addInput.value = ''

    const deleteButtons = document.querySelectorAll('.delete-btn')
    deleteButtons.forEach((oneDeleteBtn, idx) => {
        oneDeleteBtn.addEventListener('click', () => {
           const listGroupItems = document.querySelectorAll('.list-group-item')
            listGroupItems[idx].remove()
        })
    })
    console.log(deleteButtons)


})