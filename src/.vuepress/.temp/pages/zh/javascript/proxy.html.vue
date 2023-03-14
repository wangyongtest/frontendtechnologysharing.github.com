<template><div><!-- more -->
<h2 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> Proxy</h2>
<p>Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）</p>
<h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>const p = new Proxy(target, handler)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3>
<ul>
<li>target
<ul>
<li>要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）</li>
</ul>
</li>
<li>handler
<ul>
<li>一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为</li>
</ul>
</li>
</ul>
<h3 id="handler-对象的方法" tabindex="-1"><a class="header-anchor" href="#handler-对象的方法" aria-hidden="true">#</a> handler 对象的方法</h3>
<p>handler 对象是一个容纳一批特定属性的占位符对象。它包含有 Proxy 的各个捕获器（trap）。<br/>
所有的捕捉器是可选的。如果没有定义某个捕捉器，那么就会保留源对象的默认行为</p>
<ul>
<li>handler.getPrototypeOf() <br/>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf" target="_blank" rel="noopener noreferrer">Object.getPrototypeOf()<ExternalLinkIcon/></a> 方法的捕捉器</li>
<li>handler.setPrototypeOf() <br/>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf" target="_blank" rel="noopener noreferrer">Object.setPrototypeOf()<ExternalLinkIcon/></a> 方法的捕捉器</li>
<li>handler.isExtensible() <br/>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/isExtensible" target="_blank" rel="noopener noreferrer">Object.isExtensible()<ExternalLinkIcon/></a> 方法的捕捉器</li>
<li>handler.preventExtensions() <br/>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions" target="_blank" rel="noopener noreferrer">Object.preventExtensions()<ExternalLinkIcon/></a> 方法的捕捉器</li>
<li>handler.getOwnPropertyDescriptor() <br/>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor" target="_blank" rel="noopener noreferrer">Object.getOwnPropertyDescriptor()<ExternalLinkIcon/></a> 方法的捕捉器</li>
<li>handler.defineProperty() <br/>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" target="_blank" rel="noopener noreferrer">Object.defineProperty()<ExternalLinkIcon/></a> 方法的捕捉器</li>
<li>handler.has() <br/>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in" target="_blank" rel="noopener noreferrer">in<ExternalLinkIcon/></a> 操作符的捕捉器</li>
<li>handler.get() <br/>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get" target="_blank" rel="noopener noreferrer">Object.get()<ExternalLinkIcon/></a> 属性读取操作的捕捉器</li>
<li>handler.set() <br/>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set" target="_blank" rel="noopener noreferrer">Object.set()<ExternalLinkIcon/></a> 属性设置操作的捕捉器</li>
<li>handler.deleteProperty() <br/>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete" target="_blank" rel="noopener noreferrer">delete<ExternalLinkIcon/></a> 操作符的捕捉器</li>
<li>handler.ownKeys() <br/>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/getOwnPropertyNames" target="_blank" rel="noopener noreferrer">Object.getOwnPropertyNames<ExternalLinkIcon/></a> 方法和 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/getOwnPropertySymbols" target="_blank" rel="noopener noreferrer">Object.getOwnPropertySymbols<ExternalLinkIcon/></a>  方法的捕捉器</li>
<li>handler.apply()<br/>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply" target="_blank" rel="noopener noreferrer">Object.apply()<ExternalLinkIcon/></a> 函数调用操作的捕捉器</li>
<li>handler.construct()<br/>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new" target="_blank" rel="noopener noreferrer">new<ExternalLinkIcon/></a> 操作符的捕捉器</li>
</ul>
<CodeTabs id="113" :data='[{"title":"vue3 源码"},{"title":"Object.defineProperty"},{"title":"Object.proxy"}]' tab-id="shell">
<template #tab0="{ title, value, isActive }">
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>  <span class="token keyword">function</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>
  target<span class="token operator">:</span> Target<span class="token punctuation">,</span>
  isReadonly<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
  baseHandlers<span class="token operator">:</span> ProxyHandler<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span>
  collectionHandlers<span class="token operator">:</span> ProxyHandler<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span>
  proxyMap<span class="token operator">:</span> WeakMap<span class="token operator">&lt;</span>Target<span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// target is already a Proxy, return it.</span>
  <span class="token comment">// exception: calling readonly() on a reactive object</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    target<span class="token punctuation">[</span>ReactiveFlags<span class="token punctuation">.</span><span class="token constant">RAW</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span>
    <span class="token operator">!</span><span class="token punctuation">(</span>isReadonly <span class="token operator">&amp;&amp;</span> target<span class="token punctuation">[</span>ReactiveFlags<span class="token punctuation">.</span><span class="token constant">IS_REACTIVE</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> target
  <span class="token punctuation">}</span>

  <span class="token comment">// target already has corresponding Proxy</span>
  <span class="token keyword">const</span> existingProxy <span class="token operator">=</span> proxyMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>existingProxy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> existingProxy
  <span class="token punctuation">}</span>

  <span class="token comment">// only specific value types can be observed.</span>
  <span class="token keyword">const</span> targetType <span class="token operator">=</span> <span class="token function">getTargetType</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>targetType <span class="token operator">===</span> TargetType<span class="token punctuation">.</span><span class="token constant">INVALID</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> target
  <span class="token punctuation">}</span>

<span class="token comment">// 如果有自定有自定义的捕获器</span>
  <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>
    target<span class="token punctuation">,</span>
    targetType <span class="token operator">===</span> TargetType<span class="token punctuation">.</span><span class="token constant">COLLECTION</span> <span class="token operator">?</span> collectionHandlers <span class="token operator">:</span> baseHandlers
  <span class="token punctuation">)</span>

  proxyMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> proxy<span class="token punctuation">)</span>
  <span class="token keyword">return</span> proxy
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 等同于：</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> <span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span>`

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> target <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">37</span><span class="token punctuation">;</span>   <span class="token comment">// 操作转发到目标</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 37. 操作已经被正确地转发</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p><img src="/assets/javascript/proxy_definePrototy.png" alt="proxyOrDefinePrototy" loading="lazy">
<strong>参数区别:</strong> <code v-pre> 因此Vue2中对初始化的单个属性设置响应式，而Vue3中使用 proxy 是对整个对象做响应式</code></p>
</div></template>


