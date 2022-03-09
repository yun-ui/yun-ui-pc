import { createVue, destroyVM } from '../util';

describe('Breadcrumb', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue(`
      <y-breadcrumb separator=">">
        <y-breadcrumb-item to="/">首页</y-breadcrumb-item>
        <y-breadcrumb-item>活动管理</y-breadcrumb-item>
        <y-breadcrumb-item>活动列表</y-breadcrumb-item>
        <y-breadcrumb-item>活动详情</y-breadcrumb-item>
      </y-breadcrumb>
    `);
    vm.$nextTick(_ => {
      expect(vm.$el.querySelector('.y-breadcrumb__separator').innerText).to.equal('>');
      done();
    });
  });
});
