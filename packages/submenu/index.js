import YSubmenu from '../menu/src/submenu';

/* istanbul ignore next */
YSubmenu.install = function(Vue) {
  Vue.component(YSubmenu.name, YSubmenu);
};

export default YSubmenu;
