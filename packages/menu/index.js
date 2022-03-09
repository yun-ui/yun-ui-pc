import YMenu from './src/menu';

/* istanbul ignore next */
YMenu.install = function(Vue) {
  Vue.component(YMenu.name, YMenu);
};

export default YMenu;
