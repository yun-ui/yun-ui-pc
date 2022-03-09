import { createVue, destroyVM } from '../util';

describe('Col', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <y-col :span="12">
        </y-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('y-col')).to.be.true;
  });
  it('span', () => {
    vm = createVue({
      template: `
        <y-col :span="12">
        </y-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('y-col-12')).to.be.true;
  });
  it('pull', () => {
    vm = createVue({
      template: `
        <y-col :span="12" :pull="3">
        </y-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('y-col-pull-3')).to.be.true;
  });
  it('push', () => {
    vm = createVue({
      template: `
        <y-col :span="12" :push="3">
        </y-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('y-col-push-3')).to.be.true;
  });
  it('gutter', () => {
    vm = createVue({
      template: `
        <y-row :gutter="20">
          <y-col :span="12" ref="col">
          </y-col>
        </y-row>
      `
    }, true);
    let colElm = vm.$refs.col.$el;
    expect(colElm.style.paddingLeft === '10px').to.be.true;
    expect(colElm.style.paddingRight === '10px').to.be.true;
  });
  it('responsive', () => {
    vm = createVue({
      template: `
        <y-row :gutter="20">
          <y-col ref="col" :sm="{ span: 4, offset: 2 }" :md="8" :lg="{ span: 6, offset: 3 }">
          </y-col>
        </y-row>
      `
    }, true);
    let colElm = vm.$refs.col.$el;
    expect(colElm.classList.contains('y-col-sm-4')).to.be.true;
    expect(colElm.classList.contains('y-col-sm-offset-2')).to.be.true;
    expect(colElm.classList.contains('y-col-lg-6')).to.be.true;
    expect(colElm.classList.contains('y-col-lg-offset-3')).to.be.true;
    expect(colElm.classList.contains('y-col-md-8')).to.be.true;
  });
});
