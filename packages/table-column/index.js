import YTableColumn from '../table/src/table-column';

/* istanbul ignore next */
YTableColumn.install = function(Vue) {
  Vue.component(YTableColumn.name, YTableColumn);
};

export default YTableColumn;
