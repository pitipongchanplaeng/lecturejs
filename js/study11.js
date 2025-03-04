//Exception Handling : Error/Exception
//Try-catch
//tru-catch-finally

try {
  console.log(data1);
} catch (error) {
  console.log("พบปัญหาการทำงานติดต่อ Admin/IT...");
  //console.log(error);
  //console.log(error.name);
  console.log(error.message);
  //console.log(error.stack);
} finally {
  console.log("ขอบคุณที่ใช้บริการ...");
}
