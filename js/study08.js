//Function คือการทำงานหนึ่งๆ จะไม่ทำงานถ้าไม่เรียกใช้ (Call function)
//Function มี 4 ประเภทใหญ่ๆ

//1. No parameter No return
function funcA() {
  console.log("Hello...");
}

//2. Have parameter No return
function funcB(a, b) {
  console.log(a + b);
}

//3. No parameter Have return
function funcC() {
  console.log("Hey...");
  return 10;
}

//4. Have parameter Have return
function funcD(a, b, c, d) {
  console.log(a, b, c, d);
  return a + b + c + d;
}

funcA();
funcB(10, 20); //เราเรียกข้อมูลที่ส่งให้ parameter ว่า argument
funcC();
funcD(10, 20, 30, 40);
