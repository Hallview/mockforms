const submit = document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();
    
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmpassword").value;

  if (password !== confirmPassword) {
    alert("Password and Confirm Password do not match");
    return;
  }
});