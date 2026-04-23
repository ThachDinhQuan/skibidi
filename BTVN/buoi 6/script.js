const userInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

const exampleUsername = "admin";
const examplePassword = "123456";

function checkLogin() {
    const userInput = document.querySelector("#username").value;
    const passwordInput = document.querySelector("#password").value;

    if (userInput === exampleUsername && passwordInput === examplePassword) {
        alert("Đăng nhập thành công!");
    }else{
        alert("Sai tên đăng nhập hoặc mật khẩu!");
    }
}