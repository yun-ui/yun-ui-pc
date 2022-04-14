<template>
  <button
    class="y-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    ref="button"
    :class="[
      type ? 'y-button--' + type : '',
      buttonSize ? 'y-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-text': text,
        'is-block': block
      }
    ]"
  >
    <i class="y-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default && !loading" class="y-button--inner-text"><slot></slot></span>
    <i :class="suffixIcon" v-if="suffixIcon && !loading"></i>
  </button>
</template>
<script>
  export default {
    name: 'YButton',

    inject: {
      elForm: {
        default: ''
      },
      elFormItem: {
        default: ''
      }
    },

    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      suffixIcon: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      text: Boolean,
      autofocus: Boolean,
      block: Boolean
    },

    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      buttonSize() {
        return this.size || this._elFormItemSize || (this.$YUN || {}).size;
      },
      buttonDisabled() {
        return this.$options.propsData.hasOwnProperty('disabled') ? this.disabled : (this.elForm || {}).disabled;
      }
    },

    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    },

    mounted() {
      console.log(this.$refs.button);
      console.log(this.$refs.button.offsetWidth);
    }
  };
</script>
