let userInput = prompt("Nhập số vào: ");
while (userInput<=0) {
    userInput = prompt("Nhập lại số: ");
}
let b = "1";
let c = "2";
for (let i = 1;i<=userInput;i++) {
    console.log(b);
    b = b + c;
    c++;
}