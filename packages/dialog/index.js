import YDialog from './src/component';

/* istanbul ignore next */
YDialog.install = function(Vue) {
  Vue.component(YDialog.name, YDialog);
};

export default YDialog;
