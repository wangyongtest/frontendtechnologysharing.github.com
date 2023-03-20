<template><div><!--
 * @Author: wy wang.yong@easttrans.cn
 * @Date: 2023-03-09 18:02:44
 * @LastEditors: wy wang.yong@easttrans.cn
 * @LastEditTime: 2023-03-20 14:03:52
 * @FilePath: \frontendtechnologysharing.github.com\src\zh\vue\reactive.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<hr>
<h1 id="this-is-the-title-of-the-article" tabindex="-1"><a class="header-anchor" href="#this-is-the-title-of-the-article" aria-hidden="true">#</a> This is the title of the article</h1>
<p>title: Reactive
shortTitle: Reactive</p>
<h1 id="this-is-the-icon-of-the-page" tabindex="-1"><a class="header-anchor" href="#this-is-the-icon-of-the-page" aria-hidden="true">#</a> This is the icon of the page</h1>
<p>icon: page</p>
<h1 id="this-control-sidebar-order" tabindex="-1"><a class="header-anchor" href="#this-control-sidebar-order" aria-hidden="true">#</a> This control sidebar order</h1>
<p>order: 1</p>
<h1 id="set-author" tabindex="-1"><a class="header-anchor" href="#set-author" aria-hidden="true">#</a> Set author</h1>
<p>author: WY</p>
<h1 id="set-writing-time" tabindex="-1"><a class="header-anchor" href="#set-writing-time" aria-hidden="true">#</a> Set writing time</h1>
<p>date: 2023-03-08</p>
<h1 id="a-page-can-have-multiple-categories" tabindex="-1"><a class="header-anchor" href="#a-page-can-have-multiple-categories" aria-hidden="true">#</a> A page can have multiple categories</h1>
<p>category:</p>
<ul>
<li>Vue</li>
</ul>
<h1 id="a-page-can-have-multiple-tags" tabindex="-1"><a class="header-anchor" href="#a-page-can-have-multiple-tags" aria-hidden="true">#</a> A page can have multiple tags</h1>
<p>tag:</p>
<ul>
<li>Vue</li>
</ul>
<h1 id="this-page-is-sticky-in-article-list" tabindex="-1"><a class="header-anchor" href="#this-page-is-sticky-in-article-list" aria-hidden="true">#</a> this page is sticky in article list</h1>
<p>sticky: true</p>
<h1 id="this-page-will-appear-in-starred-articles" tabindex="-1"><a class="header-anchor" href="#this-page-will-appear-in-starred-articles" aria-hidden="true">#</a> this page will appear in starred articles</h1>
<p>star: true</p>
<h1 id="you-can-customize-footer-content" tabindex="-1"><a class="header-anchor" href="#you-can-customize-footer-content" aria-hidden="true">#</a> You can customize footer content</h1>
<p>footer: Footer content for test</p>
<h1 id="you-can-customize-copyright-content" tabindex="-1"><a class="header-anchor" href="#you-can-customize-copyright-content" aria-hidden="true">#</a> You can customize copyright content</h1>
<h2 id="copyright-no-copyright" tabindex="-1"><a class="header-anchor" href="#copyright-no-copyright" aria-hidden="true">#</a> copyright: No Copyright</h2>
<!-- more -->
<h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2>
<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<h2 id="小试牛刀" tabindex="-1"><a class="header-anchor" href="#小试牛刀" aria-hidden="true">#</a> <a href="https://sfc.vuejs.org/#eNp9kMFugzAMQH/FyqWt2pKdEZ22/8iFZmaja5zIMeyA8u8zIKFqk3qL7ecX25N5T6kaBzS1abLnPglklCG9OupDiiwwAWPrpR8RCnQcA+yU3zly5CNl5aUVhMuG7SfwcSCp4QXKYea6gbQSCXryjAFJ9geYHMHaWy348eioOGrsOoYOoIFgSHdFNAJoroOIWt78vfffF2c2nTMLADBNj0ooKtQ+uzYq09jNaE5m3fAc2lTdciS9wTKUipdCdqZex5xzuvQcO/MlknJtbe78fLlbriJ/Wn1VrH/2ASvM4Xzl+JORVezM6cFhNTkinxnpAxn5mfMP+s87a3XDYsovBkCguQ==" target="_blank" rel="noopener noreferrer">小试牛刀<ExternalLinkIcon/></a></h2>
<h3 id="响应式代理-vs-原始对象" tabindex="-1"><a class="header-anchor" href="#响应式代理-vs-原始对象" aria-hidden="true">#</a> 响应式代理 vs. 原始对象</h3>
<ul>
<li>
<p>值得注意的是，reactive() 返回的是一个原始对象的 Proxy，它和原始对象是不相等的</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>  <span class="token keyword">const</span> raw <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>raw<span class="token punctuation">)</span>
  <span class="token comment">// 代理对象和原始对象不是全等的</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxy <span class="token operator">===</span> raw<span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>只有代理对象是响应式的，更改原始对象不会触发更新。因此，使用 Vue 的响应式系统的最佳实践是 仅使用你声明对象的代理版本</p>
</li>
<li>
<p>为保证访问代理的一致性，对同一个原始对象调用 reactive() 会总是返回同样的代理对象，而对一个已存在的代理对象调用 reactive() 会返回其本身</p>
</li>
</ul>
</div></template>


