## Empty

Placeholder hints for empty states.

### Basic usage

:::demo

```html
<y-empty description="description"></y-empty>
```
:::

### Custom image

Use `image` prop to set image URL.

:::demo

```html
<y-empty image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></y-empty>
```
:::

### Image size

Use `image-size` prop to control image size.

:::demo

```html
<y-empty :image-size="200"></y-empty>
```
:::

### Bottom content

Use the default slot to insert content at the bottom.

:::demo
```html
<y-empty>
  <y-button type="primary">Button</y-button>
</y-empty>
```
:::

### Empty Attributes
| Attribute       | Description      | Type         | Acceptable Value    | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| image          | image URL       | string  |          —             |    —     |
| image-size    | image size (width)  | number | — |    —  |
| description  | description    | string  |    —  |  — |
| description-margin-top | marginTop of the description | number | 0 | — |

### Empty Slots

| Name | Description |
|------|--------|
| default | Custom bottom content  |
| image | Custom image     |
| description | Custom description     |
