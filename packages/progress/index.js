import YProgress from './src/progress';

/* istanbul ignore next */
YProgress.install = function(Vue) {
  Vue.component(YProgress.name, YProgress);
};

export default YProgress;
