console.log("============ Buổi 3 ============");

const a = 6;
const b = 8;

console.log("a + b = ",a+b);
console.log("a - b = ",a-b);
console.log("a * b = ",a*b);
console.log("a / b = ",a/b);
console.log("a % b = ",a%b);

let c = 10;
c += 5;
console.log("c += 5 = ",c);

const num1 = 10;
const num2 = 20;
console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

const str = "10";
const num =10;
console.log(str == num);
console.log(num1 === num);
console.log(num1 != num2);
console.log(num1 !== num2);

const quan = true;
const giang  = false;
const start = quan && giang;
console.log("Bắt đầu: ",start);

const start2 = quan || giang;
console.log("Bắt đầu 2: ",start2);

const acc = "admin";
if (acc === "admin") {
    console.log("welcome back!");
}

const tem = 30;
if (tem > 30) {
    console.log("Trời nóng!");
} else {
    console.log("Trời mát!")
}

const score = 85;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}

// Bài 1: kiểm tra số chẵn. Nếu chẵn in ra "số chẵn"

const number = 2;
if (number % 2 == 0) {
    console.log("số chẵn!")
} else {
    console.log("số lẻ!")
}

for (let index = 1;index<=10;index++) {
    console.log("Vòng lặp thứ: ",index);
}

let index = 1;
while (index<=10) {
    console.log("Vòng lặp thứ: ",index);
    index++;
}

let i = 1;
do {
    console.log(i);
    i++;
} while (i<=3)