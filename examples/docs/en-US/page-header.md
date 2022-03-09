## PageHeader

If path of the page is simple, it is recommended to use PageHeader instead of the Breadcrumb.

### Basic

:::demo
```html
<y-page-header @back="goBack" content="detail">
</y-page-header>

<script>
  export default {
    methods: {
      goBack() {
        console.log('go back');
      }
    }
  }
</script>
```
:::

### Attributes
| Attribute | Description   | Type      | Accepted Values               | Default |
|---------- |-------------- |---------- |------------------------------ | ------ |
| title     | main title    | string    |  —                            | Back   |
| content   | content       | string    |  —                            | —      |

### Events
| Event Name | Description   | Parameters |
|----------- |-------------- |----------- |
| back       | triggers when right side is clicked | — |

### Slots
| slot      | Description            |
|---------- | ---------------------- |
| title     | title content          |
| content   | content                |
