var plugin = requirePlugin("hello-plugin");
Page({
  data: {
    items: [],
    currentItem: 0
  },
  onLoad: function () {
    plugin.sayHello();
    var world = plugin.answer;
    console.log(plugin)
    wx.setStorageSync('idd', 1)
  },
  addItem: function () {
    this.data.items.push(this.data.currentItem++);
    this.setData({
      items: this.data.items,
      currentItem: this.data.currentItem
    });
  }
});