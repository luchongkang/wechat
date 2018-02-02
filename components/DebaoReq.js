export default {
  isFunction(functionToCheck) {
    var getType = {}
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  },
  req(data, callkback) {
    var that = this;
    if(!this.isFunction(callkback)){
      console.log('not a function')
      return false
    }
    wx.request({
      url: 'https://www.debao.com/service/router.php',
      header: { 'content-type': 'application/x-www-form-urlencoded'},
      data: data,
      method: 'POST',
      success: callkback
    })
  }
}