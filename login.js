// login info here

document.getElementById("submit-btn").addEventListener("click", function () {
  const emailField = document.getElementById("input-email");
  const email = emailField.value;
  const passwordField = document.getElementById("input-password");
  const password = passwordField.value;

  //   this is not how it should be done

  if (email == "baper@taka" && password == "nimu") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid User");
  }
});
