## Breadcrumb

Displays the location of the current page, making it easier to browser back.

### Basic usage


:::demo In `y-breadcrumb`, each `y-breadcrumb-item` is a tag that stands for every level starting from homepage. This component has a `String` attribute `separator`, and it determines the separator. Its default value is '/'.

```html
<y-breadcrumb separator="/">
  <y-breadcrumb-item :to="{ path: '/' }">homepage</y-breadcrumb-item>
  <y-breadcrumb-item><a href="/">promotion management</a></y-breadcrumb-item>
  <y-breadcrumb-item>promotion list</y-breadcrumb-item>
  <y-breadcrumb-item>promotion detail</y-breadcrumb-item>
</y-breadcrumb>
```
:::

### Icon separator

:::demo Set `separator-class` to use `iconfont` as the separator，it will cover `separator`

```html
<y-breadcrumb separator-class="y-icon-arrow-right">
  <y-breadcrumb-item :to="{ path: '/' }">homepage</y-breadcrumb-item>
  <y-breadcrumb-item>promotion management</y-breadcrumb-item>
  <y-breadcrumb-item>promotion list</y-breadcrumb-item>
  <y-breadcrumb-item>promotion detail</y-breadcrumb-item>
</y-breadcrumb>
```
:::

### Breadcrumb Attributes
| Attribute      | Description          | Type      | Accepted Values            | Default|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | separator character | string | — | / |
| separator-class | class name of icon separator | string | — | - |

### Breadcrumb Item Attributes
| Attribute      | Description          | Type      | Accepted Values            | Default|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to | target route of the link, same as `to` of `vue-router` | string/object | — | — |
| replace | if `true`, the navigation will not leave a history record | boolean | — | false |





