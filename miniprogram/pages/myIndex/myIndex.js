// miniprogram/pages/myIndex/myIndex.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTabIndex: 0,
    isLoading: true,
    tabbar: [
      {
        id: 0,
        name: "首页",
        isActive: true,
      },
      {
        id: 1,
        name: "歌曲",
        isActive: false,
      },
      {
        id: 2,
        name: "关于",
        isActive: false,
      },
    ],
  },

  methods: {
    showLoading() {
      this.setData({ isLoading: true });
      wx.showLoading({
        title: "刷新中",
      });
    },
    userLogin() {
      wx.login({
        timeout: 3000,
        success: (res) => {
          wx.request({
            url:
              "https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code",
            data: {
              appid: "wx0b9f379dc1096327",
              secret: "f715ce5d09e57fcdb0cd46c1b21484b1",
              js_code: res.code,
              grant_type: "authorization_code",
            },
            success: (res) => console.log(res),
          });
        },
      });
    },
  },
  tabChange(args) {
    const { newTabIndex } = args.detail;
    if (newTabIndex === this.data.currentTabIndex) wx.startPullDownRefresh();
    else this.setData({ currentTabIndex: newTabIndex });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({ isLoading: false });
    this.methods.userLogin();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    const index = this.data.currentTabIndex;
    // const contentCpn = this.selectComponent(".content");
    switch (index) {
      case 0: {
        this.methods.showLoading.call(this);
        setTimeout(() => {
          this.setData({ isLoading: false });
          wx.hideLoading();
          wx.stopPullDownRefresh();
        }, 1000);
        break;
      }
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
