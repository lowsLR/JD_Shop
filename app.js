//app.js
App({
  onLaunch: function() {
    var that = this
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

    //购物车商品数据
    var goods = wx.getStorageSync('goods')
    if (!goods) {
      goods = that.loadGoods();
    }
    wx.setStorageSync('goods', goods)
  },

  loadGoods: function() {
    var goods = new Array();
    var good = new Object();
    good.id = "0";
    good.pic = "http://img009.hc360.cn/y1/M07/63/D2/wKhQc1RzCWOEdHKvAAAAAFR84nk347.jpg";
    good.name = "【京东超市】TP-Link TP-WN726免驱版 外置天线 USB无线网卡";
    good.price = "86.00";
    good.weight = "0.1000kg";
    good.spec = "外置天线";
    good.count = 1;
    goods[0] = good;

    var good1 = new Object();
    good1.id = "1";
    good1.pic = "http://img009.hc360.cn/y1/M07/63/D2/wKhQc1RzCWOEdHKvAAAAAFR84nk347.jpg";
    good1.name = "【京东超市】TP-Link TP-WN726免驱版 外置天线 USB无线网卡";
    good1.price = "86.00";
    good1.weight = "0.1000kg";
    good1.spec = "外置天线";
    good1.count = 1;
    goods[1] = good1;

    var good2 = new Object();
    good2.id = "2";
    good2.pic = "http://img009.hc360.cn/y1/M07/63/D2/wKhQc1RzCWOEdHKvAAAAAFR84nk347.jpg";
    good2.name = "【京东超市】TP-Link TP-WN726免驱版 外置天线 USB无线网卡";
    good2.price = "86.00";
    good2.weight = "0.1000kg";
    good2.spec = "外置天线";
    good2.count = 1;
    goods[2] = good2;
    return goods;
  },
  globalData: {
    userInfo: null
  }
})