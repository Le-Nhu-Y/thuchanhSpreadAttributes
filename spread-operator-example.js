Example 1: sao chep mang
const cars1=["AUDI","BMW","TATA","MERCEDES"];
const cars2=[...cars1];
const cars3=[...cars1,"NISSAN","TOYOTA"];
 console.log(cars1); //[ 'AUDI', 'BMW', 'TATA', 'MERCEDES' ]
 console.log(cars2); // [ 'AUDI', 'BMW', 'TATA', 'MERCEDES' ]
 console.log(cars3); //[ 'AUDI', 'BMW', 'TATA', 'MERCEDES', 'NISSAN', 'TOYOTA' ]

 Example 2: hop nhat mang
const cars1=["AUDI","BMW","TATA","MERCEDES"];
const cars2=["NISSAN","TOYOTA"];
const cars3=[...cars1,...cars2];
console.log(cars3) // [ 'AUDI', 'BMW', 'TATA', 'MERCEDES', 'NISSAN', 'TOYOTA' ]


 Example 3: We will use the spread operator with objects
  cars1 object
const cars1={
    Brand:"BMW",
    Color:"RED"
}
const cars2={...cars1};
console.log(cars2) //{ Brand: 'BMW', Color: 'RED' }

Example 4: Sử dụng Spread Operator để hợp nhất các đối tượng.
const cars1 = {
    Brand: "Toyota",
    Color: "RED"
}
const cars2 = {
    Brand : "Nissan",
    Color : "BLUE",
    Year : 2004
}
const cars3={...cars1,...cars2};
console.log(cars3) //{ Brand: 'Nissan', Color: 'BLUE', Year: 2004 }


Vi du 5: Sử dụng Spread Operator để chia chuỗi thành một mảng chuỗi
const car="AUDI";
const a=[...car];
console.log(a); //[ 'A', 'U', 'D', 'I' ]

Vidu 6: Sử dụng Spread Operator để cấu trúc lại mảng
const numbers = [3,5,7,8,9];
const [a,b,c,...others] = numbers;
console.log(a); // 3
console.log(b); // 5
console.log(c); // 7
console.log(others); // [ 8, 9 ]