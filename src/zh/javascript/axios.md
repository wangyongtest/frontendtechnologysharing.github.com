---

# This is the title of the article

title: Axios Ajax  Fetch

shortTitle: Axios Ajax  Fetch

# This is the icon of the page

icon: page

# This control sidebar order

order: 1

# Set author

author: WY

# Set writing time

date: 2023-03-22

# A page can have multiple categories

category:

- javascript
- Axios
- Ajax
- Fetch

# A page can have multiple tags

tag:
- javascript
- Axios
- Ajax
- Fetch

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

## Axios Ajax Fetch 三者区别

### Ajax

    Ajax（Asynchronous Javascript and XML）,是一种技术的统称。随着web2.0产生（论坛、BBS诞生），并不是实际APIAjax（Asynchronous Javascript and XML）,是一种技术的统称。随着web2.0产生（论坛、BBS诞生），并不是实际API

### Axios

    Axios是一个基于Promise的HTTP请求客户端，用来发送请求，是一个第三方库.Axios 是一个基于 promise 网络请求库，作用于node.js 和浏览器中。 它是 isomorphic 的(即同一套代码可以运行在浏览器和node.js中)。在服务端它使用原生 node.js http 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests.
    - 从浏览器创建 XMLHttpRequests
    - 从 node.js 创建 http 请求
    - 支持 Promise API
    - 拦截请求和响应
    - 转换请求和响应数据
    - 取消请求
    - 自动转换JSON数据
    - 客户端支持防御XSRF

### Fetch

   Fetch是一个具体的API

- 浏览器原生API，用于网络请求
- 和XMLHttpRequest是一个级别，都是API级别的
- Fetch语法更加简洁、易用，并且支持Promise
- 可以看成是XMLHttpRequest的升级版本

### 结论

  API是原生函数，库是第三方工具。API数量有限。但是对于网络请求的库会有很多，并不仅限Axios一种；实际项目中，尽量使用现成的库，尽量不要自己造轮子

::: code-tabs#shell

@tab Axios
   ![流程图](/assets/javascript/axios.jpg)

@tab fetch

@tab Ajax

:::
