## Container
Container components for scaffolding basic structure of the page:

`<y-container>`: wrapper container. When nested with a `<y-header>` or `<y-footer>`, all its child elements will be vertically arranged. Otherwise horizontally.

`<y-header>`: container for headers.

`<y-aside>`: container for side sections (usually a side nav).

`<y-main>`: container for main sections.

`<y-footer>`: container for footers.

:::tip
These components use flex for layout, so please make sure your browser supports it. Besides, `<y-container>`'s direct child elements have to be one or more of the latter four components. And father element of the latter four components must be a `<y-container>`.
:::

### Common layouts

:::demo
```html
<y-container>
  <y-header>Header</y-header>
  <y-main>Main</y-main>
</y-container>

<y-container>
  <y-header>Header</y-header>
  <y-main>Main</y-main>
  <y-footer>Footer</y-footer>
</y-container>

<y-container>
  <y-aside width="200px">Aside</y-aside>
  <y-main>Main</y-main>
</y-container>

<y-container>
  <y-header>Header</y-header>
  <y-container>
    <y-aside width="200px">Aside</y-aside>
    <y-main>Main</y-main>
  </y-container>
</y-container>

<y-container>
  <y-header>Header</y-header>
  <y-container>
    <y-aside width="200px">Aside</y-aside>
    <y-container>
      <y-main>Main</y-main>
      <y-footer>Footer</y-footer>
    </y-container>
  </y-container>
</y-container>

<y-container>
  <y-aside width="200px">Aside</y-aside>
  <y-container>
    <y-header>Header</y-header>
    <y-main>Main</y-main>
  </y-container>
</y-container>

<y-container>
  <y-aside width="200px">Aside</y-aside>
  <y-container>
    <y-header>Header</y-header>
    <y-main>Main</y-main>
    <y-footer>Footer</y-footer>
  </y-container>
</y-container>

<style>
  .y-header, .y-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .y-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .y-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .y-container {
    margin-bottom: 40px;
  }
  
  .y-container:nth-child(5) .y-aside,
  .y-container:nth-child(6) .y-aside {
    line-height: 260px;
  }
  
  .y-container:nth-child(7) .y-aside {
    line-height: 320px;
  }
</style>
```
:::

### Example

:::demo
```html
<y-container style="height: 500px; border: 1px solid #eee">
  <y-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <y-menu :default-openeds="['1', '3']">
      <y-submenu index="1">
        <template slot="title"><i class="y-icon-message"></i>Navigator One</template>
        <y-menu-item-group>
          <template slot="title">Group 1</template>
          <y-menu-item index="1-1">Option 1</y-menu-item>
          <y-menu-item index="1-2">Option 2</y-menu-item>
        </y-menu-item-group>
        <y-menu-item-group title="Group 2">
          <y-menu-item index="1-3">Option 3</y-menu-item>
        </y-menu-item-group>
        <y-submenu index="1-4">
          <template slot="title">Option4</template>
          <y-menu-item index="1-4-1">Option 4-1</y-menu-item>
        </y-submenu>
      </y-submenu>
      <y-submenu index="2">
        <template slot="title"><i class="y-icon-menu"></i>Navigator Two</template>
        <y-menu-item-group>
          <template slot="title">Group 1</template>
          <y-menu-item index="2-1">Option 1</y-menu-item>
          <y-menu-item index="2-2">Option 2</y-menu-item>
        </y-menu-item-group>
        <y-menu-item-group title="Group 2">
          <y-menu-item index="2-3">Option 3</y-menu-item>
        </y-menu-item-group>
        <y-submenu index="2-4">
          <template slot="title">Option 4</template>
          <y-menu-item index="2-4-1">Option 4-1</y-menu-item>
        </y-submenu>
      </y-submenu>
      <y-submenu index="3">
        <template slot="title"><i class="y-icon-setting"></i>Navigator Three</template>
        <y-menu-item-group>
          <template slot="title">Group 1</template>
          <y-menu-item index="3-1">Option 1</y-menu-item>
          <y-menu-item index="3-2">Option 2</y-menu-item>
        </y-menu-item-group>
        <y-menu-item-group title="Group 2">
          <y-menu-item index="3-3">Option 3</y-menu-item>
        </y-menu-item-group>
        <y-submenu index="3-4">
          <template slot="title">Option 4</template>
          <y-menu-item index="3-4-1">Option 4-1</y-menu-item>
        </y-submenu>
      </y-submenu>
    </y-menu>
  </y-aside>
  
  <y-container>
    <y-header style="text-align: right; font-size: 12px">
      <y-dropdown>
        <i class="y-icon-setting" style="margin-right: 15px"></i>
        <y-dropdown-menu slot="dropdown">
          <y-dropdown-item>View</y-dropdown-item>
          <y-dropdown-item>Add</y-dropdown-item>
          <y-dropdown-item>Delete</y-dropdown-item>
        </y-dropdown-menu>
      </y-dropdown>
      <span>Tom</span>
    </y-header>
    
    <y-main>
      <y-table :data="tableData">
        <y-table-column prop="date" label="Date" width="140">
        </y-table-column>
        <y-table-column prop="name" label="Name" width="120">
        </y-table-column>
        <y-table-column prop="address" label="Address">
        </y-table-column>
      </y-table>
    </y-main>
  </y-container>
</y-container>

<style>
  .y-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .y-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
:::

### Container Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| direction | layout direction for child elements | string | horizontal / vertical | vertical when nested with `y-header` or `y-footer`; horizontal otherwise |

### Header Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | height of the header | string | — | 60px |

### Aside Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | width of the side section | string | — | 300px |

### Footer Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | height of the footer | string | — | 60px |