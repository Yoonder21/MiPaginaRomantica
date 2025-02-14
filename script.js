let music = document.getElementById("background-music");

// Función para alternar la música de fondo
function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Función para validar el acceso
function checkAccess() {
    let enteredCode = document.getElementById("access-code").value;
    let correctCode = "2424";  // Código de acceso privado

    if (enteredCode === correctCode) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        document.getElementById("error-message").textContent = "Código incorrecto, intenta de nuevo.";
    }
}
