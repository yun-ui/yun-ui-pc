<template>
  <ul class="y-select-group__wrap" v-show="visible">
    <li class="y-select-group__title">{{ label }}</li>
    <li>
      <ul class="y-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script type="text/babel">
  import Emitter from 'yun-ui-pc/src/mixins/emitter';

  export default {
    mixins: [Emitter],

    name: 'YOptionGroup',

    componentName: 'YOptionGroup',

    props: {
      label: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        visible: true
      };
    },

    watch: {
      disabled(val) {
        this.broadcast('YOption', 'handleGroupDisabled', val);
      }
    },

    methods: {
      queryChange() {
        this.visible = this.$children &&
          Array.isArray(this.$children) &&
          this.$children.some(option => option.visible === true);
      }
    },

    created() {
      this.$on('queryChange', this.queryChange);
    },

    mounted() {
      if (this.disabled) {
        this.broadcast('YOption', 'handleGroupDisabled', this.disabled);
      }
    }
  };
</script>
