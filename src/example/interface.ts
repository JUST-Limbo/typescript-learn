// const getFullName = ({ firstName, lastName }) => {
//   return `${firstName} ${lastName}`
// }

// console.log(getFullName({
//   firstName: 'abc',
//   lastName: 111
// }))

interface NameInfo {
  firstName: string,
  lastName: string
}
const getFullName = ({ firstName, lastName }: NameInfo): string => {
  return `${firstName} ${lastName}`
}
console.log(getFullName({
  firstName: 'abc',
  lastName: '111'
}))

interface Vegetable {
  color?: string,
  readonly type: string,
  // [prop: string]: any
}

const getVegetables = ({ color, type }: Vegetable) => {
  return `A ${color ? (color + ' ') : ''} ${type}`
}

// 通过类型断言 或 在interface中添加 [prop:string]:any 或 通过类型兼容性
// console.log(getVegetables({
//   type: 'tomato',
//   color:'red',
//   size:'1'
// } as Vegetable));

// 通过类型兼容性
// const vegetableInfo = {
//   type: 'tomato',
//   color: 'red',
//   size: '1'
// }
// console.log(getVegetables(vegetableInfo));

// 只读属性
let vegetableObj: Vegetable = {
  type: 'tomato'
}
// vegetableObj.type='12312'

// 限定数组元素只读
interface ArrInter {
  0: number,
  readonly 1: string
}
let arr1: ArrInter = [1, 'a']
// arr1[1]='asda'

// interface AddFunc {
//   (num1: number, num2: number): number
// }

type AddFunc = (num1: number, num2: number) => number

// const add:AddFunc=(n1,n2)=>n1+n2
// const add:AddFunc=(n1,n2)=>`n1+n2`

// interface RoleDic {
//   [id: number]: string
// }
// const role1: RoleDic = {
//   1: 'super_admin'
// }


interface RoleDic {
  [id: string]: string
}
const role2: RoleDic = {
  1: 'super_admin',
  a: 'admin'
}

// 接口的继承

interface Vegetables {
  color: string
}

interface Tomato extends Vegetables {
  radius: number
}

interface Carrot extends Vegetables {
  length: number
}

const tomato: Tomato = {
  radius: 1,
  color: '123'
}

const carrot: Carrot = {
  length: 2,
  color: 'asd'
}

// 混合类型接口
interface Counter {
  (): void,
  count: number
}

const getCounter = (): Counter => {
  const c = () => { c.count++ }
  c.count = 0
  return c
}

const counter:Counter=getCounter()
counter()
console.log(counter.count)
counter()
console.log(counter.count)
counter()
console.log(counter.count)
