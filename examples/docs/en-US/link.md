## Link

Text hyperlink

### Basic

Basic text link
:::demo

```html
<div>
  <y-link href="https://element.eleme.io" target="_blank">default</y-link>
  <y-link type="primary">primary</y-link>
  <y-link type="success">success</y-link>
  <y-link type="warning">warning</y-link>
  <y-link type="danger">danger</y-link>
  <y-link type="info">info</y-link>
</div>
```

:::

### Disabled

Disabled state of link
:::demo

```html
<div>
  <y-link disabled>default</y-link>
  <y-link type="primary" disabled>primary</y-link>
  <y-link type="success" disabled>success</y-link>
  <y-link type="warning" disabled>warning</y-link>
  <y-link type="danger" disabled>danger</y-link>
  <y-link type="info" disabled>info</y-link>
</div>
```

:::

### Underline

Underline of link
:::demo

```html
<div>
  <y-link :underline="false">Without Underline</y-link>
  <y-link>With Underline</y-link>
</div>
```

:::

### Icon

Link with icon
:::demo

```html
<div>
  <y-link icon="y-icon-edit">Edit</y-link>
  <y-link>Check<i class="y-icon-view y-icon--right"></i> </y-link>
</div>
```

:::

### Attributes

| Attribute | Description                         | Type    | Options                                     | Default |
| --------- | ----------------------------------- | ------- | ------------------------------------------- | ------- |
| type      | type                                | string  | primary / success / warning / danger / info | default |
| underline | whether the component has underline | boolean | —                                           | true    |
| disabled  | whether the component is disabled   | boolean | —                                           | false   |
| href      | same as native hyperlink's `href`   | string  | —                                           | -       |
| icon      | class name of icon                  | string  | —                                           | -       |
