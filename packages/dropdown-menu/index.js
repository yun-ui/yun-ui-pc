import YDropdownMenu from '../dropdown/src/dropdown-menu';

/* istanbul ignore next */
YDropdownMenu.install = function(Vue) {
  Vue.component(YDropdownMenu.name, YDropdownMenu);
};

export default YDropdownMenu;
