# 工具函数

Vue Business Kit 集成了 [Lodash](https://lodash.com/) 工具函数，提供强大的数据处理能力。

## 关于文档

本项目对 Lodash 官方文档进行了整理、精简和翻译，以便更方便地参考和使用。

## 特性

- 🔧 **完整的 Lodash 集成** - 所有 Lodash 工具函数开箱即用
- 📝 **类型支持** - 包含完整的 TypeScript 类型定义
- 🚀 **无需额外安装** - Lodash 已内置，无需单独安装

## 使用方式

```ts
import { _ } from "vue-business-kit"

// 直接使用 Lodash 函数
const result = _.chunk(["a", "b", "c", "d"], 2)
// => [['a', 'b'], ['c', 'd']]
```

## 分类

Lodash 函数按以下类别组织：

- **Array** - 数组操作方法
- **Collection** - 集合迭代和操作
- **Function** - 函数工具
- **Lang** - 语言工具
- **Math** - 数学运算
- **Number** - 数字工具
- **Object** - 对象操作
- **String** - 字符串操作
- **Util** - 实用工具函数

有关每个函数的详细文档，请参阅相应的分类页面。

## Lodash 工具函数

所有 Lodash 工具函数均可直接使用，详细文档请参考 [Lodash 官方文档](https://lodash.com/docs/)。
