import YAutocomplete from './src/autocomplete';

/* istanbul ignore next */
YAutocomplete.install = function(Vue) {
  Vue.component(YAutocomplete.name, YAutocomplete);
};

export default YAutocomplete;
