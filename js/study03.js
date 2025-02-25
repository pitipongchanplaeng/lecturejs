//value of variable
let data1 = "Hello...";
let data2 = 123456;
let data3 = true;
//index number 0 1 2 3 4
let data4 = [1, 2, 3, 4, 5];
let data6 = ["Curry", 30, true]; //ไม่แนะนำ
let data7 = ["Curry", "Shopee", "Lazada"];
let data5 = {
  fullname: "Curry",
  age: 30,
  status: true,
  color: ["red", "green", "blue"],
  address: {
    no: "22/2",
    soi: "Soi 100 ",
    street: "Thonglor",
    province: "Bangkok",
  },
};

let data8 = null;
let data9;

console.log(data5.fullname);
console.log(data5.status);
console.log(data5.age);
console.log(data5.color[1]);
console.log(data5.address.street);
console.log("---------------------------------");

console.log(data1);
console.log(data2);
console.log(data3);
console.log("---------------------------------");
//เข้าถึงเฉพาะบางตัวของ Array
console.log(data4[1]);
console.log(data4[4]);
data4[2] = 333;
console.log(data4[2]);
console.log("---------------------------------");
//เข้าถึงข้อมูลทุกตัวของ Array
data4.forEach((value) => {
  console.log(value * 10);
});

console.log("---------------------------------");
console.log(data8);
console.log(data9);
