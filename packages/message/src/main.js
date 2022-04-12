import Vue from 'vue';
import Main from './main.vue';
import { PopupManager } from 'yun-ui-pc/src/utils/popup';
import { isVNode } from 'yun-ui-pc/src/utils/vdom';
import { isObject } from 'yun-ui-pc/src/utils/types';
let MessageConstructor = Vue.extend(Main);

let instance;
let instances = [];
let seed = 1;

const Message = function(options) {
  if (Vue.prototype.$isServer) return;
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  let userOnClose = options.onClose;
  let id = 'message_' + seed++;

  options.onClose = function() {
    Message.close(id, userOnClose);
  };
  instance = new MessageConstructor({
    data: options
  });
  instance.id = id;
  if (isVNode(instance.message)) {
    instance.$slots.default = [instance.message];
    instance.message = null;
  }
  instance.$mount();
  if (options.appendTo) { // 指定父类，强制上下左右均居中于父类
    instance.appendTo = options.appendTo;
    const targetDom = document.querySelector(options.appendTo);
    targetDom.appendChild(instance.$el);
    instance.$el.style.top = '50%';
    instance.$el.style.transform = 'translate(-50%, -50%)';
    instance.$el.style.position = 'absolute';
  } else {
    document.body.appendChild(instance.$el);
    let verticalOffset = options.offset || 120;
    instances.forEach(item => {
      if (!item.appendTo) {
        verticalOffset += item.$el.offsetHeight + 16;
      }
    });
    instance.verticalOffset = verticalOffset;
  }
  instance.visible = true;
  instance.$el.style.zIndex = PopupManager.nextZIndex();
  instances.push(instance);
  return instance;
};

['success', 'info', 'error', 'text'].forEach(type => {
  Message[type] = (options) => {
    if (isObject(options) && !isVNode(options)) {
      return Message({
        ...options,
        type
      });
    }
    return Message({
      type,
      message: options
    });
  };
});

Message.close = function(id, userOnClose) {
  let len = instances.length;
  let index = -1;
  let removedHeight;
  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      removedHeight = instances[i].$el.offsetHeight;
      index = i;
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
  if (len <= 1 || index === -1 || index > instances.length - 1 || !!instance.appendTo) return;
  for (let i = index; i < len - 1 ; i++) {
    let dom = instances[i].$el;
    dom.style['top'] =
      parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px';
  }
};

Message.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

export default Message;
