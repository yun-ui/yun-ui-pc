import YTag from './src/tag';

/* istanbul ignore next */
YTag.install = function(Vue) {
  Vue.component(YTag.name, YTag);
};

export default YTag;
