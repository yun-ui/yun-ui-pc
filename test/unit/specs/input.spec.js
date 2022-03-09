import { createVue, destroyVM, triggerEvent, wait, waitImmediate } from '../util';

describe('Input', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', async() => {
    vm = createVue({
      template: `
        <y-input
          :minlength="3"
          :maxlength="5"
          placeholder="请输入内容"
          @focus="handleFocus"
          :value="input">
        </y-input>
      `,
      data() {
        return {
          input: 'input',
          inputFocus: false
        };
      },
      methods: {
        handleFocus() {
          this.inputFocus = true;
        }
      }
    }, true);
    let inputElm = vm.$el.querySelector('input');
    inputElm.focus();
    expect(vm.inputFocus).to.be.true;
    expect(inputElm.getAttribute('placeholder')).to.equal('请输入内容');
    expect(inputElm.value).to.equal('input');
    expect(inputElm.getAttribute('minlength')).to.equal('3');
    expect(inputElm.getAttribute('maxlength')).to.equal('5');

    vm.input = 'text';
    await waitImmediate();
    expect(inputElm.value).to.equal('text');
  });

  it('default to empty', () => {
    vm = createVue({
      template: '<y-input/>'
    }, true);
    let inputElm = vm.$el.querySelector('input');
    expect(inputElm.value).to.equal('');
  });

  it('disabled', () => {
    vm = createVue({
      template: `
        <y-input disabled>
        </y-input>
      `
    }, true);
    expect(vm.$el.querySelector('input').getAttribute('disabled')).to.ok;
  });

  it('suffixIcon', () => {
    vm = createVue({
      template: `
        <y-input suffix-icon="time"></y-input>
      `
    }, true);
    var icon = vm.$el.querySelector('.y-input__icon');
    expect(icon).to.be.exist;
  });

  it('prefixIcon', () => {
    vm = createVue({
      template: `
        <y-input prefix-icon="time"></y-input>
      `
    }, true);
    var icon = vm.$el.querySelector('.y-input__icon');
    expect(icon).to.be.exist;
  });

  it('size', () => {
    vm = createVue({
      template: `
        <y-input size="large">
        </y-input>
      `
    }, true);

    expect(vm.$el.classList.contains('y-input--large')).to.true;
  });

  it('type', () => {
    vm = createVue({
      template: `
        <y-input type="textarea">
        </y-input>
      `
    }, true);

    expect(vm.$el.classList.contains('y-textarea')).to.true;
  });

  it('rows', () => {
    vm = createVue({
      template: `
        <y-input type="textarea" :rows="3">
        </y-input>
      `
    }, true);
    expect(vm.$el.querySelector('.y-textarea__inner').getAttribute('rows')).to.be.equal('3');
  });

  // Github issue #2836
  it('resize', async() => {
    vm = createVue({
      template: `
        <div>
          <y-input type="textarea" :resize="resize"></y-input>
        </div>
      `,
      data: {
        resize: 'none'
      }
    }, true);
    await waitImmediate();
    expect(vm.$el.querySelector('.y-textarea__inner').style.resize).to.be.equal(vm.resize);
    vm.resize = 'horizontal';
    await waitImmediate();
    expect(vm.$el.querySelector('.y-textarea__inner').style.resize).to.be.equal(vm.resize);
  });

  it('autosize', async() => {
    vm = createVue({
      template: `
        <div>
          <y-input
            ref="limitSize"
            type="textarea"
            :autosize="{minRows: 3, maxRows: 5}"
            v-model="textareaValue"
          >
          </y-input>
          <y-input
            ref="limitlessSize"
            type="textarea"
            autosize
            v-model="textareaValue"
          >
          </y-input>
        </div>
      `,
      data() {
        return {
          textareaValue: 'sda\ndasd\nddasdsda\ndasd\nddasdsda\ndasd\nddasdsda\ndasd\nddasd'
        };
      }
    }, true);

    var limitSizeInput = vm.$refs.limitSize;
    var limitlessSizeInput = vm.$refs.limitlessSize;
    expect(limitSizeInput.textareaStyle.height).to.be.equal('117px');
    expect(limitlessSizeInput.textareaStyle.height).to.be.equal('201px');

    vm.textareaValue = '';

    await wait();
    expect(limitSizeInput.textareaStyle.height).to.be.equal('75px');
    expect(limitlessSizeInput.textareaStyle.height).to.be.equal('33px');
  });

  it('focus', async() => {
    vm = createVue({
      template: `
        <y-input ref="input">
        </y-input>
      `
    }, true);

    const spy = sinon.spy();

    vm.$refs.input.$on('focus', spy);
    vm.$refs.input.focus();

    await waitImmediate();
    expect(spy.calledOnce).to.be.true;
  });

  it('Input contains Select and append slot', async() => {
    vm = createVue({
      template: `
      <y-input v-model="value" clearable class="input-with-select" ref="input">
        <y-select v-model="select" slot="prepend" placeholder="请选择">
          <y-option label="餐厅名" value="1"></y-option>
          <y-option label="订单号" value="2"></y-option>
          <y-option label="用户电话" value="3"></y-option>
        </y-select>
        <y-button slot="append" icon="y-icon-search"></y-button>
      </y-input>
      `,
      data() {
        return {
          value: '1234',
          select: '1'
        };
      }
    }, true);
    vm.$refs.input.hovering = true;

    await wait();
    const suffixEl = document.querySelector('.input-with-select > .y-input__suffix');
    expect(suffixEl).to.not.be.null;
    expect(suffixEl.style.transform).to.not.be.empty;
  });

  it('validateEvent', async() => {
    const spy = sinon.spy();
    vm = createVue({
      template: `
        <y-form :model="model" :rules="rules">
          <y-form-item prop="input">
            <y-input v-model="model.input" :validate-event="false">
            </y-input>
          </y-form-item>
        </y-form>
      `,
      data() {
        const validator = (rule, value, callback) => {
          spy();
          callback();
        };
        return {
          model: {
            input: ''
          },
          rules: {
            input: [
              { validator }
            ]
          }
        };
      }
    }, true);

    vm.model.input = '123';
    await waitImmediate();
    expect(spy.called).to.be.false;
  });

  describe('Input Events', () => {
    it('event:focus & blur', async() => {
      vm = createVue({
        template: `
          <y-input
            ref="input"
            placeholder="请输入内容"
            value="input">
          </y-input>
        `
      }, true);

      const spyFocus = sinon.spy();
      const spyBlur = sinon.spy();

      vm.$refs.input.$on('focus', spyFocus);
      vm.$refs.input.$on('blur', spyBlur);
      vm.$el.querySelector('input').focus();
      vm.$el.querySelector('input').blur();

      await waitImmediate();
      expect(spyFocus.calledOnce).to.be.true;
      expect(spyBlur.calledOnce).to.be.true;
    });
    it('event:change', async() => {
      // NOTE: should be same as native's change behavior
      vm = createVue({
        template: `
          <y-input
            ref="input"
            placeholder="请输入内容"
            :value="input">
          </y-input>
        `,
        data() {
          return {
            input: 'a'
          };
        }
      }, true);

      const inputElm = vm.$el.querySelector('input');
      const simulateEvent = (text, event) => {
        inputElm.value = text;
        inputElm.dispatchEvent(new Event(event));
      };

      const spy = sinon.spy();
      vm.$refs.input.$on('change', spy);

      // simplified test, component should emit change when native does
      simulateEvent('1', 'input');
      simulateEvent('2', 'change');
      await waitImmediate();
      expect(spy.calledWith('2')).to.be.true;
      expect(spy.calledOnce).to.be.true;
    });
    it('event:clear', async() => {
      vm = createVue({
        template: `
          <y-input
            ref="input"
            placeholder="请输入内容"
            clearable
            :value="input">
          </y-input>
        `,
        data() {
          return {
            input: 'a'
          };
        }
      }, true);

      const spyClear = sinon.spy();
      const inputElm = vm.$el.querySelector('input');

      // focus to show clear button
      inputElm.focus();
      vm.$refs.input.$on('clear', spyClear);
      await waitImmediate();
      vm.$el.querySelector('.y-input__clear').click();
      await waitImmediate();
      expect(spyClear.calledOnce).to.be.true;
    });
    it('event:input', async() => {
      vm = createVue({
        template: `
          <y-input
            ref="input"
            placeholder="请输入内容"
            clearable
            :value="input">
          </y-input>
        `,
        data() {
          return {
            input: 'a'
          };
        }
      }, true);
      const spy = sinon.spy();
      vm.$refs.input.$on('input', spy);
      const nativeInput = vm.$refs.input.$el.querySelector('input');
      nativeInput.value = '1';
      triggerEvent(nativeInput, 'compositionstart');
      triggerEvent(nativeInput, 'input');
      await waitImmediate();
      nativeInput.value = '2';
      triggerEvent(nativeInput, 'compositionupdate');
      triggerEvent(nativeInput, 'input');
      await waitImmediate();
      triggerEvent(nativeInput, 'compositionend');
      await waitImmediate();
      // input event does not fire during composition
      expect(spy.calledOnce).to.be.true;
      // native input value is controlled
      expect(vm.input).to.equal('a');
      expect(nativeInput.value).to.equal('a');

    });
  });

  describe('Input Methods', () => {
    it('method:select', async() => {
      const testContent = 'test';

      vm = createVue({
        template: `
          <y-input
            ref="inputComp"
            value="${testContent}"
          />
        `
      }, true);

      expect(vm.$refs.inputComp.$refs.input.selectionStart).to.equal(testContent.length);
      expect(vm.$refs.inputComp.$refs.input.selectionEnd).to.equal(testContent.length);

      vm.$refs.inputComp.select();

      await waitImmediate();
      expect(vm.$refs.inputComp.$refs.input.selectionStart).to.equal(0);
      expect(vm.$refs.inputComp.$refs.input.selectionEnd).to.equal(testContent.length);
    });
  });

  it('sets value on textarea / input type change', async() => {
    vm = createVue({
      template: `
        <y-input :type="type" v-model="val" />
      `,
      data() {
        return {
          type: 'text',
          val: '123'
        };
      }
    }, true);

    expect(vm.$el.querySelector('input').value).to.equal('123');
    vm.type = 'textarea';
    await waitImmediate();
    expect(vm.$el.querySelector('textarea').value).to.equal('123');
    vm.type = 'password';
    await waitImmediate();
    expect(vm.$el.querySelector('input').value).to.equal('123');
  });

  it('limit input and show word count', async() => {
    vm = createVue({
      template: `
        <div>
          <y-input
            class="test-text"
            type="text"
            v-model="input1"
            maxlength="10"
            :show-word-limit="show">
          </y-input>
          <y-input
            class="test-textarea"
            type="textarea"
            v-model="input2"
            maxlength="10"
            show-word-limit>
          </y-input>
          <y-input
            class="test-password"
            type="password"
            v-model="input3"
            maxlength="10"
            show-word-limit>
          </y-input>
          <y-input
            class="test-initial-exceed"
            type="text"
            v-model="input4"
            maxlength="2"
            show-word-limit>
          </y-input>
        </div>
      `,
      data() {
        return {
          input1: '',
          input2: '',
          input3: '',
          input4: 'exceed',
          show: false
        };
      }
    }, true);

    const inputElm1 = vm.$el.querySelector('.test-text');
    const inputElm2 = vm.$el.querySelector('.test-textarea');
    const inputElm3 = vm.$el.querySelector('.test-password');
    const inputElm4 = vm.$el.querySelector('.test-initial-exceed');

    expect(inputElm1.querySelectorAll('.y-input__count').length).to.equal(0);
    expect(inputElm2.querySelectorAll('.y-input__count').length).to.equal(1);
    expect(inputElm3.querySelectorAll('.y-input__count').length).to.equal(0);
    expect(inputElm4.classList.contains('is-exceed')).to.true;

    vm.show = true;
    await waitImmediate();
    expect(inputElm1.querySelectorAll('.y-input__count').length).to.equal(1);

    vm.input4 = '1';
    await waitImmediate();
    expect(inputElm4.classList.contains('is-exceed')).to.false;
  });
});
