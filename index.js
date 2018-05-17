//day 2 and day 3
const form = document.querySelector('#itemForm')
let itemArray = new Array


const makeListItem = function(data) {
    const item = document.createElement('li')
    item.textContent = data

    // item.textContent = `${label}: ${value}`
    // item.textContent = `${label}: ` 

    return item
}

function makeList(data) {
    const list = document.createElement('ul')
    //const labels = Object.keys(data)
    //for each label, do this (arrow function)
    //labels.forEach(label => {
    //    const item = makeListItem(label, data[label])
    
    const item = makeListItem(data)
    list.appendChild(item)
    return list
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