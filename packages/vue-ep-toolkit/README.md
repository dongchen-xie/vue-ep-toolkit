# vue-ep-toolkit

Vue3 + TypeScript + Element Plus + Lodash 组件函数库

## 安装

```bash
npm install vue-ep-toolkit
```

## 使用

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

详细文档请查看 [在线文档](https://your-docs-site.com)