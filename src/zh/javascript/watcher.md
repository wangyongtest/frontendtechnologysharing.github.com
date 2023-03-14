---

# This is the title of the article

title: 观察者和发布订阅模式

shortTitle: Proxy

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

- javascript
- 设计模式

# A page can have multiple tags

tag:

- javascript
- 设计模式

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

## 发布-订阅模式

存在一个“信号中心”，某个任务完成，就向信号中心，发布（publish）一个信号，其他任务向信息中心订阅（subscribe）这个信号，从而知道自己什么时候可以开始执行，即：发布-订阅模式。

- 示例

  ```ts
  <script>
    class EventEmitter {
      constructor(){
        <!-- 初始化一个新的空对象 -->
        <!-- 在_vm 上创建一个_event对象用来存放事件-->
        this._events = Object.create(null)
      }

      // 监听事件，获得emit 触发事件后提供的数据
      on(event, fn){
        <!-- 如果为数组则循环监听数组事件 -->
        if(Array.isArray(event)){
          event.forEach(e =>{
            this.on(item, fn)
          })
        }else{
          (this._events[event] || this._events[event] = []).push(fn)
        }
      }

    // 触发事件提供数据
      emit(event, ..args){
        const cbs = this._events[event]
        if(cbs){
          cbs.forEach(fn => {
            fn.apply(this,args)
          })
        }
      }

      <!-- 只触发一次的自定义事件 -->
      once(event, fn){
        const on = () => {
          <!-- 在第一次执行时销毁该事件 -->
          this.off(event, on)
          fn.apply(this, arguments)
        }
        on.fn = fn
        this.on(event, on)
      }

      <!-- 关闭事件绑定 -->
      off(event, fn){
        <!-- 如果参数为空，则关闭所有事件 -->
        if(!argument.length){
          <!-- 重新初始化一个空对象 -->
          this._events = Object.create(null)
          return
        }

        <!-- 如果传进来的事件没有emit(事件对象中不存在这个事件)，则返回 -->
        if(!this._events[event]) return

        <!-- 如果没有传入回调函数，则默认移除该事件的绑定的所有函数；否则移除与fn相同函数 -->
        if(!fn){
          this._events[event] = []
          return
        }else{
          <!-- this._events[event]是引用类型，与cbs指向同一个数据 -->
          const cbs = this._events[event]
          let i = this._events[event]
          while(i--){
            if(cbs[i] === fn || cbs[i].fn === fn){
              cbs.splice(i, 1)
              container
            }
          }
        }
      }
    }

    const initEvent = new EventEmitter()

    const testFn = (value) => {
      console.log('eventName',value)
    }

    initEvent.on('click', testFn)

    initEvent.once('click', testFn)

    initEvent.emit('click', '参数为emit触发事件需要传递的参数')

    initEvent.off('click')

  </script>

  ```

## 观察者模式

  当事件发生时，**观察者**(订阅者，watcher)执行update方法，完成相应的操作；被观察的**目标**(发布者，Dep)使用数组Subs来存储所有的观察者， 也可以使用
addSub()添加新的观察者，当有事件发生时，调研所有时间的update()方法

- 示例

   ```ts
   <script>
   <!-- 被观察的目标，即发布者：Dep -->
     class Dep(){
      constructor(){
        <!-- 记录所有的观察者，即订阅者 -->
      this.subs = []
      }

      <!-- 添加新的观察者 -->
      addSub(sub){
        <!-- 该订阅者存在，且有update方法，将其添加到subs数组中 -->
        if(sub&&sub.update){
          this.subs.push(sub)
        }
      }

      <!-- 移除观察者 -->
      removeSub(sub){
        if(this.subs.length){
          let index = this.indexOf(sub)
          if(index > -1){
            this.subs.splice(index,1)
          }
        }
      }

      <!-- 发布更新通知 -->
      notify(){
        this.subs.forEach(item => {
          item.update()
        })
      }
     }
     

     <!-- 观察者，即：订阅者 -->
     class Watcher {
      update(){
          console.log('更新对应数据')
        }
     }


     let dep = new Dep()
     let watcher1 = new Watcher()
     let watcher2 = new Watcher()

     <!-- 添加观察者对象 -->
     dep.addSub(Watcher1)
     dep.addSub(watcher2)
     dep.removeSub(watcher2)

     <!-- 发布 -->
     dep.notify()
   </script>
   ```

## 区别

- 发布-订阅模式：由一个统一调度中心调用，发布者和订阅者之间不需要知道对方的存在
- 观察者模式：由具体的目标调度，如，某一个事件被触发时，Dep就会调用数组中保存的和这个事件有关系的观察者的方法，因此，观察者模式中的订阅者与发布者之间存在依赖关系

<!-- @bytemd/react -->