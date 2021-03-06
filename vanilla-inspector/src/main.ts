import './style.css'

// channel使用
// const channel = new MessageChannel();
// channel.port1.onmessage = function (ev) {
//   console.log("port1...", ev.data)
// }
// channel.port2.onmessage = function (ev) {
//   console.log("port2...", ev.data)
// }
// channel.port1.postMessage('111'); // port2... 111


// 模拟继承
// function Person(name: string, age: number) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.say = function () {
//   console.log('hello world')
// }
//
// const person = new Person('Java', 28);
// console.log(person, person.__proto__);
// console.log(person, person.__proto__.constructor=== Person);

// const a = {
//   value: 1,
//   valueOf() {
//     return 2
//   },
//   [Symbol.toPrimitive]() {
//     return 3
//   },
// };
// console.log(1 + a, a)
// console.log('1' + a)

// function runBreakPoint(breakIndex:number) {
//   const list = [1,3,54,34,6543,656,6436];
//   let index = 0;
//   while (index !== breakIndex) {
//     console.log(list[index]);
//     index++;
//   }
// }
// window.requestIdleCallback(e => {
//   console.log(e)
// });
// runBreakPoint(3)

// 重写instanceof默认行为
// class Person{
//   static [Symbol.hasInstance](){
//     console.log('instance...')
//   }
// }
// const person = new Person();
// console.log(person instanceof Person)

// function Parent(name: string) {
//   this.name = name;
// }
// Parent.prototype.getValue = function () {
//   return  this.name;
// }
// function Child(name: string) {
//   Parent.call(this, name)
// }
// Child.prototype = new Parent();
// console.log(new Child('Jack'));

// import update,{ a } from './a';
// console.log(a)
// update().then(result => {
//   console.log(result, a)
// })

/*async function plus() {
  const sum = 1 + (await 10);
  return sum;
}
(async () => {
  console.log('before....');
  const sum = await plus();
  console.log(sum);
})();*/
// window.addEventListener("click", event => {
//   console.log('捕获....自顶向下', event)
// }, true);
// window.addEventListener("click", event => {
//   console.log('冒泡....自顶向上', event.target)
// });
//  浏览器缓存 一级级取，取不到的话走下一级
// memory cache ----> disk cache ----> push cache(http2) -----> 网络请求
// 缓存策略  强缓存和协商缓存
// [] == ![] 你是否能正确写出答案呢？ ==判断的时候会做隐式转换 ![] 会把这个转换成为number类型即为0；[]也会转换成为number类型为0；所以返回true

// import './design-pattern/single-case';
// import Linked from './constructor/link';
// let linked = new Linked();
//
// linked.append(2);
// linked.append(4);
// linked.append(5);
// console.log(linked);
// import "./Linked";
//
// const obj = Object.create(null);
// obj.name = "JavaScript";
//
// console.log(obj);
// Object.freeze(obj);
// console.log(obj);
//
//
// function Person() {
//   this.age = 15;
// }
// const P = Object.create(Person)
// console.log(P);

let obj = {};
let song = "发如雪";
obj.singer = "周杰伦";

Object.defineProperty(obj, "music", {
  configurable: true,
  enumerable: false,
  get(){
    return song;
  },
  set(val) {
    song = val;
  }
});
for(let key in obj) {
  console.log(key);
}


