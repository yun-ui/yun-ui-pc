## Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<y-container>`：外层容器。当子元素中包含 `<y-header>` 或 `<y-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<y-header>`：顶栏容器。

`<y-aside>`：侧边栏容器。

`<y-main>`：主要区域容器。

`<y-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<y-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<y-container>`。
:::

### 常见页面布局

:::demo
```html
<y-container>
  <y-header>Header</y-header>
  <y-main>Main</y-main>
</y-container>

<y-container>
  <y-header>Header</y-header>
  <y-main>Main</y-main>
  <y-footer>Footer</y-footer>
</y-container>

<y-container>
  <y-aside width="200px">Aside</y-aside>
  <y-main>Main</y-main>
</y-container>

<y-container>
  <y-header>Header</y-header>
  <y-container>
    <y-aside width="200px">Aside</y-aside>
    <y-main>Main</y-main>
  </y-container>
</y-container>

<y-container>
  <y-header>Header</y-header>
  <y-container>
    <y-aside width="200px">Aside</y-aside>
    <y-container>
      <y-main>Main</y-main>
      <y-footer>Footer</y-footer>
    </y-container>
  </y-container>
</y-container>

<y-container>
  <y-aside width="200px">Aside</y-aside>
  <y-container>
    <y-header>Header</y-header>
    <y-main>Main</y-main>
  </y-container>
</y-container>

<y-container>
  <y-aside width="200px">Aside</y-aside>
  <y-container>
    <y-header>Header</y-header>
    <y-main>Main</y-main>
    <y-footer>Footer</y-footer>
  </y-container>
</y-container>

<style>
  .y-header, .y-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .y-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .y-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .y-container {
    margin-bottom: 40px;
  }
  
  .y-container:nth-child(5) .y-aside,
  .y-container:nth-child(6) .y-aside {
    line-height: 260px;
  }
  
  .y-container:nth-child(7) .y-aside {
    line-height: 320px;
  }
</style>
```
:::

### 实例

:::demo
```html
<y-container style="height: 500px; border: 1px solid #eee">
  <y-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <y-menu :default-openeds="['1', '3']">
      <y-submenu index="1">
        <template slot="title"><i class="y-icon-message"></i>导航一</template>
        <y-menu-item-group>
          <template slot="title">分组一</template>
          <y-menu-item index="1-1">选项1</y-menu-item>
          <y-menu-item index="1-2">选项2</y-menu-item>
        </y-menu-item-group>
        <y-menu-item-group title="分组2">
          <y-menu-item index="1-3">选项3</y-menu-item>
        </y-menu-item-group>
        <y-submenu index="1-4">
          <template slot="title">选项4</template>
          <y-menu-item index="1-4-1">选项4-1</y-menu-item>
        </y-submenu>
      </y-submenu>
      <y-submenu index="2">
        <template slot="title"><i class="y-icon-menu"></i>导航二</template>
        <y-menu-item-group>
          <template slot="title">分组一</template>
          <y-menu-item index="2-1">选项1</y-menu-item>
          <y-menu-item index="2-2">选项2</y-menu-item>
        </y-menu-item-group>
        <y-menu-item-group title="分组2">
          <y-menu-item index="2-3">选项3</y-menu-item>
        </y-menu-item-group>
        <y-submenu index="2-4">
          <template slot="title">选项4</template>
          <y-menu-item index="2-4-1">选项4-1</y-menu-item>
        </y-submenu>
      </y-submenu>
      <y-submenu index="3">
        <template slot="title"><i class="y-icon-setting"></i>导航三</template>
        <y-menu-item-group>
          <template slot="title">分组一</template>
          <y-menu-item index="3-1">选项1</y-menu-item>
          <y-menu-item index="3-2">选项2</y-menu-item>
        </y-menu-item-group>
        <y-menu-item-group title="分组2">
          <y-menu-item index="3-3">选项3</y-menu-item>
        </y-menu-item-group>
        <y-submenu index="3-4">
          <template slot="title">选项4</template>
          <y-menu-item index="3-4-1">选项4-1</y-menu-item>
        </y-submenu>
      </y-submenu>
    </y-menu>
  </y-aside>
  
  <y-container>
    <y-header style="text-align: right; font-size: 12px">
      <y-dropdown>
        <i class="y-icon-setting" style="margin-right: 15px"></i>
        <y-dropdown-menu slot="dropdown">
          <y-dropdown-item>查看</y-dropdown-item>
          <y-dropdown-item>新增</y-dropdown-item>
          <y-dropdown-item>删除</y-dropdown-item>
        </y-dropdown-menu>
      </y-dropdown>
      <span>王小虎</span>
    </y-header>
    
    <y-main>
      <y-table :data="tableData">
        <y-table-column prop="date" label="日期" width="140">
        </y-table-column>
        <y-table-column prop="name" label="姓名" width="120">
        </y-table-column>
        <y-table-column prop="address" label="地址">
        </y-table-column>
      </y-table>
    </y-main>
  </y-container>
</y-container>

<style>
  .y-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .y-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
:::

### Container Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `y-header` 或 `y-footer` 时为 vertical，否则为 horizontal |

### Header Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 顶栏高度 | string | — | 60px |

### Aside Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| width | 侧边栏宽度 | string | — | 300px |

### Footer Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 底栏高度 | string | — | 60px |