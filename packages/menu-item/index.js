import YMenuItem from '../menu/src/menu-item';

/* istanbul ignore next */
YMenuItem.install = function(Vue) {
  Vue.component(YMenuItem.name, YMenuItem);
};

export default YMenuItem;
