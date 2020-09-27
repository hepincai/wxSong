// components/content/childcpns/song/song.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    tabbar: [
      {
        id: 0,
        name: "类型1",
        isActive: true,
      },
      {
        id: 1,
        name: "类型2",
        isActive: false,
      },
    ],
    songs: [],
    imgList: [
      "https://imgs.gamersky.com/pic/2020/20200925_yy_461_3.jpg",
      "https://imgs.gamersky.com/pic/2020/20200925_zcq_252_07.jpg",
      "https://imgs.gamersky.com/upimg/new_preview/2020/09/21/origin_202009211616297705.jpg",
    ],
  },
  attached() {
    // console.log("attached");
  },
  detached() {
    // console.log("detached");
  },
  /**
   * 组件的方法列表
   */
  methods: {
    tabChange(args) {
      const { newTabIndex } = args.detail;
      console.log(newTabIndex);
    },
  },
});
