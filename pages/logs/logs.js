//logs.js
import { Alert, Toast } from 'wuss-weapp';
const util = require('../../utils/util.js')

Component({
  data: {
    logs: []
  },
  pageLifetimes: {
    show() {
      console.log("logs page show");
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  },
  methods: {
    onLoad: function () {
      const pages = getCurrentPages();
      console.log("当前页面路径" + pages[pages.length - 1].route);
      
      this.setData({
        logs: (wx.getStorageSync('logs') || []).map(log => {
          return util.formatTime(new Date(log))
        })
      })
    },
    buttonClick: function () {
      console.log("the button been clicked!");

      wx.request({
        url: 'https://developers.weixin.qq.com', //仅为示例，并非真实的接口地址
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          console.log(res.data)
        }
      })


      
    }
  }
  
})
