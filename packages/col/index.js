import YCol from './src/col';

/* istanbul ignore next */
YCol.install = function(Vue) {
  Vue.component(YCol.name, YCol);
};

export default YCol;

