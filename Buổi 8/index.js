const loginForm = document.getElementById("form-login");
const userNameRight = "admin";
const passwordRight = "admin";
const phoneRight = "0896426932";
const emailRight = "hiendeptrai2201@gmail.com";
loginForm.addEventListener("submit", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    checkUser(username,password,phone,email);
});

function checkUser(username, password, phone, email) {
    if (username != userNameRight || password != passwordRight || phone != phoneRight || email != emailRight) {
        alert("Login fail !!");
    } else {
        alert("Login success !!");
    }
}