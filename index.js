document.addEventListener('DOMContentLoaded', () => {
    // 1. Плавний скрол
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Обробка форми
    const form = document.getElementById('js-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            btn.innerText = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Thank you! We will contact you shortly.');
                form.reset();
                btn.innerText = 'Send Request';
                btn.disabled = false;
            }, 1500);
        });
    }

    // 3. Burger menu (placeholder logic)
    const burger = document.getElementById('js-burger');
    if (burger) {
        burger.addEventListener('click', () => {
            alert('Mobile menu clicked! Add your nav-active styles here.');
        });
    }
});