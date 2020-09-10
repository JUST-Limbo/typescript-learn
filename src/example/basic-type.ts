// 布尔类型
// let bool: boolean = true
let bool: boolean
bool = true
// bool = 1 // 报错

// 数值类型
let num: number = 123
// num = 'abc'
num = 0b1111011
num = 0o173
num = 0x7b

// 字符串类型
let str: string
str = 'abc'
str = `数值是${num}`
// console.log(str);

// 数组类型
// [1,2,3]
// 写法1
let arr: number[]
// arr=[5,'1'] // 报错
// arr=[5]
// 写法2
let arr2: Array<number>
// 支持两种类型的数组
let arr3: (string | number)[]
arr3 = [1, 'a']

// 元祖类型 一一对应
let tuple: [string, number, boolean]
tuple = ['a', 1, true]
