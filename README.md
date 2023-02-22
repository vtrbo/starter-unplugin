# ---plugin-name--- 

[![NPM version](https://img.shields.io/npm/v/---plugin-name---?color=a1b858&label=)](https://www.npmjs.com/package/---plugin-name---)

---plugin-name--- for [unplugin](https://github.com/unjs/unplugin).

Forked from [antfu/unplugin-starter](https://github.com/antfu/unplugin-starter)

## Template Usage

> example use [@vtrbo/cli](https://github.com/vtrbo/cli)  
>
> example use [@vtrbo/ni](https://github.com/vtrbo/ni)  

Clone this template

```bash
vtr
# select Unplugin

# or
# vtr vtrbo/starter-unplugin my-plugin
```

Globally replace `---plugin-name---` with your plugin name.  

Globally replace `---PluginName---` with your plugin name (big camel case).  

Then you can start developing your plugin.  

To test your plugin, run `nr dev`.  

To release your plugin, run `nr release`.  

## Install

```bash
npm i ---plugin-name---
```

<details>
<summary>Vite</summary><br>

```js
// vite.config.js
import ---PluginName--- from '---plugin-name---/vite'

export default defineConfig({
  plugins: [---PluginName---({ /* options */ })],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```js
// rollup.config.js
import ---PluginName--- from '---plugin-name---/rollup'

export default {
  plugins: [---PluginName---({ /* options */ })],
}
```

<br></details>

<details>
<summary>Webpack</summary><br>

```js
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('---plugin-name---/webpack')({ /* options */ })
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```js
// nuxt.config.js
export default {
  buildModules: [
    ['---plugin-name---/nuxt', { /* options */ }],
  ],
}
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```js
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('---plugin-name---/webpack')({ /* options */ }),
    ],
  },
}
```

<br></details>

<details>
<summary>Esbuild</summary><br>

```js
// esbuild.config.js
import { build } from 'esbuild'
import ---PluginName--- from '---plugin-name---/esbuild'

build({
  plugins: [---PluginName---({ /* options */ })],
})
```

<br></details>

## License

[MIT](./LICENSE) License © 2022 [Victor Bo](https://github.com/vtrbo)
