<template><div><!-- more -->
<h3 id="原型" tabindex="-1"><a class="header-anchor" href="#原型" aria-hidden="true">#</a> 原型</h3>
<pre><code>- 每个对象都有 __proto__属性，Object.create(null)除外
- 每个函数都有 peototype 原型
- 由于函数也是对象，因此函数也有这两个属性
</code></pre>
<h3 id="原型链" tabindex="-1"><a class="header-anchor" href="#原型链" aria-hidden="true">#</a> 原型链</h3>
<pre><code>- 每个对象的__proto__都指向它构造函数的原型(prototype)
- 每个函数的__proto__都指向 Function.prototype
</code></pre>
<p>总结：每个对象都有__proto__属性，该属性都指向他构造函数的原型(prototype),每个函数有prototype原型，而函数又是对象，所以函数也包含这个两个属性，且所有函数的的__proto__都指向Function.prototype &amp;nbsp；
原型链：从实例中查找某一属性和方法的时候，如果实例对象本身就有查找属性和方法，则使用该实例的，如果该实例对象上没有，则这回沿着原型链(实例对象的私有属性__proto__)进行查找，直到
Object.prototype.prototype = null,如果还没有查找到则返回 undefined</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<pre><code> 每个实例对象(object)都有一个私有属性(称为proto)指向它构造函数的原型(prototype).该原型对象也有一个自己的原型对象(proto),层层向上，知道一个对象的原型对象为 null.根据定义 null没有原型，并作为这个原型链中最后一个环节
</code></pre>
</div>
</div></template>


