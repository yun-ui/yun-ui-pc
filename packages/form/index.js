import YForm from './src/form';

/* istanbul ignore next */
YForm.install = function(Vue) {
  Vue.component(YForm.name, YForm);
};

export default YForm;
