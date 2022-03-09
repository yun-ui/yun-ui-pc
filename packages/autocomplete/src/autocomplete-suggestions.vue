<template>
  <transition name="y-zoom-in-top" @after-leave="doDestroy">
    <div
      v-show="showPopper"
      class="y-autocomplete-suggestion y-popper"
      :class="{ 'is-loading': !parent.hideLoading && parent.loading }"
      :style="{ width: dropdownWidth }"
      role="region">
      <y-scrollbar
        tag="ul"
        wrap-class="y-autocomplete-suggestion__wrap"
        view-class="y-autocomplete-suggestion__list">
        <li v-if="!parent.hideLoading && parent.loading"><i class="y-icon-loading"></i></li>
        <slot v-else>
        </slot>
      </y-scrollbar>
    </div>
  </transition>
</template>
<script>
  import Popper from 'yun-ui-pc/src/utils/vue-popper';
  import Emitter from 'yun-ui-pc/src/mixins/emitter';
  import YScrollbar from 'yun-ui-pc/packages/scrollbar';

  export default {
    components: { YScrollbar },
    mixins: [Popper, Emitter],

    componentName: 'YAutocompleteSuggestions',

    data() {
      return {
        parent: this.$parent,
        dropdownWidth: ''
      };
    },

    props: {
      options: {
        default() {
          return {
            gpuAcceleration: false
          };
        }
      },
      id: String
    },

    methods: {
      select(item) {
        this.dispatch('YAutocomplete', 'item-click', item);
      }
    },

    updated() {
      this.$nextTick(_ => {
        this.popperJS && this.updatePopper();
      });
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$refs.input.$refs.input || this.$parent.$refs.input.$refs.textarea;
      this.referenceList = this.$el.querySelector('.y-autocomplete-suggestion__list');
      this.referenceList.setAttribute('role', 'listbox');
      this.referenceList.setAttribute('id', this.id);
    },

    created() {
      this.$on('visible', (val, inputWidth) => {
        this.dropdownWidth = inputWidth + 'px';
        this.showPopper = val;
      });
    }
  };
</script>
