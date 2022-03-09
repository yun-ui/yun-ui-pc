import YFormItem from '../form/src/form-item';

/* istanbul ignore next */
YFormItem.install = function(Vue) {
  Vue.component(YFormItem.name, YFormItem);
};

export default YFormItem;
