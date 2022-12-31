# Commit Lint

- feat: 新增功能
- fix: 修复 bug
- docs: 文档变更
- style: 代码格式（不影响功能，例如空格、分号等格式修正）
- refactor: 代码重构（不包括 bug 修复、功能新增）
- perf: 性能优化
- chore: 其他修改, 比如构建流程, 依赖管理、版本好修正.

# 优化

## 在页面滚动时使用 IntersectionObserver 代替 getBoundingClientRect 判断内容与视口的交叉关系

- 互动场景 + 避免 reflow

## 避免 CLS, Cumulative Layout Shift

- 没有为图片设置尺寸

## js 的延迟加载方法 (js 的延迟加载有助于提高页面的加载速度)

- defer 脚本会在文档渲染完毕后，DOMContentLoaded 事件调用前执行。
  ![](https://ts1.cn.mm.bing.net/th/id/R-C.7651a7ca75ec4746132622ebeb6002e1?rik=VwWLG0xc2gL2Fg&riu=http%3a%2f%2fwww.growingwiththeweb.com%2fimages%2f2014%2f02%2f26%2fasync-vs-defer-twitter.png&ehk=UqwsSnAlhrVxpQJE4mWMRTvslA5W73UjIPGbYQi9AO0%3d&risl=&pid=ImgRaw&r=0)

```html
<script src="files" defer></script>
```

- async 在加载完成后立即执行，不能保证脚本会按顺序执行。它们将在 onload 事件之前完成。
- 如果 async="async"：脚本相对于页面的其余部分异步地执行（当页面继续进行解析时，脚本加载完将被执行）
- 如果不使用 async 且 defer="defer"：脚本将在页面完成解析时执行
- 如果既不使用 async 也不使用 defer：在浏览器继续解析页面之前，立即读取并执行脚本会阻断页面的解析

## 浏览器对同一域名下的资源并发下载线程数，chrome 为 6 个。

- 将资源收敛到不同的域名下
