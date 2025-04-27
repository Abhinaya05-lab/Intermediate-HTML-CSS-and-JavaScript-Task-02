function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  // Check if any field is empty
  if (name === "" || email === "" || phone === "" || message === "") {
    alert("Please fill in all fields!");
    return false;
  }

  // Check phone number pattern (must match 123-456-7890)
  const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid phone number (format: 123-456-7890).");
    return false;
  }

  // If all good, show a nice pop-up
  const popupContent = 
    "🎉 Registration Successful! 🎉\n\n" +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n` +
    `Registered for: ${message}`;

  alert(popupContent);

  return false; // Prevent form from actually submitting
}
