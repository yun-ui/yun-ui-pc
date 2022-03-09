<template>
  <li
    class="y-dropdown-menu__item"
    :class="{
      'is-disabled': disabled,
      'y-dropdown-menu__item--divided': divided
    }"
    @click="handleClick"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
  >
    <i :class="icon" v-if="icon"></i>
    <slot></slot>
  </li>
</template>
<script>
  import Emitter from 'yun-ui-pc/src/mixins/emitter';

  export default {
    name: 'YDropdownItem',

    mixins: [Emitter],

    props: {
      command: {},
      disabled: Boolean,
      divided: Boolean,
      icon: String
    },

    methods: {
      handleClick(e) {
        this.dispatch('YDropdown', 'menu-item-click', [this.command, this]);
      }
    }
  };
</script>
