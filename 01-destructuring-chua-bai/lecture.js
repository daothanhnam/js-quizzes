//destructuring in array
const toy = ["kiem do choi ", "xe canh sat ", "bup be ", "xe cuu thuong"];
// const toy1 = toy[1];
// const toy2 = toy[2];
// const  toy3 = toy[3];
// const  toy4 = toy[4];
const [a, b, c] = toy;
// console.log(a,b,c);
// console.log(`Đồ chơi thứ nhất trong mảng là :${a}`);
// console.log(`Đồ chơi thứ nhất trong mảng là :${b}`);
// console.log(`Đồ chơi thứ nhất trong mảng là :${c}`);

//destructuring in obj

const myStudent = {
  name: "Nam",
  age: 20,
  isSoPhomore: true,
};

// const studentName = myStudent.name;
// const studentAge = myStudent.age;
// const studentIsSoPhomore = myStudent.isSoPhomore;
// console.log(studentAge, studentAge, studentIsSoPhomore);

// const { name, age, isSoPhomore } = myStudent;

// console.log(name, age, isSoPhomore);

//sử dụng dấu ... trong js (rest operator và spread operator)

const myStudent2 = {
  name: "Minh",
  age: 20,
  ex: "Nhi",
};

//rest là obj chứa phần còn lại
// const { name, ...rest } = myStudent2;
// console.log(rest);

//Spread operator
//spread là lấy ra tất cả 
const obj1 = {
  name: "nam",
};

// const obj2 = obj1;
// console.log(obj1);
// console.log(obj2);
// obj2.name = "Minh";

const obj2 = {
  age: 20,
};
const obj3 = {
  phoneNumber: 12345,
};

const totalObj = { ...obj1, ...obj2, ...obj3 };
console.log(totalObj);
