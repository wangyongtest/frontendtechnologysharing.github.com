<template><div><!-- more -->
<h2 id="基本要求" tabindex="-1"><a class="header-anchor" href="#基本要求" aria-hidden="true">#</a> 基本要求</h2>
<ul>
<li>支持 pdf 文件 内容的 完整预览</li>
<li>多页 pdf 文件 支持 分页查看</li>
<li>PC 端 和 移动端 都需支持 下载 和 预览</li>
</ul>
<h2 id="产品要求" tabindex="-1"><a class="header-anchor" href="#产品要求" aria-hidden="true">#</a> 产品要求</h2>
<ul>
<li>PC 端 的预览要支持在 当前页 进行预览</li>
<li>pdf 文件 预览时的字体要 和 实际文件的 字体保证一致性</li>
</ul>
<h2 id="实现方式" tabindex="-1"><a class="header-anchor" href="#实现方式" aria-hidden="true">#</a> 实现方式</h2>
<h3 id="方式一-使用-embed-标签" tabindex="-1"><a class="header-anchor" href="#方式一-使用-embed-标签" aria-hidden="true">#</a> 方式一：使用 embed 标签</h3>
<ul>
<li>
<p>基于<mark>embed</mark> 元素 将外部内容嵌入文档中的指定位置，此内容由 外部应用程序 或 其他交互式内容源（如 浏览器插件）提供。使用 <embed> 来展示的资源是完全交由它所在的环境提供的展示功能，即如果当前的应用环境支持这个资源的展示那么就可以正常展示，如果不支持那就无法展示.参考MDN： <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/embed" target="_blank" rel="noopener noreferrer">embed<ExternalLinkIcon/></a></p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>embed</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>application/pdf<span class="token punctuation">"</span></span>
  <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pdfUrl<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>800<span class="token punctuation">"</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>600<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="/assets/javascript/embed_preview.jpg" alt="效果展示" tabindex="0" loading="lazy"><figcaption>效果展示</figcaption></figure>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>多数现代浏览器已经弃用并取消了对浏览器插件的支持，现在已经不建议使用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>embed</span><span class="token punctuation">/></span></span>标签，但可以使
