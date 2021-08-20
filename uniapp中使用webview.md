# 创建webview

```js
//创建webview
plus.webview.create(url, 'kf-webview', {
    plusrequire: 'none', //禁止远程网页使用plus的API，有些使用mui制作的网页可能会监听plus.key，造成关闭页面混乱，可以通过这种方式禁止
    // 'uni-app': 'none', //不加载uni-app渲染层框架，避免样式冲突
    top: 100, //放置在titleNView下方。如果还想在webview上方加个地址栏的什么的，可以继续降低TOP值
    bottom: 0,
})
var currentWebview = plus.webview.currentWebview() //此对象相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效，非v3编译模式使用this.$mp.page.$getAppWebview()
currentWebview.append(this.kfwv) //一定要append到当前的页面里！！！才能跟随当前页面一起做动画，一起关闭

uniapp 页面模式是一个页面一个webview
```


# 企点QQ中的失败案例

企点QQ客服想通过一个子webview在其他页公用 ，使用过如下方法：

1.全局mixin（全局mixin每个页面都不是同一份）

2.子webview实例存储在globalData中 

3.通过*getWebviewById* API查找webview 添加到当前页面中

均以失败

通过*plus.webview.create* 创建的子webview只能在当前窗口使用，不能通过存储在全局变量在其他页使用