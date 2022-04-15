## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<y-row>
  <y-button type="primary">主要按钮</y-button>
  <y-button type="secondary">主次按钮</y-button>
  <y-button>次要按钮</y-button>
  <y-button type="danger">危险按钮</y-button>
  <y-button type="primary" text>主要按钮</y-button>
  <y-button text>次要按钮</y-button>
  <y-button type="danger" text>危险按钮</y-button>
</y-row>
```
:::

### 禁用状态

按钮不可用状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<y-row>
  <y-button type="primary" disabled>主要按钮</y-button>
  <y-button type="secondary" disabled>主次按钮</y-button>
  <y-button disabled>次要按钮</y-button>
  <y-button type="danger" disabled>危险按钮</y-button>
  <y-button type="primary" text disabled>主要按钮</y-button>
  <y-button text disabled>次要按钮</y-button>
  <y-button type="danger" text disabled>危险按钮</y-button>
</y-row>
```
:::

### 加载状态

按钮加载状态。（示例在3秒后自动切换到loading状态）

:::demo 你可以使用`loading`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<y-row>
  <y-button type="primary" :loading="loading">主要按钮</y-button>
  <y-button type="secondary" :loading="loading">主次按钮</y-button>
  <y-button :loading="loading">次要按钮</y-button>
  <y-button type="danger" :loading="loading">危险按钮</y-button>
  <y-button type="primary" text :loading="loading">主要按钮</y-button>
  <y-button text :loading="loading">次要按钮</y-button>
  <y-button type="danger" text :loading="loading">危险按钮</y-button>
</y-row>

<script>
  export default {
    data() {
      return {
        loading: false
      }
    },
    mounted() {
      setTimeout(() => {
        this.loading = true
      }, 30000)
    }
  }
</script>
```
:::

### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置`icon`属性即可，icon 的列表可以参考 Yun 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标。

```html
<y-row>
  <y-button type="primary" icon="y-icon-disable">主要按钮</y-button>
  <y-button type="secondary" icon="y-icon-reply">主次按钮</y-button>
  <y-button icon="y-icon-date">次要按钮</y-button>
  <y-button type="danger" icon="y-icon-success">危险按钮</y-button>
  <y-button type="primary" text icon="y-icon-disable">主要按钮</y-button>
  <y-button text icon="y-icon-disable">次要按钮</y-button>
  <y-button type="danger" text icon="y-icon-disable">危险按钮</y-button>
</y-row>
<y-row>
  <y-button type="primary" icon="y-icon-disable" disabled>主要按钮</y-button>
  <y-button type="secondary" icon="y-icon-reply" disabled>主次按钮</y-button>
  <y-button icon="y-icon-date" disabled>次要按钮</y-button>
  <y-button type="danger" icon="y-icon-success" disabled>危险按钮</y-button>
  <y-button type="primary" text icon="y-icon-disable" disabled>主要按钮</y-button>
  <y-button text icon="y-icon-disable" disabled>次要按钮</y-button>
  <y-button type="danger" text icon="y-icon-disable" disabled>危险按钮</y-button>
</y-row>
<y-row>
  <y-button type="primary" icon="y-icon-disable" :loading="loading">主要按钮</y-button>
  <y-button type="secondary" icon="y-icon-reply" :loading="loading">主次按钮</y-button>
  <y-button icon="y-icon-date" :loading="loading">次要按钮</y-button>
  <y-button type="danger" icon="y-icon-success" :loading="loading">危险按钮</y-button>
  <y-button type="primary" text icon="y-icon-disable" :loading="loading">主要按钮</y-button>
  <y-button text icon="y-icon-disable" :loading="loading">次要按钮</y-button>
  <y-button type="danger" text icon="y-icon-disable" :loading="loading">危险按钮</y-button>
</y-row>
<y-row>
  <y-button type="primary" icon="y-icon-disable"></y-button>
  <y-button type="secondary" icon="y-icon-disable"></y-button>
  <y-button icon="y-icon-disable"></y-button>
  <y-button type="danger" icon="y-icon-disable"></y-button>
</y-row>
<y-row>
  <y-button type="primary" icon="y-icon-disable" disabled></y-button>
  <y-button type="secondary" icon="y-icon-disable" disabled></y-button>
  <y-button icon="y-icon-disable" disabled></y-button>
  <y-button type="danger" icon="y-icon-disable" disabled></y-button>
</y-row>
<y-row>
  <y-button type="primary" icon="y-icon-disable" :loading="loading"></y-button>
  <y-button type="secondary" icon="y-icon-disable" :loading="loading"></y-button>
  <y-button icon="y-icon-disable" :loading="loading"></y-button>
  <y-button type="danger" icon="y-icon-disable" :loading="loading"></y-button>
</y-row>
<script>
  export default {
    data() {
      return {
        loading: false
      }
    },
    mounted() {
      setTimeout(() => {
        this.loading = true
      }, 3000)
    }
  }
</script>
```
:::

### 按钮组

以按钮组的方式出现，常用于多项类似操作。

:::demo 使用`<y-button-group>`标签来嵌套你的按钮。

```html
<y-button-group>
  <y-button type="primary" icon="y-icon-arrow-left">上一页</y-button>
  <y-button type="primary" suffix-icon="y-icon-arrow-right">下一页</y-button>
