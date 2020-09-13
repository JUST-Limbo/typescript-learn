// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }
// Point.prototype.getPosition = function () {
//   return `(${this.x},${this.y})`
// }

// var p1 = new Point(2, 3)
// console.log(p1);
// console.log(p1.getPosition());
// var p2 = new Point(4, 5)
// console.log(p2);
// console.log(p2.getPosition());

// class Point {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }
//   getPosition() {
//     return `(${this.x},${this.y})`
//   }
// }
// var p1 = new Point(2, 3)
// console.log(p1);
// console.log(p1.hasOwnProperty('x'));
// console.log(p1.hasOwnProperty('getPosition'));
// console.log(p1.__proto__.hasOwnProperty('getPosition'));

// var info = {
//   _age:11,
//   set age (newValue){

//   },
//   get age (){

//   }
// }

// class Info {
//   constructor(age) {
//     this._age = age
//   }
//   set age(newVal) {
//     this._age = newVal
//   }
//   get age() {
//     return this._age
//   }
// }
// const infos = new Info(11)
// infos.age=11213

// const Infos = class c {
//   constructor() { }
// }
// const testInfo=new C()
// const testInfo = new Infos()

// const Infos = class {
//   constructor() { }
// }

// 静态方法
// class Point {
//   constructor(x,y) {
//     this.x=x
//     this.y=y
//   }
//   getPosition(){
//     return `(${this.x},${this.y})`
//   }
//   static getClassName (){
//     return Point.name
//   }
// }
// const p=new Point(1,2)
// console.log(p.getPosition());
// 静态方法调用
// console.log(Point.getClassName());

// 静态属性
// class Point {
//   constructor (){
//     this.x=0
//   }
// }
// Point.y=2
// const p = new Point()
// console.log(p.x);
// console.log(p.y);

// const _func2 = () => { }
// class Point {
//   func1() {
//     _func2.call(this)
//   }
//   // _func2() {

//   // }
// }
// const p = new Point()
// _func2()

// a.js
// const func1 = Symbol('func1')
// export default class Point{
//   static [func1] (){

//   }
// }
// b.js
// import Point from 'a.js'
// const p = new Point()
// console.log(p);

// function Point(){
//   console.log(new.target);
// }
