import YOption from '../select/src/option';

/* istanbul ignore next */
YOption.install = function(Vue) {
  Vue.component(YOption.name, YOption);
};

export default YOption;
