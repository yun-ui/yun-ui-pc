import YOptionGroup from '../select/src/option-group';

/* istanbul ignore next */
YOptionGroup.install = function(Vue) {
  Vue.component(YOptionGroup.name, YOptionGroup);
};

export default YOptionGroup;
