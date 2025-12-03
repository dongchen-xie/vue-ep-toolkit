# Vue EP Toolkit

Vue3 + TypeScript + Element Plus + Lodash 组件函数库的 monorepo 项目。

## 项目结构

```
vue-ep-toolkit/
├── packages/
│   └── vue-ep-toolkit/          # 核心库包
│       ├── src/                 # 源代码
│       ├── dist/                # 构建输出
│       └── package.json         # 库包配置
├── docs/                        # 文档站点
│   ├── .vitepress/             # VitePress 配置
│   ├── guide/                  # 指南文档
│   ├── components/             # 组件文档
│   ├── utils/                  # 工具函数文档
│   └── .vitepress/dist/        # 文档构建输出
└── package.json                # 工作区根配置
```

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发命令

```bash
# 构建库包
pnpm build:lib

# 构建文档
pnpm build:docs

# 开发文档
pnpm dev:docs

# 构建所有
pnpm build

# 发布库包
pnpm release
```

## 两种打包方式

### 1. 库包打包 (npm 发布)

```bash
pnpm build:lib
```

输出文件：
- `packages/vue-ep-toolkit/dist/vue-ep-toolkit.es.js` - ES 模块
- `packages/vue-ep-toolkit/dist/vue-ep-toolkit.umd.js` - UMD 模块
- `packages/vue-ep-toolkit/dist/vue-ep-toolkit.css` - 样式文件
- `packages/vue-ep-toolkit/dist/index.d.ts` - TypeScript 声明文件

### 2. 文档打包 (静态部署)

```bash
pnpm build:docs
```

输出文件：
- `docs/.vitepress/dist/` - 静态 HTML 文件，可直接部署到服务器

## 使用方式

### 安装库包

```bash
npm install vue-ep-toolkit
```

### 全局注册

```typescript
import { createApp } from 'vue'
import VueEpToolkit from 'vue-ep-toolkit'
import 'vue-ep-toolkit/dist/vue-ep-toolkit.css'

const app = createApp(App)
app.use(VueEpToolkit)
app.mount('#app')
```

### 按需使用

```typescript
import { ElButton, ElMessage, _, debounce } from 'vue-ep-toolkit'
```

## 特性

- 🚀 基于 Vue3 + TypeScript 开发
- 📦 内置 Element Plus 组件库和图标
- 🛠️ 内置 Lodash 工具函数
- 📱 开箱即用，无需额外安装依赖
- 🎯 完整的 TypeScript 类型支持
- 📚 完整的文档站点

## 开发

1. 修改 `packages/vue-ep-toolkit/src/` 下的源代码
2. 运行 `pnpm build:lib` 构建库包
3. 修改 `docs/` 下的文档
4. 运行 `pnpm dev:docs` 预览文档
5. 运行 `pnpm build:docs` 构建文档站点

## 部署

### 库包发布到 npm

```bash
pnpm release
```

### 文档部署到服务器

将 `docs/.vitepress/dist/` 目录下的文件上传到 Web 服务器即可。