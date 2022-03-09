## Dropdown
Toggleable menu for displaying lists of links and actions.

### Basic usage
Hover on the dropdown menu to unfold it for more actions.

:::demo The triggering element is rendered by the default `slot`, and the dropdown part is rendered by the `slot` named `dropdown`. By default, dropdown list shows when you hover on the triggering element without having to click it.

```html
<y-dropdown>
  <span class="y-dropdown-link">
    Dropdown List<i class="y-icon-arrow-down y-icon--right"></i>
  </span>
  <y-dropdown-menu slot="dropdown">
    <y-dropdown-item>Action 1</y-dropdown-item>
    <y-dropdown-item>Action 2</y-dropdown-item>
    <y-dropdown-item>Action 3</y-dropdown-item>
    <y-dropdown-item disabled>Action 4</y-dropdown-item>
    <y-dropdown-item divided>Action 5</y-dropdown-item>
  </y-dropdown-menu>
</y-dropdown>

<style>
  .y-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .y-icon-arrow-down {
    font-size: 12px;
  }
</style>

```

:::

### Triggering element

Use the button to trigger the dropdown list.

:::demo Use `split-button` to split the triggering element into a button group with the left button being a normal button and right one the actual triggering target. If you wanna insert a separator line between item three and item four, just add a class `divider` to item four.
```html
<y-dropdown>
  <y-button type="primary">
    Dropdown List<i class="y-icon-arrow-down y-icon--right"></i>
  </y-button>
  <y-dropdown-menu slot="dropdown">
    <y-dropdown-item>Action 1</y-dropdown-item>
    <y-dropdown-item>Action 2</y-dropdown-item>
    <y-dropdown-item>Action 3</y-dropdown-item>
    <y-dropdown-item>Action 4</y-dropdown-item>
    <y-dropdown-item>Action 5</y-dropdown-item>
  </y-dropdown-menu>
</y-dropdown>
<y-dropdown split-button type="primary" @click="handleClick">
  Dropdown List
  <y-dropdown-menu slot="dropdown">
    <y-dropdown-item>Action 1</y-dropdown-item>
    <y-dropdown-item>Action 2</y-dropdown-item>
    <y-dropdown-item>Action 3</y-dropdown-item>
    <y-dropdown-item>Action 4</y-dropdown-item>
    <y-dropdown-item>Action 5</y-dropdown-item>
  </y-dropdown-menu>
</y-dropdown>

<style>
  .y-dropdown {
    vertical-align: top;
  }
  .y-dropdown + .y-dropdown {
    margin-left: 15px;
  }
  .y-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleClick() {
        alert('button click');
      }
    }
  }
</script>
```
:::

### How to trigger

Click the triggering element or hover on it.

:::demo Use the attribute `trigger`. By default, it is `hover`.

```html
<y-row class="block-col-2">
  <y-col :span="12">
    <span class="demonstration">hover to trigger</span>
    <y-dropdown>
      <span class="y-dropdown-link">
        Dropdown List<i class="y-icon-arrow-down y-icon--right"></i>
      </span>
      <y-dropdown-menu slot="dropdown">
        <y-dropdown-item icon="y-icon-plus">Action 1</y-dropdown-item>
        <y-dropdown-item icon="y-icon-circle-plus">Action 2</y-dropdown-item>
        <y-dropdown-item icon="y-icon-circle-plus-outline">Action 3</y-dropdown-item>
        <y-dropdown-item icon="y-icon-check">Action 4</y-dropdown-item>
        <y-dropdown-item icon="y-icon-circle-check">Action 5</y-dropdown-item>
      </y-dropdown-menu>
    </y-dropdown>
  </y-col>
  <y-col :span="12">
    <span class="demonstration">click to trigger</span>
    <y-dropdown trigger="click">
      <span class="y-dropdown-link">
        Dropdown List<i class="y-icon-arrow-down y-icon--right"></i>
      </span>
      <y-dropdown-menu slot="dropdown">
        <y-dropdown-item icon="y-icon-plus">Action 1</y-dropdown-item>
        <y-dropdown-item icon="y-icon-circle-plus">Action 2</y-dropdown-item>
        <y-dropdown-item icon="y-icon-circle-plus-outline">Action 3</y-dropdown-item>
        <y-dropdown-item icon="y-icon-check">Action 4</y-dropdown-item>
        <y-dropdown-item icon="y-icon-circle-check">Action 5</y-dropdown-item>
      </y-dropdown-menu>
    </y-dropdown>
  </y-col>
</y-row>

<style>
  .y-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .y-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
```
:::

### Menu hiding behavior

Use `hide-on-click` to define if menu closes on clicking.

