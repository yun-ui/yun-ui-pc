## Icon

Yun provides a set of common icons.

### Basic usage

Just assign the class name to `y-icon-iconName`.

:::demo

```html
<i class="y-icon-edit"></i>
<i class="y-icon-share"></i>
<i class="y-icon-delete"></i>
<y-button type="primary" icon="y-icon-search">Search</y-button>

```
:::

### Icons

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'y-icon-' + name"></i>
      <span class="icon-name">{{'y-icon-' + name}}</span>
    </span>
  </li>
</ul>
