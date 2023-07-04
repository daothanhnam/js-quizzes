## Scope trong Javascript là gì ?

### Khái niệm

Scope - dịch ra tiếng Việt là `phạm vi`. Vậy thì Scope trong Javascript sẽ được hiểu là phạm vi của các biến được
khai báo mà ta có thể truy cập được.

### Global Scope

- Trước khi bắt đầu viết bất kì một dòng code nào, chúng ta sẽ nằm trong phạm vi truy cập toàn cục - **Global scope**.

### Local Scope

- Local Scope thực ra có thể chia ra làm 2 dạng scope nhỏ khác:

  - Function Scope
  - Block Scope

- Function Scope: Khi ta bắt đầu khởi tạo một function, vô hình chung ta đã đang nằm trong **Function Scope**.
  Trong phạm vi này thì bất kì biến nào được khai báo bên trong, thì bên ngoài đều không truy cập được.

```js
function sayHello() {
  var hello = "Hello, Khoi";
  console.log(hello);
}
// Biến hello chỉ có thể truy cập được trong function sayHello
console.log(hello); // Lỗi: hello is not defined
```

- Block Scope: Khi ta khai báo một biến bên trong một block như if, for, while, switch, ... thì biến đó chỉ có thể truy cập được trong block đó thôi. Nhưng ngược lại, nếu ta khai báo một biến bên ngoài block thì biến đó có thể truy cập được từ bên trong block.

**NHƯNG LƯU Ý:** Bất kỳ biến nào được khai báo bằng từ khóa var đều không thể có Block scope.

```js
if (true) {
  let hello = "Hello, Khoi";
}
console.log(hello); // Lỗi: hello is not defined
```

### Lexical Scope aka Closure

- Trong Javascript, một function có thể được tạo bên trong một function khác. Và chúng ta có thể truy cập vào các biến của function bên ngoài từ function bên trong. Đó được gọi là **Lexical Scope** hay còn có tên gọi thân quen khác là **Closure** đó. Chi tiết về Closure sẽ nói thêm ở mục riêng nằm bên dưới

## IIFE là gì ?

- IIFE là viết tắt của Immediately Invoked Function Expression. Hay còn được hiểu là "Một function được chạy ngay lập tức"

- Là một function được chạy ngay lập tức khi ứng dụng được chạy. Nhưng có một số thứ đặc biệt về function này một xíu

```js
var hello = "Hello, Khoi";

(function chaoCai() {
  var hello = "Hello, Minh";
  console.log(hello);
})();

console.log(hello);
```

- Toàn bộ biến được đặt bên trong một IIF sẽ không thể bị truy cập được từ bên ngoài.

```js
var hello = "Xin chào,";
var name = "Khôi";

(function chaoCai() {
  var hello = "Hello,";
  console.log(`${hello} ${name}`);
})();
```

Ở ví dụ trên thì, tôi truyền giá trị của biến name vào trong IIF. Và yup, sử dụng được thoải mái.

Công dụng của IIFE: Để tạo thư viện vậy thoi, tránh làm conflicts giữa các tên biến được đặt trong thư viện với các tên biến mình tạo trong code của mình.

## Undefined khác not defined (undeclared) như nào ?

- Undefined là khi mình đã khai báo biến, nhưng biến đó chưa được khởi tạo giá trị.
- Not defined là một biến chưa được khai báo.

## Closure là gì ?

Ví dụ đơn giản, mình có một chiếc thùng, bây giờ mình đem con mèo cùng với mớ đồ chơi của nó quẳng hết vào trong thùng sau đó đóng thùng lại, bây giờ chiếc thùng sẽ chính là Closure bao đóng con mèo và đồ chơi của nó. Và trong lúc đó, con mèo vẫn có thể sử dụng đồ chơi của nó bất kể khi nào nó muốn vì tất cả đều ở trong thùng cùng nó.

```js
function thung() {
  var doChoi1 = "Cuộn len";
  var doChoi2 = "Gấu bông";
  var doChoi3 = "Cần sa mèo";
  function conMeo() {
    console.log(
      `Chú mèo cute phô mai wue đang chơi đùa với ${doChoi1}, sau khi chơi xong thấy mệt quá nên bèn nằm ngủ cạnh ${doChoi2}. Tỉnh dậy thấy nhạt mồm nên chú mèo hít tí ${doChoi3}`
    );
  }
}
```

Đó có thể thấy, function conMeo có thể sử dụng được các biến doChoi1, doChoi2, doChoi3 nằm ở function thung bao bọc nó. Và đó chính là Closure.
