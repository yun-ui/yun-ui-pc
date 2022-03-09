<template>
  <transition-group
    tag="ul"
    :class="[
      'y-upload-list',
      'y-upload-list--' + listType,
      { 'is-disabled': disabled }
    ]"
    name="y-list"
  >
    <li
      v-for="file in files"
      :class="['y-upload-list__item', 'is-' + file.status, focusing ? 'focusing' : '']"
      :key="file.uid"
      tabindex="0"
      @keydown.delete="!disabled && $emit('remove', file)"
      @focus="focusing = true"
      @blur="focusing = false"
      @click="focusing = false"
    >
      <slot :file="file">
        <img
          class="y-upload-list__item-thumbnail"
          v-if="file.status !== 'uploading' && ['picture-card', 'picture'].indexOf(listType) > -1"
          :src="file.url" alt=""
        >
        <a class="y-upload-list__item-name" @click="handleClick(file)">
          <i class="y-icon-document"></i>{{file.name}}
        </a>
        <label class="y-upload-list__item-status-label">
          <i :class="{
            'y-icon-upload-success': true,
            'y-icon-circle-check': listType === 'text',
            'y-icon-check': ['picture-card', 'picture'].indexOf(listType) > -1
          }"></i>
        </label>
        <i class="y-icon-close" v-if="!disabled" @click="$emit('remove', file)"></i>
        <i class="y-icon-close-tip" v-if="!disabled">{{ t('el.upload.deleteTip') }}</i> <!--因为close按钮只在li:focus的时候 display, li blur后就不存在了，所以键盘导航时永远无法 focus到 close按钮上-->
        <y-progress
          v-if="file.status === 'uploading'"
          :type="listType === 'picture-card' ? 'circle' : 'line'"
          :stroke-width="listType === 'picture-card' ? 6 : 2"
          :percentage="parsePercentage(file.percentage)">
        </y-progress>
        <span class="y-upload-list__item-actions" v-if="listType === 'picture-card'">
          <span
            class="y-upload-list__item-preview"
            v-if="handlePreview && listType === 'picture-card'"
            @click="handlePreview(file)"
          >
            <i class="y-icon-zoom-in"></i>
          </span>
          <span
            v-if="!disabled"
            class="y-upload-list__item-delete"
            @click="$emit('remove', file)"
          >
            <i class="y-icon-delete"></i>
          </span>
        </span>
      </slot>
    </li>
  </transition-group>
</template>
<script>
  import Locale from 'yun-ui-pc/src/mixins/locale';
  import YProgress from 'yun-ui-pc/packages/progress';

  export default {

    name: 'YUploadList',

    mixins: [Locale],

    data() {
      return {
        focusing: false
      };
    },
    components: { YProgress },

    props: {
      files: {
        type: Array,
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      handlePreview: Function,
      listType: String
    },
    methods: {
      parsePercentage(val) {
        return parseInt(val, 10);
      },
      handleClick(file) {
        this.handlePreview && this.handlePreview(file);
      }
    }
  };
</script>
