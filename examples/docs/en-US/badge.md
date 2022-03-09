## Badge

A number or status mark on buttons and icons.

### Basic usage

Displays the amount of new messages.

:::demo The amount is defined with `value` which accepts `Number` or `String`.

```html
<y-badge :value="12" class="item">
  <y-button size="small">comments</y-button>
</y-badge>
<y-badge :value="3" class="item">
  <y-button size="small">replies</y-button>
</y-badge>
<y-badge :value="1" class="item" type="primary">
  <y-button size="small">comments</y-button>
</y-badge>
<y-badge :value="2" class="item" type="warning">
  <y-button size="small">replies</y-button>
</y-badge>

<y-dropdown trigger="click">
  <span class="y-dropdown-link">
    Click Me<i class="y-icon-caret-bottom y-icon--right"></i>
  </span>
  <y-dropdown-menu slot="dropdown">
    <y-dropdown-item class="clearfix">
      comments
      <y-badge class="mark" :value="12" />
    </y-dropdown-item>
    <y-dropdown-item class="clearfix">
      replies
      <y-badge class="mark" :value="3" />
    </y-dropdown-item>
  </y-dropdown-menu>
</y-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Max value

You can customize the max value.

:::demo The max value is defined by property `max` which is a `Number`. Note that it only works when `value` is also a `Number`.

```html
<y-badge :value="200" :max="99" class="item">
  <y-button size="small">comments</y-button>
</y-badge>
<y-badge :value="100" :max="10" class="item">
  <y-button size="small">replies</y-button>
</y-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Customizations

Displays text content other than numbers.

:::demo When `value` is a `String`, it can display customized text.

```html
<y-badge value="new" class="item">
  <y-button size="small">comments</y-button>
</y-badge>
<y-badge value="hot" class="item">
  <y-button size="small">replies</y-button>
</y-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Little red dot

Use a red dot to mark content that needs to be noticed.

:::demo Use the attribute `is-dot`. It is a `Boolean`.

```html
<y-badge is-dot class="item">query</y-badge>
<y-badge is-dot class="item">
  <y-button class="share-button" icon="y-icon-share" type="primary"></y-button>
</y-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Attributes
| Attribute     | Description     | Type            | Accepted Values       | Default |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | display value   | string, number  |          —            |    —    |
| max           |  maximum value, shows '{max}+' when exceeded. Only works if `value` is a `Number`   | number  |         —              |     —    |
| is-dot        | if a little dot is displayed | boolean   |    —           |  false  |
| hidden        | hidden badge    | boolean         |          —            |  false  |
| type          | button type     | string          | primary / success / warning / danger / info |   —  |
