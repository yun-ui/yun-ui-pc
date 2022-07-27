## Drawer 抽屉

有些时候, `Dialog` 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, `Drawer` 拥有和 `Dialog` 几乎相同的 API, 在 UI 上带来不一样的体验.

### 基本用法

呼出一个临时的侧边栏, 可以从多个方向呼出

:::demo 需要设置 `visible` 属性，它的**类型**是 `boolean`,当为 **true** 时显示 Drawer。Drawer 分为两个部分：`title` 和 `body`，`title` 需要具名为 **title** 的 `slot`, 也可以通过 `title` 属性来定义，默认值为空。需要注意的是, Drawer 默认是从右往左打开, 当然可以设置对应的 `direction`, 详细请参考 `direction` 用法 最后，本例还展示了 `before-close` 的用法

```html
<y-radio-group v-model="direction">
  <y-radio label="ltr">从左往右开</y-radio>
  <y-radio label="rtl">从右往左开</y-radio>
  <y-radio label="ttb">从上往下开</y-radio>
  <y-radio label="btt">从下往上开</y-radio>
</y-radio-group>

<y-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  点我打开
</y-button>

<y-drawer
  title="我是标题"
  :visible.sync="drawer"
  :direction="direction"
  :before-close="handleClose"
  prevButtonShow
  size="50%"
  :title-height="48"
  @cancel="drawer = false"
  @confirm="drawer = false">
  <span slot="operation" class="title-operation">
    <i class="y-icon-edit2"></i>
    <i class="y-icon-delete"></i>
    <i class="y-icon-more"></i>
  </span>
  <span slot="tip" class="footer-tip"><i class="y-icon-message"></i>辅助说明提示信息</span>
  <div v-for="i in 200" :key="i">
    <span>我来啦!</span>
  </div>

</y-drawer>

<script>
  export default {
    data() {
      return {
        drawer: false,
        direction: 'rtl',
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>
```
:::

### 不添加 Title

当你不需要标题到时候, 你还可以去掉标题

:::demo 当遇到不需要 title 的场景时, 可以通过 `withHeader` 这个属性来关闭掉 title 的显示, 这样可以留出更大的空间给到用户, 为了用户的可访问性, 请务必设定 `title` 的值

```html
<y-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  点我打开
</y-button>

<y-drawer
  title="我是标题"
  :visible.sync="drawer"
  :with-header="false">
  <span>我来啦!</span>
</y-drawer>

<script>
  export default {
    data() {
      return {
        drawer: false,
      };
    }
  };
</script>
```
:::


### 自定义内容

和 `Dialog` 组件一样, `Drawer` 同样可以在其内部嵌套各种丰富的操作

:::demo

```html
<y-button type="primary" text @click="table = true">打开嵌套表格的 Drawer</y-button>
<y-button type="primary" text @click="dialog = true">打开嵌套 Form 的 Drawer</y-button>
<y-drawer
  title="我嵌套了表格!"
  :visible.sync="table"
  direction="rtl"
  size="50%">
   <y-table :data="gridData">
      <y-table-column property="date" label="日期" width="150"></y-table-column>
      <y-table-column property="name" label="姓名" width="200"></y-table-column>
      <y-table-column property="address" label="地址"></y-table-column>
    </y-table>
</y-drawer>

<y-drawer
  title="我嵌套了 Form !"
  :before-close="handleClose"
  :visible.sync="dialog"
  direction="ltr"
  custom-class="demo-drawer"
  ref="drawer"
  >
  <div class="demo-drawer__content">
    <y-form :model="form" label-width="auto" size="medium">
      <y-form-item label="活动名称">
        <y-input v-model="form.name" autocomplete="off"></y-input>
      </y-form-item>
      <y-form-item label="活动区域">
        <y-select v-model="form.region" placeholder="请选择活动区域">
          <y-option label="区域一" value="shanghai"></y-option>
          <y-option label="区域二" value="beijing"></y-option>
        </y-select>
      </y-form-item>
    </y-form>
  </div>
</y-drawer>

<script>
export default {
  data() {
    return {
      table: false,
      dialog: false,
      loading: false,
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
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      timer: null,
    };
  },
  methods: {
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('确定要提交表单吗？')
        .then(_ => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(_ => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    }
  }
}
</script>
```
:::

