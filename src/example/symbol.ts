// const s = Symbol()
// console.log(s);

// const s2 =Symbol()
// console.log(s2);
// 此条件将始终返回 "false"，因为类型 "typeof s" 和 "typeof s2" 没有重叠
// console.log(s===s2);

// const s3 = Symbol('123')
// console.log(s3);

// const s4= Symbol(123)
// console.log(s4.toString());
// console.log(Boolean(s4));
// console.log(!s4);

let prop='name'
const info={
  // name:'123'
  [prop]:'asdas',
  [`my${prop}is`]:'asdas'
}
console.log(info);

const s5 = Symbol('name')
const info2={
  [s5]:'12312312321',
  [prop]: 'asdas'
}
console.log(info2);
info2[s5]='haha'
console.log(info2);

// forin   Object.keys(info2)  Object.getOwnPropertyNames JSON.stringify 无法获取Symbol属性名
console.log(Object.getOwnPropertySymbols(info2));
console.log(Reflect.ownKeys(info2));

// Symbol的静态方法 Symbol.for() Symbol.keyFor()
// const s6 = Symbol('abc')
// const s7 = Symbol('abc')
// console.log(s6==s7);  // false
const s8 = Symbol.for('asdf')
// const s9 = Symbol.for('asdf')
// console.log(s8==s9); // true

// keyFor 接收一个由Symbol.for()生成的参数值 返回传入Symbol.for()时的标识
Symbol.keyFor(s8)