</y-button-group>
<y-button-group>
  <y-button type="primary" icon="y-icon-edit"></y-button>
  <y-button type="primary" icon="y-icon-share"></y-button>
  <y-button type="primary" icon="y-icon-delete"></y-button>
</y-button-group>
```
:::

### 小尺寸

Button 组件提供除了默认值以外的小尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 通过设置`size`属性为`small`来配置小尺寸按钮。

```html
<y-row>
  <y-button type="primary" size="small">主要按钮</y-button>
  <y-button type="secondary" size="small">主次按钮</y-button>
  <y-button size="small">次要按钮</y-button>
  <y-button type="danger" size="small">危险按钮</y-button>
  <y-button type="primary" text size="small">主要按钮</y-button>
  <y-button text size="small">次要按钮</y-button>
  <y-button type="danger" text size="small">危险按钮</y-button>
</y-row>
<y-row>
  <y-button type="primary" size="small" :loading="loading">主要按钮</y-button>
  <y-button type="secondary" size="small" :loading="loading">主次按钮</y-button>
  <y-button size="small" :loading="loading">次要按钮</y-button>
  <y-button type="danger" size="small" :loading="loading">危险按钮</y-button>
  <y-button type="primary" text size="small" :loading="loading">主要按钮</y-button>
  <y-button text size="small" :loading="loading">次要按钮</y-button>
  <y-button type="danger" text size="small" :loading="loading">危险按钮</y-button>
</y-row>
<y-row>
  <y-button type="primary" size="small" icon="y-icon-disable">主要按钮</y-button>
  <y-button type="secondary" size="small" icon="y-icon-disable">主次按钮</y-button>
  <y-button size="small" icon="y-icon-disable">次要按钮</y-button>
  <y-button type="danger" size="small" icon="y-icon-disable">危险按钮</y-button>
  <y-button type="primary" text size="small" icon="y-icon-disable">主要按钮</y-button>
  <y-button text size="small" icon="y-icon-disable">次要按钮</y-button>
  <y-button type="danger" size="small" text icon="y-icon-disable">危险按钮</y-button>
</y-row>
<y-row>
  <y-button type="primary" size="small" icon="y-icon-disable" :loading="loading">主要按钮</y-button>
  <y-button type="secondary" size="small" icon="y-icon-disable" :loading="loading">主次按钮</y-button>
  <y-button size="small" icon="y-icon-disable" :loading="loading">次要按钮</y-button>
  <y-button type="danger" size="small" icon="y-icon-disable" :loading="loading">危险按钮</y-button>
  <y-button type="primary" text size="small" icon="y-icon-disable" :loading="loading">主要按钮</y-button>
  <y-button text size="small" icon="y-icon-disable" :loading="loading">次要按钮</y-button>
  <y-button type="danger" size="small" text icon="y-icon-disable" :loading="loading">危险按钮</y-button>
</y-row>
<y-row>
  <y-button type="primary" size="small" icon="y-icon-disable"></y-button>
  <y-button type="secondary" size="small" icon="y-icon-disable"></y-button>
  <y-button size="small" icon="y-icon-disable"></y-button>
  <y-button type="danger" size="small" icon="y-icon-disable"></y-button>
</y-row>
<y-row>
  <y-button type="primary" size="small" icon="y-icon-disable" :loading="loading"></y-button>
  <y-button type="secondary" size="small" icon="y-icon-disable" :loading="loading"></y-button>
  <y-button size="small" icon="y-icon-disable" :loading="loading"></y-button>
  <y-button type="danger" size="small" icon="y-icon-disable" :loading="loading"></y-button>
</y-row>
<script>
  export default {
    data() {
      return {
        loading: false
      }
    },
    mounted() {
      setTimeout(() => {
        this.loading = true
      }, 3000)
    }
  }
</script>
```
:::

### Block按钮

Button 组件提供除了默认值以外的小尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 通过设置`size`属性为`small`来配置小尺寸按钮。
```html
<y-button type="primary" block>主要按钮</y-button>
<y-button type="secondary" block>主次按钮</y-button>
<y-button block>次要按钮</y-button>
<y-button type="danger" block>危险按钮</y-button>
<y-button type="primary" block :loading="loading">主要按钮</y-button>
<y-button type="secondary" block :loading="loading">主次按钮</y-button>
<y-button block :loading="loading">次要按钮</y-button>
<y-button type="danger" block :loading="loading">危险按钮</y-button>
<y-button type="primary" block disabled>主要按钮</y-button>
<y-button type="secondary" block disabled>主次按钮</y-button>
<y-button block disabled>次要按钮</y-button>
<y-button type="danger" block disabled>危险按钮</y-button>

<script>
  export default {
    data() {
      return {
        loading: false
      }
    },
    mounted() {
      setTimeout(() => {
        this.loading = true
      }, 3000)
    }
  }
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   small    |    —     |
| type     | 类型   | string    |   primary / secondary / danger  |     —    |
| text | 是否文字按钮，支持组合type值为primary | boolean | — | false |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | — | false |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |
