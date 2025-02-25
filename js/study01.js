//data type
//String
console.log("ABC");
console.log("ABC");
//Number
console.log(123456);
//Boolean
console.log(true);
//Array
console.log([1, 2, 3, 4, 5, "Hello", true]);
//Object
console.log({ fullname: "Much", age: 20 });
//Null
console.log(null);
//Undefined
console.log(undefined);

// ตัวแปร
var a = 10; //เป็นแบบ Global ใช้ที่ไหนก็ได้
let b = 20; // เป็นแบบ Local ใช้ได้เฉพาะใน {} หนึ่ง เท่านั้น
const c = 30; //ไม่สามารถเปลี่ยนค่าได้ local ใช้ได้เฉพาะใน {} หนึ่ง เท่านั้น

let data01 = "Wow...";
let data02 = 123456;

//เวลาเอาข้อมูลหลากหลายแบบใช้ร่วมกัน
console.log("AAA" + 555 + data01 + data02);

console.log(`AAA ${555} ${data01} ${data02}`);
