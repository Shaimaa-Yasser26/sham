/* =========================================================
   REVEAL ELEMENTS
   ========================================================= */

// بنجيب كل العناصر اللي عليها class اسمها reveal
const revealElements = document.querySelectorAll('.reveal');

// بنعمل مراقب يراقب العناصر أثناء الـ Scroll
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        // لو العنصر دخل الشاشة
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }

    });

}, {
    // يبدأ الـ reveal لما 20% من العنصر يظهر
    threshold: 0.2
});

// بنخلي الـ observer يراقب كل عناصر الـ reveal
revealElements.forEach(el => observer.observe(el));


/* =========================================================
   SECTION 4 - SCROLL ANIMATION
   ========================================================= */

// بنجيب صورة Section 4
const heroImg4 = document.querySelector('.section4 .hero-img');

// Timer عشان نعرف إمتى الـ Scroll وقف
let scrollTimer;

window.addEventListener('scroll', () => {

    // نتأكد إن العنصر موجود
    if (!heroImg4) return;

    // أثناء الـ Scroll نضيف class scrolling
    heroImg4.classList.add('scrolling');

    // نلغي الـ timer القديم
    clearTimeout(scrollTimer);

    // نستنى 300ms بعد توقف الـ Scroll
    scrollTimer = setTimeout(() => {
        heroImg4.classList.remove('scrolling');
    }, 300);

});


/* =========================================================
   SCROLL TO TOP
   ========================================================= */

// بنجيب زر الرجوع لأعلى
const scrollTopBtn = document.getElementById('scrollTopBtn');

if (scrollTopBtn) {

    scrollTopBtn.addEventListener('click', function () {

        // نرجع لأول الصفحة بحركة سلسة
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

}