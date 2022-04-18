<template>
  <y-popover
    v-bind="$attrs"
    v-model="visible"
    trigger="click"
  >
  <div class="y-popconfirm">
    <p class="y-popconfirm__main">
    <i
      v-if="!hideIcon"
      :class="icon"
      class="y-popconfirm__icon"
      :style="{color: iconColor}"
    ></i>
      {{title}}
    </p>
    <div class="y-popconfirm__action">
      <y-button 
        size="small" 
        :type="cancelButtonType" 
        @click="cancel"
      >
        {{ displayCancelButtonText }}
      </y-button>
      <y-button 
        size="small" 
        :type="confirmButtonType" 
        @click="confirm"
      >
        {{ displayConfirmButtonText }}
      </y-button>
    </div>
  </div>
  <slot name="reference" slot="reference"></slot>
</y-popover>
</template>

<script>
import YPopover from 'yun-ui-pc/packages/popover';
import YButton from 'yun-ui-pc/packages/button';
import {t} from 'yun-ui-pc/src/locale';

export default {
  name: 'YPopconfirm',
  props: {
    title: {
      type: String
    },
    confirmButtonText: {
      type: String
    },
    cancelButtonText: {
      type: String
    },
    confirmButtonType: {
      type: String,
      default: 'primary'
    },
    cancelButtonType: {
      type: String,
      default: 'text'
    },
    icon: {
      type: String,
      default: 'y-icon-question'
    },
    iconColor: {
      type: String,
      default: '#f90'
    },
    hideIcon: {
      type: Boolean,
      default: false
    }
  },
  components: {
    YPopover,
    YButton
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    displayConfirmButtonText() {
      return this.confirmButtonText || t('el.popconfirm.confirmButtonText');
    },
    displayCancelButtonText() {
      return this.cancelButtonText || t('el.popconfirm.cancelButtonText');
    }
  },
  methods: {
    confirm() {
      this.visible = false;
      this.$emit('confirm');
    },
    cancel() {
      this.visible = false;
      this.$emit('cancel');
    }
  }
};
</script>
