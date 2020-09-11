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

// 元祖类型 一一对应 不能越界
let tuple: [string, number, boolean]
tuple = ['a', 1, true]

// 枚举类型
enum Roles {
  SUPER_ADMIN = 1,
  ADMIN = 2,
  USER = 8
}
console.log(Roles.SUPER_ADMIN)
console.log(Roles[8])

// any类型
let value: any
value = 'abc'
value = 123
value = false
const arr4: any[] = [1, 'a']

// void类型
const consoleText = (text: string): void => {
  console.log(text)
}
let v: void
v = undefined
v = null
consoleText('123')

// null和undefined
let u: undefined
u = undefined
// u=123
let n: null
n = null
// n='abc
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。

// never类型
// 抛出异常
const errorFunc = (message: string): never => {
  throw new Error(message)
}
// 死循环
const infiniteFunc = (): never => {
  while (true) { }
}

// let neverVariable=(()=>{
//   while(true){}
// })()
// 没有类型是never的子类型或可以赋值给never类型（除了never本身之外）
// neverVariable='abc'

// object
let obj = {
  name: 'asb'
}
let obj2 = obj
obj2.name = 'l'
console.log(obj);
function getObject(obj: object): void {
  console.log(obj);
}
getObject(obj2)

// 类型断言类型断言有两种形式。 其一是“尖括号”语法： 另一个为as语法：
const getLength = (target: string | number): number => {
  if ((<string>target).length || (target as string).length === 0) {
    return (target as string).length
  } else {
    return target.toString().length
  }
}
