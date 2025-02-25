//Control Flow: Loop/Iteration/Repetition
//ทำงานเดิมซ้ำๆ
//while,do-while,for,for-in,for-of,foreach

//while พิสูจน์ก่อนทำงาน
let x = 0;
while (x < 5) {
  console.log(x, "Hello...", true);
  console.log(x + "Hello...", true);
  console.log(`${x} Hello...${true}`);
  x++;
}
console.log("---------------------------------");

//do-while ทำงานก่อนพิสูจน์
let y = 1;
do {
  console.log(`${y}, "Hello...", true`);

  y++;
} while (y <= 5);
console.log("---------------------------------");

//for รู้จำนวนครั้งที่จะทำงาน
for (let i = 1; i < 5; i++) {
  console.log(`${i}, "Hello...", true`);
}
console.log("---------------------------------");
