function closePopup() {
    const closeBtn = document.querySelector('.close-btn');

    closeBtn.classList.add('rotate');

    setTimeout(() => {
        // هنا كود قفل الـ popup بتاعك
        popup.style.display = 'none';

        closeBtn.classList.remove('rotate');
    }, 400);
}