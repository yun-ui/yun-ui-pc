<script>
  import Emitter from 'yun-ui-pc/src/mixins/emitter';

  export default {
    name: 'YCheckboxGroup',

    componentName: 'YCheckboxGroup',

    mixins: [Emitter],

    inject: {
      elFormItem: {
        default: ''
      }
    },

    props: {
      value: {},
      disabled: Boolean,
      min: Number,
      max: Number,
      size: String,
      fill: String,
      textColor: String
    },

    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      checkboxGroupSize() {
        return this.size || this._elFormItemSize || (this.$YUN || {}).size;
      }
    },

    watch: {
      value(value) {
        this.dispatch('YFormItem', 'el.form.change', [value]);
      }
    }
  };
</script>

<template>
  <div class="y-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
