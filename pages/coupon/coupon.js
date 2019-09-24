// pages/coupon/coupon.js
//引入优惠卷数据
const couponData = require("../../data/coupons.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    coupons: [],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var coupons = that.loadCounpons(0);
    that.setData({
      coupons: coupons
    })
    // console.log(coupons, "result") type == 0 为待用 ，1已过期，2已使用
  },
  //切换页面
  switchNav: function(e) {
    // console.log(e, "switchNav")
    var that = this;
    var index = e.target.dataset.id
    console.log(index,"index")
    if (that.currentTab == index) {
      return false;
    } else {
      that.setData({
        currentTab: index
      })
    }
    //切换时 更换优惠卷type == 0 ==1 ==2 ？
    var coupons = that.loadCounpons(index);
    that.setData({
      coupons: coupons
    })
  },
  //优惠卷数据
  loadCounpons: function(flag) {
    var that = this;
    var result = new Array();
    // console.log(couponData.data, "couponData")
    var couponList = couponData.data;
    // console.log(couponData.data.length, "i")
    for (var i = 0; i < couponList.length; i++) {
      // console.log(couponList[i].type, "i")
      if (flag == couponList[i].type) {
        result.push(couponList[i])
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