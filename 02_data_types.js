// primitive == immutable
let str="hello"
console.log(str);
console.log(str[0]);
str[0]="x"
console.log(str);



// non-primitive == mutable
let arr=[10,20,30]
console.log(arr);
console.log(arr[0]);
arr[0]=500
console.log(arr);
