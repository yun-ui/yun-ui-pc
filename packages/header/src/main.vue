<template>
  <header class="y-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'YHeader',

    componentName: 'YHeader',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
