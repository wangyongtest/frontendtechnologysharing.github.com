import{$ as n,a0 as e,a1 as a,a4 as s,a6 as t}from"./framework-43d5a06a.js";const o={},r=t(`<h3 id="始终开启严格模式" tabindex="-1"><a class="header-anchor" href="#始终开启严格模式" aria-hidden="true">#</a> 始终开启严格模式</h3><p>在 TypeScript 中，严格模式可以提供更严格的类型检查和错误检测，帮助开发者在开发过程中发现潜在的错误和类型问题</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>  <span class="token comment">// 在 tsconfig.json 中开启严格模式</span>
 <span class="token punctuation">{</span>
   <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token string-property property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在开启严格模式时，需要注意一些语言特性的变化和规范，比如不能隐式地将 null 或 undefined 赋值给非空类型，不能在类定义之外使用 private 和 protected 等等。</p><h3 id="将类型定义和实现分离" tabindex="-1"><a class="header-anchor" href="#将类型定义和实现分离" aria-hidden="true">#</a> 将类型定义和实现分离</h3><pre><code>将类型定义和实现分离可以提高代码的可读性和可维护性，同时也可以避免一些潜在的问题和冲突
\`\`\`TS
  // 将类型定义和实现分离
  interface MyInterface {
    foo: string;
    bar: number;
  }

  class MyClass implements MyInterface {
   foo = &quot;hello&quot;;
   bar = 42;
  }
\`\`\`
 在分离类型定义和实现时，需要保持「接口和实现之间的一致性和正确性」，同时需要「遵守一定的命名规范和代码风格」
</code></pre><h3 id="使用-interface-定义对象类型" tabindex="-1"><a class="header-anchor" href="#使用-interface-定义对象类型" aria-hidden="true">#</a> 使用 interface 定义对象类型</h3><pre><code>在 TypeScript 中，使用 interface 定义对象类型可以提高代码的可读性和可维护性，同时也可以提供更强的类型检查和代码提示
\`\`\`TS
  // 使用 interface 定义对象类型
  interface MyObject {
    foo: string;
    bar: number;
  }

  function doSomething(obj: MyObject) {
     console.log(obj.foo, obj.bar);
  }
\`\`\`
在定义对象类型时，需要注意类型的正确性和可读性，避免出现歧义或冲突
</code></pre><h3 id="使用类型别名定义复杂类型" tabindex="-1"><a class="header-anchor" href="#使用类型别名定义复杂类型" aria-hidden="true">#</a> 使用类型别名定义复杂类型</h3><pre><code>在 TypeScript 中，使用类型别名可以方便地定义复杂类型，提高代码的可读性和可维护性
\`\`\`TS
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
\`\`\`
在使用类型别名时，需要注意类型的正确性和可读
</code></pre><h3 id="使用枚举类型定义常量" tabindex="-1"><a class="header-anchor" href="#使用枚举类型定义常量" aria-hidden="true">#</a> 使用枚举类型定义常量</h3><pre><code>在 TypeScript 中，使用枚举类型可以方便地定义常量和枚举值，提高代码的可读性和可维护性
\`\`\`TS
  // 使用枚举类型定义常量
  enum MyEnum {
    Foo = &quot;foo&quot;,
    Bar = &quot;bar&quot;,
    Baz = &quot;baz&quot;,
  }

  function doSomething(value: MyEnum) {
    console.log(value);
  }

  doSomething(MyEnum.Foo);
\`\`\`
在使用枚举类型时，需要注意枚举值的正确性和可读性，避免出现歧义或冲突
</code></pre><h3 id="使用类型断言避免类型错误" tabindex="-1"><a class="header-anchor" href="#使用类型断言避免类型错误" aria-hidden="true">#</a> 使用类型断言避免类型错误</h3><pre><code>在 TypeScript 中，使用类型断言可以避免类型错误和提供更精确的类型检查
\`\`\`TS
  // 使用类型断言避免类型错误
  let myValue: any = &quot;hello&quot;;
  let myLength: number = (myValue as string).length
  console.log(myLength)
\`\`\`
在使用类型断言时，需要注意类型的正确性和安全性，避免出现运行时错误或类型问题
</code></pre><h3 id="使用联合类型和交叉类型增强类型灵活性" tabindex="-1"><a class="header-anchor" href="#使用联合类型和交叉类型增强类型灵活性" aria-hidden="true">#</a> 使用联合类型和交叉类型增强类型灵活性</h3><pre><code>在 TypeScript 中，使用「联合类型」和「交叉类型」可以增强类型的灵活性和可组合性
\`\`\`TS
  // 使用联合类型和交叉类型增强类型灵活性
  interface MyInterface1 {
    foo: string;
  }

  interface MyInterface2 {
    bar: number;
  }

  type MyType1 = MyInterface1 &amp; MyInterface2;

  type MyType2 = MyInterface1 | MyInterface2;

  function doSomething(value: MyType1 | MyType2) {
    console.log(value);
  }
\`\`\`
在使用联合类型和交叉类型时，需要注意类型的正确性和可读性，避免出现歧义或冲突
</code></pre><h3 id="使用泛型增强代码复用性" tabindex="-1"><a class="header-anchor" href="#使用泛型增强代码复用性" aria-hidden="true">#</a> 使用泛型增强代码复用性</h3><pre><code>在 TypeScript 中，使用泛型可以增强代码的复用性和可扩展性，避免出现重复代码和冗余逻辑
\`\`\`TS
  // 使用泛型增强代码复用性
  function doSomething&lt;T&gt;(value: T): T[] {
     return [value];
  }

  console.log(doSomething&lt;string&gt;(&quot;hello&quot;));
  console.log(doSomething&lt;number&gt;(42));
\`\`\`
在使用泛型时，需要注意类型的正确性和可读性，避免出现歧义或冲突
</code></pre><h3 id="使用类和接口实现面向对象编程" tabindex="-1"><a class="header-anchor" href="#使用类和接口实现面向对象编程" aria-hidden="true">#</a> 使用类和接口实现面向对象编程</h3><pre><code>在 TypeScript 中，使用类和接口可以实现面向对象编程的封装、继承和多态特性，提高代码的可维护性和可扩展性
\`\`\`TS
  // 使用类和接口实现面向对象编程
  interface MyInterface {
    foo(): void;
  }

  class MyClass implements MyInterface {
    foo() {
      console.log(&quot;hello&quot;);
    }
  }

  let myObject: MyInterface = new MyClass();
  myObject.foo();
\`\`\`
在使用类和接口时，需要注意设计和实现的正确性和可读性，避免出现冗余逻辑或设计缺陷。
</code></pre><h3 id="使用命名空间和模块组织代码结构" tabindex="-1"><a class="header-anchor" href="#使用命名空间和模块组织代码结构" aria-hidden="true">#</a> 使用命名空间和模块组织代码结构</h3><pre><code>在 TypeScript 中，使用命名空间和模块可以组织代码结构，避免出现命名冲突和重复定义
\`\`\`TS
  // 使用命名空间和模块组织代码结构
  namespace MyNamespace {
    export interface MyInterface {
      foo(): void;
    }

  export class MyClass implements MyInterface {
    foo() {
      console.log(&quot;hello&quot;);
    }
  }
}

let myObject: MyNamespace.MyInterface = new MyNamespace.MyClass();
myObject.foo()
\`\`\`
</code></pre><p>在使用命名空间和模块时，需要注意命名和定义的正确性和可读性，避免出现命名冲突或命名不规范</p><h3 id="ts-定义公共函数形式" tabindex="-1"><a class="header-anchor" href="#ts-定义公共函数形式" aria-hidden="true">#</a> ts 定义公共函数形式</h3><pre><code>\`\`\`ts
interface IinspectFn {
  &lt;T&gt;(a:T,b:T):boolean
}

&lt;!-- 实现 --&gt;
let fn1:IinspectFn = (s1,S2)=&gt;boolean

// 调用
fn1&lt;string&gt;(&#39;a&#39;, &#39;b&#39;)
\`\`\`
</code></pre><p>或者第二种写法</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>   <span class="token keyword">interface</span> <span class="token class-name">IinspectFn<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
     <span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">boolean</span>
   <span class="token punctuation">}</span>

   <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 实现 <span class="token operator">--</span><span class="token operator">&gt;</span>
   <span class="token keyword">let</span> fn1<span class="token operator">:</span>IinspectFn<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token constant">S2</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token builtin">boolean</span>

  <span class="token comment">// 调用</span>
   <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ul><li>使用强类型避免类型错误</li><li>使用类型推断简化类型定义</li><li>使用接口定义对象结构</li><li>使用类型别名增强类型可读性</li><li>使用枚举类型定义常量</li><li>使用类型断言避免类型错误</li><li>使用联合类型和交叉类型增强类型灵活性</li><li>使用泛型增强代码复用性</li><li>使用类和接口实现面向对象编程</li><li>使用命名空间和模块组织代码结构</li></ul>`,29);function c(p,i){return e(),a("div",null,[s(" more "),r])}const d=n(o,[["render",c],["__file","ts类型定义(一).html.vue"]]);export{d as default};
