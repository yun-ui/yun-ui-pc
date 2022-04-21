## Button

Commonly used button.

### Basic usage

:::demo Use `type`, `plain`, `round` and `circle` to define Button's style.

```html
<y-row>
  <y-button>Default</y-button>
  <y-button type="primary">Primary</y-button>
  <y-button type="success">Success</y-button>
  <y-button type="info">Info</y-button>
  <y-button type="warning">Warning</y-button>
  <y-button type="danger">Danger</y-button>
</y-row>

<y-row>
  <y-button plain>Plain</y-button>
  <y-button type="primary" plain>Primary</y-button>
  <y-button type="success" plain>Success</y-button>
  <y-button type="info" plain>Info</y-button>
  <y-button type="warning" plain>Warning</y-button>
  <y-button type="danger" plain>Danger</y-button>
</y-row>

<y-row>
  <y-button round>Round</y-button>
  <y-button type="primary" round>Primary</y-button>
  <y-button type="success" round>Success</y-button>
  <y-button type="info" round>Info</y-button>
  <y-button type="warning" round>Warning</y-button>
  <y-button type="danger" round>Danger</y-button>
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

### Disabled Button

The `disabled` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

```html
<y-row>
  <y-button disabled>Default</y-button>
  <y-button type="primary" disabled>Primary</y-button>
  <y-button type="success" disabled>Success</y-button>
  <y-button type="info" disabled>Info</y-button>
  <y-button type="warning" disabled>Warning</y-button>
  <y-button type="danger" disabled>Danger</y-button>
</y-row>

<y-row>
  <y-button plain disabled>Plain</y-button>
  <y-button type="primary" plain disabled>Primary</y-button>
  <y-button type="success" plain disabled>Success</y-button>
  <y-button type="info" plain disabled>Info</y-button>
  <y-button type="warning" plain disabled>Warning</y-button>
  <y-button type="danger" plain disabled>Danger</y-button>
</y-row>
```
:::

### Text Button

Buttons without border and background.

:::demo
```html
<y-button type="primary" text>Text Button</y-button>
<y-button type="primary" text disabled>Text Button</y-button>
```
:::

### Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

:::demo Use the `icon` attribute to add icon. You can find the icon list in Yun icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

```html
<y-button type="primary" icon="y-icon-edit"></y-button>
<y-button type="primary" icon="y-icon-share"></y-button>
<y-button type="primary" icon="y-icon-delete"></y-button>
<y-button type="primary" icon="y-icon-search">Search</y-button>
<y-button type="primary">Upload<i class="y-icon-upload y-icon-right"></i></y-button>
```
:::

### Button Group

Displayed as a button group, can be used to group a series of similar operations.

:::demo Use tag `<y-button-group>` to group your buttons.

```html
<y-button-group>
  <y-button type="primary" icon="y-icon-arrow-left">Previous Page</y-button>
  <y-button type="primary">Next Page<i class="y-icon-arrow-right y-icon-right"></i></y-button>
</y-button-group>
<y-button-group>
  <y-button type="primary" icon="y-icon-edit"></y-button>
  <y-button type="primary" icon="y-icon-share"></y-button>
  <y-button type="primary" icon="y-icon-delete"></y-button>
</y-button-group>
```
:::

### Loading Button

Click the button to load data, then the button displays a loading state.

:::demo Set `loading` attribute to `true` to display loading state.

```html
<y-button type="primary" :loading="true">Loading</y-button>
```
:::

### Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `medium`, `small` or `mini`.

```html
<y-row>
  <y-button>Default</y-button>
  <y-button size="medium">Medium</y-button>
  <y-button size="small">Small</y-button>
  <y-button size="mini">Mini</y-button>
</y-row>
<y-row>
  <y-button round>Default</y-button>
  <y-button size="medium" round>Medium</y-button>
  <y-button size="small" round>Small</y-button>
  <y-button size="mini" round>Mini</y-button>
</y-row>
```
:::

### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | button size   | string  |   medium / small / mini            |    —     |
| type     | button type   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | determine whether it's a plain button   | boolean    | — | false   |
| round     | determine whether it's a round button   | boolean    | — | false   |
| circle     | determine whether it's a circle button   | boolean    | — | false   |
| loading   | determine whether it's loading   | boolean    | — | false   |
| disabled  | disable the button    | boolean   | —   | false   |
| icon  | icon class name | string   |  —  |  —  |
| autofocus  | same as native button's `autofocus` | boolean   |  —  |  false  |
| native-type | same as native button's `type` | string | button / submit / reset | button |