        // عرض الشرائح
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        
        function showNextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        setInterval(showNextSlide, 3000);

        // تحويل النص إلى كلام
        function toggleSpeech() {
            const text = document.querySelector('.main-content').textContent;
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'ar';
            window.speechSynthesis.speak(utterance);
        }

        // إضافة تأثيرات التمرير للإحصائيات
        const stats = document.querySelectorAll('.stat-item');
        
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function animateStats() {
            stats.forEach(stat => {
                if (isElementInViewport(stat)) {
                    stat.style.transform = 'translateY(0)';
                    stat.style.opacity = '1';
                }
            });
        }

        window.addEventListener('scroll', animateStats);
        window.addEventListener('load', animateStats);


        // 12 كود جافا سكربت للتوقيت ساعة

    function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'PA';
    hours = hours % 12;
    hours = hours ? hours : 12; // تحويل الساعة 0 إلى 12
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    let strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById("clock").textContent = strTime;
}
setInterval(updateClock, 1000);
updateClock(); // تحديث الساعة فور تحميل الصفحة

    // دالة لتحديث عدد الزائرين
    function updateVisitorCount() {
        // الحصول على قيمة العداد من LocalStorage
        let count = localStorage.getItem('visitorCount');
        if (count === null) {
            count = 0;
        }
        count = parseInt(count) + 1; // زيادة العداد بمقدار 1
        localStorage.setItem('visitorCount', count); // تخزين القيمة الجديدة في LocalStorage
        document.getElementById("visitor-count").textContent = 'عدد الزائرين: ' + count;
    }

        // النافذة المنبثقة
        function showModal() {
            const modal = document.getElementById('welcomeModal');
            modal.style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('welcomeModal').style.display = 'none';
        }

        function showOffers() {
            window.location.href = 'packages.html';
        }

        // إظهار النافذة المنبثقة بعد ثانيتين من تحميل الصفحة
        setTimeout(showModal, 2000);

        // إغلاق النافذة المنبثقة عند النقر خارجها
        window.onclick = function(event) {
            const modal = document.getElementById('welcomeModal');
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
                // تغيير حجم النص
                let currentFontSize = 16;
                function changeFontSize(change) {
                    currentFontSize = Math.min(Math.max(currentFontSize + change, 12), 24);
                    document.body.style.fontSize = currentFontSize + 'px';
                }
// كود تكبير وتصغير النص
function increaseFontSize() {
    var body = document.querySelector('body');
    var currentSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));
    body.style.fontSize = (currentSize + 2) + 'px';
}

function decreaseFontSize() {
    var body = document.querySelector('body');
    var currentSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));
    body.style.fontSize = (currentSize - 2) + 'px';
}