用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span><span class="token punctuation">></span></span>、<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span><span class="token punctuation">></span></span>、<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span><span class="token punctuation">></span></span>、<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span><span class="token punctuation">></span></span> 等标签代替。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div>
</li>
</ul>
<h3 id="方式二-使用-iframe-标签" tabindex="-1"><a class="header-anchor" href="#方式二-使用-iframe-标签" aria-hidden="true">#</a> 方式二：使用 iframe 标签</h3>
<ul>
<li>基于 <mark>iframe</mark> 的方式和以上差不多,整体效果也一致.</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span>
   <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pdfUrl<span class="token punctuation">"</span></span>
   <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>800<span class="token punctuation">"</span></span>
   <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>600<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>  值得注意的是，即便使用的是 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span><span class="token punctuation">></span></span> 但实际展开其内层结构后你会发现
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<figure><img src="/assets/javascript/iframePreview_3.jpg" alt="iframe" tabindex="0" loading="lazy"><figcaption>iframe</figcaption></figure>
<h4 id="其内部还是-embed-标签-这是怎么回事-不是说最好不建议使用-embed-吗" tabindex="-1"><a class="header-anchor" href="#其内部还是-embed-标签-这是怎么回事-不是说最好不建议使用-embed-吗" aria-hidden="true">#</a> <code v-pre>其内部还是 &lt;embed&gt; 标签？这是怎么回事，不是说最好不建议使用 &lt;embed&gt; 吗？</code></h4>
<h4 id="首先来在-caniuse-2-查看兼容情况-如下" tabindex="-1"><a class="header-anchor" href="#首先来在-caniuse-2-查看兼容情况-如下" aria-hidden="true">#</a> <code v-pre>首先来在 **</code>caniuse<code v-pre>**[2] 查看兼容情况，如下：</code></h4>
<figure><img src="/assets/javascript/iframePreview_5.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>我们再找一个不支持 <embed> 的浏览器，比如 IE，来试试效果</p>
<figure><img src="/assets/javascript/iframePreview_7.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>换成 iframe 试试，如下：</p>
<figure><img src="/assets/javascript/iframePreview_8.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>显然，embed 在不兼容的环境直接无法显示，而 iframe 是能够正常识别的，只不过 iframe 加载的资源无法被 IE 浏览器处理，即本质原因是 IE 浏览器根本就不支持对类似 PDF 等文件的预览，比如当尝试直接在地址栏中输入 <a href="http://127.0.0.1:3000/src/assets/2.pdf" target="_blank" rel="noopener noreferrer">http://127.0.0.1:3000/src/assets/2.pdf<ExternalLinkIcon/></a> 时会得到：
<img src="/assets/javascript/iframePreview_4.jpg" alt="img" loading="lazy"></p>
<p>因此，通常情况下当浏览器不支持内联 PDF 时，应该提供一个 PDF 的回退链接，即以下载的方式来实现，而这就是 <strong>pdfobject</strong>[3] 做的事情，实际上它的源码内容比较简单，核心就是 PDFObject 会检测浏览器对内联/嵌入 PDF 的支持，如果支持嵌入，则嵌入 PDF，如果浏览器不支持嵌入，则不会嵌入 PDF，并提供一个指向 PDF 的回退链接，例如在 IE 中的表现：</p>
<figure><img src="/assets/javascript/iframePreview_9.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><code v-pre>事实上，这其实只是帮我们少写了一些兼容性的代码而已，也不一定符合大部分人的场景，在这里提到只是因为其与 &lt;embed&gt; 之间存在的联系.</code></p>
<h3 id="方式三-vue3-pdfjs-实现预览" tabindex="-1"><a class="header-anchor" href="#方式三-vue3-pdfjs-实现预览" aria-hidden="true">#</a> 方式三：vue3-pdfjs 实现预览</h3>
<ul>
<li>
<p>pdfjs-dist 插件存在问题：</p>
<ul>
<li>包名称不统一，npm 上的包名叫 pdfjs-dist，然而在 Readme 中自己又称其为 pdf.js</li>
<li>没有清晰的文档作为指引，只能通过其仓库中的 examples 目录的内容作为参考</li>
<li>官方示例不够友好，例如没有提供 vue/react 等相关的示例</li>
<li>直接使用需要引入很多文档没有指明的内容</li>
<li>有时展示的 pdf 内容文字模糊或缺少部分等</li>
</ul>
<figure><img src="/assets/javascript/npm_pdfjs.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</li>
</ul>
<p><code v-pre>因此，既然已经有基于 vue/react 封装好的包，这里就直接用来作为演示</code></p>
<ul>
<li>
<p>使用方法：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
 <span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
 <span class="token keyword">import</span> <span class="token punctuation">{</span> VuePdf<span class="token punctuation">,</span> createLoadingTask <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue3-pdfjs/esm'</span>
 <span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> VuePdfPropsType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue3-pdfjs/components/vue-pdf/vue-pdf-props'</span> <span class="token comment">// Prop type definitions can also be imported</span>
 <span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> PDFDocumentProxy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pdfjs-dist/types/src/display/api'</span>
 <span class="token keyword">import</span> pdfUrl <span class="token keyword">from</span> <span class="token string">'./assets/You-Dont-Know-JS.pdf'</span>

 <span class="token keyword">const</span> pdfSrc <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span>VuePdfPropsType<span class="token punctuation">[</span><span class="token string">'src'</span><span class="token punctuation">]</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>pdfUrl<span class="token punctuation">)</span>
 <span class="token keyword">const</span> numOfPages <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

 <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> loadingTask <span class="token operator">=</span> <span class="token function">createLoadingTask</span><span class="token punctuation">(</span>pdfSrc<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  loadingTask<span class="token punctuation">.</span>promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>pdf<span class="token operator">:</span> PDFDocumentProxy<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    numOfPages<span class="token punctuation">.</span>value <span class="token operator">=</span> pdf<span class="token punctuation">.</span>numPages
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>VuePdf v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"page in numOfPages"</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"page"</span> <span class="token operator">:</span>src<span class="token operator">=</span><span class="token string">"pdfSrc"</span> <span class="token operator">:</span>page<span class="token operator">=</span><span class="token string">"page"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>style<span class="token operator">></span>
@<span class="token keyword">import</span> <span class="token string">'@/assets/base.css'</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下:
<img src="/assets/javascript/vue3_pdfjs.jpg" alt="img" loading="lazy"></p>
<p>存在问题：</p>
<p>看上去加载正常的 pdf 文档 似乎没啥大问题，来试试加载 pdf 发票 看看，但由于实际发票敏感信息较多，这里就不贴出原本的发票内容，直接来看预览后的发票内容
显然整体发票的 内容缺失得非常多，虽然某些发票大部分能够展示，但如 发票抬头 和 印章 部分可能无法正常显示等</p>
<p><img src="/assets/javascript/vue3_pdfjs_preview.jpg" alt="img" loading="lazy">
<img src="/assets/javascript/vue3_pdfjs_preview_1.jpg" alt="img" loading="lazy">
<code v-pre>【注意】无法显示完整的内容是因为 pdf.js 是需要一些字体库的支持，如果 原 PDF 文件 中部分字体没有匹配到字体库将无法在 pdf.js 中显示，而字体库存放在 cmaps 文件夹下</code></p>
</li>
</ul>
<figure><img src="/assets/javascript/vue3_pdfjs_preview_2.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>另外，预览的字体 和 实际的字体 是 不一致 的，而由于发票的特殊性，对字体的一致性是有较大的要求，毕竟如果同一张发票字体不一致会缺乏 规范性 和 合法性（<s>被要求字体一致时的说法</s>）</p>
<figure><img src="/assets/javascript/vue3_pdfjs_preview_3.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><code v-pre>常见的解决方案： **解决 pdf.js 无法完全显示 pdf 文件内容的问题**[6]，实际上还是根据执行环境的错误信息进行分析，需要强行修改源码内容。</code></p>
<p><code v-pre>并且大多基于 pdf.js 二次封装的库 vue-pdf、vue3-pdfjs 等在预览 pdf 文件的发票时通常无法显示完整内容，需要或多或少的涉及对源码的更改，而在 Firefox 中内置的 pdf.js 却能够完整的显示对应的 pdf 文件的内容</code></p>
<h4 id="pdf-转-图片-实现预览-核心是服务端在响应-pdf-文件时-先转换成图片类型再返回-前端直接展示具体图片内容即可" tabindex="-1"><a class="header-anchor" href="#pdf-转-图片-实现预览-核心是服务端在响应-pdf-文件时-先转换成图片类型再返回-前端直接展示具体图片内容即可" aria-hidden="true">#</a> PDF 转 图片 实现预览:核心是服务端在响应 pdf 文件时，先转换成图片类型再返回，前端直接展示具体图片内容即可</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> pdf <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'pdf-poppler'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'koa'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> koaStatic <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'koa-static'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> cors <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'koa-cors'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 跨域</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 静态资源</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">koaStatic</span><span class="token punctuation">(</span><span class="token string">'./server'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">getFileName</span><span class="token punctuation">(</span><span class="token parameter">filePath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> filePath
    <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.[^/.]+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">pdf2png</span><span class="token punctuation">(</span><span class="token parameter">filePath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取文件名</span>
  <span class="token keyword">const</span> fileName <span class="token operator">=</span> <span class="token function">getFileName</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> dir <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 配置参数</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">'png'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">out_dir</span><span class="token operator">:</span> dir<span class="token punctuation">,</span>
    <span class="token literal-property property">out_prefix</span><span class="token operator">:</span> fileName<span class="token punctuation">,</span>
    <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// pdf 转换 png</span>
  <span class="token keyword">return</span> pdf
    <span class="token punctuation">.</span><span class="token function">convert</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Successfully converted ！'</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://127.0.0.1:4000</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>dir<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'./server'</span><span class="token punctuation">,</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>fileName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-1.png</span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 响应</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">'/getPdf'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">pdf2png</span><span class="token punctuation">(</span><span class="token string">'./server/pdf/2.pdf'</span><span class="token punctuation">)</span>
        ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token punctuation">{</span> url <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">'hello world!'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>注意</p>
<ul>
<li>
<p>不推荐 pdf-image<br/>
在实现服务端将 pdf 文件转换成图片时需要依赖到一些第三方包，一开始使用了 <strong><code v-pre>pdf-image</code></strong>[7] 这个包，但在实际转换时发生较多的异常错误，顺着错误查看源码后发现其内部需要依赖一些额外的工具，因为其中需要使用 pdfinfo xxx 相关命令，并且其对应的 <code v-pre>issue</code>[8] 上也存在着一些类似问题，但都试了试最后还是没有成功！<br/>
因此，更推荐使用 <code v-pre>pdf-poppler</code>[9] 其中附带了一个 pdftocairo 的程序可以实现 pdf 到 图片 的转换能力，不过它目前版本支持 Windows 和 Mac OS</p>
</li>
<li>
<p>path.basename not a function <br/>
在上述的代码内容中需要获取文件的名称，实际上我们可以简单直接的使用 Node Api 中 path.basename(path[, suffix]) 来达到目的<br/>
但是在程序运行时发生了如下 异常，对应的 代码内容 和 运行结果 如下</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token comment">// 配置参数</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">'png'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">out_dir</span><span class="token operator">:</span> dir<span class="token punctuation">,</span>
  <span class="token literal-property property">out_prefix</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">baseName</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 发生异常</span>
  <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个暂时没有找到是什么原因，只能自己简单实现了一个 getFileName 方法用于获取文件的名称</p>
<p><code v-pre>报错原因：太依赖编辑器的自动提示，将 basename 输出成 baseName ，没错就是 n 和 N 的区别.</code></p>
</li>
<li>
<p>细节</p>
<ul>
<li>上述内容通过 koa 启动模拟业务服务，由于 业务服务（<a href="http://127.0.0.1:4000%EF%BC%89" target="_blank" rel="noopener noreferrer">http://127.0.0.1:4000）<ExternalLinkIcon/></a> 和 应用服务 (<a href="http://127.0.0.1:3000" target="_blank" rel="noopener noreferrer">http://127.0.0.1:3000<ExternalLinkIcon/></a>) 间的端口不一致，因此会产生 跨域，此时可以通过 koa-cors 来解决，值得注意的是有时候的那个业务服务器重启时 koa-cors 可能不起作用。<br/>
由于响应的内容直接在 koa 通用中间件中返回，因此，如果你需要支持业务服务提供 静态资源 的访问能力，就可以通过 koa-static 来实现，值得注意的是，当你通过 koa-static 指定静态文件资源后，如 <strong>app.use(koaStatic('./static'))</strong>，此时如果你直接通过 <a href="http://127.0.0.1:4000/static/pdf/xxx.png" target="_blank" rel="noopener noreferrer">http://127.0.0.1:4000/static/pdf/xxx.png<ExternalLinkIcon/></a> 时，那么会得到 404 Not Found 的错误，原因在于 koa-static 是直接把 /static/ 设置成了 根路径，因此正确的访问路径为：<a href="http://127.0.0.1:4000/pdf/xxx.png" target="_blank" rel="noopener noreferrer">http://127.0.0.1:4000/pdf/xxx.png<ExternalLinkIcon/></a> <br/></li>
<li>只需要关注生成的图片和路径即可</li>
</ul>
</li>
</ul>
</li>
<li>
<p>这里的下载实际不仅指 pdf 的下载，而是客户端方面所能支持的下载方式，最常见的如下几种</p>
<pre><code>- a 标签，例如 &lt;a href=&quot;xxxx&quot; download=&quot;xxx&quot;&gt;下载&lt;/a&gt;
- location.href，例如 window.location.href = xxx
- window.open，例如 window.open(xxx)
- Content-disposition，例如 Content-disposition：attachment；filename=&quot;xxx&quot;
</code></pre>
</li>
</ul>
<h3 id="a标签下载" tabindex="-1"><a class="header-anchor" href="#a标签下载" aria-hidden="true">#</a> a标签下载</h3>
<ul>
<li>a标签 的 download 属性用于指示浏览器 下载 href 指定的 URL，而不是导航到该资源，通常会提示用户将其保存为本地文件，如果 download 属性有指定内容，这个值就会在下载保存过程中作为 预填充的文件名，主要是因为如下原因
<ul>
<li>
<p>这个值可能会通过 JavaScript 进行动态修改</p>
</li>
<li>
<p>或者 Content-Disposition 中指定的 download 属性优先级高于 a.download</p>
<ul>
<li>一些值得注意的点
<ul>
<li>download 属性只适用于 同源 URL</li>
<li>同源 URL 会进行 下载 操作</li>
<li>非同源 URL 会进行 导航 操作</li>
<li>非同源的资源 仍需要进行下载，那么可以将其转换为 <strong><code v-pre>blob: URL</code></strong> 和 <strong><code v-pre>data: URL</code></strong> 形式</li>
</ul>
</li>
<li>若 HTTP 响应头中的 <strong><code v-pre>Content-Disposition</code></strong> 属性中指定了一个不同的文件名，那么会优先使用 Content-Disposition 中的内容</li>
<li>HTTP 若 HTTP 响应头中的 <strong><code v-pre>Content-Disposition</code></strong>  被设置为 Content-Disposition='inline'，那么在 Firefox 中会优先使用 Content-Disposition 的 download 属性</li>
</ul>
</li>
<li>
<p>静态方式
<code v-pre>js  &lt;a href=&quot;http://127.0.0.1:4000/pdf/2-1.png&quot; download=&quot;2.pdf&quot;&gt;下载&lt;/a&gt;</code></p>
</li>
<li>
<p>动态方式</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> filename</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">const</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建 a 标签</span>
   a<span class="token punctuation">.</span>href <span class="token operator">=</span> url<span class="token punctuation">;</span> <span class="token comment">// 下载路径</span>
   a<span class="token punctuation">.</span>download <span class="token operator">=</span> filename<span class="token punctuation">;</span>  <span class="token comment">// 下载属性，文件名</span>
   a<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"none"</span><span class="token punctuation">;</span> <span class="token comment">// 不可见</span>
   document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 挂载</span>
   a<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 触发点击事件</span>
   document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 移除</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Blob 方式</p>
</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token keyword">if</span> <span class="token punctuation">(</span>reqConf<span class="token punctuation">.</span>responseType <span class="token operator">==</span> <span class="token string">'blob'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 返回文件名</span>
    <span class="token keyword">let</span> contentDisposition <span class="token operator">=</span> config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">'content-disposition'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>contentDisposition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      contentDisposition <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">;filename=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">decodeURI</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>filename<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> fileName <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">decodeURI</span><span class="token punctuation">(</span>contentDisposition<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">filename=</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 文件类型</span>
    <span class="token keyword">const</span> suffix <span class="token operator">=</span> fileName<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 创建 blob 对象</span>
    <span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>config<span class="token punctuation">.</span>data<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> FileType<span class="token punctuation">[</span>suffix<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    link<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'none'</span><span class="token punctuation">;</span>
    link<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建 url 对象</span>
    link<span class="token punctuation">.</span>download <span class="token operator">=</span> fileName<span class="token punctuation">;</span> <span class="token comment">// 下载后文件名</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span><span class="token punctuation">;</span>
    link<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 移除隐藏的 a 标签</span>
    <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>link<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 销毁 url 对象</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="content-disposition-和-location-href-window-open-实现下载" tabindex="-1"><a class="header-anchor" href="#content-disposition-和-location-href-window-open-实现下载" aria-hidden="true">#</a> Content-disposition 和 location.href/window.open 实现下载</h3>
<p>这看似是三种下载方式，但实际上就是一种，而且还是以 Content-disposition 为准<br/>
Content-Disposition 响应头 指示回复的内容该以何种形式展示，是以 内联 的形式（即网页或页面的一部分）展示，还是以 附件 的形式 下载 并保存到本地，如下：</p>
<ul>
<li>
<p>inline: 是 默认值，表示回复中的消息体会以页面的一部分或者整个页面的形式展示</p>
<ul>
<li><code v-pre>Content-Disposition: inline</code></li>
</ul>
</li>
<li>
<p>attachment: 设置为此值意味着消息体应该被下载到本地，大多数浏览器会呈现一个 &quot;保存为&quot; 的对话框，并将 filename 的值预填为下载后的文件名</p>
<ul>
<li><code v-pre>Content-Disposition: attachment; filename=&quot;filename.jpg&quot;</code></li>
</ul>
</li>
</ul>
<p>因此，基于 location.href='xxx' 和 window.open(xxx) 的方式能实现下载就是基于 Content-Disposition: attachment; filename=&quot;filename.jpg&quot; 的形式，又或者说是触发了浏览器本身的下载行为，满足了这个条件，无论是通过 a 标签跳转、location.href 导航、window.open 打开新页面、直接在地址栏上输入 URL 等都可以实现下载</p>
<h3 id="h5-移动端的下载" tabindex="-1"><a class="header-anchor" href="#h5-移动端的下载" aria-hidden="true">#</a> H5 移动端的下载</h3>
<p>H5 移动端针对于 预览 操作而言基于以上的方式都是可以实现，但是 下载 操作可就不同了，因为这是要区分场景</p>
<ul>
<li>基于 手机浏览器</li>
<li>基于 微信内置浏览器</li>
</ul>
<p>基于 手机浏览器 的下载方式和上述提到的内容大致上也是一致的，本质上只要所在的客户端支持下载那就没有问题，然而在 微信内置浏览器 中你使用常规的下载方式可能达不到预期</p>
<ul>
<li>在 Android 中使用常规的下载方式，通常会弹出对话框，询问你是否需要唤醒 手机浏览器 来实现对应资源的下载，部分机型却不会</li>
<li>在 IOS 中以上方式都 无法实现下载，因此通常情况下会打开一个新的 webview 来提供预览，部分机型在新的页面中支持 长按屏幕 的方式进行保存操作，但并不是所有机型都支持</li>
</ul>
<p>本质原因是在 微信内置浏览器 中屏蔽任何的 下载链接，如 APP 的下载链接、普通文件 的下载链接 等等</p>
<p>由于这是 微信内置浏览器 环境对下载功能的屏蔽，因此 不用再考虑（<s>想都不敢想</s>）基于 微信内置浏览器 来实现下载功能，转而应该考虑的是如何实现 间接下载：</p>
<ul>
<li>判断当前是否是属于 微信内置浏览器，若是则帮助用户自动唤起 手机浏览器 实现下载，但并不是所有机型都支持 唤起 操作，因此最好是提示使用用户直接通过 手机浏览器 实现下载，为了方便用户，可以实现 一键复制 的功能进行辅助</li>
<li>另一种就直接提示只支持 PC 端下载，放弃对移动端的下载操作</li>
</ul>
<p>综上所述，实际在实现 pdf 预览的过程中可能暂时没有办法达到完美的方式，特别是针对类似 发票类 的 pdf 文件，仍存在如下的问题：</p>
<ul>
<li>无法保证 h5 移动端都具备 下载 功能</li>
<li>无法保证 pdf 预览 时，预览的字体和实际发票 字体 保持一致</li>
</ul>
<p>现有大部分的预览方式都基于 pdf.js 的方式实现，而 pdf.js 内部通过 PDFJs.getDocument(url/buffer) 的方式基于 文件地址 或 数据流 来获取内容，再通过 canvas 处理渲染 pdf 文件，感兴趣可以去研究 pdf.js 源码<br/>
pdf.js 带来相关问题就是如果对应的 pdf 文件中包含了 pdf.js 中不存在的字体，那么就无法完整渲染，另外渲染出来的字体和原本的 pdf 文件字体会存在差异<br/>
针对这两点，目前发现谷歌内置的 pdf 插件似乎提供了很好的支持，意味着其他浏览器如果包含了谷歌相关的插件（如：Edge、QQ Browser），就可以直接基于 iframe 的方式实现预览，又或者为了更严谨字体一致性只能通过下载的方式来查看源文件。</p>
</div></template>


