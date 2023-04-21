import{$ as e,a0 as o,a1 as t,a4 as p,a2 as n,a3 as a,a5 as r,a6 as c,C as l}from"./framework-43d5a06a.js";const i="/frontendtechnologysharing.github.com/assets/node/down_repo_git_error.png",d={},u={id:"插件地址",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#插件地址","aria-hidden":"true"},"#",-1),m={href:"https://www.npmjs.com/package/download-git-repo",target:"_blank",rel:"noopener noreferrer"},h=c(`<h2 id="错误示例" tabindex="-1"><a class="header-anchor" href="#错误示例" aria-hidden="true">#</a> 错误示例</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token literal-property property">Error</span><span class="token operator">:</span> <span class="token string">&#39;git clone&#39;</span> failed <span class="token keyword">with</span> status <span class="token number">128</span>
    at ChildProcess<span class="token punctuation">.</span><span class="token operator">&lt;</span>anonymous<span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token constant">D</span><span class="token operator">:</span>\\frontendStudy\\nodejsStudy\\<span class="token number">02</span><span class="token operator">-</span><span class="token constant">LEARN_CLI</span>\\node_modules\\_git<span class="token operator">-</span>clone@<span class="token number">0.1</span><span class="token number">.0</span>@git<span class="token operator">-</span>clone\\index<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">33</span><span class="token operator">:</span><span class="token number">22</span><span class="token punctuation">)</span>
    at ChildProcess<span class="token punctuation">.</span><span class="token function">emit</span> <span class="token punctuation">(</span>node<span class="token operator">:</span>events<span class="token operator">:</span><span class="token number">513</span><span class="token operator">:</span><span class="token number">28</span><span class="token punctuation">)</span>
    at <span class="token function">maybeClose</span> <span class="token punctuation">(</span>node<span class="token operator">:</span>internal<span class="token operator">/</span>child_process<span class="token operator">:</span><span class="token number">1091</span><span class="token operator">:</span><span class="token number">16</span><span class="token punctuation">)</span>
    at Socket<span class="token punctuation">.</span><span class="token operator">&lt;</span>anonymous<span class="token operator">&gt;</span> <span class="token punctuation">(</span>node<span class="token operator">:</span>internal<span class="token operator">/</span>child_process<span class="token operator">:</span><span class="token number">449</span><span class="token operator">:</span><span class="token number">11</span><span class="token punctuation">)</span>
    at Pipe<span class="token punctuation">.</span><span class="token operator">&lt;</span>anonymous<span class="token operator">&gt;</span> <span class="token punctuation">(</span>node<span class="token operator">:</span>net<span class="token operator">:</span><span class="token number">313</span><span class="token operator">:</span><span class="token number">12</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="错误原因" tabindex="-1"><a class="header-anchor" href="#错误原因" aria-hidden="true">#</a> 错误原因</h2><ul><li>download-repo-git 插件不支持promise,是回调函数形式，避免出现回调地狱。因此使用了 nodejs自带 插件 util中 promisify，promisify的作用试转换 非 promise函数支持promise.报错</li></ul><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><figure><img src="`+i+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>至此，问题解决</p>',7);function _(b,g){const s=l("ExternalLinkIcon");return o(),t("div",null,[p(" more "),n("h2",u,[k,a(),n("a",m,[a("插件地址"),r(s)])]),h])}const v=e(d,[["render",_],["__file","download-git-repo.html.vue"]]);export{v as default};