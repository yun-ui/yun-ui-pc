<template>
  <div class="y-result">
    <div class="y-result__icon">
      <slot name="icon">
        <component :is="iconElement" :class="iconElement" />
      </slot>
    </div>
    <div v-if="title || $slots.title" class="y-result__title">
      <slot name="title">
        <p>{{ title }}</p>
      </slot>
    </div>
    <div v-if="subTitle || $slots.subTitle" class="y-result__subtitle">
      <slot name="subTitle">
        <p>{{ subTitle }}</p>
      </slot>
    </div>
    <div v-if="$slots.extra" class="y-result__extra">
      <slot name="extra"></slot>
    </div>
  </div>
</template>
<script>
import IconSuccess from './icon-success.vue';
import IconError from './icon-error.vue';
import IconWarning from './icon-warning.vue';
import IconInfo from './icon-info.vue';

const IconMap = {
  success: 'icon-success',
  warning: 'icon-warning',
  error: 'icon-error',
  info: 'icon-info'
};

export default {
  name: 'YResult',
  components: {
    [IconSuccess.name]: IconSuccess,
    [IconError.name]: IconError,
    [IconWarning.name]: IconWarning,
    [IconInfo.name]: IconInfo
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'info'
    }
  },
  computed: {
    iconElement() {
      const icon = this.icon;
      return icon && IconMap[icon] ? IconMap[icon] : 'icon-info';
    }
  }
};
</script>
