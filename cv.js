document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded Successfully!");

    // تأثير ظهور الصفحة عند التحميل
    document.body.classList.add("fade-in");

    // تأثير الانتقال السلس عند الضغط على الروابط
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            const href = this.getAttribute("href");

            // التأكد من أن الرابط ليس لملف خارجي
            if (!href.startsWith("http") && !href.startsWith("#")) {
                event.preventDefault();

                // إضافة تأثير الاختفاء قبل الانتقال
                document.body.classList.add("fade-out");

                setTimeout(() => {
                    window.location.href = href;
                }, 500); // الانتقال بعد 0.5 ثانية
            }
        });
    });
});
