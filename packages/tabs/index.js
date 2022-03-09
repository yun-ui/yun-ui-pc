import YTabs from './src/tabs';

/* istanbul ignore next */
YTabs.install = function(Vue) {
  Vue.component(YTabs.name, YTabs);
};

export default YTabs;
