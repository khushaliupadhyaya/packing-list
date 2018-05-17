//day 2 and day 3
const form = document.querySelector('#itemForm')
let itemArray = new Array
//let itemName


function makeList(thing) {
    const list = document.createElement('ul')
    
    //const item = document.createElement('li')
    item = document.createElement('li')
    // item.textContent = itemName
    item.textContent = thing['name']

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Delete'
    deleteButton.addEventListener('click', deleteItem)

    //deleteButton.tagName = itemName
    //deleteButton.addEventListener('click', deleteFromArray(item))
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
    //btn.name = itemName
    //gets the button but cannot access to the name/li that the button is in. Unable to access the actual element NAME
    btn.parentNode.remove()
    //itemArray.splice(itemArray.indexOf(itemArray[`${itemName}`], 1))
     itemArray.splice(itemArray.indexOf(btn), 1)
    //itemArray.splice(itemArray.indexOf(ev.path[1].childNodes[0].textContent), 1)
    // const l = btn.name;
    //debugger
}

// function deleteFromArray(item) {
//     itemArray.splice(itemArray.indexOf(item), 1)
// }

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

    // items.appendChild(makeList(itemName))
    items.appendChild(makeList(thing))

    form.reset()
    form.itemName.focus()
}
form.addEventListener('submit', handleSubmit)