let people = [
    { name: "An", id: "1234" },
    { name: "Binh", id: "2345"},
    { name: "Tuan", id: "3456"},
];  
const dung = {
    name: "Dung",
    id: "4567",
};
people.push(dung);
const de = people.indexOf("1234");
people.splice(de);
console.log(people);

let me = {
    name: "Quan",
    age: 12,
    city: "Hanoi",
}
const email = "rock.shih0102@gmail.com";
const ages = me.indexOf(12);
me.push(email);
me.splice(ages);