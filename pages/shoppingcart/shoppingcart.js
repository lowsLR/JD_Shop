// pages/shoppingcart/shoppingcart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [],
    selected: true,
    selectedAll: true,
    totalPrice: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.loadGoods()
  },
  //购物车数据
  loadGoods: function() {
    //获取本地数据
    var that = this;
    var goods = wx.getStorageSync('goods');
    that.setData({
      goods: goods
    })
    var totalPrice = 0;
    //默认本地缓冲总价格
    for (var i = 0; i < goods.length; i++) {
      var good = goods[i];
      totalPrice += good.price * good.count
    }
    that.setData({
      totalPrice: totalPrice
    })
  },
  //单选
  checkboxChange: function(e) {
    var that = this;
    var ids = e.detail.value;
    // console.log(ids,"ids")
    //是否全部选择
    if (ids.length == 0) {
      that.setData({
        selectedAll: false
      })
    } else {
      that.setData({
        selectedAll: true
      })
    }
    var goods = wx.getStorageSync('goods')
    var totalPrice = 0;
    //选中的计算总金额
    for (var i = 0; i < goods.length; i++) {
      var good = goods[i];
      for (var j = 0; j < ids.length; j++) {
        if (good.id == ids[j]) {
          totalPrice += good.price * good.count
        }
      }
    }
    that.setData({
      totalPrice: totalPrice
    })
  },

  //全选
  checkAll: function(e) {
    console.log(e, "checkAll")
    var that = this;
    var selected = that.data.selected;
    var result = selected == true ? false : true
    //首先that.data.selected = true  ，result ==> false
    that.setData({
      selected: result
    })
    if (result == false) {
      that.setData({
        totalPrice: 0
      })
    } else {
      that.loadGoods()
    }
    if (that.selectedAll == true) {
      that.setData({
        selectedAll: true
      })
    }
  },

  //添加
  addGoods: function(e) {
    var that = this;
    var id = e.currentTarget.id;
    console.log(id)
    var goods = wx.getStorageSync('goods');
    var addGoods = new Array();
    for (var i = 0; i < goods.length; i++) {
      var good = goods[i];
      if (good.id == id) {
        var count = good.count;
        good.count = count + 1
      }
      addGoods[i] = good
    }
    wx.setStorageSync('goods', addGoods)
    that.loadGoods()
  },
  //减少
  minusGoods: function(e) {
    var that = this;
    var id = e.currentTarget.id;
    console.log(id)
    var goods = wx.getStorageSync('goods');
    var addGoods = new Array();
    // var add = true;
    for (var i = 0; i < goods.length; i++) {
      var good = goods[i];
      if (good.id == id) {
        var count = good.count;
        if (count >= 2) {
          good.count = count - 1
        }
      }
      addGoods[i] = good
    }
    wx.setStorageSync('goods', addGoods)
    that.loadGoods()
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