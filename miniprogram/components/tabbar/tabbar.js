// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: [],
    },
  },
  externalClasses: ["bar-pos"],
  /**
   * 组件的初始数据
   */
  data: {
    tabList: [],
    currentIndex: 0,
  },
  attached() {
    this.setData({ tabList: JSON.parse(JSON.stringify(this.properties.list)) });
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabtap(e) {
      const tabList = JSON.parse(JSON.stringify(this.data.tabList));
      const index = e.currentTarget.dataset.index;
      tabList.forEach((item) => (item.isActive = false));
      tabList[index].isActive = true;
      this.setData({ tabList });
      this.triggerEvent("tabChange", { newTabIndex: index });
    },
  },
});
