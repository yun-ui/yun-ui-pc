## Avatar avatar

Avatars can be used to represent people or objects. It supports images, Icons, or characters.

### Basic

use `shape` and `size` prop to set avatar's shape and size

:::demo
```html
<template>
  <y-row class="demo-avatar demo-basic">
    <y-col :span="12">
      <div class="sub-title">circle</div>
      <div class="demo-basic--circle">
        <div class="block"><y-avatar :size="50" :src="circleUrl"></y-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <y-avatar :size="size" :src="circleUrl"></y-avatar>
        </div>
      </div>
    </y-col>  
    <y-col :span="12">
      <div class="sub-title">square</div>
      <div class="demo-basic--circle">
        <div class="block"><y-avatar shape="square" :size="50" :src="squareUrl"></y-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <y-avatar shape="square" :size="size" :src="squareUrl"></y-avatar>
        </div>
      </div>
    </y-col> 
  </y-row>
</template>
<script>
  export default {
    data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"]
      }
    }
  }
</script>

```
:::

### Types

It supports images, Icons, or characters

:::demo
```html
<template>
  <div class="demo-type">
    <div>
      <y-avatar icon="y-icon-user-solid"></y-avatar>
    </div>
    <div>
      <y-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></y-avatar>
    </div>
    <div>
      <y-avatar> user </y-avatar>
    </div>
  </div>
</template>
```
:::

### Fallback when image load error

fallback when image load error

:::demo
```html
<template>
  <div class="demo-type">
    <y-avatar :size="60" src="https://empty" @error="errorHandler">
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
      </y-avatar>
  </div>
</template>
<script>
  export default {
    methods: {
      errorHandler() {
        return true
      }
    }
  }
</script>

```
:::

### How the image fit its container

Set how the image fit its container for an image avatar, same as [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).

:::demo
```html
<template>
  <div class="demo-fit">
    <div class="block" v-for="fit in fits" :key="fit">
        <span class="title">{{ fit }}</span>
        <y-avatar shape="square" :size="100" :fit="fit" :src="url"></y-avatar>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    }
  }
</script>

```
:::

### Attributes

| Attribute      | Description          | Type      | Accepted Values       | Default  |
| ----------------- | -------------------------------- | --------------- | ------ | ------ |
| icon              | set representation type to Icon, more info on Icon Component   | string          |        |        |
| size              | set avatar size                     | number/string | number / large / medium / small | large  |
| shape             | set avatar shape  | string |    circle / square     |   circle  |
| src               | the address of the image for an image avatar | string |        |      |
| srcSet            | A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use | string |        |      |
| alt               | This attribute defines an alternative text description of the image | string |        |      |
| fit               | set how the image fit its container for an image avatar | string |    fill / contain / cover / none / scale-down    |   cover   |

### Events

| Event Name | Description         | Parameters  |
| ------ | ------------------ | -------- |
| error  | handler when img load error, return false to prevent default fallback behavior |(e: Event)  |

### Slot

| Slot Name | Description | 
| default  | customize avatar content |