:::demo By default menu will close when you click on menu items, and it can be turned off by setting hide-on-click to false.
```html
<y-dropdown :hide-on-click="false">
  <span class="y-dropdown-link">
    Dropdown List<i class="y-icon-arrow-down y-icon--right"></i>
  </span>
  <y-dropdown-menu slot="dropdown">
    <y-dropdown-item>Action 1</y-dropdown-item>
    <y-dropdown-item>Action 2</y-dropdown-item>
    <y-dropdown-item>Action 3</y-dropdown-item>
    <y-dropdown-item disabled>Action 4</y-dropdown-item>
    <y-dropdown-item divided>Action 5</y-dropdown-item>
  </y-dropdown-menu>
</y-dropdown>

<style>
  .y-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .y-icon-arrow-down {
    font-size: 12px;
  }
</style>
```
:::

### Command event

Clicking each dropdown item fires an event whose parameter is assigned by each item.

:::demo
```html
<y-dropdown @command="handleCommand">
  <span class="y-dropdown-link">
    Dropdown List<i class="y-icon-arrow-down y-icon--right"></i>
  </span>
  <y-dropdown-menu slot="dropdown">
    <y-dropdown-item command="a">Action 1</y-dropdown-item>
    <y-dropdown-item command="b">Action 2</y-dropdown-item>
    <y-dropdown-item command="c">Action 3</y-dropdown-item>
    <y-dropdown-item command="d" disabled>Action 4</y-dropdown-item>
    <y-dropdown-item command="e" divided>Action 5</y-dropdown-item>
  </y-dropdown-menu>
</y-dropdown>

<style>
  .y-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .y-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
</script>
```
:::

### Sizes

Besides default size, Dropdown component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `medium`, `small` or `mini`.

```html
<y-dropdown split-button type="primary">
  Default
  <y-dropdown-menu slot="dropdown">
    <y-dropdown-item>Action 1</y-dropdown-item>
    <y-dropdown-item>Action 2</y-dropdown-item>
    <y-dropdown-item>Action 3</y-dropdown-item>
    <y-dropdown-item>Action 4</y-dropdown-item>
  </y-dropdown-menu>
</y-dropdown>

<y-dropdown size="medium" split-button type="primary">
  Medium
  <y-dropdown-menu slot="dropdown">
    <y-dropdown-item>Action 1</y-dropdown-item>
    <y-dropdown-item>Action 2</y-dropdown-item>
    <y-dropdown-item>Action 3</y-dropdown-item>
    <y-dropdown-item>Action 4</y-dropdown-item>
  </y-dropdown-menu>
</y-dropdown>

<y-dropdown size="small" split-button type="primary">
  Small
  <y-dropdown-menu slot="dropdown">
   <y-dropdown-item>Action 1</y-dropdown-item>
   <y-dropdown-item>Action 2</y-dropdown-item>
   <y-dropdown-item>Action 3</y-dropdown-item>
   <y-dropdown-item>Action 4</y-dropdown-item>
  </y-dropdown-menu>
</y-dropdown>

<y-dropdown size="mini" split-button type="primary">
  Mini
  <y-dropdown-menu slot="dropdown">
    <y-dropdown-item>Action 1</y-dropdown-item>
    <y-dropdown-item>Action 2</y-dropdown-item>
    <y-dropdown-item>Action 3</y-dropdown-item>
    <y-dropdown-item>Action 4</y-dropdown-item>
  </y-dropdown-menu>
</y-dropdown>
```
:::


### Dropdown Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type          | menu button type, refer to `Button` Component, only works when `split-button` is true  | string  |  —   |    —     |
| size          | menu size, also works on the split button  | string  | medium / small / mini  |    —     |
| split-button | whether a button group is displayed | boolean         |     —       | false   |
| placement    | placement of pop menu | string | top/top-start/top-end/bottom/bottom-start/bottom-end  | bottom-end |
| trigger       | how to trigger     | string  |    hover/click  |  hover |
| hide-on-click | whether to hide menu after clicking menu-item     | boolean          | — | true |
| show-timeout | Delay time before show a dropdown (only works when trigger is `hover`) | number | — | 250 |
| hide-timeout | Delay time before hide a dropdown (only works when trigger is `hover`) | number | — | 150 |
| tabindex     | [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of Dropdown | number | — | 0 |
| disabled     | whether the Dropdown is disabled | boolean | — | false |

### Dropdown Slots

| Name | Description |
|------|--------|
| — | content of Dropdown. Notice: Must be a valid html dom element (ex. `<span>, <button> etc.`) or `y-component`, to attach the trigger listener  |
| dropdown | content of the Dropdown Menu, usually a `<y-dropdown-menu>` element |

### Dropdown Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| click | if `split-button` is `true`, triggers when left button is clicked | — |
| command | triggers when a dropdown item is clicked | the command dispatched from the dropdown item |
| visible-change | triggers when the dropdown appears/disappears | true when it appears, and false otherwise |

### Dropdown Menu Item Attributes
| Attribute     | Description          | Type      | Accepted Values       | Default  |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| command       | a command to be dispatched to Dropdown's `command` callback | string/number/object  |          —             |    —     |
| disabled      | whether the item is disabled  | boolean  |          —             |    false     |
| divided       | whether a divider is displayed  | boolean  |          —             |    false     |
| icon          | icon class name | string   |  —  |  —  |
