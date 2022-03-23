<template>
  <footer class="y-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'YFooter',

    componentName: 'YFooter',

    props: {
      height: {
        type: String,
        default: '80px'
      }
    }
  };
</script>
