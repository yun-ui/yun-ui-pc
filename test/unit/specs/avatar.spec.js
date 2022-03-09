import { createTest, createVue, destroyVM, wait } from '../util';
import Avatar from 'packages/avatar';
import { IMAGE_SUCCESS, IMAGE_FAIL } from '../mocks/uri';

describe('Avatar', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Avatar);
    expect(vm.$el).to.exist;
  });

  it('size is number', () => {
    vm = createVue({
      template: `
        <y-avatar :size="50">
        </y-avatar>
      `
    }, true);
    const avatarElm = vm.$el;
    expect(avatarElm.style.height).to.equal('50px');
  });

  it('size is string', () => {
    vm = createVue({
      template: `
        <y-avatar size="small">
          user
        </y-avatar>
      `
    }, true);
    const avatarElm = vm.$el;
    expect(avatarElm.classList.contains('y-avatar--small')).to.be.true;
  });

  it('shape', () => {
    vm = createVue({
      template: `
        <y-avatar size="small" shape="square">
          user
        </y-avatar>
      `
    }, true);
    const avatarElm = vm.$el;
    expect(avatarElm.classList.contains('y-avatar--square')).to.be.true;
  });

  it('icon avatar', () => {
    vm = createVue({
      template: `
        <y-avatar icon="y-icon-user-solid">
        </y-avatar>
      `
    }, true);
    const avatarElm = vm.$el;
    const iconELm = avatarElm.children[0];
    expect(avatarElm.classList.contains('y-avatar--icon')).to.be.true;
    expect(iconELm.classList.contains('y-icon-user-solid')).to.be.true;
  });

  it('image avatar', () => {
    vm = createVue({
      template: `
        <y-avatar src="${IMAGE_SUCCESS}"></y-avatar>
      `
    }, true);
    const imgElm = vm.$el.children[0];
    expect(imgElm.tagName.toUpperCase()).to.equal('IMG');
    expect(imgElm.src).to.equal(IMAGE_SUCCESS);
  });

  it('image fallback', async() => {
    vm = createVue({
      template: `
        <y-avatar src="${IMAGE_FAIL}" @error="errorHandler">
          fallback
        </y-avatar>
      `,
      methods: {
        errorHandler() {
          return true;
        }
      }
    }, true);
    await wait();
    const avatarElm = vm.$el;
    expect(avatarElm.textContent.trim()).to.equal('fallback');
  });

  it('image fit', async() => {
    vm = createVue({
      template: `
        <div>
          <y-avatar :src="url"></y-avatar>
          <y-avatar :src="url" v-for="fit in fits" :fit="fit" :key="fit"></y-avatar>
        </div>
        
      `,
      data() {
        return {
          fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
          url: IMAGE_SUCCESS
        };
      }
    }, true);
    await wait();
    const containerElm = vm.$el;
    expect(containerElm.children[0].children[0].style.objectFit).to.equal('cover');
    expect(containerElm.children[1].children[0].style.objectFit).to.equal('fill');
    expect(containerElm.children[2].children[0].style.objectFit).to.equal('contain');
    expect(containerElm.children[3].children[0].style.objectFit).to.equal('cover');
    expect(containerElm.children[4].children[0].style.objectFit).to.equal('none');
    expect(containerElm.children[5].children[0].style.objectFit).to.equal('scale-down');
  });
});

