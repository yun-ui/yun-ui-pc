import { createVue, createTest, destroyVM, waitImmediate } from '../util';
import Empty from 'packages/empty';

const AXIOM = 'Rem is the best girl';

describe('Empty', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('render test', () => {
    vm = createVue({
      template: '<y-empty>{{ AXIOM }}</y-empty>',
      data() {
        return {
          AXIOM
        };
      }
    }, true);
    expect(vm.$el.querySelector('.y-empty__image')).to.exist;
    expect(vm.$el.querySelector('.y-empty__description')).to.exist;
    expect(vm.$el.querySelector('.y-empty__bottom')).to.exist;
  });

  it('should render image props', () => {
    vm = createTest(Empty, {
      image: AXIOM
    }, true);
    expect(vm.$el.querySelector('.y-empty__image img')).to.exist;
  });

  it('should render imageSize props', async() => {
    vm = createVue({
      template: '<y-empty :image-size="imageSize"></y-empty>',
      data() {
        return {
          imageSize: 500
        };
      }
    }, true);
    expect(vm.$el.querySelector('.y-empty__image').getAttribute('style')).to.contain('width: 500px');
    vm.imageSize = 200;
    await waitImmediate();
    expect(vm.$el.querySelector('.y-empty__image').getAttribute('style')).to.contain('width: 200px');
  });

  it('should render description props', () => {
    vm = createTest(Empty, {
      description: AXIOM
    }, true);
    expect(vm.$el.querySelector('.y-empty__description').innerText).to.equal(AXIOM);
  });

  it('should render descriptionMarginTop props', async() => {
    vm = createVue({
      template: '<y-empty :description-margin-top="descriptionMarginTop"></y-empty>',
      data() {
        return {
          descriptionMarginTop: 16
        };
      }
    }, true);
    expect(vm.$el.querySelector('.y-empty__description').getAttribute('style')).to.contain('margin-top: 16px');
    vm.descriptionMarginTop = 8;
    await waitImmediate();
    expect(vm.$el.querySelector('.y-empty__description').getAttribute('style')).to.contain('margin-top: 8px');
  });

  it('should render image slots', () => {
    vm = createVue({
      template: '<y-empty><template slot="image">{{AXIOM}}</template></y-empty>',
      data() {
        return {
          AXIOM
        };
      }
    }, true);
    expect(vm.$el.querySelector('.y-empty__image').innerText).to.equal(AXIOM);
  });

  it('should render description slots', () => {
    vm = createVue({
      template: '<y-empty><template slot="description">{{AXIOM}}</template></y-empty>',
      data() {
        return {
          AXIOM
        };
      }
    }, true);
    expect(vm.$el.querySelector('.y-empty__description').innerText).to.equal(AXIOM);
  });

  it('should render default slots', () => {
    vm = createVue({
      template: '<y-empty>{{AXIOM}}</y-empty>',
      data() {
        return {
          AXIOM
        };
      }
    }, true);
    expect(vm.$el.querySelector('.y-empty__bottom').innerText).to.equal(AXIOM);
  });
});
