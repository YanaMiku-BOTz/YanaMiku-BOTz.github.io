document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');
    const changeTextButton = document.getElementById('changeTextButton');

    changeTextButton.addEventListener('click', function() {
        if (greetingElement.textContent === "Ini adalah website simpel.") {
            greetingElement.textContent = "Teks telah diubah oleh JavaScript!";
        } else {
            greetingElement.textContent = "Ini adalah website simpel.";
        }
    });
});