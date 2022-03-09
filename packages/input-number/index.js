import YInputNumber from './src/input-number';

/* istanbul ignore next */
YInputNumber.install = function(Vue) {
  Vue.component(YInputNumber.name, YInputNumber);
};

export default YInputNumber;
