const userDetailsContent = document.getElementById('user-details-content')

window.addEventListener('userSelected', event => {
    const user = event.detail
    userDetailsContent.innerHTML = `<p>ID: ${user.id} </p><p>Name: ${user.name} </p>`
})