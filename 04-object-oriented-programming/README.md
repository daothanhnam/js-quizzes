## 4 đặc tính của OOP

## Prototype là cái ếu gì ?

Khi một thằng dev khác (Nam) cứ đi theo và hỏi bạn (Khôi) “Prototype là cái đếu gì?”, hãy trả lời nó: "Là cái thằng cha mày, hỏi suốt". Câu trả lời này có phần hơi bố láo nhưng lại khá là chính xác, có thể hiểu protoype nôm na là khuôn hoặc là cha của một object.

Trong JavaScript, ngoại trừ undefined, toàn bộ các kiểu còn lại đều là object. Các kiểu string, number, boolean lần lượt là object dạng String, Number, Boolean. Mảng là object dạng Array, hàm là object dạng Function. Prototype của mỗi object chính là cha của nó, cha của String là String.prototype, cha của Number là Number.prototype, của Array là Array.prototype. Không tin ? thử dòng code này xem

```ts
console.log(Object.prototype.toString.call("123")); // [object String]
console.log(Object.prototype.toString.call(123)); // [object Number]
```

## constructor là gì ?

## getter và setter là gì ?

## static là gì ?

## ES6 là gì ?

## Nêu sự khác nhau của “this” của function thường và arrow function
