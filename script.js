// ---------- 1. Show current year in footer ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- 2. Mobile menu (open / close) ----------
var menuBtn = document.getElementById("menuBtn");
var menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("show");
});

// ---------- 3. Admission form validation (only on contact page) ----------
var form = document.getElementById("admissionForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page from reloading

    var name = document.getElementById("studentName").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var studentClass = document.getElementById("classSelect").value;

    var valid = true;

    // clear old messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("classError").textContent = "";
    document.getElementById("result").textContent = "";

    // name check
    if (name.length < 2) {
      document.getElementById("nameError").textContent = "Please enter student name.";
      valid = false;
    }

    // email check
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email.";
      valid = false;
    }

    // phone check (exactly 10 digits)
    var phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      document.getElementById("phoneError").textContent = "Enter a 10 digit phone number.";
      valid = false;
    }

    // class check
    if (studentClass === "") {
      document.getElementById("classError").textContent = "Please select a class.";
      valid = false;
    }

    // if everything is correct
    if (valid) {
      document.getElementById("result").textContent =
        "Thank you, " + name + "! Your form has been submitted.";
      form.reset();
    }
  });
}
