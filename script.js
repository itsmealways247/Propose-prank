const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const heartContainer = document.getElementById('heartContainer');
const nameInput = document.getElementById('name');

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * window.innerWidth);
    const j = Math.floor(Math.random() * window.innerHeight);
    noBtn.style.left = `${i}px`;
    noBtn.style.top = `${j}px`;
});

yesBtn.addEventListener('click', () => {
    const name = nameInput.value;
    if (name) {
        heartContainer.style.display = 'flex';
        sendEmail(name);
    } else {
        alert('Please enter your name first.');
    }
});

function sendEmail(name) {
    const email = 'radardestiny24@gmail.com';  // Replace with your email
    const subject = 'Date Proposal Response';
    const body = `Hello, my name is ${name} and I clicked Yes!`;
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}
