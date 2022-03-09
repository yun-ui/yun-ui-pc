<template>
  <div class="y-page-header">
    <div class="y-page-header__left" @click="$emit('back')">
      <i class="y-icon-back"></i>
      <div class="y-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="y-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
import { t } from 'yun-ui-pc/src/locale';
export default {
  name: 'YPageHeader',

  props: {
    title: {
      type: String,
      default() {
        return t('el.pageHeader.title');
      }
    },
    content: String
  }
};
</script>
