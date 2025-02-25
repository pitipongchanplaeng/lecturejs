//Variable ตัวแปร
var myData1 = "Hello..."; // เปลี่ยนค่าได้เป็นแบบ Global
let myData2 = 20; // เปลี่ยนค่าได้เป็นแบบ Local
const myData3 = "Wow..."; //เปลี่ยนค่าไม่ได้เป็นแบบ Local

myData1 = "Bye...";
myData2 = 30;
//myData3 = "Wow..."

{
  var a = 10;
  let b = 20;
  const c = 30;
  {
    var x = 40;
    let y = 50;
    const z = 60;
    console.log(a);
    console.log(x);
    console.log(b, c);
    console.log(y, z);
  }
  console.log(a);
  console.log(x);
  console.log(b, c);
  //console.log(y,z);Error
}
console.log(a);
console.log(x);
//console.log(b,c); Error
//console.log(y,z); Error
