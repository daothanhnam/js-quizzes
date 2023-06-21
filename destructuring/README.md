## Hướng dẫn xem file markdown một cách tiện lợi trong VSCode

- Cài 6 extensions sau:

  - Github Markdown Preview
  - Markdown Checkboxes
  - Markdown Emoji
  - Markdown Footnotes
  - Markdown Preview Github Styling
  - Markdown yaml Preamble

![Ảnh minh họa (refresh lại nếu không hiển thị ảnh)](https://i.ibb.co/3rDJxgC/image.png)

- Sau khi cài mở file README.md lên, gõ tổ hợp Ctrl + K, sau đó bấm chữ V. Vừa đọc markdown vừa code theo yêu cầu là ok

- Video hướng dẫn nếu không hiểu: https://www.youtube.com/watch?v=nOMCI0eSkqM

## Hướng dẫn xem Output không cần sử dụng index.html

Ví dụ đang làm bài tập ở folder destructuring thì gõ vào terminal `cd destructuring` (Hoặc là gõ `cd` rồi `bấm Tab` để nó tự auto-complete). Tiếp theo chạy `node index.js` để xem output

Chưa hiểu thì xem ở đây: https://www.youtube.com/watch?v=8o_vkZNFex8

## Destructuring là gì?

Destructuring là một cách viết ngắn gọn hơn để lấy một loạt các giá trị nằm trong một mảng hoặc một object.

### 1. Cơ bản mức độ 1

Ví dụ cơ bản một trường hợp như dưới đây:

```js
const arr = [1, 2, 3];
```

Tức là:

```js
console.log(arr[0]); // Output: 1
console.log(arr[1]); // Output: 2
console.log(arr[2]); // Output: 3
```

Muốn lấy từng giá trị của **mảng arr** thì có thể viết như kia, nhưng thay vào đó mình cũng có thể viết như sau:

```js
const [a, b, c] = [1, 2, 3];

// Lúc này, ta sẽ in từng giá trị ra console:
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
```

Đó, vậy là có thể hiểu:

- `a` tương ứng với phần tử đầu tiên trong mảng tức là `1`
- `b` tương ứng với phần tử thứ hai trong mảng tức là `2`
- `c` tương ứng với `3`

### 2. Cơ bản mức độ 2

Bây giờ, ví dụ thêm một ví dụ nữa đi:

```js
const names = ["John", "Ken"];
```

Sử dụng Destructuring, thực hiện in ra `Ken`, mà không cần lấy ra `John`. Tự làm vào trong file index.js. Rồi xem đáp án sau:

<details>
  <summary>
  <strong>Đáp án & Giải thích</strong>
  </summary>

```js
// Sử dụng dấu phẩy để bỏ qua phần tử đầu tiên trong mảng (tức là bỏ qua John), và chỉ lấy ra phần tử thứ 2 trong mảng (tức là Ken)
const [, secondName] = names;
console.log(secondName);
```

</details>

### 3. Tạm ổn mức độ 1

Bây giờ, mình sẽ nghỉ chơi với Array, chuyển qua Object chơi, tại vì Object nó cũng có thể dùng Destructuring được. Vả lại kĩ thuật này được áp dụng nhiều hơn với Object

Tương tự với Array thôi, Object cũng có thể bị destructured như sau:

```js
const { a, b, c } = { a: 1, b: 2, c: 3 };
// In ra từng giá trị trong Object
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
```

Okay, nếu có mỗi vậy thì cần gì phải học về **Destructuring** phải hôm pé ?? Bây giờ mình sẽ thử một ví dụ khác nữa:

```js
const student = {
  lastName: "Nam",
  age: 20,
  isMale: true,
  isFrontEndDeveloper: true,
};

const { lastName, age, isMale, ...rest } = student;
console.log(lastName, age, isMale, rest);
// Output: Nam 20 true { isFrontEndDeveloper: true }
```

Ở đây ngoài kĩ thuật **Destructuring**, còn sử dụng một kĩ thuật nữa gọi là **Rest Operator**. Là một kĩ thuật dùng để lấy ra các phần tử còn lại nằm trong một Array hoặc một Object. Ở ví dụ trên:

- Đầu tiên, là lấy ra giá trị của 3 phần tử đầu tiên trong Object `student`, lần lượt là `lastName`, `age`, `isMale`.

- Tiếp theo, lấy ra phần còn lại của Object `student`. Rest ở trong Tiếng Anh ngoài được hiểu là động từ mang ý nghĩa **"nghỉ ngơi"**, thì còn là một danh từ chỉ **"phần còn lại của cái gì đó"**. Và ở đây, `...rest` chính là các phần còn lại của Object `student`, tức là `{isFrontEndDeveloper: true}`.

Nói zậy có thể pé chưa hiểu, thì làm tầm 2 bài chắc sẽ hiểu thôi nhỉ.

Đây là ví dụ điển hình của những gì học ở trường và khi đi thi nhé:

```js
// Bài tập 2 và 3: Qua file index.js đọc đề bài nhé
```

### 4. Tạm ổn mức độ 2

Nếu hiểu mọi thứ ở trên rồi, thì cũng gọi là tạm ổn x2. Bây giờ như pé biết, khi ta truyền vào function một tham số là object, thì ta sẽ không cần phải truyền theo đúng thứ tự của các key trong object đó. Ví dụ:

```js
// Sử dụng tham số bình thường
function logStudentInfo(name, age, school) {
  console.log(name, age, school);
}

logStudentInfo("Nam", 20, "HUST"); // Phải truyền theo đúng thứ tự của các tham số (name, age, school)

// Sử dụng tham số là một object
function logStudentInfo({ name, age, school }) {
  console.log(name, age, school);
}

logStudentInfo({ age: 20, name: "Nam", school: "HUST" }); // Không cần truyền theo đúng thứ tự, chỉ cần đủ key là được
```

Bài tập tiếp theo thôi nhỉ?

```js
// Bài tập 4: Qua file index.js đọc đề bài nhé
```

<details>
  <summary>
  <strong>Đáp án & Giải thích</strong>
  </summary>

```js
const myStudent = {
  name: "Khoi",
  age: 20,
  school: "FPTU HN",
  mark: 8.0,
  isSophomore: true,
};
// Lấy ra name, age, school từ object myStudent sử dụng Destructuring. Sau đó sử dụng Rest Operator để lấy ra nốt các phần còn lại trong myStudent
// Phần còn lại này thực ra là một Object chứa 2 cặp key-value {mark: 8.0, isSophomore: true}
const logStudentInfo = ({ name, age, school, ...rest }) => {
  console.log(name, age, school, rest.mark, rest.isSophomore);
};

logStudentInfo(myStudent);
```

</details>
