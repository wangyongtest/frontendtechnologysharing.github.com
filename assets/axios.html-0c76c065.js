import{$ as o,a0 as r,a1 as n,a4 as c,a5 as h,a7 as e,a6 as d,C as l}from"./framework-43d5a06a.js";const x={},p=d(`<h2 id="axios-ajax-fetch-三者区别" tabindex="-1"><a class="header-anchor" href="#axios-ajax-fetch-三者区别" aria-hidden="true">#</a> Axios Ajax Fetch 三者区别</h2><h3 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> Ajax</h3><pre><code>Ajax（Asynchronous Javascript and XML）,是一种技术的统称。随着web2.0产生（论坛、BBS诞生），并不是实际APIAjax（Asynchronous Javascript and XML）,是一种技术的统称。随着web2.0产生（论坛、BBS诞生），并不是实际API
</code></pre><h3 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> Axios</h3><pre><code>Axios是一个基于Promise的HTTP请求客户端，用来发送请求，是一个第三方库.Axios 是一个基于 promise 网络请求库，作用于node.js 和浏览器中。 它是 isomorphic 的(即同一套代码可以运行在浏览器和node.js中)。在服务端它使用原生 node.js http 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests.
- 从浏览器创建 XMLHttpRequests
- 从 node.js 创建 http 请求
- 支持 Promise API
- 拦截请求和响应
- 转换请求和响应数据
- 取消请求
- 自动转换JSON数据
- 客户端支持防御XSRF
</code></pre><h3 id="fetch" tabindex="-1"><a class="header-anchor" href="#fetch" aria-hidden="true">#</a> Fetch</h3><p>Fetch是一个具体的API</p><ul><li>浏览器原生API，用于网络请求</li><li>和XMLHttpRequest是一个级别，都是API级别的</li><li>Fetch语法更加简洁、易用，并且支持Promise</li><li>可以看成是XMLHttpRequest的升级版本</li></ul><h3 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h3><p>API是原生函数，库是第三方工具。API数量有限。但是对于网络请求的库会有很多，并不仅限Axios一种；实际项目中，尽量使用现成的库，尽量不要自己造轮子</p>`,10);function A(u,f){const s=l("CodeTabs");return r(),n("div",null,[c(" more "),p,h(s,{id:"46",data:[{title:"Axios"},{title:"fetch"},{title:"Ajax"}],"tab-id":"shell"},{tab0:e(({title:a,value:t,isActive:i})=>[]),tab1:e(({title:a,value:t,isActive:i})=>[]),tab2:e(({title:a,value:t,isActive:i})=>[]),_:1})])}const _=o(x,[["render",A],["__file","axios.html.vue"]]);export{_ as default};
