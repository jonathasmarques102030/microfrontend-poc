const users = [
    {id: 1, name: 'Alice'},
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
]

const userList = document.getElementById('users');
users.map(user => {
    const listItem = document.createElement('li')
    listItem.textContent = user.name
    listItem.onclick = () => {
        const event = new CustomEvent('userSelected', { detail: user })
        window.dispatchEvent(event)
    }
    userList.appendChild(listItem)
})