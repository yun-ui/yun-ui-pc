<template>
  <transition name="y-loading-fade" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      class="y-loading-mask"
      :style="{ backgroundColor: background || '' }"
      :class="[customClass, { 'is-fullscreen': fullscreen }]">
      <div :class="['y-loading-spinner', isRow ? 'is-row' : 'is-col']">
        <svg v-if="!spinner" :style="sizeObj[size]" class="circular" viewBox="17.5 17.5 35 35">
          <circle class="path" cx="35" cy="35" r="14" fill="none" :style="color ? { stroke: color } : {}" />
        </svg>
        <i v-else :class="spinner"></i>
        <p v-if="text" class="y-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      const sizeObj = {
        big: {
          height: '36px',
          width: '36px'
        },
        middle: {
          height: '24px',
          width: '24px'
        },
        small: {
          height: '16 px',
          width: '16px'
        },
        mini: {
          height: '12px',
          width: '12px'
        }
      };
      return {
        text: null,
        spinner: null,
        background: null,
        fullscreen: true,
        visible: false,
        customClass: '',
        isRow: false,
        sizeObj,
        size: 'big',
        color: ''
      };
    },

    methods: {
      handleAfterLeave() {
        this.$emit('after-leave');
      },
      setText(text) {
        this.text = text;
      }
    }
  };
</script>
