<template>
  <section class="config" :key="displayName">
    <div class="config-label">
      <y-tooltip :content="displayName" placement="top">
        <span>{{displayKeyName}}</span>
      </y-tooltip>
    </div>
    <div class="config-content">
      <y-select 
        v-model="value" 
        class="select"
        size="medium"
        @change="onSelectChange"
      >
        <y-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </y-option>
      </y-select>
    </div>
  </section>
</template>

<style>
.select {
  width: 100%;
}
</style>

<script>
const defaultFontSize = [
  '12px',
  '13px',
  '14px',
  '16px',
  '18px',
  '20px',
  '22px',
  '28px',
  '36px',
  '48px'
];
import Mixin from './mixin';
import { getStyleDisplayName } from '../utils/utils.js';

export default {
  props: {
    componentName: {
      type: String
    },
    golbalValue: {
      type: Object
    }
  },
  data() {
    return {
      options: [],
      value: ''
    };
  },
  mixins: [Mixin],
  computed: {
    isGlobalInputValue() {
      return this.config.value.startsWith('$');
    }
  },
  methods: {
    onSelectChange(e) {
      this.onChange(e);
    },
    initSelectOption() {
      this.options = [];
      defaultFontSize.forEach((size) => {
        this.options.push({
          value: size,
          label: size
        });
      });
      const golbalTypography = this.golbalValue.typography;
      if (this.isGlobalInputValue && golbalTypography) {
        Object.keys(golbalTypography).forEach((font) => {
          if (font.includes('font-size')) {
            const size = golbalTypography[font];
            this.options.push({
              value: size.key,
              label: getStyleDisplayName(size)
            });
          }
        });
      }
    }
  },
  watch: {
    'mergedValue': {
      immediate: true,
      handler(value) {
        this.initSelectOption();
        this.value = this.mergedValue;
      }
    }
  }
};
</script>