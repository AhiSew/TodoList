function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "todo@gmail.com" && password === "student") {
    window.location.href = "./dashboard.html"; // Replace "another_page.html" with the desired page URL
  } else {
    alert("Invalid email or password. Please try again.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var signInButton = document.getElementById("signIn");
  signInButton.addEventListener("click", function (event) {
    event.preventDefault();
    login();
  });
});
