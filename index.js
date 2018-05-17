//day 2 and day 3
const form = document.querySelector('#itemForm')
let itemArray = new Array


function makeList(itemName) {
    const list = document.createElement('ul')

    const item = document.createElement('li')
    item.textContent = itemName

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Delete'
    deleteButton.addEventListener('click', deleteItem)
    //deleteButton.setAttribute('type', 'reset')
    // deleteButton.addEventListener('onclick', function(e) {
    //     node.parentNode.removeChild(node);
    // });

    list.appendChild(item)
    list.appendChild(deleteButton)
    return list
}

function deleteItem(ev) {
    //var element = `${itemName}`
    ev.preventDefault()
    const btn = ev.target
    btn.parentNode.remove()
}

const handleSubmit = function(ev) {
    ev.preventDefault()
    const f = ev.target

    const itemName = f.itemName.value
    const thing = {
        name: itemName,
    }
    //add items to an array
    itemArray.push(thing)
    
    const items = document.querySelector('#items')

    items.appendChild(makeList(itemName))

    form.reset()
    form.itemName.focus()
}
form.addEventListener('submit', handleSubmit)