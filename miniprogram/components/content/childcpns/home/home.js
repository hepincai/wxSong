// components/content/childcpns/home/home.js
Component({
  /**
   * 组件的属性列表
   */
  attached() {
    // fetchData();
    // console.log("home attached");
  },
  properties: {
    songList: {
      type: Array,
      value: [],
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    baseUrl: "http://172.29.31.160:8080/image",
  },
  // onPullDownRefresh() {
  //   console.log("refresh!");
  // },
  // onLoad() {
  //   console.log("loaded!");
  // },
  /**
   * 组件的方法列表
   */
  methods: {},
});
