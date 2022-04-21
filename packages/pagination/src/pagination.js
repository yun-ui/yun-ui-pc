import Pager from './pager.vue';
import YSelect from 'yun-ui-pc/packages/select';
import YOption from 'yun-ui-pc/packages/option';
import YInput from 'yun-ui-pc/packages/input';
import Locale from 'yun-ui-pc/src/mixins/locale';
import { valueEquals } from 'yun-ui-pc/src/utils/util';

export default {
  name: 'YPagination',

  props: {
    pageSize: {
      type: Number,
      default: 10
    },

    total: Number,

    pageCount: Number,

    currentPage: {
      type: Number,
      default: 1
    },

    layout: {
      default: 'prev, pager, next, jumper, ->, total'
    },

    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 40, 50, 100];
      }
    },

    popperClass: String,

    border: Boolean,

    disabled: Boolean,

    hideOnSinglePage: Boolean
  },

  data() {
    return {
      internalCurrentPage: 1,
      internalPageSize: 0,
      lastEmittedPage: -1,
      userChangePageSize: false
    };
  },

  render(h) {
    const layout = this.layout;
    if (!layout) return null;
    if (this.hideOnSinglePage && (!this.internalPageCount || this.internalPageCount === 1)) return null;
    let template = <div class={['y-pagination', {
      'is-border': this.border,
      'y-pagination--small': this.small
    }] }></div>;
    const TEMPLATE_MAP = {
      prev: <prev></prev>,
      jumper: <jumper></jumper>,
      pager: <pager currentPage={ this.internalCurrentPage } pageCount={ this.internalPageCount } pagerCount={ this.internalPagerCount } on-change={ this.handleCurrentChange } disabled={ this.disabled }></pager>,
      'mini-pager': <mini-pager></mini-pager>,
      next: <next></next>,
      sizes: <sizes pageSizes={ this.pageSizes }></sizes>,
      slot: <slot>{ this.$slots.default ? this.$slots.default : '' }</slot>,
      total: <total></total>
    };
    const components = layout.split(',').map((item) => item.trim());
    const rightWrapper = <div class="y-pagination__rightwrapper"></div>;
    let haveRightWrapper = false;

    template.children = template.children || [];
    rightWrapper.children = rightWrapper.children || [];
    components.forEach(compo => {
      if (compo === '->') {
        haveRightWrapper = true;
        return;
      }

      if (!haveRightWrapper) {
        template.children.push(TEMPLATE_MAP[compo]);
      } else {
        rightWrapper.children.push(TEMPLATE_MAP[compo]);
      }
    });

    if (haveRightWrapper) {
      template.children.unshift(rightWrapper);
    }

    return template;
  },

  components: {
    Prev: {
      render(h) {
        return (
          <button
            type="button"
            class="btn-prev"
            disabled={ this.$parent.disabled || this.$parent.internalCurrentPage <= 1 }
            on-click={ this.$parent.prev }>
            {
              this.$parent.prevText
                ? <span>{ this.$parent.prevText }</span>
                : <i class="y-icon y-icon-arrow-left"></i>
            }
          </button>
        );
      }
    },

    Next: {
      render(h) {
        return (
          <button
            type="button"
            class="btn-next"
            disabled={ this.$parent.disabled || this.$parent.internalCurrentPage === this.$parent.internalPageCount || this.$parent.internalPageCount === 0 }
            on-click={ this.$parent.next }>
            {
              this.$parent.nextText
                ? <span>{ this.$parent.nextText }</span>
                : <i class="y-icon y-icon-arrow-right"></i>
            }
          </button>
        );
      }
    },

    Sizes: {
      mixins: [Locale],

      props: {
        pageSizes: Array
      },

      watch: {
        pageSizes: {
          immediate: true,
          handler(newVal, oldVal) {
            if (valueEquals(newVal, oldVal)) return;
            if (Array.isArray(newVal)) {
              this.$parent.internalPageSize = newVal.indexOf(this.$parent.pageSize) > -1
                ? this.$parent.pageSize
                : this.pageSizes[0];
            }
          }
        }
      },

      render(h) {
        return (
          <span class="y-pagination__sizes">
            <y-select
              value={ this.$parent.internalPageSize }
              popperClass={ this.$parent.popperClass || '' }
              size="small"
              on-input={ this.handleChange }
              disabled={ this.$parent.disabled }>
              {
                this.pageSizes.map(item =>
                  <y-option
                    value={ item }
                    label={ item + this.t('el.pagination.pagesize') }>
                  </y-option>
                )
              }
            </y-select>
          </span>
        );
      },

      components: {
        YSelect,
        YOption
      },

      methods: {
        handleChange(val) {
          if (val !== this.$parent.internalPageSize) {
            this.$parent.internalPageSize = val = parseInt(val, 10);
            this.$parent.userChangePageSize = true;
            this.$parent.$emit('update:pageSize', val);
            this.$parent.$emit('size-change', val);
          }
        }
      }
    },

    Jumper: {
      mixins: [Locale],

      components: { YInput },

      data() {
        return {
          userInput: null
        };
      },

      watch: {
        '$parent.internalCurrentPage'() {
          this.userInput = null;
        }
      },

      methods: {
        handleKeyup({ keyCode, target }) {
          // Chrome, Safari, Firefox triggers change event on Enter
          // Hack for IE: https://github.com/yun-ui/yun-ui-pc/issues/11710
          // Drop this method when we no longer supports IE
          if (keyCode === 13) {
            this.handleChange(target.value);
          }
        },
        handleInput(value) {
          this.userInput = value;
        },
        handleChange(value) {
          this.$parent.internalCurrentPage = this.$parent.getValidCurrentPage(value);
          this.$parent.emitChange();
          this.userInput = null;
        }
      },

      render(h) {
        return (
          <span class="y-pagination__jump">
            { this.t('el.pagination.goto') }
            <y-input
              class="y-pagination__editor is-in-pagination"
              min={ 1 }
              max={ this.$parent.internalPageCount }
              value={ this.userInput !== null ? this.userInput : this.$parent.internalCurrentPage }
              type="number"
              size="small"
              disabled={ this.$parent.disabled }
              nativeOnKeyup={ this.handleKeyup }
              onInput={ this.handleInput }
              onChange={ this.handleChange }/>
            { this.t('el.pagination.pageClassifier') }
          </span>
        );
      }
    },

    Total: {
      mixins: [Locale],

      render(h) {
        return (
          typeof this.$parent.total === 'number'
            ? <span class="y-pagination__total">{ this.t('el.pagination.total', { total: this.$parent.total }) }</span>
            : ''
        );
      }
    },

    MiniPager: {
      render(h) {
        return (
          <span class="y-pager-mini">{this.$parent.internalCurrentPage}/{this.$parent.internalPageCount}</span>
        );
      }
    },

    Pager
  },

  methods: {
    handleCurrentChange(val) {
      this.internalCurrentPage = this.getValidCurrentPage(val);
      this.userChangePageSize = true;
      this.emitChange();
    },

    prev() {
      if (this.disabled) return;
      const newVal = this.internalCurrentPage - 1;
      this.internalCurrentPage = this.getValidCurrentPage(newVal);
      this.$emit('prev-click', this.internalCurrentPage);
      this.emitChange();
    },

    next() {
      if (this.disabled) return;
      const newVal = this.internalCurrentPage + 1;
      this.internalCurrentPage = this.getValidCurrentPage(newVal);
      this.$emit('next-click', this.internalCurrentPage);
      this.emitChange();
    },

    getValidCurrentPage(value) {
      value = parseInt(value, 10);

      const havePageCount = typeof this.internalPageCount === 'number';

      let resetValue;
      if (!havePageCount) {
        if (isNaN(value) || value < 1) resetValue = 1;
      } else {
        if (value < 1) {
          resetValue = 1;
        } else if (value > this.internalPageCount) {
          resetValue = this.internalPageCount;
        }
      }

      if (resetValue === undefined && isNaN(value)) {
        resetValue = 1;
      } else if (resetValue === 0) {
        resetValue = 1;
      }

      return resetValue === undefined ? value : resetValue;
    },

    emitChange() {
      this.$nextTick(() => {
        if (this.internalCurrentPage !== this.lastEmittedPage || this.userChangePageSize) {
          this.$emit('current-change', this.internalCurrentPage);
          this.lastEmittedPage = this.internalCurrentPage;
          this.userChangePageSize = false;
        }
      });
    }
  },

  computed: {
    internalPageCount() {
      if (typeof this.total === 'number') {
        return Math.max(1, Math.ceil(this.total / this.internalPageSize));
      } else if (typeof this.pageCount === 'number') {
        return Math.max(1, this.pageCount);
      }
      return null;
    },
    internalPagerCount() {
      return this.internalPageCount > 10 ? 7 : this.internalPageCount;
    }
  },

  watch: {
    currentPage: {
      immediate: true,
      handler(val) {
        this.internalCurrentPage = this.getValidCurrentPage(val);
      }
    },

    pageSize: {
      immediate: true,
      handler(val) {
        this.internalPageSize = isNaN(val) ? 10 : val;
      }
    },

    internalCurrentPage: {
      immediate: true,
      handler(newVal) {
        this.$emit('update:currentPage', newVal);
        this.lastEmittedPage = -1;
      }
    },

    internalPageCount(newVal) {
      /* istanbul ignore if */
      const oldPage = this.internalCurrentPage;
      if (newVal > 0 && oldPage === 0) {
        this.internalCurrentPage = 1;
      } else if (oldPage > newVal) {
        this.internalCurrentPage = newVal === 0 ? 1 : newVal;
        this.userChangePageSize && this.emitChange();
      }
      this.userChangePageSize = false;
    }
  }
};
