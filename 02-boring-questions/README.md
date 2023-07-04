## Cách xác định kiểu dữ liệu trong JS

- Trước khi bắt đầu thì có 5 kiểu dữ liệu cơ bản trong JS

  - Number
  - String
  - Boolean
  - Undefined
  - Object

- Ngoài ra còn mấy kiểu linh tinh không ai quan tâm mấy như là Symbol, BigInt, Null (mấy cái này là legacy rồi, không cần quan tâm)

- Có 2 cách để xác định kiểu dữ liệu trong JS:
  - Cách 1: Sử dụng toán tử `typeof`
  - Cách 2: Sử dụng phương thức `Object.prototype.toString.call()` (được sử dụng trong các trường hợp đặc biệt)

## NaN là gì

NaN là viết tắt của Not a Number - tức là "Không phải là một con số". Nó là một giá trị đặc biệt trong JS, được sử dụng để xác định một giá trị không phải là số. Nhưng mà có một điều đặc biệt là: Dẫu cho NaN có nghĩa là "Không phải là một con số" nhưng nó lại có kiểu dữ liệu là `number`
