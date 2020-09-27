// components/content/content.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentTabIndex: {
      type: Number,
      value: 0,
    },
    isLoading: {
      type: Boolean,
      value: true,
    },
  },
  attached() {
    // this.fetchHomeData();
  },
  /**
   * 组件的初始数据
   */
  data: {
    url: {
      randomSong: "http://172.29.31.160:8080/Song/getRandSong",
    },
    songList: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    fetchHomeData() {
      wx.request({
        url: this.data.url.randomSong,
        success: (res) => {
          this.setData({ songList: res.data }, () =>
            console.log(this.data.songList)
          );
        },
        fail: (err) => console.log(err),
      });
    },
  },
});
