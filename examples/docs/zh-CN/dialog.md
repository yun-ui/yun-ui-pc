## Dialog 对话框
在保留当前页面状态的情况下，告知用户并承载相关操作。

### 基本用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

:::demo 需要设置`visible`属性，它接收`Boolean`，当为`true`时显示 Dialog。Dialog 分为两个部分：`body`和`footer`，`footer`属性用于定义底部操作区内容，默认具有取消与确认两个按钮（分别具有`cancel`、`confirm`事件）。`title`属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了`before-close`、`tip`slot的用法。

```html
<y-button type="primary" text @click="dialogVisible = true">点击打开 Dialog</y-button>

<y-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose"
  @cancel="handleClose"
  @confirm="handleClose">
  <span>这是弹窗内容</span>
  <div style="height: 300px">
    <y-button @click="drawerVisible = true">打开侧边弹窗</y-button>
  </div>
  <span slot="tip" class="footer-tip"><i class="y-icon-message"></i>辅助说明提示信息</span>

  <y-drawer :visible.sync="drawerVisible" :modal="false" size="50%">
    <y-button @click="drawerVisible1 = true">打开侧边弹窗1</y-button>
  </y-drawer>

  <y-drawer :visible.sync="drawerVisible1" :modal="false" size="50%">
    123
  </y-drawer>
</y-dialog>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        drawerVisible: false,
        drawerVisible1: false
      };
    },
    methods: {
      handleClose(done) {
        this.dialogVisible = false;
      }
    }
  };
</script>
```
:::

:::tip
`before-close` 仅当用户通过点击关闭图标或遮罩关闭 Dialog 时起效。如果你在 `footer` 里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 `before-close` 的相关逻辑。
:::

### 自定义顶部操作

通过`operation`Slot，可以拓展顶部标题区域的操作。需注意的是，关闭按钮不受影响。

:::demo
```html
<y-button type="primary" text @click="dialogTableVisible = true">打开带有顶部操作的 Dialog</y-button>

<y-dialog
  title="收货地址"
  :visible.sync="dialogTableVisible"
  @cancel="handleClose"
  @confirm="handleClose">
  <span slot="operation" class="title-operation">
    <i class="y-icon-edit2"></i>
    <i class="y-icon-delete"></i>
    <i class="y-icon-more"></i>
  </span>
  <y-table :data="gridData">
    <y-table-column property="date" label="日期" width="150"></y-table-column>
    <y-table-column property="name" label="姓名" width="200"></y-table-column>
    <y-table-column property="address" label="地址"></y-table-column>
  </y-table>
</y-dialog>

<script>
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false,
      };
    },
    methods: {
      handleClose() {
        this.dialogTableVisible = false;
      }
    }
  };
</script>
```
:::

### 嵌套的 Dialog
如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 `append-to-body` 属性。内部 Dialog 通过设置 `prev-button-show`展示返回按钮，通过监听`prev`可自定义返回事件。
:::demo 正常情况下，我们不建议使用嵌套的 Dialog，如果需要在页面上同时显示多个 Dialog，可以将它们平级放置。对于确实需要嵌套 Dialog 的场景，我们提供了`append-to-body`属性。将内层 Dialog 的该属性设置为 true，它就会插入至 body 元素上，从而保证内外层 Dialog 和遮罩层级关系的正确。
```html
<template>
  <y-button type="primary" text @click="outerVisible = true">点击打开外层 Dialog</y-button>
  
  <y-dialog
    title="外层 Dialog"
    :visible.sync="outerVisible"
    @cancel="outerVisible = false"
    @confirm="innerVisible = true"
    confirm-button-text="打开内层 Dialog">
    <y-dialog
      width="30%"
      title="内层 Dialog"
      :visible.sync="innerVisible"
      append-to-body
      prev-button-show
      @prev="handlePrev">
    </y-dialog>
  </y-dialog>
</template>

<script>
  export default {
    data() {
      return {
        outerVisible: false,
        innerVisible: false
      };
    },
    methods: {
      handlePrev() {
        this.innerVisible = false;
        this.outerVisible = true;
      }
    }
  }
</script>
```
:::

### 底部居中布局

:::demo 将`center`设置为`true`即可使底部居中。`center`仅影响底部区域。Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。如果需要内容也水平居中，请自行为其添加 CSS。

```html
<y-button type="primary" text @click="centerDialogVisible = true">点击打开 Dialog</y-button>

<y-dialog
  title="提示"
  :visible.sync="centerDialogVisible"
  width="30%"
  center>
  <span>需要注意的是内容是默认不居中的，且内容区无padding，用于展示型弹窗。</span>
  <template slot="footer" class="dialog-footer">
    <y-button @click="centerDialogVisible = false">取 消</y-button>
    <y-button type="primary" @click="centerDialogVisible = false">确 定</y-button>
  </template>
</y-dialog>

<script>
  export default {
    data() {
      return {
        centerDialogVisible: false
      };
    }
  };
</script>
```
:::

:::tip
Dialog 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。因此，如果需要执行 DOM 操作，或通过 `ref` 获取相应组件，请在 `open` 事件回调中进行。
:::

:::tip
如果 `visible` 属性绑定的变量位于 Vuex 的 store 内，那么 `.sync` 不会正常工作。此时需要去除 `.sync` 修饰符，同时监听 Dialog 的 `open` 和 `close` 事件，在事件回调中执行 Vuex 中对应的 mutation 更新 `visible` 属性绑定的变量的值。
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| visible   | 是否显示 Dialog，支持 .sync 修饰符 | boolean | — | false |
| title     | Dialog 的标题，也可通过具名 slot （见下表）传入 | string    | — | — |
| width     | Dialog 的宽度 | string    | — | 50% |
| modal     | 是否需要遮罩层   | boolean   | — | true |
| modal-append-to-body     | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上   | boolean   | — | true |
| append-to-body     | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true   | boolean   | — | false |
| lock-scroll | 是否在 Dialog 出现时将 body 滚动锁定 | boolean | — | true |
| custom-class      | Dialog 的自定义类名 | string    | — | — |
| close-on-click-modal | 是否可以通过点击 modal 关闭 Dialog | boolean    | — | true |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog | boolean    | — | true |
| show-close | 是否显示关闭按钮 | boolean    | — | true |
| before-close | 关闭前的回调，会暂停 Dialog 的关闭 | function(done)，done 用于关闭 Dialog | — | — |
| center | 是否对底部采用居中布局 | boolean | — | false |
| destroy-on-close | 关闭时销毁 Dialog 中的元素 | boolean | — | false |
| cancel-button-text | 取消按钮文字 | string | — | 取消 |
| confirm-button-text | 确认按钮文字 | string | — | 确认 |
| cancel-button-show | 是否显示取消按钮 | boolean | — | true |
| title-background-color | 标题栏背景色 | string | — | #F8F9FB |
| footer-show | 是否显示整个底部区域 | boolean | — | true |

### Slot
| name | 说明 |
|------|--------|
| — | Dialog 的内容 |
| title | Dialog 标题区的文字部分 |
| operation | Dialog标题区的右半部分操作 |
| tip | Dialog底部左侧提示信息 |
| footer | Dialog 底部按钮区的内容 |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| open  | Dialog 打开的回调 | — |
| opened  | Dialog 打开动画结束时的回调 | — |
| close  | Dialog 关闭的回调 | — |
| closed | Dialog 关闭动画结束时的回调 | — |
| cancel | 点击底部操作取消按钮的回调 | — |
| confirm | 点击底部操作确认按钮的回调 | — |
| prev | 点击标题左侧返回按钮的回调 | — |