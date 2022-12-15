## watchEffect
- 自动手机依赖并触发
- 自动销毁effect， 可手动调用销毁
- 使副作用失效
- 副作用执行顺序 {flush: post}

## watch
- 懒执行
- getter function watch ()=>props.mag or array []
- 访问前后变化值