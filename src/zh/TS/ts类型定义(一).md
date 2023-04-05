---

# This is the title of the article

title: TS 用法总结 (一)

shortTitle: TS 用法总结 (一)

# This is the icon of the page

icon: page

# This control sidebar order

order: 1

# Set author

author: WY

# Set writing time

date: 2023-04-03

# A page can have multiple categories

category:

- TS
- Typescript
- 规范

# A page can have multiple tags

tag:

- TS
- Typescript
- 规范

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

### 始终开启严格模式

   在 TypeScript 中，严格模式可以提供更严格的类型检查和错误检测，帮助开发者在开发过程中发现潜在的错误和类型问题

   ```ts
     // 在 tsconfig.json 中开启严格模式
    {
      "compilerOptions": {
      "strict": true
      }
    }
   ```

   在开启严格模式时，需要注意一些语言特性的变化和规范，比如不能隐式地将 null 或 undefined 赋值给非空类型，不能在类定义之外使用 private 和 protected 等等。

### 将类型定义和实现分离

    将类型定义和实现分离可以提高代码的可读性和可维护性，同时也可以避免一些潜在的问题和冲突
    ```TS
      // 将类型定义和实现分离
      interface MyInterface {
        foo: string;
        bar: number;
      }

      class MyClass implements MyInterface {
       foo = "hello";
       bar = 42;
      }
    ```
     在分离类型定义和实现时，需要保持「接口和实现之间的一致性和正确性」，同时需要「遵守一定的命名规范和代码风格」

### 使用 interface 定义对象类型

    在 TypeScript 中，使用 interface 定义对象类型可以提高代码的可读性和可维护性，同时也可以提供更强的类型检查和代码提示
    ```TS
      // 使用 interface 定义对象类型
      interface MyObject {
        foo: string;
        bar: number;
      }

      function doSomething(obj: MyObject) {
         console.log(obj.foo, obj.bar);
      }
    ```
    在定义对象类型时，需要注意类型的正确性和可读性，避免出现歧义或冲突

### 使用类型别名定义复杂类型

    在 TypeScript 中，使用类型别名可以方便地定义复杂类型，提高代码的可读性和可维护性
    ```TS
      // 使用类型别名定义复杂类型
      type MyType = {
        foo: string;
        bar: {
          baz: number;
        };
      };

     function doSomething(obj: MyType) {
        console.log(obj.foo, obj.bar.baz);
      }
    ```
    在使用类型别名时，需要注意类型的正确性和可读

### 使用枚举类型定义常量

    在 TypeScript 中，使用枚举类型可以方便地定义常量和枚举值，提高代码的可读性和可维护性
    ```TS
      // 使用枚举类型定义常量
      enum MyEnum {
        Foo = "foo",
        Bar = "bar",
        Baz = "baz",
      }

      function doSomething(value: MyEnum) {
        console.log(value);
      }

      doSomething(MyEnum.Foo);
    ```
    在使用枚举类型时，需要注意枚举值的正确性和可读性，避免出现歧义或冲突

### 使用类型断言避免类型错误

    在 TypeScript 中，使用类型断言可以避免类型错误和提供更精确的类型检查
    ```TS
      // 使用类型断言避免类型错误
      let myValue: any = "hello";
      let myLength: number = (myValue as string).length
      console.log(myLength)
    ```
    在使用类型断言时，需要注意类型的正确性和安全性，避免出现运行时错误或类型问题

### 使用联合类型和交叉类型增强类型灵活性

    在 TypeScript 中，使用「联合类型」和「交叉类型」可以增强类型的灵活性和可组合性
    ```TS
      // 使用联合类型和交叉类型增强类型灵活性
      interface MyInterface1 {
        foo: string;
      }

      interface MyInterface2 {
        bar: number;
      }

      type MyType1 = MyInterface1 & MyInterface2;

      type MyType2 = MyInterface1 | MyInterface2;

      function doSomething(value: MyType1 | MyType2) {
        console.log(value);
      }
    ```
    在使用联合类型和交叉类型时，需要注意类型的正确性和可读性，避免出现歧义或冲突

### 使用泛型增强代码复用性

    在 TypeScript 中，使用泛型可以增强代码的复用性和可扩展性，避免出现重复代码和冗余逻辑
    ```TS
      // 使用泛型增强代码复用性
      function doSomething<T>(value: T): T[] {
         return [value];
      }

      console.log(doSomething<string>("hello"));
      console.log(doSomething<number>(42));
    ```
    在使用泛型时，需要注意类型的正确性和可读性，避免出现歧义或冲突

### 使用类和接口实现面向对象编程

    在 TypeScript 中，使用类和接口可以实现面向对象编程的封装、继承和多态特性，提高代码的可维护性和可扩展性
    ```TS
      // 使用类和接口实现面向对象编程
      interface MyInterface {
        foo(): void;
      }

      class MyClass implements MyInterface {
        foo() {
          console.log("hello");
        }
      }

      let myObject: MyInterface = new MyClass();
      myObject.foo();
    ```
    在使用类和接口时，需要注意设计和实现的正确性和可读性，避免出现冗余逻辑或设计缺陷。

### 使用命名空间和模块组织代码结构

    在 TypeScript 中，使用命名空间和模块可以组织代码结构，避免出现命名冲突和重复定义
    ```TS
      // 使用命名空间和模块组织代码结构
      namespace MyNamespace {
        export interface MyInterface {
          foo(): void;
        }

      export class MyClass implements MyInterface {
        foo() {
          console.log("hello");
        }
      }
    }

    let myObject: MyNamespace.MyInterface = new MyNamespace.MyClass();
    myObject.foo()
    ```
   在使用命名空间和模块时，需要注意命名和定义的正确性和可读性，避免出现命名冲突或命名不规范

### ts 定义公共函数形式

    ```ts
    interface IinspectFn {
      <T>(a:T,b:T):boolean
    }

    <!-- 实现 -->
    let fn1:IinspectFn = (s1,S2)=>boolean

    // 调用
    fn1<string>('a', 'b')
    ```
   或者第二种写法

   ```ts
      interface IinspectFn<T> {
        (a:T,b:T):boolean
      }

      <!-- 实现 -->
      let fn1:IinspectFn<string> = (s1,S2)=>boolean

     // 调用
      fn1('a', 'b')

   ```

## 总结

- 使用强类型避免类型错误
- 使用类型推断简化类型定义
- 使用接口定义对象结构
- 使用类型别名增强类型可读性
- 使用枚举类型定义常量
- 使用类型断言避免类型错误
- 使用联合类型和交叉类型增强类型灵活性
- 使用泛型增强代码复用性
- 使用类和接口实现面向对象编程
- 使用命名空间和模块组织代码结构
