document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.number-btn');
    const message = document.getElementById('message');
    const randomNumber = Math.floor(Math.random() * 9) + 1;

    const themeToggle = document.getElementById('theme-toggle');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const userGuess = parseInt(button.textContent);
            if (userGuess === randomNumber) {
                message.textContent = 'Correct! You have won!';
                message.style.color = 'green';
            } else if (userGuess < randomNumber) {
                message.textContent = 'Too low! Try again.';
                message.style.color = 'red';
            } else {
                message.textContent = 'Too high! Try again.';
                message.style.color = 'red';
            }
        });
    });

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });

    
});
