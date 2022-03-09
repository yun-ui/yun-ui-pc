<style lang="scss">
.component-preview {
  padding-right: 10px;
  &:last-of-type {
    padding-bottom: 20px;
  }
  h4 {
    font-size: 20px;
    margin: 40px 0 20px;
    color: #909399
  }
  .demo-item {
    margin-top: 10px;
    margin-right: 40px;
  }

  .demo-line {
    margin: 15px 0;
  }

  .y-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .y-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .y-avatar:not(:last-child) {
    margin-right: 20px;
  }

  .avatar-demo {
    display: flex;
    align-items: center;
  }
}
</style>
<template>
  <div class="component-preview">
    <h4>Button</h4>
    <y-row class="demo-line">
      <y-button>Default</y-button>
      <y-button type="primary">Primary</y-button>
      <y-button type="success">Success</y-button>
      <y-button type="info">Info</y-button>
      <y-button type="warning">Warning</y-button>
      <y-button type="danger">Danger</y-button>
    </y-row>
    <y-row class="demo-line">
      <y-button plain>Plain</y-button>
      <y-button type="primary" plain>Primary</y-button>
      <y-button type="success" plain>Success</y-button>
      <y-button type="info" plain>Info</y-button>
      <y-button type="warning" plain>Warning</y-button>
      <y-button type="danger" plain>Danger</y-button>
    </y-row>
    <y-row class="demo-line">
      <y-button round>Round</y-button>
      <y-button type="primary" round>Primary</y-button>
      <y-button type="success" round>Success</y-button>
      <y-button type="info" round>Info</y-button>
      <y-button type="warning" round>Warning</y-button>
      <y-button type="danger" round>Danger</y-button>
    </y-row>
    <y-row class="demo-line">
      <y-button icon="y-icon-search" circle></y-button>
      <y-button type="primary" icon="y-icon-edit" circle></y-button>
      <y-button type="success" icon="y-icon-check" circle></y-button>
      <y-button type="info" icon="y-icon-message" circle></y-button>
      <y-button type="warning" icon="y-icon-star-off" circle></y-button>
      <y-button type="danger" icon="y-icon-delete" circle></y-button>
    </y-row>
    <y-row class="demo-line">
      <y-button>Default</y-button>
      <y-button size="medium">Medium</y-button>
      <y-button size="small">Small</y-button>
      <y-button size="mini">Mini</y-button>
    </y-row>
    <h4>Radio</h4>
    <y-row class="demo-line">
      <y-radio v-model="radio" label="1">Option A</y-radio>
      <y-radio v-model="radio" label="2">Option B</y-radio>
    </y-row>
    <y-row class="demo-line">
      <y-radio-group v-model="radio1">
        <y-radio-button label="New York"></y-radio-button>
        <y-radio-button label="Washington"></y-radio-button>
        <y-radio-button label="Los Angeles"></y-radio-button>
        <y-radio-button label="Chicago"></y-radio-button>
      </y-radio-group>
    </y-row>
    <y-row class="demo-line">
      <y-radio v-model="radio2" label="1" border>Option A</y-radio>
      <y-radio v-model="radio2" label="2" border>Option B</y-radio>
    </y-row>
    <h4>Checkbox</h4>
    <y-row class="demo-line">
      <y-checkbox v-model="checked">Option</y-checkbox>
    </y-row>
    <y-row class="demo-line">
      <y-checkbox-group v-model="checked1">
        <y-checkbox-button v-for="city in ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']" :label="city" :key="city">{{city}}</y-checkbox-button>
      </y-checkbox-group>
    </y-row>
    <y-row class="demo-line">
      <y-checkbox v-model="checked2" label="Option1" border></y-checkbox>
    </y-row>
    <h4>Input</h4>
    <y-row style="width: 180px">
      <y-input placeholder="Please input" v-model="input"></y-input>
    </y-row>
    <h4>InputNumber</h4>
    <y-row>
      <y-input-number v-model="inputNumber" :min="1" :max="10"></y-input-number>
    </y-row>
    <h4>Select</h4>
    <y-row>
      <y-select v-model="selectValue" placeholder="Select">
        <y-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></y-option>
      </y-select>
    </y-row>
    <h4>Cascader</h4>
    <y-row>
      <y-cascader :options="cascadeOptions" v-model="cascaderValue"></y-cascader>
    </y-row>
    <h4>Switch</h4>
    <y-row>
      <y-switch v-model="switchValue"></y-switch>
      <y-switch
        style="margin-left: 40px"
        v-model="switchValue"
        active-text="Pay by month"
        inactive-text="Pay by year">
      </y-switch>
    </y-row>
    <h4>Slider</h4>
    <y-row style="width: 380px">
      <y-slider v-model="slider"></y-slider>
    </y-row>
    <h4>DatePicker</h4>
    <y-row>
      <y-date-picker v-model="datePicker" type="date"></y-date-picker>
    </y-row>
    <h4>Rate</h4>
    <y-row>
      <y-rate class="demo-line" v-model="rate"></y-rate>
      <y-rate
        class="demo-line"
        v-model="rate"
        show-score
        text-color="#ff9900"
        score-template="{value} points">
      </y-rate>
    </y-row>
    <h4>Transfer</h4>
    <y-row>
      <y-transfer v-model="transfer" filterable :data="transferData">
        <y-button class="transfer-footer" slot="left-footer" size="small">Operation</y-button>
        <y-button class="transfer-footer" slot="right-footer" size="small">Operation</y-button>
      </y-transfer>
    </y-row>
    <h4>Table</h4>
    <y-row>
      <y-table :data="tableData" style="width: 70%">
        <y-table-column prop="date" label="Date" width="180"></y-table-column>
        <y-table-column prop="name" label="Name" width="180"></y-table-column>
        <y-table-column prop="address" label="Address"></y-table-column>
      </y-table>
    </y-row>
    <h4>Tag</h4>
    <y-row>
      <y-tag class="demo-item" closable>Tag One</y-tag>
      <y-tag class="demo-item" closable type="success">Tag Two</y-tag>
      <y-tag class="demo-item" closable type="info">Tag Three</y-tag>
      <y-tag class="demo-item" closable type="warning">Tag Four</y-tag>
      <y-tag class="demo-item" closable type="danger">Tag Five</y-tag>
    </y-row>
    <h4>Progress</h4>
    <y-row style="width: 380px">
      <y-progress :percentage="20"></y-progress>
      <y-progress :percentage="60" status="exception"></y-progress>
      <y-progress :percentage="100" status="success"></y-progress>
    </y-row>
    <h4>Tree</h4>
    <y-row style="width: 380px">
      <y-tree :data="treeData" :props="defaultTreeProps" ></y-tree>
    </y-row>
    <h4>Pagination</h4>
    <y-row>
      <y-pagination layout="prev, pager, next" :total="1000"></y-pagination>
    </y-row>
    <h4>Badge</h4>
    <y-row>
      <y-badge :value="12" class="demo-item">
        <y-button size="small">comments</y-button>
      </y-badge>
      <y-badge :value="3" class="demo-item">
        <y-button size="small">replies</y-button>
      </y-badge>
      <y-badge :value="1" class="demo-item" type="primary">
        <y-button size="small">comments</y-button>
      </y-badge>
      <y-badge :value="2" class="demo-item" type="warning">
        <y-button size="small">replies</y-button>
      </y-badge>
    </y-row>
    <h4>Alert</h4>
    <y-row style="width: 380px;">
      <y-alert class="demo-item" title="success alert" type="success" show-icon></y-alert>
      <y-alert class="demo-item" title="info alert" type="info" close-text="Gotcha" show-icon></y-alert>
      <y-alert class="demo-item" title="warning alert" type="warning" show-icon></y-alert>
      <y-alert
        class="demo-item"
        title="error alert"
        type="error"
        description="more text description"
        show-icon>
      </y-alert>
    </y-row>
    <h4>Loading</h4>
    <y-row>
      <y-table :data="tableData" style="width: 90%" v-loading="true">
        <y-table-column prop="date" label="Date" width="180"></y-table-column>
        <y-table-column prop="name" label="Name" width="180"></y-table-column>
        <y-table-column prop="address" label="Address"></y-table-column>
      </y-table>
    </y-row>
    <h4>Message</h4>
    <y-row>
      <div role="alert" class="demo-item y-message y-message--success y-message-fade-leave-active y-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="y-message__icon y-icon-success"></i><p class="y-message__content">Congrats, this is a success message.</p><!----></div>
      <div role="alert" class="demo-item y-message y-message--warning y-message-fade-leave-active y-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="y-message__icon y-icon-warning"></i><p class="y-message__content">Warning, this is a warning message.</p><!----></div>
      <div role="alert" class="demo-item y-message y-message--info y-message-fade-leave-active y-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="y-message__icon y-icon-info"></i><p class="y-message__content">This is a message.</p><!----></div>
      <div role="alert" class="demo-item y-message y-message--error is-closable y-message-fade-leave-active y-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="y-message__icon y-icon-error"></i><p class="y-message__content">Oops, this is a error message.</p><i class="y-message__closeBtn y-icon-close"></i></div>
    </y-row>
    <h4>MessageBox</h4>
    <y-row>
      <div class="y-message-box"><div class="y-message-box__header"><div class="y-message-box__title"><!----><span>Warning</span></div><button type="button" aria-label="Close" class="y-message-box__headerbtn"><i class="y-message-box__close y-icon-close"></i></button></div><div class="y-message-box__content"><div class="y-message-box__status y-icon-warning"></div><div class="y-message-box__message"><p>This will permanently delete the file. Continue?</p></div><div class="y-message-box__input" style="display: none;"><div class="y-input"><!----><input type="text" autocomplete="off" placeholder="" class="y-input__inner"><!----><!----><!----></div><div class="y-message-box__errormsg" style="visibility: hidden;"></div></div></div><div class="y-message-box__btns"><button type="button" class="y-button y-button--default y-button--small"><!----><!----><span>
          Cancel
        </span></button><button type="button" class="y-button y-button--default y-button--small y-button--primary "><!----><!----><span>
          OK
        </span></button></div></div>
    </y-row>
    <h4>Notification</h4>
    <y-row>
      <div role="alert" class="y-notification right" style="position: relative; left: 0;"><!----><div class="y-notification__group"><span class="y-notification__title">Notification</span><div class="y-notification__content"><div>This is a message </div></div><div class="y-notification__closeBtn y-icon-close"></div></div></div>
    </y-row>
    <h4>Menu</h4>
    <y-row>
      <y-menu :default-active="menu" class="y-menu-demo" mode="horizontal">
        <y-menu-item index="1">Processing Center</y-menu-item>
        <y-submenu index="2">
          <template slot="title">Workspace</template>
          <y-menu-item index="2-1">item one</y-menu-item>
          <y-menu-item index="2-2">item two</y-menu-item>
          <y-menu-item index="2-3">item three</y-menu-item>
          <y-submenu index="2-4">
            <template slot="title">item four</template>
            <y-menu-item index="2-4-1">item one</y-menu-item>
            <y-menu-item index="2-4-2">item two</y-menu-item>
            <y-menu-item index="2-4-3">item three</y-menu-item>
          </y-submenu>
        </y-submenu>
        <y-menu-item index="3" disabled>Info</y-menu-item>
        <y-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">Orders</a>
        </y-menu-item>
      </y-menu>
      <y-menu
        default-active="2"
        class="demo-line"
      >
        <y-submenu index="1">
          <template slot="title">
            <i class="y-icon-location"></i>
            <span>Navigator One</span>
          </template>
          <y-menu-item-group title="Group One">
            <y-menu-item index="1-1">item one</y-menu-item>
            <y-menu-item index="1-2">item one</y-menu-item>
          </y-menu-item-group>
          <y-menu-item-group title="Group Two">
            <y-menu-item index="1-3">item three</y-menu-item>
          </y-menu-item-group>
          <y-submenu index="1-4">
            <template slot="title">item four</template>
            <y-menu-item index="1-4-1">item one</y-menu-item>
          </y-submenu>
        </y-submenu>
        <y-menu-item index="2">
          <i class="y-icon-menu"></i>
          <span>Navigator Two</span>
        </y-menu-item>
        <y-menu-item index="3" disabled>
          <i class="y-icon-document"></i>
          <span>Navigator Three</span>
        </y-menu-item>
        <y-menu-item index="4">
          <i class="y-icon-setting"></i>
          <span>Navigator Four</span>
        </y-menu-item>
      </y-menu>
    </y-row>
    <h4>Tabs</h4>
    <y-row>
      <y-tabs v-model="tab" class="demo-item">
        <y-tab-pane label="User" name="first">User</y-tab-pane>
        <y-tab-pane label="Config" name="second">Config</y-tab-pane>
        <y-tab-pane label="Role" name="third">Role</y-tab-pane>
        <y-tab-pane label="Task" name="fourth">Task</y-tab-pane>
      </y-tabs>
      <y-tabs type="card" class="demo-item">
        <y-tab-pane label="User">User</y-tab-pane>
        <y-tab-pane label="Config">Config</y-tab-pane>
        <y-tab-pane label="Role">Role</y-tab-pane>
        <y-tab-pane label="Task">Task</y-tab-pane>
      </y-tabs>
    </y-row>
    <h4>Dialog</h4>
    <y-row>
      <div role="dialog" aria-modal="true" aria-label="Tips" class="y-dialog" style="margin: 0"><div class="y-dialog__header"><span class="y-dialog__title">Tips</span><button type="button" aria-label="Close" class="y-dialog__headerbtn"><i class="y-dialog__close y-icon y-icon-close"></i></button></div><div class="y-dialog__body"><span>This is a message</span> </div><div class="y-dialog__footer"><span class="dialog-footer"><button type="button" class="y-button y-button--default"><!----><!----><span>Cancel</span></button> <button type="button" class="y-button y-button--primary"><!----><!----><span>Confirm</span></button></span></div></div>
    </y-row>
    <h4>Tooltip</h4>
    <y-row>
      <div role="tooltip" x-placement="top" class="y-tooltip__popper is-dark" style="position: relative; width: 40px;text-align: center;">Dark<div x-arrow="" class="popper__arrow"></div>
      </div>
      <div role="tooltip" x-placement="top" class="y-tooltip__popper is-light" style="margin-top: 10px;position: relative; width: 40px;text-align: center;">Light<div x-arrow="" class="popper__arrow"></div>
      </div>
    </y-row>
    <h4>Popover</h4>
    <y-row>
      <div role="tooltip" x-placement="top" id="y-popover-2936" aria-hidden="true" class="y-popover y-popper y-popover--plain" tabindex="0" style="width: 200px; position: relative; "><div class="y-popover__title">Title</div>this is content, this is content, this is content<div x-arrow="" class="popper__arrow"></div></div>
    </y-row>
    <h4>Card</h4>
    <y-row>
      <y-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Card name</span>
        </div>
      </y-card>
    </y-row>
    <h4>Carousel</h4>
    <y-row>
      <y-carousel height="150px">
        <y-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </y-carousel-item>
      </y-carousel>
    </y-row>
    <h4>Collapse</h4>
    <y-row>
      <y-collapse v-model="collapse">
        <y-collapse-item title="Consistent" name="1">
          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
        </y-collapse-item>
        <y-collapse-item title="Feedback" name="2">
          <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
        </y-collapse-item>
      </y-collapse>
    </y-row>
    <h4>Avatar</h4>
    <y-row class="demo-line avatar-demo">
      <y-avatar icon="y-icon-user-solid"/>
      <y-avatar> avatar </y-avatar>
      <y-avatar shape="square" fit="contain" :src="avatarData.url"></y-avatar>
      <y-avatar size="large"> large </y-avatar>
      <y-avatar size="medium"> medium </y-avatar>
      <y-avatar size="small"> small </y-avatar>
    </y-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '1',
      radio1: 'Washington',
      radio2: '1',
      checked: true,
      checked1: ['Shanghai'],
      checked2: true,
      input: 'Yun',
      inputNumber: 1,
      selectOptions: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        },
        {
          value: 'Option3',
          label: 'Option3'
        },
        {
          value: 'Option4',
          label: 'Option4'
        },
        {
          value: 'Option5',
          label: 'Option5'
        }
      ],
      selectValue: '',
      cascadeOptions: [
        {
          value: 'guide',
          label: 'Guide',
          children: [
            {
              value: 'disciplines',
              label: 'Disciplines',
              children: [
                {
                  value: 'consistency',
                  label: 'Consistency'
                },
                {
                  value: 'feedback',
                  label: 'Feedback'
                }
              ]
            }
          ]
        },
        {
          value: 'resource',
          label: 'Resource',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'docs',
              label: 'Design Documentation'
            }
          ]
        }
      ],
      cascaderValue: [],
      switchValue: true,
      slider: 28,
      datePicker: '',
      rate: null,
      transferData: (() => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `Option ${i}`,
            disabled: i % 4 === 0
          });
        }
        return data;
      })(),
      transfer: [1, 4],
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ],
      menu: '1',
      tab: 'first',
      collapse: ['1'],
      treeData: [{
        label: 'Level one 1',
        children: [{
          label: 'Level two 1-1',
          children: [{
            label: 'Level three 1-1-1'
          }]
        }]
      }, {
        label: 'Level one 2',
        children: [{
          label: 'Level two 2-1',
          children: [{
            label: 'Level three 2-1-1'
          }]
        }, {
          label: 'Level two 2-2',
          children: [{
            label: 'Level three 2-2-1'
          }]
        }]
      }, {
        label: 'Level one 3',
        children: [{
          label: 'Level two 3-1',
          children: [{
            label: 'Level three 3-1-1'
          }]
        }, {
          label: 'Level two 3-2',
          children: [{
            label: 'Level three 3-2-1'
          }]
        }]
      }],
      defaultTreeProps: {
        children: 'children',
        label: 'label'
      },
      avatarData: {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    };
  }
};
</script>
