Page({
  data: {
    hHeight: 667
  },
  onLoad() {
    var res = wx.getSystemInfoSync()
    let h = (res.windowWidth/640) * 1680
    this.setData({isHelp: '', hHeight: h})
  }
})