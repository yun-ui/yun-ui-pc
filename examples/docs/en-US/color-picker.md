## ColorPicker

ColorPicker is a color selector supporting multiple color formats.

### Basic usage

:::demo ColorPicker requires a string typed variable to be bound to v-model.
```html
<div class="block">
  <span class="demonstration">With default value</span>
  <y-color-picker v-model="color1"></y-color-picker>
</div>
<div class="block">
  <span class="demonstration">With no default value</span>
  <y-color-picker v-model="color2"></y-color-picker>
</div>

<script>
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: null
      }
    }
  };
</script>
```
:::

### Alpha

:::demo ColorPicker supports alpha channel selecting. To activate alpha selecting, just add the `show-alpha` attribute.
```html
<y-color-picker v-model="color" show-alpha></y-color-picker>

<script>
  export default {
    data() {
      return {
        color: 'rgba(19, 206, 102, 0.8)'
      }
    }
  };
</script>
```
:::

### Predefined colors

:::demo ColorPicker supports predefined color options
```html
<y-color-picker
  v-model="color"
  show-alpha
  :predefine="predefineColors">
</y-color-picker>

<script>
  export default {
    data() {
      return {
        color: 'rgba(255, 69, 0, 0.68)',
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ]
      }
    }
  };
</script>
```
:::


### Sizes

:::demo
```html
<y-color-picker v-model="color"></y-color-picker>
<y-color-picker v-model="color" size="medium"></y-color-picker>
<y-color-picker v-model="color" size="small"></y-color-picker>
<y-color-picker v-model="color" size="mini"></y-color-picker>

<script>
  export default {
    data() {
      return {
        color: '#409EFF'
      }
    }
  };
</script>
```
:::

### Attributes
| Attribute | Description | Type | Accepted Values | Default |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | binding value | string | — | — |
| disabled | whether to disable the ColorPicker | boolean | — | false |
| size | size of ColorPicker | string | — | medium / small / mini |
| show-alpha | whether to display the alpha slider | boolean | — | false |
| color-format | color format of v-model | string | hsl / hsv / hex / rgb | hex (when show-alpha is false)/ rgb (when show-alpha is true) |
| popper-class | custom class name for ColorPicker's dropdown | string | — | — |
| predefine | predefined color options | array | — | — |

### Events
| Event Name | Description | Parameters |
|---------|--------|---------|
| change | triggers when input value changes | color value |
| active-change | triggers when the current active color changes | active color value |