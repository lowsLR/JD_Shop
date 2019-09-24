// pages/allorders/allorders.js
//引入全部订单
const allorderData = require("../../data/allorder.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    allorder: [],
    totall: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var allorder = that.loadallorder(0)
    that.setData({
      allorder: allorder
    })
    // console.log(allorder, "allorder")
  },
  //点击切换
  switchTab: function(e) {
    var that = this;
    // console.log(e, "switchTab")
    var index = e.target.dataset.current;
    if (that.currentTab == index) {
      return false;
    } else {
      that.setData({
        currentTab: index
      })
    }
    var allorder = that.loadallorder(index)
    that.setData({
      allorder: allorder
    })
    // console.log(allorder, "allorder")
    var totall = null;
    for (var i = 0; i < allorder.length; i++) {
      var num = allorder[i];
      totall += (num.price * num.count)
    }
    var tofixednum = totall.toFixed(2)
    console.log(tofixednum, "totall")
    that.setData({
      totall: tofixednum
    })
  },

  loadallorder: function(params) {
    var that = this;
    // console.log(allorderData.orderdata, "allorderData");
    var result = new Array()
    var allOrderList = allorderData.orderdata;
    for (var i = 0; i < allOrderList.length; i++) {
      if (params == allOrderList[i].type) {
        result.push(allOrderList[i])
      }
    }
    return result;
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})