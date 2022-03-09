import YDropdown from './src/dropdown';

/* istanbul ignore next */
YDropdown.install = function(Vue) {
  Vue.component(YDropdown.name, YDropdown);
};

export default YDropdown;
