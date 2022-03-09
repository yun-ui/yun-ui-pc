import YIcon from './src/icon.vue';

/* istanbul ignore next */
YIcon.install = function(Vue) {
  Vue.component(YIcon.name, YIcon);
};

export default YIcon;
