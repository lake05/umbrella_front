# VUEJS

## watchEffect

- 自动手机依赖并触发
- 自动销毁 effect， 可手动调用销毁
- 使副作用失效
- 副作用执行顺序 {flush: post}

## watch

- 懒执行
- 传参 getter function watch ()=>props.mag or array []
- 访问前后变化值

# UMD (Universal Module Definition)

- 通用 Javascript 格式
- 兼容 Common.js、AMD、浏览器
- 太大 不支持 tree shaking

```js
;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
  } else if (typeof module !== 'object' && module.exports) {
    // Node.
  } else {
    // Browser globals
  }
})
```

# 面向切面编程 AOP aspect oriented program

```ts
@Controller
expect class CatsController {
  @Post()
  create(@Body() createCatDto){ // 把生成路由 body query等做成一个切面，使用时通过装饰器实现
    return ''
  }

  @Get()
  findAll(@Query() query){
    return ''
  }
}
```
