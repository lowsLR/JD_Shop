// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: [],
    name: ""
  },
  // 搜索列表的数据
  loadGoods: function() {
    var goods = [
      '男装裤子', '男装长袖', '女装长袖', '女装短袖', '男装短袖', '咖啡', '咖啡粉', '咖啡机', '咖啡杯', '咖啡豆', '咖啡壶', '豆浆', '豆汁', '豆奶'
    ];
    return goods;
  },
  //失去焦点时
  searchGoods: function(e) {
    var that = this;
    var name = e.detail.value;
    // console.log(name,"aaa")
    var goods = that.loadGoods()
    var result = new Array()
    if (name != "") {
      for (var i = 0; i < goods.length; i++) {
        var good = goods[i];
        //判断数组里是否有输入的内容
        if (good.indexOf(name) > -1) {
          result.push(good)
        }
      }
    }
    // console.log(result)
    that.setData({
      result: result
    })
  },
  //取消
  resetSearch: function(e) {
    var that = this;
    var result = new Array();
    that.setData({
      result: result,
      name: ""
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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