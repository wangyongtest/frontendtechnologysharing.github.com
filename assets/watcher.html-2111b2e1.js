import{$ as s,a0 as a,a1 as p,a4 as n,a6 as t}from"./framework-43d5a06a.js";const e={},o=t(`<h2 id="发布-订阅模式" tabindex="-1"><a class="header-anchor" href="#发布-订阅模式" aria-hidden="true">#</a> 发布-订阅模式</h2><p>存在一个“信号中心”，某个任务完成，就向信号中心，发布（publish）一个信号，其他任务向信息中心订阅（subscribe）这个信号，从而知道自己什么时候可以开始执行，即：发布-订阅模式。</p><ul><li><p>示例</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token keyword">class</span> <span class="token class-name">EventEmitter</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 初始化一个新的空对象 <span class="token operator">--</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 在_vm 上创建一个_event对象用来存放事件<span class="token operator">--</span><span class="token operator">&gt;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_events <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 监听事件，获得emit 触发事件后提供的数据</span>
    <span class="token function">on</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 如果为数组则循环监听数组事件 <span class="token operator">--</span><span class="token operator">&gt;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        event<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>e <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

  <span class="token comment">// 触发事件提供数据</span>
    <span class="token function">emit</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span>args<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">const</span> cbs <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>cbs<span class="token punctuation">)</span><span class="token punctuation">{</span>
        cbs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>fn <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>args<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 只触发一次的自定义事件 <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token function">once</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token function-variable function">on</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 在第一次执行时销毁该事件 <span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> on<span class="token punctuation">)</span>
        <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      on<span class="token punctuation">.</span>fn <span class="token operator">=</span> fn
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> on<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 关闭事件绑定 <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token function">off</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 如果参数为空，则关闭所有事件 <span class="token operator">--</span><span class="token operator">&gt;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>argument<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 重新初始化一个空对象 <span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_events <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>

      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token function">如果传进来的事件没有emit</span><span class="token punctuation">(</span>事件对象中不存在这个事件<span class="token punctuation">)</span>，则返回 <span class="token operator">--</span><span class="token operator">&gt;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span>

      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 如果没有传入回调函数，则默认移除该事件的绑定的所有函数；否则移除与fn相同函数 <span class="token operator">--</span><span class="token operator">&gt;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>fn<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span>是引用类型，与cbs指向同一个数据 <span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token keyword">const</span> cbs <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span>
        <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">if</span><span class="token punctuation">(</span>cbs<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> fn <span class="token operator">||</span> cbs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>fn <span class="token operator">===</span> fn<span class="token punctuation">)</span><span class="token punctuation">{</span>
            cbs<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
            container
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> initEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">testFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;eventName&#39;</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  initEvent<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> testFn<span class="token punctuation">)</span>

  initEvent<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> testFn<span class="token punctuation">)</span>

  initEvent<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;参数为emit触发事件需要传递的参数&#39;</span><span class="token punctuation">)</span>

  initEvent<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">)</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a> 观察者模式</h2><p>当事件发生时，<strong>观察者</strong>(订阅者，watcher)执行update方法，完成相应的操作；被观察的<strong>目标</strong>(发布者，Dep)使用数组Subs来存储所有的观察者， 也可以使用 addSub()添加新的观察者，当有事件发生时，调研所有时间的update()方法</p><ul><li><p>示例</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 被观察的目标，即发布者：Dep <span class="token operator">--</span><span class="token operator">&gt;</span>
  <span class="token keyword">class</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 记录所有的观察者，即订阅者 <span class="token operator">--</span><span class="token operator">&gt;</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
   <span class="token punctuation">}</span>

   <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 添加新的观察者 <span class="token operator">--</span><span class="token operator">&gt;</span>
   <span class="token function">addSub</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 该订阅者存在，且有update方法，将其添加到subs数组中 <span class="token operator">--</span><span class="token operator">&gt;</span>
     <span class="token keyword">if</span><span class="token punctuation">(</span>sub<span class="token operator">&amp;&amp;</span>sub<span class="token punctuation">.</span>update<span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>

   <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 移除观察者 <span class="token operator">--</span><span class="token operator">&gt;</span>
   <span class="token function">removeSub</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
       <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>

   <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 发布更新通知 <span class="token operator">--</span><span class="token operator">&gt;</span>
   <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
       item<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  

  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 观察者，即：订阅者 <span class="token operator">--</span><span class="token operator">&gt;</span>
  <span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
   <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;更新对应数据&#39;</span><span class="token punctuation">)</span>
     <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>


  <span class="token keyword">let</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> watcher1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> watcher2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 添加观察者对象 <span class="token operator">--</span><span class="token operator">&gt;</span>
  dep<span class="token punctuation">.</span><span class="token function">addSub</span><span class="token punctuation">(</span>Watcher1<span class="token punctuation">)</span>
  dep<span class="token punctuation">.</span><span class="token function">addSub</span><span class="token punctuation">(</span>watcher2<span class="token punctuation">)</span>
  dep<span class="token punctuation">.</span><span class="token function">removeSub</span><span class="token punctuation">(</span>watcher2<span class="token punctuation">)</span>

  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 发布 <span class="token operator">--</span><span class="token operator">&gt;</span>
  dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h2><ul><li>发布-订阅模式：由一个统一调度中心调用，发布者和订阅者之间不需要知道对方的存在</li><li>观察者模式：由具体的目标调度，如，某一个事件被触发时，Dep就会调用数组中保存的和这个事件有关系的观察者的方法，因此，观察者模式中的订阅者与发布者之间存在依赖关系</li></ul>`,8);function c(l,i){return a(),p("div",null,[n(" more "),o,n(" @bytemd/react ")])}const r=s(e,[["render",c],["__file","watcher.html.vue"]]);export{r as default};
