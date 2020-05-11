
Component({
  data: {
    userNameRules: {
      maxLength: {
        value: 6,
        message: '姓名最多6个字',
      },
      minLength: {
        value: 3,
        message: '姓名最少三个字',
      },
    },
    isRequired: {
      required: {
        value: true,
        message: '必填',
      },
    },
    options1: [
      {
        key: '苹果',
        value: 'iphone',
      },
      {
        key: '华为',
        value: 'huawei',
      },
      {
        key: 'oppo音乐手机',
        value: 'oppo',
      },
    ],
    items1: [
      {
        text: '复选框1',
        checked: true,
      },
      {
        text: '复选框2',
        checked: true,
        disabled: true,
      },
      {
        text: '复选框3',
      },
    ],
    textarea_visible: true,
  },
  methods: {
    handlePickerOpen() {
      this.setData({ textarea_visible: true })
    },
    handlePickerCancel() {
      this.setData({ textarea_visible: false })
    },
    wussFormSubmit(e) {
      console.log('提交了:', e.detail);
    },
    wussFormReset(e) {
      console.log('重置了:', e.detail);
    }
  }
  
})