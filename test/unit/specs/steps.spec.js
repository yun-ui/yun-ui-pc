import { createVue, destroyVM, waitImmediate } from '../util';

describe('Steps', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue(`
      <y-steps>
        <y-step title="step1"></y-step>
        <y-step title="step2"></y-step>
        <y-step title="step3"></y-step>
      </y-steps>
    `);

    expect(vm.$el.querySelectorAll('.y-step')).to.length(3);
  });

  it('space', async() => {
    vm = createVue(`
      <y-steps>
        <y-step title="step1"></y-step>
        <y-step title="step2"></y-step>
        <y-step title="step3"></y-step>
      </y-steps>
    `, true);

    const vm2 = createVue(`
      <y-steps :space="100">
        <y-step title="step1"></y-step>
        <y-step title="step2"></y-step>
        <y-step title="step3"></y-step>
        <y-step title="step4"></y-step>
      </y-steps>
    `, true);

    await waitImmediate();
    const stepElm = vm.$el.querySelector('.y-step');
    const stepElm2 = vm2.$el.querySelector('.y-step');
    expect(getComputedStyle(stepElm).flexBasis).to.equal('50%');
    expect(getComputedStyle(stepElm2).flexBasis).to.equal('100px');
  });

  it('processStatus', done => {
    vm = createVue(`
      <y-steps :active="1" process-status="error">
        <y-step title="step1"></y-step>
        <y-step title="step2"></y-step>
        <y-step title="step3"></y-step>
      </y-steps>
    `);

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.y-step__head.is-error')).to.length(1);
      done();
    });
  });

  it('update processStatus', done => {
    vm = createVue({
      template: `
        <y-steps :active="1" :process-status="processStatus">
          <y-step title="abc"></y-step>
          <y-step title="abc2"></y-step>
        </y-steps>
      `,
      data() {
        return { processStatus: 'error' };
      }
    });

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.y-step__head.is-error')).to.length(1);
      vm.processStatus = 'process';
      vm.$nextTick(_ => {
        expect(vm.$el.querySelectorAll('.y-step__head.is-process')).to.length(1);
        done();
      });
    });
  });

  it('finishStatus', done => {
    vm = createVue(`
      <y-steps :active="1" finish-status="error">
        <y-step title="abc"></y-step>
        <y-step title="abc2"></y-step>
      </y-steps>
    `);

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.y-step__head.is-error')).to.length(1);
      done();
    });
  });

  it('active', done => {
    vm = createVue({
      template: `
        <y-steps :active="active" finish-status="error">
          <y-step title="abc"></y-step>
          <y-step title="abc2"></y-step>
        </y-steps>
      `,

      data() {
        return { active: 0 };
      }
    });

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.y-step__head.is-error')).to.length(0);
      vm.active = 2;
      vm.$nextTick(_ => {
        expect(vm.$el.querySelectorAll('.y-step__head.is-error')).to.length(2);
        done();
      });
    });
  });

  it('create vertical', () => {
    vm = createVue(`
      <y-steps direction="vertical">
        <y-step title="aaa"></y-step>
        <y-step title="bbb"></y-step>
      </y-steps>
    `);

    expect(vm.$el.querySelector('.is-vertical')).to.exist;
  });

  it('vertical:height', async() => {
    vm = createVue(`
      <y-steps direction="vertical" :space="200">
        <y-step title="aaa"></y-step>
        <y-step title="bbb"></y-step>
      </y-steps>
    `, true);

    await waitImmediate();
    const stepElm = vm.$el.querySelector('.y-step');
    expect(getComputedStyle(stepElm).flexBasis).to.equal('200px');
  });

  it('step:status=error', done => {
    vm = createVue(`
      <y-steps :active="2" process-status="process" finish-status="success" direction="horizontal">
        <y-step title="step1"></y-step>
        <y-step title="step2" status="error"></y-step>
        <y-step title="step3"></y-step>
      </y-steps>
    `);

    vm.$nextTick(_ => {
      const errorLine = vm.$el.querySelector('.y-step:nth-child(2) .y-step__line-inner');
      expect(errorLine.getBoundingClientRect().width).to.equal(0);
      const nextStep = vm.$el.querySelector('.y-step:nth-child(3) .y-step__head');
      expect(nextStep.classList.contains('is-wait')).to.equal(true);
      done();
    });
  });
});
