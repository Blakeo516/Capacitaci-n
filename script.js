// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Obtener valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validación básica (puedes reemplazar con lógica más compleja)
    if (username === 'admin' && password === '1234') {
        // Mostrar pantalla de bienvenida con botón de logout
        document.body.innerHTML = `
            <div class="welcome-container">
                <h1>Welcome, ${username}!</h1>
                <p>You have successfully logged in.</p>
                <button id="logoutBtn">Logout</button>
            </div>
        `;

        // Añadir funcionalidad al botón de Logout
        document.getElementById('logoutBtn').addEventListener('click', function() {
            // Volver a mostrar el formulario de login
            window.location.reload(); // Recargar la página para mostrar el formulario de login
        });
    } else {
        // Mostrar mensaje de error si las credenciales son incorrectas
        document.getElementById('error-message').style.display = 'block';
    }
});
