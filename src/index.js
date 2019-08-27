import { addNamed } from '@babel/helper-module-imports'

export default ({ types, options }) => ({
    // 插件入口
    visitor: {
      // 处理类型： Import声明
      ImportDeclaration(path, { opts }) {
        const { libraryName } = opts
        const { node } = path
        const { specifiers, source } = node

        // 过滤掉默认引用，如 import { Button } from 'business-ui'
        if (source.value === libraryName) {
          path.replaceWithMultiple(
            specifiers.map(spec => types.ImportDeclaration([types.ImportDefaultSpecifier(spec.local)], types.StringLiteral(`${libraryName}/lib/${spec.imported.name}`)))
          )
        }
      }
    }
  })