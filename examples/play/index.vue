<template>
  <div style="margin: 20px;">
    <y-input v-model="input" placeholder="请输入内容"></y-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Yun UI!!'
      };
    }
  };
</script>
