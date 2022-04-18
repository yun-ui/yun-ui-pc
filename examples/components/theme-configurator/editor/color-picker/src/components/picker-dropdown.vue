<template>
  <transition name="y-zoom-in-top" @after-leave="doDestroy">
    <div
      class="y-color-dropdown"
      v-show="showPopper">
      <div class="y-color-dropdown__main-wrapper">
        <hue-slider ref="hue" :color="color" vertical style="float: right;"></hue-slider>
        <sv-panel ref="sl" :color="color"></sv-panel>
      </div>
      <alpha-slider v-if="showAlpha" ref="alpha" :color="color"></alpha-slider>
      <predefine v-if="predefine" :color="color" :colors="predefine"></predefine>
      <div class="y-color-dropdown__btns">
        <span class="y-color-dropdown__value">
          <y-input
            v-model="customInput"
            @keyup.native.enter="handleConfirm"
            @blur="handleConfirm"
            :validate-event="false"
            size="mini">
          </y-input>
        </span>
        <!-- <y-button
          size="mini"
          type="text"
          class="y-color-dropdown__link-btn"
          @click="$emit('clear')">
          {{ t('el.colorpicker.clear') }}
        </y-button> -->
        <y-button
          plain
          size="small"
          type="primary"
          class="y-color-dropdown__btn"
          @click="confirmValue">
          {{ t('el.colorpicker.confirm') }}
        </y-button>
      </div>
      <color-list 
        v-if="colorList && colorList.length > 0" 
        :color="color" 
        :colors="colorList"
        @select=onColorListSelect
      ></color-list>
    </div>
  </transition>
</template>

<script>
  import SvPanel from './sv-panel';
  import HueSlider from './hue-slider';
  import AlphaSlider from './alpha-slider';
  import Predefine from './predefine';
  import ColorList from './color-list';
  import Popper from 'yun-ui-pc/src/utils/vue-popper';
  import Locale from 'yun-ui-pc/src/mixins/locale';
  import ElInput from 'yun-ui-pc/packages/input';
  import ElButton from 'yun-ui-pc/packages/button';

  export default {
    name: 'y-color-picker-dropdown',

    mixins: [Popper, Locale],

    components: {
      SvPanel,
      HueSlider,
      AlphaSlider,
      ElInput,
      ElButton,
      Predefine,
      ColorList
    },

    props: {
      color: {
        required: true
      },
      showAlpha: Boolean,
      predefine: Array,
      colorList: Array
    },

    data() {
      return {
        customInput: ''
      };
    },

    computed: {
      currentColor() {
        const parent = this.$parent;
        return !parent.value && !parent.showPanelColor ? '' : parent.color.value;
      }
    },

    methods: {
      confirmValue() {
        this.$emit('pick');
      },

      onColorListSelect(e) {
        this.$emit('pick', e);
      },

      handleConfirm() {
        this.color.fromString(this.customInput);
      }
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$el;
    },

    watch: {
      showPopper(val) {
        if (val === true) {
          this.$nextTick(() => {
            const { sl, hue, alpha } = this.$refs;
            sl && sl.update();
            hue && hue.update();
            alpha && alpha.update();
          });
        }
      },

      currentColor: {
        immediate: true,
        handler(val) {
          this.customInput = val;
        }
      }
    }
  };
</script>
