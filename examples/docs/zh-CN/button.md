## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<y-row>
  <y-button>默认按钮</y-button>
  <y-button type="primary">主要按钮</y-button>
  <y-button type="success">成功按钮</y-button>
  <y-button type="info">信息按钮</y-button>
  <y-button type="warning">警告按钮</y-button>
  <y-button type="danger">危险按钮</y-button>
</y-row>

<y-row>
  <y-button plain>朴素按钮</y-button>
  <y-button type="primary" plain>主要按钮</y-button>
  <y-button type="success" plain>成功按钮</y-button>
  <y-button type="info" plain>信息按钮</y-button>
  <y-button type="warning" plain>警告按钮</y-button>
  <y-button type="danger" plain>危险按钮</y-button>
</y-row>

<y-row>
  <y-button round>圆角按钮</y-button>
  <y-button type="primary" round>主要按钮</y-button>
  <y-button type="success" round>成功按钮</y-button>
  <y-button type="info" round>信息按钮</y-button>
  <y-button type="warning" round>警告按钮</y-button>
  <y-button type="danger" round>危险按钮</y-button>
</y-row>

<y-row>
  <y-button icon="y-icon-search" circle></y-button>
  <y-button type="primary" icon="y-icon-edit" circle></y-button>
  <y-button type="success" icon="y-icon-check" circle></y-button>
  <y-button type="info" icon="y-icon-message" circle></y-button>
  <y-button type="warning" icon="y-icon-collect" circle></y-button>
  <y-button type="danger" icon="y-icon-delete" circle></y-button>
</y-row>
```
:::

### 禁用状态

按钮不可用状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<y-row>
  <y-button disabled>默认按钮</y-button>
  <y-button type="primary" disabled>主要按钮</y-button>
  <y-button type="success" disabled>成功按钮</y-button>
  <y-button type="info" disabled>信息按钮</y-button>
  <y-button type="warning" disabled>警告按钮</y-button>
  <y-button type="danger" disabled>危险按钮</y-button>
</y-row>

<y-row>
  <y-button plain disabled>朴素按钮</y-button>
  <y-button type="primary" plain disabled>主要按钮</y-button>
  <y-button type="success" plain disabled>成功按钮</y-button>
  <y-button type="info" plain disabled>信息按钮</y-button>
  <y-button type="warning" plain disabled>警告按钮</y-button>
  <y-button type="danger" plain disabled>危险按钮</y-button>
</y-row>
```
:::

### 文字按钮

没有边框和背景色的按钮。

:::demo
```html
<y-button type="text">文字按钮</y-button>
<y-button type="text" disabled>文字按钮</y-button>
```
:::

### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置`icon`属性即可，icon 的列表可以参考 Yun 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标。

```html
<y-button type="primary" icon="y-icon-edit"></y-button>
<y-button type="primary" icon="y-icon-share"></y-button>
<y-button type="primary" icon="y-icon-delete"></y-button>
<y-button type="primary" icon="y-icon-search">搜索</y-button>
<y-button type="primary">上传<i class="y-icon-upload y-icon--right"></i></y-button>
```
:::

### 按钮组

以按钮组的方式出现，常用于多项类似操作。

:::demo 使用`<y-button-group>`标签来嵌套你的按钮。

```html
<y-button-group>
  <y-button type="primary" icon="y-icon-arrow-left">上一页</y-button>
  <y-button type="primary">下一页<i class="y-icon-arrow-right y-icon--right"></i></y-button>
</y-button-group>
<y-button-group>
  <y-button type="primary" icon="y-icon-edit"></y-button>
  <y-button type="primary" icon="y-icon-share"></y-button>
  <y-button type="primary" icon="y-icon-delete"></y-button>
</y-button-group>
```
:::

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

:::demo 要设置为 loading 状态，只要设置`loading`属性为`true`即可。

```html
<y-button type="primary" :loading="true">加载中</y-button>
```
:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<y-row>
  <y-button>默认按钮</y-button>
  <y-button size="medium">中等按钮</y-button>
  <y-button size="small">小型按钮</y-button>
  <y-button size="mini">超小按钮</y-button>
</y-row>
<y-row>
  <y-button round>默认按钮</y-button>
  <y-button size="medium" round>中等按钮</y-button>
  <y-button size="small" round>小型按钮</y-button>
  <y-button size="mini" round>超小按钮</y-button>
</y-row>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |
