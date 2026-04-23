const JSA51 = ["quan","tung","lam","giang","an","minh","duc"];
console.log(JSA51[3]);

console.log("Before: ",JSA51);

for (let index = 0;index<JSA51.length;index++) {
    console.log("Ban "+index+": "+JSA51[index]);
}

JSA51.push("thay vu");
console.log("push: ",JSA51);

const quan = JSA51.indexOf("quan");
console.log("vi tri cua quan la: ",quan);

JSA51.splice(4,2);
console.log("delete: ",JSA51);

const thayVu = {
    fullname: "nguyen duc vu",
    age: 99,
    gender: "male",
    isHandsome: true,
}

console.log(thayVu.fullname);
console.log(thayVu.age);

for (let key in thayVu) {
    console.log(key);
}

thayVu.id = "ABC123";
console.log(thayVu);

console.log(" ");
console.log(" ");
console.log(" ");

console.log("Bài thực hành: ");

let hocsinh = [
    { ten: "an", tuoi: 15, lop: "10A1"},
    { ten: "Binh", tuoi: 16, lop: "11A2"},
    { ten: "Chau", tuoi: 15, lop: "10A1"},
];
console.log(" ");
console.log("Nhiệm vụ 1:");
const Dung = {
    ten: "Dung",
    tuoi: 17,
    lop: "11A3",
}
hocsinh.push(Dung);

console.log(" ");
console.log("Nhiệm vụ 2:");
console.log(hocsinh);

console.log(" ");
console.log("Nhiệm vụ 3:");
const Binh = hocsinh[1];
Binh.tuoi = 17;
console.log(hocsinh);

