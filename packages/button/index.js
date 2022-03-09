import YButton from './src/button';

/* istanbul ignore next */
YButton.install = function(Vue) {
  Vue.component(YButton.name, YButton);
};

export default YButton;
