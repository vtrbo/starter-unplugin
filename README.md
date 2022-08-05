# ---name--- 

[![NPM version](https://img.shields.io/npm/v/---name---?color=a1b858&label=)](https://www.npmjs.com/package/---name---)

---name--- for [unplugin](https://github.com/unjs/unplugin).

# 使用
- 全局搜索 ---name--- 替换为你的插件名称
- 全局搜索 ---UpperName--- 替换为你的插件名称大驼峰名称
- 修改关于 vtrbo 的信息为你的信息
- 修改 LICENSE 为你的 LICENSE

## Installation

```shell
npm i ---name---
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import ---UpperName--- from '---name---/vite'

export default defineConfig({
  plugins: [---UpperName---()],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import ---UpperName--- from '---name---/rollup'

export default {
  plugins: [---UpperName---()],
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'

build({
  plugins: [require('---name---/esbuild')()],
})
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [require('---name---/webpack')()],
}
```

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [require('---name---/webpack')()],
  },
}
```

<br></details>

## License

[MIT](./LICENSE) License © 2022 [Victor Bo](https://github.com/vtrbo)
