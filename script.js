document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        // إخفاء شاشة التمهيد
        document.querySelector('.splash-screen').classList.add('fade-out');
        
        // إظهار المحتوى الرئيسي
        document.querySelector('.main-content').style.display = 'block';
        
        // إزالة المحتوى التمهيدي من الواجهة
        document.querySelector('.splash-screen').style.display = 'none';
        
        // إتاحة التمرير مرة أخرى بعد إخفاء الشاشة التمهيدية
        document.body.style.overflow = 'auto';
    }, 2000); // 2000 مللي ثانية = 2 ثانية
    
    // تبديل بين وضع النهار والليل
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    sunIcon.addEventListener('click', () => {
        document.body.classList.add('night-mode');
        document.body.classList.remove('day-mode');
    });
    
    moonIcon.addEventListener('click', () => {
        document.body.classList.add('day-mode');
        document.body.classList.remove('night-mode');
    });
    
    // تبديل عرض القائمة المنسدلة
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});


