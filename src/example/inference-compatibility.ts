let name1 = 'asdasdad'
// name1 = 123
let arr5 = [1, 'a']
// arr5 = ['2', 1, false]

// window.onmousedown = (mouseEvent) => {
//   console.log(mouseEvent)
// }

interface InfoInterface {
  name: string,
  info: { age: number }
}
let infos: InfoInterface
const infos1 = { name: 'asdasd', info: { age: 11 } }
const infos2 = { age: 12 }
const infos3 = { name: 'asdasda', age: 123123 }
infos = infos1
// 类型 "{ age: number; }" 中缺少属性 "name"，但类型 "InfoInterface" 中需要该属性。
// infos=infos2
// infos = infos3

// 参数个数
// let x = (a: number) => 0
// let y = (b: number, c: string) => 0
// y = x
// x = y
// const arrs = [1, 2, 3]
// arrs.forEach((item, index, arr) => {
//   console.log(item)
// })


// 参数类型
// let x = (a: number) => 0
// let y = (b: string) => 0
// x=y

// 可选参数和剩余参数
const getSum = (arr: number[], callback: (...args: number[]) => number): number => {
  return callback(...arr)
}
const res = getSum([1, 2, 3], (...args: number[]): number => args.reduce((a, b) => a + b, 0))
console.log(res)
const res2 = getSum([1, 2, 3], (arg1: number, arg2: number, arg3: number): number => arg1 + arg2 + arg3)


// 函数参数双向协变
// let funcA = (arg: number | string): void => { }
// let funcB = (arg: number): void => { }
// funcA = funcB
// funcB = funcA

// 返回值类型
let x = (): string | number => 0
let y = (): string => '0'
let z = (): boolean => false
// x = y
// y = x
// y = z

// 函数重载
function merge(arg1: number, arg2: number): number
function merge(arg1: string, arg2: string): string
function merge(arg1: any, arg2: any) {
  return arg1 + arg2
}
function sum(arg1: number, arg2: number): number
function sum(arg1: any, arg2: any): any {
  return arg1 + arg2
}
let func = merge
// func = sum

enum StatusEnum {
  On,
  Off
}

enum AnimalEnum {
  Dog,
  Cat
}

let s = StatusEnum.On
// s = AnimalEnum.Dog


// 类的兼容性
class AnimalClasss {
  public static age: number
  constructor(public name: string) {
  }
}
class PeopleClass {
  public static age: string
  constructor(public name: string) {
  }
}
class FoodIsClass {
  constructor(public name: number) {
  }
}
let animal: AnimalClasss
let people: PeopleClass
let food: FoodIsClass
animal=people
// animal=food
