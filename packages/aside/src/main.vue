<template>
  <aside class="y-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'YAside',

    componentName: 'YAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
