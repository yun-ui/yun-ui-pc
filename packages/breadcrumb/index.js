import YBreadcrumb from './src/breadcrumb';

/* istanbul ignore next */
YBreadcrumb.install = function(Vue) {
  Vue.component(YBreadcrumb.name, YBreadcrumb);
};

export default YBreadcrumb;
