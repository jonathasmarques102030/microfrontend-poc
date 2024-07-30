fetch('../user-list/index.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('user-list').innerHTML = html;
        return fetch('../user-list/index.js');
    })
    .then(response => response.text())
    .then(script => {
        const scriptElement = document.createElement('script');
        scriptElement.innerHTML = script;
        document.body.appendChild(scriptElement);
    });

fetch('../user-details/index.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('user-details').innerHTML = html;
        return fetch('../user-details/index.js');
    })
    .then(response => response.text())
    .then(script => {
        const scriptElement = document.createElement('script');
        scriptElement.innerHTML = script;
        document.body.appendChild(scriptElement);
    });