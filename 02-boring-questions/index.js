// 1. Sử dụng typeof để xác định kiểu dữ liệu
// const randomNumber = 69420;
// const randomString = "random string";
// console.log(typeof randomString);
// console.log(typeof null);

// 2. Sử dụng cách nâng cao hơn vào những trường hợp khó hơn như sau
// const randomArr = [1, 2, 3];

// const randomObject = {
//   name: "Hoang",
// };

// const thoiGianHienTai = new Date();

// console.log(Object.prototype.toString.call(thoiGianHienTai));
// console.log(Object.prototype.toString.call(randomArr));
// console.log(Object.prototype.toString.call(randomObject));

// console.log(typeof NaN);

// 3. Type Coercion
// console.log("Nam" + false);

// 4. Truthy/Falsy Value

// Javascript có 2 giá trị boolean true/false
// Số 0 là một falsy value, vì vậy khi mình convert số 0 sang kiểu dữ liệu Boolean thì nó sẽ trở thành false
// Số 1 là truthy value, một mảng có dữ liệu, một object có dữ liệu cũng là truthy value
// const namIsThongMinh = true;

// if (namIsThongMinh === !!4) {
//     console.log("Nam thong minh");
// }

// Semicolon trong tiếng Việt dịch ra là dấu ;
// Automatic Semicolon là cơ chế tự động thêm dấu ; mỗi khi bạn xuống dòng trong code

// function returnSomething(){
//     return {
//         name: "Nam"
//     };
// };

// console.log(returnSomething());