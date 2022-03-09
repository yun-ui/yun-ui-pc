import { createTest, createVue, destroyVM } from '../util';
import Tag from 'packages/tag';

describe('Tag', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
      <y-tag></y-tag>
      `
    }, true);
    expect(vm.$el.classList.contains('y-tag')).to.be.true;
    expect(vm.$el.classList.contains('y-tag__close')).to.be.false;
    expect(vm.$el.classList.contains('is-hit')).to.be.false;
    expect(vm.$el.classList.contains('md-fade-center')).to.be.false;
  });

  it('text', () => {
    vm = createVue({
      template: `
      <y-tag>标签</y-tag>
      `
    }, true);
    expect(vm.$el.textContent.length).to.be.at.least(2);
  });

  it('type', () => {
    vm = createVue({
      template: `
      <y-tag type="primary"></y-tag>
      `
    }, true);
    expect(vm.$el.classList.contains('y-tag--primary')).to.be.true;
  });

  it('hit', () => {
    vm = createVue({
      template: `
      <y-tag hit></y-tag>
      `
    }, true);
    expect(vm.$el.classList.contains('is-hit')).to.be.true;
  });

  it('closable', done => {
    vm = createVue({
      template: `
      <y-tag closable @close="handleClose">关闭标签</y-tag>
      `,
      data() {
        return {
          isClose: false
        };
      },
      methods: {
        handleClose() {
          this.isClose = true;
        }
      }
    }, true);
    var closeBtn = vm.$el.querySelector('.y-tag .y-tag__close');
    expect(closeBtn).to.exist;
    closeBtn.click();
    vm.$nextTick(_ => {
      expect(vm.isClose).to.true;
      done();
    });
  });

  it('closeTransition', () => {
    vm = createVue({
      template: `
      <y-tag closable closeTransition></y-tag>
      `
    }, true);
    expect(vm.$el.classList.contains('md-fade-center')).to.be.false;
  });

  it('color', () => {
    vm = createVue({
      template: `
      <y-tag ref="tag" color="rgb(0, 0, 0)"></y-tag>
      `
    }, true);
    expect(vm.$el.style.backgroundColor).to.equal('rgb(0, 0, 0)');
  });

  it('click', done => {
    vm = createVue({
      template: `
      <y-tag ref="tag" @click="handleClick">点击标签</y-tag>
      `,
      data() {
        return {
          clicksCount: 0
        };
      },
      methods: {
        handleClick() {
          this.clicksCount = this.clicksCount + 1;
        }
      }
    }, true);

    let tag = vm.$refs.tag;
    tag.$el.click();

    setTimeout(_ => {
      expect(vm.clicksCount).to.be.equal(1);
      done();
    }, 20);
  });

  it('theme', () => {
    vm = createTest(Tag, { effect: 'dark' }, true);
    const el = vm.$el;
    expect(el.className).to.includes('y-tag--dark');
    expect(el.className).to.not.includes('y-tag--light');
    expect(el.className).to.not.includes('y-tag--plain');
  });
});
