
// contact form js ------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("msgError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    // Name validation
    if (name.value.trim() === "") {
      nameError.textContent = "Name is required.";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
      emailError.textContent = "Enter a valid email.";
      isValid = false;
    }

    // Message validation
    if (message.value.length < 6) {
      messageError.textContent = "Message must be at least 6 characters.";
      isValid = false;
    }

    if (isValid) {
      alert("Message sent successfully!");
      form.reset();
    }
  });
});