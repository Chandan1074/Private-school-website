document.getElementById("year").textContent = new Date().getFullYear();

var menuBtn = document.getElementById("menuBtn");
var menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("show");
});

var form = document.getElementById("admissionForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    var name = document.getElementById("studentName").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var studentClass = document.getElementById("classSelect").value;

    var valid = true;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("classError").textContent = "";
    document.getElementById("result").textContent = "";


    if (name.length < 2) {
      document.getElementById("nameError").textContent = "Please enter student name.";
      valid = false;
    }


    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email.";
      valid = false;
    }


    var phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      document.getElementById("phoneError").textContent = "Enter a 10 digit phone number.";
      valid = false;
    }


    if (studentClass === "") {
      document.getElementById("classError").textContent = "Please select a class.";
      valid = false;
    }


    if (valid) {
      document.getElementById("result").textContent =
        "Thank you, " + name + "! Your form has been submitted.";
      form.reset();
    }
  });
}
