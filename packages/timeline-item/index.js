import YTimelineItem from '../timeline/src/item';

/* istanbul ignore next */
YTimelineItem.install = function(Vue) {
  Vue.component(YTimelineItem.name, YTimelineItem);
};

export default YTimelineItem;
