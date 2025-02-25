//Function
//Default parameter

const zz = (a, b = 20, c = 30) => {
  console.log(a + b + c);
};

zz(10);
zz(10, 40);
zz(10, 40, 50);

//Callback function
const aa = () => {
  console.log("Hello...");
};

const bb = (xx) => {
  console.log("Bye...");
  xx();
};
bb(aa);
bb(() => console.log("woo wee whoo"));
