<template>
  <div class="y-collapse-item"
    :class="{'is-active': isActive, 'is-disabled': disabled }">
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`y-collapse-content-${id}`"
      :aria-describedby ="`y-collapse-content-${id}`"
    >
      <div
        class="y-collapse-item__header"
        @click="handleHeaderClick"
        role="button"
        :id="`y-collapse-head-${id}`"
        :tabindex="disabled ? undefined : 0"
        @keyup.space.enter.stop="handleEnterClick"
        :class="{
          'focusing': focusing,
          'is-active': isActive
        }"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <slot name="title">{{title}}</slot>
        <i
          class="y-collapse-item__arrow y-icon-arrow-right"
          :class="{'is-active': isActive}">
        </i>
      </div>
    </div>
    <y-collapse-transition>
      <div
        class="y-collapse-item__wrap"
        v-show="isActive"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`y-collapse-head-${id}`"
        :id="`y-collapse-content-${id}`"
      >
        <div class="y-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </y-collapse-transition>
  </div>
</template>
<script>
  import YCollapseTransition from 'yun-ui-pc/src/transitions/collapse-transition';
  import Emitter from 'yun-ui-pc/src/mixins/emitter';
  import { generateId } from 'yun-ui-pc/src/utils/util';

  export default {
    name: 'YCollapseItem',

    componentName: 'YCollapseItem',

    mixins: [Emitter],

    components: { YCollapseTransition },

    data() {
      return {
        contentWrapStyle: {
          height: 'auto',
          display: 'block'
        },
        contentHeight: 0,
        focusing: false,
        isClick: false,
        id: generateId()
      };
    },

    inject: ['collapse'],

    props: {
      title: String,
      name: {
        type: [String, Number],
        default() {
          return this._uid;
        }
      },
      disabled: Boolean
    },

    computed: {
      isActive() {
        return this.collapse.activeNames.indexOf(this.name) > -1;
      }
    },

    methods: {
      handleFocus() {
        setTimeout(() => {
          if (!this.isClick) {
            this.focusing = true;
          } else {
            this.isClick = false;
          }
        }, 50);
      },
      handleHeaderClick() {
        if (this.disabled) return;
        this.dispatch('YCollapse', 'item-click', this);
        this.focusing = false;
        this.isClick = true;
      },
      handleEnterClick() {
        this.dispatch('YCollapse', 'item-click', this);
      }
    }
  };
</script>
