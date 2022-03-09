import YCollapse from './src/collapse';

/* istanbul ignore next */
YCollapse.install = function(Vue) {
  Vue.component(YCollapse.name, YCollapse);
};

export default YCollapse;

