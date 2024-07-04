const birthdayForm = document.getElementById('birthday-form');
const calculateBtn = document.getElementById('calculate-btn');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');

birthdayForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const birthday = new Date(year, month - 1, day);
    const today = new Date();
    const age = today.getFullYear() - birthday.getFullYear();
    const m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    resultElement.textContent = `You are ${age} years old.`;
    resultContainer.style.display = 'block';
    animateResult();
});

function animateResult() {
    anime({
        targets: '#result-container',
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOut',
    });
}