### 多层嵌套

`Drawer` 组件也拥有多层嵌套的方法

:::demo 同样, 如果你需要嵌套多层 `Drawer` 请一定要设置 `append-to-body` 属性为 **true**

```html

<y-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  点我打开
</y-button>

<y-drawer
  title="我是外面的 Drawer"
  :visible.sync="drawer"
  size="50%">
  <div>
   <y-button @click="innerDrawer = true">打开里面的!</y-button>
   <y-drawer
     title="我是里面的"
     :append-to-body="true"
     :before-close="handleClose"
     :visible.sync="innerDrawer">
     <p>_(:зゝ∠)_</p>
   </y-drawer>
  </div>
</y-drawer>

<script>
  export default {
    data() {
      return {
        drawer: false,
        innerDrawer: false,
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('还有未保存的工作哦确定关闭吗？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>

```
:::

:::tip

Drawer 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。因此，如果需要执行 DOM 操作，或通过 `ref` 获取相应组件，请在 `open` 事件回调中进行。

:::

:::tip

Drawer 提供一个 `destroyOnClose` API, 用来在关闭 Drawer 时销毁子组件内容, 例如清理表单内的状态, 在必要时可以将该属性设置为 **true** 用来保证初始状态的一致性

:::

:::tip

如果 `visible` 属性绑定的变量位于 Vuex 的 store 内，那么 `.sync` 不会正常工作。此时需要去除 `.sync` 修饰符，同时监听 Drawer 的 `open` 和 `close` 事件，在事件回调中执行 Vuex 中对应的 mutation 更新 `visible` 属性绑定的变量的值。

:::

### Drawer Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| append-to-body     | Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true   | boolean   | — | false |
| before-close | 关闭前的回调，会暂停 Drawer 的关闭 | function(done)，done 用于关闭 Drawer | — | — |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Drawer | boolean    | — | true |
| custom-class      | Drawer 的自定义类名 | string    | — | — |
| destroy-on-close | 控制是否在关闭 Drawer 之后将子元素全部销毁 | boolean | - | false |
| modal     | 是否需要遮罩层   | boolean   | — | true |
| modal-append-to-body     | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Drawer 的父元素上   | boolean   | — | true |
| direction | Drawer 打开的方向 | Direction | rtl / ltr / ttb / btt | rtl |
| show-close | 是否显示关闭按钮 | boolean    | — | true |
| size | Drawer 窗体的大小, 当使用 `number` 类型时, 以像素为单位, 当使用 `string` 类型时, 请传入 'x%', 否则便会以 `number` 类型解释 | number / string | - | '30%' |
| title     | Drawer 的标题，也可通过具名 slot （见下表）传入 | string    | — | — |
| visible   | 是否显示 Drawer，支持 .sync 修饰符 | boolean | — | false |
| wrapperClosable | 点击遮罩层是否可以关闭 Drawer | boolean | - | true |
| withHeader | 控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效 | boolean | - | true |
| prevButtonShow | 标题栏是否显示返回按钮 | boolean | — | false |
| title-height | 标题区的高度 | number | — | 48 |
| cancel-button-text | 取消按钮文字 | string | — | 取消 |
| confirm-button-text | 确认按钮文字 | string | — | 确认 |
| cancel-button-show | 是否显示取消按钮 | boolean | — | true |
| with-footer | 是否显示整个底部区域 | boolean | — | true |
| content-padding | 内容区边距 | number | — | 24 |

### Drawer Slot

| name | 说明 |
|------|--------|
| — | Drawer 的内容 |
| title | Drawer 标题区的内容 |
| operation | Drawer 标题区的操作 |

### Drawer Methods

| name | 说明 |
| ---- | ---  |
| closeDrawer | 用于关闭 Drawer, 该方法会调用传入的 `before-close` 方法 |

### Drawer Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| open  | Drawer 打开的回调 | — |
| opened  | Drawer 打开动画结束时的回调 | — |
| close  | Drawer 关闭的回调 | — |
| closed | Drawer 关闭动画结束时的回调 | — |
| prev | Drawer 点击返回按钮的回调 | — |
