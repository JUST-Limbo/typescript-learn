// function add(arg1: number, arg2: number): number {
//   return arg1 + arg2
// }

// const add = (arg1: number, arg2: number) => arg1 + arg2

let add: (x: number, y: number) => number
add = (arg1: number, arg2: number): number => arg1 + arg2
let arg3 = 3
add = (arg1: number, arg2: number): number => arg1 + arg2 + arg3

// 接口定义函数类型
// Interface has only a call signature — use `type Add = (x: number, y: number)= => number` instead.
// interface Add {
//   (x: number, y: number): number
// }
// 类型别名 type
type Add = (x: number, y: number) => number
let addFunc: Add
addFunc = (arg1: number, arg2: number) => arg1 + arg2

// 可选参数
// addFunc = (arg1, arg2, arg3) => arg1 + arg2 + (arg3 ? arg3 : 0)

// 可选参数必须在必选参数之后
type AddFunction = (arg1: number, arg2: number, arg3?: number) => number
// let addFunction: AddFunction
// addFunction = (x: number, y: number,z:number) => x + y

// 默认值
let addFunction = (x: number, y: number = 3) => x + y

// const handleData =(arg1:number,...args:number[])=>{
//   // ..
// }

// 函数重载
function handleData(x: string): string[]
function handleData(x: number): number[]
// 函数实体
function handleData(x: any): any {
  if (typeof x === 'string') {
    return x.split('')
  } else {
    return x.toString().split('').map(item => Number(item))
  }
}
// handleData(123).map(item=>{
//   return item.length
// })
// handleData('123').map(item=>{
//   return item.toFixed()
// })
