// =========================================================
// CLOSE BUTTON
// =========================================================

// Function مسؤولة عن زرار الـ X
function closePopup() {

    // بنجيب زرار الـ X
    const closeBtn = document.querySelector(".close-btn");

    // بنضيف class يخلي الـ X تلف
    closeBtn.classList.add("rotate");

    // نستنى حركة اللفة تخلص
    setTimeout(function () {

        // نرجع للـ Home
        // ../ معناها نطلع من فولدر sign in
        window.location.href = "../index.html";

    }, 500);
}


// =========================================================
// NEWSLETTER FORM
// =========================================================

// بنجيب الـ form من الـ HTML عن طريق الـ id
const form = document.getElementById("newsletterForm");


// بنضيف event لما المستخدم يعمل Submit
form.addEventListener("submit", function (event) {

    // يمنع الصفحة من الـ refresh
    event.preventDefault();


    // بنجيب قيمة الـ Email
    const email = document.getElementById("email").value;

    // بنجيب قيمة الـ First Name
    const firstName = document.getElementById("firstName").value;

    // بنجيب قيمة الـ Last Name
    const lastName = document.getElementById("lastName").value;

    // بنجيب تاريخ الميلاد
    const dob = document.getElementById("dob").value;

    // بنجيب الـ Favourite Location
    const location = document.getElementById("location").value;

    // checked بترجع true أو false
    const optin = document.getElementById("optin").checked;


    // =====================================================
    // CHECKBOX VALIDATION
    // =====================================================

    // نتأكد إن الـ checkbox متعلم عليه
    if (!optin) {

        // تظهر رسالة للمستخدم
        alert("Please opt in to our mailing list.");

        // نوقف تنفيذ باقي الكود
        return;
    }


    // =====================================================
    // SUCCESS MESSAGE
    // =====================================================

    // رسالة نجاح
    alert("Thank you for signing up!");


    // =====================================================
    // CONSOLE
    // =====================================================

    // نطبع البيانات في Console
    console.log("Email:", email);

    console.log("First Name:", firstName);

    console.log("Last Name:", lastName);

    console.log("Date of Birth:", dob);

    console.log("Favourite Location:", location);


    // =====================================================
    // RESET FORM
    // =====================================================

    // نمسح البيانات بعد التسجيل
    form.reset();

});