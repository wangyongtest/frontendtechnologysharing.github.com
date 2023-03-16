---

# This is the title of the article

title: download-git-repo
shortTitle: download-git-repo

# This is the icon of the page

icon: page

# This control sidebar order

order: 1

# Set author

author: WY

# Set writing time

date: 2023-03-16

# A page can have multiple categories

category:

- nodejs
- npm

# A page can have multiple tags

tag:

- nodejs
- -npm

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

## [插件地址](https://www.npmjs.com/package/download-git-repo)

## 错误示例

```js
  Error: 'git clone' failed with status 128
    at ChildProcess.<anonymous> (D:\frontendStudy\nodejsStudy\02-LEARN_CLI\node_modules\_git-clone@0.1.0@git-clone\index.js:33:22)
    at ChildProcess.emit (node:events:513:28)
    at maybeClose (node:internal/child_process:1091:16)
    at Socket.<anonymous> (node:internal/child_process:449:11)
    at Pipe.<anonymous> (node:net:313:12)
```

## 错误原因

- download-repo-git 插件不支持promise,是回调函数形式，避免出现回调地狱。因此使用了 nodejs自带 插件 util中 promisify，promisify的作用试转换 非 promise函数支持promise.报错

## 解决方法

   ![img](/assets/node/down_repo_git_error.png)

至此，问题解决
