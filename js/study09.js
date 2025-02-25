//Function expression (Anonymous/Arrow)
//คือการเอาฟังชันไปเก็บไว้ในตัวแปร

const aa = "Hello...";

//Anonymus function
const xx = function () {
  console.log("Wow wow wow");
};

//Arrow function
const yy = () => {
  console.log("Wow...");
};

const zz = (a, b) => {
  console.log(a + b);
};
const mm = (a) => {
  return a * 100;
};
const nn = () => console.log("Mawow");
const oo = (x, y) => x ** y;

console.log(aa);
xx();
yy();
zz(10, 20);
console.log(mm(10));
nn();
console.log(oo(10, 5));
