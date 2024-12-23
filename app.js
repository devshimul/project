// const headings = document.getElementsByTagName("h1");
// for (const heading of headings) {
//   heading.style.backgroundColor = "orange";
//   heading.style.padding = "14px";
// }

// const p = document.getElementsByClassName("description");
// console.log(p);

// const descripiton = document.getElementById("description");
// console.log(descripiton);

// const btn = document.getElementById("login-btn").addEventListener('click', function(){

// });

document.getElementById("login-btn").addEventListener("click", function () {
  const emailField = document.getElementById("email-address");
  const emailValue = emailField.value;

  const passField = document.getElementById("pass-code");
  const passValue = passField.value;

  if (emailValue === "shimul@gmail.com" && passValue === "secret123") {
    window.location.href = "dashboard.html";
    console.log("Login successful!!");
  } else {
    alert("Wrong email or password!");
  }
});
