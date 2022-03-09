import YCarouselItem from '../carousel/src/item';

/* istanbul ignore next */
YCarouselItem.install = function(Vue) {
  Vue.component(YCarouselItem.name, YCarouselItem);
};

export default YCarouselItem;
