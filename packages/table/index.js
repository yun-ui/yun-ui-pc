import YTable from './src/table';

/* istanbul ignore next */
YTable.install = function(Vue) {
  Vue.component(YTable.name, YTable);
};

export default YTable;
