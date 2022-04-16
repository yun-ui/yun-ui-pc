<template>
  <transition
    name="y-drawer-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave">
    <div
      class="y-drawer__wrapper"
      tabindex="-1"
      v-show="visible">
      <div
        class="y-drawer__container"
        :class="visible && 'y-drawer__open'"
        @click.self="handleWrapperClick"
        role="document"
        tabindex="-1">
        <div
          aria-modal="true"
          aria-labelledby="y-drawer__title"
          :aria-label="title"
          class="y-drawer"
          :class="[direction, customClass]"
          :style="isHorizontal ? `width: ${drawerSize}` : `height: ${drawerSize}`"
          ref="drawer"
          role="dialog"
          tabindex="-1"
          >
          <header class="y-drawer__header" id="y-drawer__title" :style="{ height: titleHeight + 'px' }" v-if="withHeader">
            <i
              v-if="prevButtonShow"
              class="y-dialog__prev y-icon y-icon-arrow-left"
              @click="handlePrev">
            </i>
            <slot name="title">
              <span role="heading" :title="title">{{ title }}</span>
            </slot>
            <span class="y-drawer__operation">
              <slot name="operation"></slot>
              <y-divider v-if="$slots.operation" direction="vertical"></y-divider>
              <i class="y-drawer__close y-icon y-icon-close" v-if="showClose" @click="closeDrawer"></i>
            </span>
          </header>
          <section class="y-drawer__body" v-if="rendered" :style="bodyStyle">
            <y-scrollbar style="height: 100%">
              <slot></slot>
            </y-scrollbar>
          </section>
          <div class="y-drawer__footer" v-if="withFooter">
            <slot name="tip"></slot>
            <span class="y-drawer__footer-button">
              <slot name="footer">
                <y-button @click="handleCancel" v-if="cancelButtonShow">{{ cancelButtonText }}</y-button>
                <y-button type="primary" @click="handleConfirm">{{ confirmButtonText }}</y-button>
              </slot>
            </span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Popup from 'yun-ui-pc/src/utils/popup';
import emitter from 'yun-ui-pc/src/mixins/emitter';
import { t } from 'yun-ui-pc/src/locale';

export default {
  name: 'YDrawer',
  mixins: [Popup, emitter],
  props: {
    appendToBody: {
      type: Boolean,
      default: false
    },
    beforeClose: {
      type: Function
    },
    customClass: {
      type: String,
      default: ''
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    },
    modal: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'rtl',
      validator(val) {
        return ['ltr', 'rtl', 'ttb', 'btt'].indexOf(val) !== -1;
      }
    },
    modalAppendToBody: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    size: {
      type: [Number, String],
      default: '30%'
    },
    title: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean
    },
    wrapperClosable: {
      type: Boolean,
      default: true
    },
    withHeader: {
      type: Boolean,
      default: true
    },
    prevButtonShow: {
      type: Boolean,
      default: false
    },
    titleHeight: {
      type: Number | String,
      default: 48
    },
    cancelButtonText: {
      type: String,
      default: t('el.messagebox.cancel')
    },

    confirmButtonText: {
      type: String,
      default: t('el.messagebox.confirm')
    },
    cancelButtonShow: {
      type: Boolean,
      default: true
    },

    withFooter: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isHorizontal() {
      return this.direction === 'rtl' || this.direction === 'ltr';
    },
    drawerSize() {
      return typeof this.size === 'number' ? `${this.size}px` : this.size;
    },
    bodyStyle() {
      const titleHeight = this.withHeader ? this.titleHeight : 0;
      const footerHeight = this.withFooter ? 66 : 0;
      return {
        height: `calc(100% - ${ titleHeight + footerHeight }px)`
      };
    }
  },
  data() {
    return {
      closed: false,
      prevActiveElement: null
    };
  },
  watch: {
    visible(val) {
      if (val) {
        this.closed = false;
        this.$emit('open');
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
        this.prevActiveElement = document.activeElement;
      } else {
        if (!this.closed) {
          this.$emit('close');
          if (this.destroyOnClose === true) {
            this.rendered = false;
          }
        }
        this.$nextTick(() => {
          if (this.prevActiveElement) {
            this.prevActiveElement.focus();
          }
        });
      }
    }
  },
  methods: {
    afterEnter() {
      this.$emit('opened');
    },
    afterLeave() {
      this.$emit('closed');
    },
    hide(cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false);
        this.$emit('close');
        if (this.destroyOnClose === true) {
          this.rendered = false;
        }
        this.closed = true;
      }
    },
    handleWrapperClick() {
      if (this.wrapperClosable) {
        this.closeDrawer();
      }
    },
    closeDrawer() {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    },
    handleClose() {
      // This method here will be called by PopupManger, when the `closeOnPressEscape` was set to true
      // pressing `ESC` will call this method, and also close the drawer.
      // This method also calls `beforeClose` if there was one.
      this.closeDrawer();
    },
    handlePrev() {
      this.$emit('prev');
    },
    handleCancel() {
      this.$emit('cancel');
    },
    handleConfirm() {
      this.$emit('confirm');
    }
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
