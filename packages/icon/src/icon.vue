<template>
  <i :class="'y-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'YIcon',

    props: {
      name: String
    }
  };
</script>
