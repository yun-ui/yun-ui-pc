## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `y-icon-iconName` 来使用即可。例如：

:::demo
```html
<i class="y-icon-edit"></i>
<i class="y-icon-share"></i>
<i class="y-icon-delete"></i>
<y-button type="primary" icon="y-icon-search">搜索</y-button>

```
:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'y-icon-' + name"></i>
      <span class="icon-name">{{'y-icon-' + name}}</span>
    </span>
  </li>
</ul>
