<template>
  <transition
    name="dialog-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave">
    <div
      v-show="visible"
      class="y-dialog__wrapper"
      :class="small ? 'is-small' : ''"
      @click.self="handleWrapperClick">
      <div
        role="dialog"
        :key="key"
        aria-modal="true"
        :aria-label="title || 'dialog'"
        :class="['y-dialog', { 'is-fullscreen': fullscreen, 'y-dialog--center': center }, customClass]"
        ref="dialog"
        :style="style">
        <div class="y-dialog__header" :style="{ backgroundColor: titleBackgroundColor }">
          <span class="y-dialog__title">
            <i
              v-if="prevButtonShow"
              class="y-dialog__prev y-icon y-icon-arrow-left"
              @click="handlePrev">
            </i><slot name="title">{{ title }}</slot></span>
          <div class="y-dialog__operation">
            <slot name="operation"></slot>
            <y-divider v-if="$slots.operation" direction="vertical"></y-divider>
            <i class="y-dialog__close y-icon y-icon-close_wide" @click="handleClose"></i>
          </div>
        </div>
        <div class="y-dialog__body" v-if="rendered"><slot></slot></div>
        <div class="y-dialog__footer" v-if="footerShow">
          <slot name="tip"></slot>
          <span class="y-dialog__footer-button">
            <slot name="footer">
              <y-button @click="handleCancel" v-if="cancelButtonShow">{{ cancelButtonText }}</y-button>
              <y-button type="primary" @click="handleConfirm">{{ confirmButtonText }}</y-button>
            </slot>
          </span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Popup from 'yun-ui-pc/src/utils/popup';
  import Migrating from 'yun-ui-pc/src/mixins/migrating';
  import emitter from 'yun-ui-pc/src/mixins/emitter';
  import { t } from 'yun-ui-pc/src/locale';

  export default {
    name: 'YDialog',

    mixins: [Popup, emitter, Migrating],

    props: {
      title: {
        type: String,
        default: ''
      },

      modal: {
        type: Boolean,
        default: true
      },

      modalAppendToBody: {
        type: Boolean,
        default: true
      },

      appendToBody: {
        type: Boolean,
        default: false
      },

      lockScroll: {
        type: Boolean,
        default: true
      },

      closeOnClickModal: {
        type: Boolean,
        default: true
      },

      closeOnPressEscape: {
        type: Boolean,
        default: true
      },

      showClose: {
        type: Boolean,
        default: true
      },

      width: {
        type: String,
        default: '500px'
      },

      // fullscreen: Boolean,

      customClass: {
        type: String,
        default: ''
      },
      beforeClose: Function,
      center: {
        type: Boolean,
        default: false
      },

      destroyOnClose: Boolean,

      cancelButtonText: {
        type: String,
        default: t('el.messagebox.cancel')
      },

      confirmButtonText: {
        type: String,
        default: t('el.messagebox.confirm')
      },

      titleBackgroundColor: {
        type: String,
        default: '#F8F9FB'
      },

      prevButtonShow: {
        type: Boolean,
        default: false
      },

      cancelButtonShow: {
        type: Boolean,
        default: true
      },

      footerShow: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        fullscreen: false,
        closed: false,
        key: 0,
        small: false
      };
    },

    watch: {
      visible(val) {
        if (val) {
          this.closed = false;
          this.$emit('open');
          this.$el.addEventListener('scroll', this.updatePopper);
          this.$nextTick(() => {
            this.$refs.dialog.scrollTop = 0;
          });
          if (this.appendToBody) {
            document.body.appendChild(this.$el);
          }
        } else {
          this.$el.removeEventListener('scroll', this.updatePopper);
          if (!this.closed) this.$emit('close');
          if (this.destroyOnClose) {
            this.$nextTick(() => {
              this.key++;
            });
          }
        }
      }
    },

    computed: {
      style() {
        let style = {};
        if (this.width) {
          style.width = this.width;
        }
        return style;
      }
    },

    methods: {
      getMigratingConfig() {
        return {
          props: {
            'size': 'size is removed.'
          }
        };
      },
      handleWrapperClick() {
        if (!this.closeOnClickModal) return;
        this.handleClose();
      },
      handleClose() {
        if (typeof this.beforeClose === 'function') {
          this.beforeClose(this.hide);
        } else {
          this.hide();
        }
      },
      handleCancel() {
        this.$emit('cancel');
      },
      handleConfirm() {
        this.$emit('confirm');
      },
      handlePrev() {
        this.$emit('prev');
      },
      hide(cancel) {
        if (cancel !== false) {
          this.$emit('update:visible', false);
          this.$emit('close');
          this.closed = true;
        }
      },
      updatePopper() {
        this.broadcast('YSelectDropdown', 'updatePopper');
        this.broadcast('YDropdownMenu', 'updatePopper');
      },
      afterEnter() {
        this.$emit('opened');
      },
      afterLeave() {
        this.$emit('closed');
      }
    },

    created() {
      const windowHeight = window.innerHeight;
      this.small = windowHeight < 660;
    },

    mounted() {
      if (this.visible) {
        this.rendered = true;
        this.open();
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      }
    },

    destroyed() {
      // if appendToBody is true, remove DOM node after destroy
      if (this.appendToBody && this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  };
</script>
