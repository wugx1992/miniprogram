// index/index.js 入口页面，登录授权

//获取应用实例
const app = getApp()

Component({
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  methods: {
    onLoad: function () {
      const ref = this;
      console.log("onload /index/index 页面")

      // 查看是否授权
      wx.getSetting({
        success(res) {
          if (res.authSetting['scope.userInfo']) {
            if (!app.globalData.userInfo){
              console.log("已经授权，可以直接调用 getUserInfo")
              // 已经授权，可以直接调用 getUserInfo，获取用户信息
              wx.getUserInfo({
                success: function (res) {
                  console.log(res.userInfo)
                  // 可以将 res 发送给后台解码出 unionId
                  app.globalData.userInfo = res.userInfo
                  ref.setData({ hasUserInfo: true });
                  //TODO 完成用户信息加载，继续执行后续业务逻辑
                  ref.route2Pages();
                }
              })
            }else{
              //TODO 完成用户信息加载，继续执行后续业务逻辑
              ref.route2Pages();
            }
          }
        }
      })

    },
    getUserInfo: function (e) {
      console.log(e);
      // 授权弹窗回调处理
      if (!app.globalData.userInfo){
        if (!e.detail.userInfo){
          return;
        }
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({ hasUserInfo: true});
        //TODO 新用户授权，后端注册用户
      }
      //TODO 完成用户信息加载，继续执行后续业务逻辑
      this.route2Pages();
    },
    route2Pages: function() {
      const pages = getCurrentPages();
      console.log("当前页面路径"+pages[pages.length-1].route);
      // 页面跳转
      wx.switchTab({ 
        url: "/pages/home/home"
       });


    }

  }
})
