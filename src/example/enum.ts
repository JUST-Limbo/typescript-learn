const test = 1
const getIndex = () => 2

enum Status {
  Uploading = 1,
  Success = getIndex(),
  // 枚举成员必须具有初始化表达式
  // Failed
  Failed = 1
}
// console.log(Status.Uploading)
// console.log(Status.Success)
// console.log(Status.Failed)


enum Message {
  Error = 'sorry error',
  Success = 'success',
  Failed = Error
}
console.log(Message.Success)
console.log(Message.Failed)

// 异构枚举
enum Result {
  Failed = 0,
  Success = 'success'
}

// 1.enum E {A}
// 2.enum E {A='a'}
// 3.enum E {A=-1}

enum Status {
  Off,
  on
}
interface Light {
  status: Status
}
// const light: Light = {
//   status: Status.on
// }

const enum Animals1 {
  Dog = 1
}
const dog = Animals1.Dog
