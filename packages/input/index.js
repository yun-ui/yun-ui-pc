import YInput from './src/input';

/* istanbul ignore next */
YInput.install = function(Vue) {
  Vue.component(YInput.name, YInput);
};

export default YInput;
