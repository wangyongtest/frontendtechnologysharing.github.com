---

# This is the title of the article

title: Proxy

shortTitle: Proxy

# This is the icon of the page

icon: page

# This control sidebar order

order: 1

# Set author

author: WY

# Set writing time

date: 2023-03-08

# A page can have multiple categories

category:
- javascript
- Proxy

# A page can have multiple tags

tag:

- Proxy
- javascript

# this page is sticky in article list

sticky: true

# this page will appear in starred articles

star: true

# You can customize footer content

footer: Footer content for test

# You can customize copyright content

copyright: No Copyright
---

<!-- more -->

## Proxy

 Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）

### 语法

```md
const p = new Proxy(target, handler)
```

### 参数

- target
  - 要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）
- handler
  - 一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为

### handler 对象的方法

handler 对象是一个容纳一批特定属性的占位符对象。它包含有 Proxy 的各个捕获器（trap）。<br/>
  所有的捕捉器是可选的。如果没有定义某个捕捉器，那么就会保留源对象的默认行为

- handler.getPrototypeOf() <br/>
      [Object.getPrototypeOf()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) 方法的捕捉器
- handler.setPrototypeOf() <br/>
      [Object.setPrototypeOf()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) 方法的捕捉器
- handler.isExtensible() <br/>
      [Object.isExtensible()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/isExtensible) 方法的捕捉器
- handler.preventExtensions() <br/>
      [Object.preventExtensions()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) 方法的捕捉器
- handler.getOwnPropertyDescriptor() <br/>
      [Object.getOwnPropertyDescriptor()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) 方法的捕捉器
- handler.defineProperty() <br/>
      [Object.defineProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 方法的捕捉器
- handler.has() <br/>
      [in](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in) 操作符的捕捉器
- handler.get() <br/>
      [Object.get()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get) 属性读取操作的捕捉器
- handler.set() <br/>
      [Object.set()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set) 属性设置操作的捕捉器
- handler.deleteProperty() <br/>
     [delete](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete) 操作符的捕捉器
- handler.ownKeys() <br/>
      [Object.getOwnPropertyNames](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/getOwnPropertyNames) 方法和 [Object.getOwnPropertySymbols](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/getOwnPropertySymbols)  方法的捕捉器
- handler.apply()<br/>
      [Object.apply()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply) 函数调用操作的捕捉器
- handler.construct()<br/>
      [new](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 操作符的捕捉器

::: code-tabs#shell

@tab vue3 源码

``` ts vue
  function createReactiveObject(
  target: Target,
  isReadonly: boolean,
  baseHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>,
  proxyMap: WeakMap<Target, any>
) {

  // target is already a Proxy, return it.
  // exception: calling readonly() on a reactive object
  if (
    target[ReactiveFlags.RAW] &&
    !(isReadonly && target[ReactiveFlags.IS_REACTIVE])
  ) {
    return target
  }

  // target already has corresponding Proxy
  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }

  // only specific value types can be observed.
  const targetType = getTargetType(target)
  if (targetType === TargetType.INVALID) {
    return target
  }

// 如果有自定有自定义的捕获器
  const proxy = new Proxy(
    target,
    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers
  )

  proxyMap.set(target, proxy)
  return proxy
}
```

@tab Object.defineProperty

```` js
let o = {};
// 等同于：
Object.defineProperty(o, "a", {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true
});

```

@tab Object.proxy
``` js
let target = {};
let p = new Proxy(target, {});
p.a = 37;   // 操作转发到目标
console.log(target.a);    // 37. 操作已经被正确地转发
```
:::

![proxyOrDefinePrototy](/assets/javascript/proxy_definePrototy.png)
**参数区别:** ` 因此Vue2中对初始化的单个属性设置响应式，而Vue3中使用 proxy 是对整个对象做响应式`
