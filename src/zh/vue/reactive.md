<!--
 * @Author: wy wang.yong@easttrans.cn
 * @Date: 2023-03-09 18:02:44
 * @LastEditors: wy wang.yong@easttrans.cn
 * @LastEditTime: 2023-03-20 14:03:52
 * @FilePath: \frontendtechnologysharing.github.com\src\zh\vue\reactive.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
---

# This is the title of the article

title: Reactive
shortTitle: Reactive

# This is the icon of the page

icon: page

# This control sidebar order

order: 1

# Set author

author: WY

# Set writing time

date: 2023-03-08

# A page can have multiple categories

category:

- Vue

# A page can have multiple tags

tag:

- Vue

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
## 原理

## 用法

## 示例

## [小试牛刀](https://sfc.vuejs.org/#eNp9kMFugzAMQH/FyqWt2pKdEZ22/8iFZmaja5zIMeyA8u8zIKFqk3qL7ecX25N5T6kaBzS1abLnPglklCG9OupDiiwwAWPrpR8RCnQcA+yU3zly5CNl5aUVhMuG7SfwcSCp4QXKYea6gbQSCXryjAFJ9geYHMHaWy348eioOGrsOoYOoIFgSHdFNAJoroOIWt78vfffF2c2nTMLADBNj0ooKtQ+uzYq09jNaE5m3fAc2lTdciS9wTKUipdCdqZex5xzuvQcO/MlknJtbe78fLlbriJ/Wn1VrH/2ASvM4Xzl+JORVezM6cFhNTkinxnpAxn5mfMP+s87a3XDYsovBkCguQ==)

### 响应式代理 vs. 原始对象

- 值得注意的是，reactive() 返回的是一个原始对象的 Proxy，它和原始对象是不相等的

   ``` ts
     const raw = {}
     const proxy = reactive(raw)
     // 代理对象和原始对象不是全等的
     console.log(proxy === raw) // false
   ```

- 只有代理对象是响应式的，更改原始对象不会触发更新。因此，使用 Vue 的响应式系统的最佳实践是 仅使用你声明对象的代理版本
- 为保证访问代理的一致性，对同一个原始对象调用 reactive() 会总是返回同样的代理对象，而对一个已存在的代理对象调用 reactive() 会返回其本身
