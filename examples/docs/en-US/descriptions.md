## Descriptions

Display multiple fields in list form.

### Basic usage

:::demo

```html
<y-descriptions title="User Info">
    <y-descriptions-item label="Username">kooriookami</y-descriptions-item>
    <y-descriptions-item label="Telephone">18100000000</y-descriptions-item>
    <y-descriptions-item label="Place">Suzhou</y-descriptions-item>
    <y-descriptions-item label="Remarks">
      <y-tag size="small">School</y-tag>
    </y-descriptions-item>
    <y-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</y-descriptions-item>
</y-descriptions>
```
:::

### Sizes

:::demo

```html
<template>
  <y-radio-group v-model="size">
    <y-radio label="">Default</y-radio>
    <y-radio label="medium">Medium</y-radio>
    <y-radio label="small">Small</y-radio>
    <y-radio label="mini">Mini</y-radio>
  </y-radio-group>

  <y-descriptions class="margin-top" title="With border" :column="3" :size="size" border>
    <template slot="extra">
      <y-button type="primary" size="small">Operation</y-button>
    </template>
    <y-descriptions-item>
      <template slot="label">
        <i class="y-icon-user"></i>
        Username
      </template>
      kooriookami
    </y-descriptions-item>
    <y-descriptions-item>
      <template slot="label">
        <i class="y-icon-mobile-phone"></i>
        Telephone
      </template>
      18100000000
    </y-descriptions-item>
    <y-descriptions-item>
      <template slot="label">
        <i class="y-icon-location-outline"></i>
        Place
      </template>
      Suzhou
    </y-descriptions-item>
    <y-descriptions-item>
      <template slot="label">
        <i class="y-icon-tickets"></i>
        Remarks
      </template>
      <y-tag size="small">School</y-tag>
    </y-descriptions-item>
    <y-descriptions-item>
      <template slot="label">
        <i class="y-icon-office-building"></i>
        Address
      </template>
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </y-descriptions-item>
  </y-descriptions>

  <y-descriptions class="margin-top" title="Without border" :column="3" :size="size">
    <template slot="extra">
      <y-button type="primary" size="small">Operation</y-button>
    </template>
    <y-descriptions-item label="Username">kooriookami</y-descriptions-item>
    <y-descriptions-item label="Telephone">18100000000</y-descriptions-item>
    <y-descriptions-item label="Place">Suzhou</y-descriptions-item>
    <y-descriptions-item label="Remarks">
      <y-tag size="small">School</y-tag>
    </y-descriptions-item>
    <y-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</y-descriptions-item>
  </y-descriptions>
</template>

<script>
  export default {
    data () {
      return {
        size: ''
      };
    }
  }
</script>
```
:::

### Vertical List

:::demo

```html
<y-descriptions title="Vertical list with border" direction="vertical" :column="4" border>
  <y-descriptions-item label="Username">kooriookami</y-descriptions-item>
  <y-descriptions-item label="Telephone">18100000000</y-descriptions-item>
  <y-descriptions-item label="Place" :span="2">Suzhou</y-descriptions-item>
  <y-descriptions-item label="Remarks">
    <y-tag size="small">School</y-tag>
  </y-descriptions-item>
  <y-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</y-descriptions-item>
</y-descriptions>

<y-descriptions class="margin-top" title="Vertical list without border" :column="4" direction="vertical">
  <y-descriptions-item label="Username">kooriookami</y-descriptions-item>
  <y-descriptions-item label="Telephone">18100000000</y-descriptions-item>
  <y-descriptions-item label="Place" :span="2">Suzhou</y-descriptions-item>
  <y-descriptions-item label="Remarks">
    <y-tag size="small">School</y-tag>
  </y-descriptions-item>
  <y-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</y-descriptions-item>
</y-descriptions>
```
:::

### Customized Style

:::demo

```html
<y-descriptions title="Customized style list" :column="3" border>
  <y-descriptions-item label="Username" label-class-name="my-label" content-class-name="my-content">kooriookami</y-descriptions-item>
  <y-descriptions-item label="Telephone">18100000000</y-descriptions-item>
  <y-descriptions-item label="Place">Suzhou</y-descriptions-item>
  <y-descriptions-item label="Remarks">
    <y-tag size="small">School</y-tag>
  </y-descriptions-item>
  <y-descriptions-item label="Address" :content-style="{'text-align': 'right'}">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</y-descriptions-item>
</y-descriptions>
<style>
  .my-label {
    background: #E1F3D8;
  }

  .my-content {
    background: #FDE2E2;
  }
</style>
```
:::

### Descriptions Attributes
| Attribute     | Description       | Type       | Accepted Values        | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| border        | with or without border      | boolean  |          —             |    false     |
| column        | numbers of `Descriptions Item` in one line  | number | — |    3  |
| direction     | direction of list  | string | vertical / horizontal |    horizontal  |
| size          | size of list    | string  |    medium / small / mini  |  — |
| title         | title text, display on the top left    | string  |    —  |  — |
| extra         | extra text, display on the top right    | string  |    —  |  — |
| colon | change default props colon value of Descriptions Item   | boolean |    —  |  true |
| labelClassName          | custom label class name         | string  |          —             |    —     |
| contentClassName          | custom content class name         | string  |          —             |    —     |
| labelStyle          | custom label style | object |          —             |    —     |
| contentStyle         | custom content style | object |          —             |    —     |

### Descriptions Slots

| Name | Description |
|------|--------|
| title | custom title, display on the top left  |
| extra | custom extra area, display on the top right  |

### Descriptions Item Attributes
| Attribute       | Description        | Type       | Accepted Values       | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| label          | label text         | string  |          —             |    —     |
| span          | colspan of column       | number  |          —             |    1     |
| labelClassName          | custom label class name         | string  |          —             |    —     |
| contentClassName          | custom content class name         | string  |          —             |    —     |
| labelStyle          | custom label style | object |          —             |    —     |
| contentStyle         | custom content style | object |          —             |    —     |

### Descriptions Item Slots

| Name | Description |
|------|--------|
| label | custom label  |
