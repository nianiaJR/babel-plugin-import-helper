## babel-plugin-import-helper
此插件主要目的是针对使用 [business-ui](http://business-ui.taobao.org) (1.12.0版本后) 的项目，在生产环境编译打包时，只把使用到的文件进行打包，避免引入冗余文件

### 版本兼容性
- business-ui 1.12.0后有效


### 示例
```javascript
// 转译前
import { Button, Modal } from 'business-ui'

// 转译后
import { Button } from 'business-ui/lib/Button'
import { Modal } from 'business-ui/lib/Modal'
```

### 下载

```bash
// npm registry: https://npm.taobao.org
$ npm install babel-plugin-import-helper
```

### 使用插件
``` javascript
// 配置.babelrc
{
  "plugins": [ 
    // 最好把此插件放在最前面
    [
      "import-helper",
      {
        libraryName: "business-ui"
      }
    ]
  ]
}
```

### 开发此插件
- 基于 [babel/babylon](https://github.com/babel/babylon/blob/6.x/README.md) 解析AST，进行转译修改
- 参照 [https://github.com/ant-design/babel-plugin-import] 脚手架及模式进行开发
- 更 [简单的插件开发初学者介绍](https://juejin.im/post/5950b1f36fb9a06ba73d1358) 仅作参考，还需要根据需求来结合文档写自己的插件。