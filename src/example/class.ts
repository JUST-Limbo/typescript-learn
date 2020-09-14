// class Point {
//   public x: number
//   public y: number
//   constructor(x: number, y: number) {
//     this.x = x
//     this.y = y
//   }
//   public getPosition() {
//     return `(${this.x},${this.y})`
//   }
// }
// const point = new Point(1, 2)
// console.log(point);

// class Parent {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }
// class Child extends Parent {
//   constructor(name: string) {
//     super(name)
//   }
// }

// 修饰符
// public 公共的

// private 私有的

// protected 受保护
// class Parent {
//   // private age: number
//   protected age: number
//   protected constructor(age: number) {
//     // 只能在类“Parent”中访问
//     this.age = age
//   }
//   protected getAge() {
//     return this.age
//   }
// }
// 类“Parent”的构造函数是受保护的，仅可在类声明中访问
// const p =new Parent(18)
// 直接输出能看到实例上的age
// console.log(p);
// 访问报错 属性“age”为私有属性，只能在类“Parent”中访问。
// console.log(p.age);

// class Child extends Parent {
//   constructor(age: number) {
//     super(age)
//     // 通过 "super" 关键字只能访问基类的公共方法和受保护方法。
//     console.log(super.age)
//     console.log(super.getAge)
//   }
// }
// const child = new Child(19)

// class UserInfo {
//   public readonly name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }
// const userInfo = new UserInfo("abc")
// console.log(userInfo)
// 无法分配到 "name" ，因为它是只读属性
// userInfo.name='asdaa'

// 参数修饰符
// // 指定访问属性的类型,并将其放到实例上
// class A {
//   // constructor(private name: string) {}
//   constructor(public name: string) {}
// }
// const a1 = new A("asdasdaasda")
// console.log(a1)
// console.log(a1.name);

// 静态属性
class Parent {
  // public static age:number=18
  public static getAge() {
    return Parent.age
  }
  // 属性“age”为私有属性，只能在类“Parent”中访问。
  private static age: number = 18
  constructor() {}
}
const p = new Parent()
// 属性 "age" 不是类型为 "Parent" 的静态成员
// console.log(p.age);
// console.log(Parent.age);

// 可选属性
class Info {
  public name: string
  public age?: number
  private _infoStr: string
  constructor(name: string, age?: number, public sex?: string) {
    this.name = name
    this.age = age
  }
  get infoStr() {
    return this._infoStr
  }
  set infoStr(value) {
    console.log(`setter: ${value}`)
    this._infoStr = value
  }
}
// const info1 = new Info("123123")
// console.log(info1)
// const info3 = new Info("asdasda", 12)
// console.log(info3)
const info4 = new Info("asdasda", 12, "man")
console.log(info4)
console.log(info4.infoStr)
info4.infoStr = "12312321312asdasd"
console.log(info4)

// 抽象类 用来被其他类继承而不直接创建实例
// abstract class People {
//   constructor(public name: string) {}
//   public abstract printName(): void
// }
// 无法创建抽象类的实例
// const p1=new People()
// class Man extends People {
//   constructor(name: string) {
//     super(name)
//     this.name = name
//   }
//   public printName() {
//     console.log(this.name)
//   }
// }
// const m =new Man('asdasdasd')
// m.printName()


