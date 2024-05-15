// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("signupLink").addEventListener("click", function() {
//       document.querySelector("h1").textContent = "Sign Up";
//     });
  
//     document.getElementById("loginBtn").addEventListener("click", function() {
//       const email = document.getElementById("email").value;
//       const password = document.getElementById("password").value;
//       const agree = document.getElementById("agree").checked;
  
//       // Validation logic
//       if (email && password && agree) {
//         // Perform login/signup action
//         // You can implement AJAX request here to submit the form data
//         console.log("Email:", email);
//         console.log("Password:", password);
//       } else {
//         alert("Please fill all the fields and agree to terms.");
//       }
//     });
//   });
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Mock login process - Replace with actual login logic
    if (email === 'user@example.com' && password === 'password') {
        // Redirect to homepage
        window.location.href = 'index1.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
