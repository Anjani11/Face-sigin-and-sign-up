const signinForm = document.querySelector(".signin-form");
const signupForm = document.querySelector(".signup-form");

const signinLink = document.querySelector(".signin-link");
const signupLink = document.querySelector(".signup-link");

signinLink.addEventListener("click", function() {
  signinForm.style.display = "block";
  signupForm.style.display = "none";
});

signupLink.addEventListener("click", function() {
  signinForm.style.display = "none";
  signupForm.style.display = "block";
});
