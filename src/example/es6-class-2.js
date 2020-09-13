// function Food() {
//   this.type = 'food'
// }

// Food.prototype.getType = function () {
//   return this.type
// }

// function Vegetables(name) {
//   this.name = name
// }
// Vegetables.prototype = new Food()
// const tomato = new Vegetables('tomato')
// console.log(tomato.getType())

// class Parent {
//   constructor(name) {
//     this.name = name
//   }
//   getName() {
//     return this.name
//   }
//   static getNames() {
//     return this.name // 类名
//   }
// }
// class Child extends Parent {
//   constructor(name, age) {
//     super(name)
//     this.age = age
//   }
// }
// const c = new Child('abc', 11)
// console.log(c)
// console.log(c.getName())
// console.log(c instanceof Child)
// console.log(c instanceof Parent)
// // 子类能继承父类的静态方法
// console.log(Child.getNames())
// 获取一个类的父类
// console.log(Object.getPrototypeOf(Child) === Parent) // true

// super作为函数
// super作为对象
// 在普通方法中指父类的原型对象,用于访问父类的方法
// 在静态方法中指父类本身
// class Parent {
//   constructor (){
//     this.type='parent'
//   }
//   getName(){
//     return this.type
//   }
// }
// Parent.getType=()=>{
//   return 'is Parent'
// }
// class Child extends Parent {
//   constructor (){
//     super()
//     console.log(`constructor ${super.getName()}`)
//   }
//   getParentName(){
//     console.log(`getParentName: ${super.getName()}`)
//   }
//   static getParentType(){
//     console.log(`getParentType: ${super.getType()}`)
//   }
// }
// const c=new Child()
// c.getParentName()
// // 静态方法
// Child.getParentType()


// prototype
// __proto__
var objs = new Object()
console.log(objs.__proto__ === Object.prototype) // true

// 子类的__proto__指向父类本身
// 子类的prototype属性的__proto__指向父类的prototype属性
// 示例的__proto__属性的__proto__属性指向父类示例的__proto__

// ES6允许继承原生构造函数
class CustomArray extends Array {
  constructor(...args) {
    super(...args)
  }
}
const arr = new CustomArray(3) // 长度为3的数组
arr.fill('1')
console.log(arr)
console.log(arr.join('-'))
const arr1 = new CustomArray(3, 4, 5) // 传入多个参数
console.log(arr1) // [3,4,5]
