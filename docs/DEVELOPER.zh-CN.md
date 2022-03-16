# 项目结构

```
├── build                    # webpack 脚本和发布脚本
├── examples                 # 官网
├── packages                 # 组件源码
├── src
│   ├── directives           # 组件指令
│   ├── locale               # i18n
│   ├── mixins               # 常用 mixin
│   ├── transitions          # 组件过渡动画
│   ├── utils                # 常用方法
│   └── index.js             # npm 包的打包入口
├── test                     # 测试
└── types                    # TypeScript 定义
```

- `build` ：开发、打包相关的 webpack 配置和脚本以及发布 npm 包的相关脚本
- `examples` ：官网的代码，其中组件文档位于 `examples/docs` 下。
- `packages` ：组件源码，组件的样式文件统一位于 `packages/theme-chalk` 下。在发布时，样式文件也会作为一个独立的 [npm 包](https://www.npmjs.com/package/element-theme-chalk)发布，在用户使用[命令行主题工具](https://github.com/ElementUI/element-theme)进行自定义主题时会用到这个包
- `src` ：一些可复用的组件代码。此外还包括了 i18n 配置文件。需要注意的是，`src/index.js` 是由 `build/bin/build-entry.js` 自动生成的，请勿手动修改。
- `test` ：测试代码。在执行完一次测试后，可以打开 `test/unit/coverage/lcov-report/index.html` 查看各组件的测试覆盖率
- `types` ：组件的 TypeScript 定义文件。

# 开始开发

执行 `make dev` 命令，在浏览器中打开 [http://localhost:8085/#/](http://localhost:8085/#/)，导航至相应组件即可进行开发。组件页面由 `examples/docs` 文件夹下的 `md` 文件渲染而来。

此外，还可以使用 `make play` 命令，此时渲染的仅仅是 `examples/play/index.vue` 这一文件，因此页面上没有其他元素的干扰。如果需要修复一个 `examples/docs` 中没有对应例子的 bug，使用 `make play` 命令更加方便快捷。

# 开发完成后

- 如果是修复 bug，请确保该组件的其他功能没有受到本修复的影响。
- 如果是新增功能，请在文档中补充该功能的 API 说明，并在 TypeScript 定义中添加该 API。视功能的复杂程度，有时还需要添加测试用例和文档例子。

# 注意事项

- 考虑到最终打包的文件体积，项目的 babel 只引入了 `preset-2015` ，所以不建议使用 ES2015 的 API，例如 `Array.prototype.find` 、`Object.assign` 等。如果有需要，请首先查看 `utils` 文件夹中是否已存在相应的 polyfill，如果没有，可以引入第三方 polyfill。
- 在开发的过程中，可能需要修改组件文档。`md` 文件的渲染可以参考 `build/cooking.demo.js` 和 `examples/components/demo-block.vue` 这两个文件。需要注意的是，运行中的文档示例使用的是每个 `md` 文件最外层的 `<script>` 和 `<style>` 标签，而点击特定示例的「在线运行」使用的是 `:::demo` 块中的 `<script>` 和 `<style>` 标签。
- 鉴于部分用户有 SSR 的需求，因此在使用 `window` 和 `document` 的 API 之前，需要判断当前是否为服务器环境。如：

```javascript
if (Vue.prototype.$isServer) {
  return;
}
document.addEventListener('click', ...);
```