//Operator ตัวดำเนินการ
// + - * / % ++ --
console.log(10 ** 2);

// == != > < >= <=
let a = 10;
let b = "10";
//Python a + b จะได้
//Java a + b จะได้ 1010
//JavaScript a + b จะได้ 20
//C# a + b จะได้ 20
let c = a + b;
console.log(c);
console.log(a * b);
//เปรียบเทียบว่าเท่ากันไหม
console.log(a == b); //ไม่สนใจ type
console.log(a === b); //สนใจ type
//เปรียบเทียบว่าไม่เท่ากันใช่ไหม
console.log(a != b); //ไม่สนใจ type
console.log(a !== b); //สนใจ type

a = "Hello";
console.log(a);

console.log("Bangna" < "Bangkok");

// Ternary Operator
// __? __ : __
//เงื่อนไข ? ถ้าเงื่อนไขเป็นจริง : ถ้าเงื่อนไขเป็นเท็จ

let score = 45;
let grade = score >= 50 ? "A" : "B";
console.log(grade);

//Nullish Operator
// __ ?? __
// หน้าเครื่องหมาย ?? ตัวนี้เป็น Null หรือ Undefined จะได้ค่าหลังเครื่องหมาย
// หน้าเครื่องหมาย ?? ไม่เป้น Null หรือ Undefined จะได้ค่านั้นเลย
let data = null;
console.log(data ?? "Hello...");
let data2 = "wow owo oww oow";
console.log(data2 ?? "Hello...");
let data3;
console.log(data3 ?? "Heyyy...");
