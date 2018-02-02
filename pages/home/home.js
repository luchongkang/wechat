import ranks  from '../../components/card/card'
import Debao from '../../components/DebaoReq'
import encrypt from '../../components/md5'
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    pokers:[
      // ID：牌型ID 对应的是 cards字段  c ：牌型花色黑桃、红心、梅花、方片 对应的 shape s:是否已经选择 d:是否为死牌
      {'pid':0,'id': 0, 'c': 0,'s':0,'d':0},{'pid':1,'id': 0, 'c': 1,'s':0,'d':0},{'pid':2,'id': 0, 'c': 2,'s':0,'d':0},{'pid':3,'id': 0, 'c': 3,'s':0,'d':0},//A
      {'pid':4,'id': 1, 'c': 0,'s':0,'d':0},{'pid':5,'id': 1, 'c': 1,'s':0,'d':0},{'pid':6,'id': 1, 'c': 2,'s':0,'d':0},{'pid':7,'id': 1, 'c': 3,'s':0,'d':0},//K
      {'pid':8,'id': 2, 'c': 0,'s':0,'d':0},{'pid':9,'id': 2, 'c': 1,'s':0,'d':0},{'pid':10,'id': 2, 'c': 2,'s':0,'d':0},{'pid':11,'id': 2, 'c': 3,'s':0,'d':0},//Q
      {'pid':12,'id': 3, 'c': 0,'s':0,'d':0},{'pid':13,'id': 3, 'c': 1,'s':0,'d':0},{'pid':14,'id': 3, 'c': 2,'s':0,'d':0},{'pid':15,'id': 3, 'c': 3,'s':0,'d':0},//J
      {'pid':16,'id': 4, 'c': 0,'s':0,'d':0},{'pid':17,'id': 4, 'c': 1,'s':0,'d':0},{'pid':18,'id': 4, 'c': 2,'s':0,'d':0},{'pid':19,'id': 4, 'c': 3,'s':0,'d':0},//10
      {'pid':20,'id': 5, 'c': 0,'s':0,'d':0},{'pid':21,'id': 5, 'c': 1,'s':0,'d':0},{'pid':22,'id': 5, 'c': 2,'s':0,'d':0},{'pid':23,'id': 5, 'c': 3,'s':0,'d':0},//9
      {'pid':24,'id': 6, 'c': 0,'s':0,'d':0},{'pid':25,'id': 6, 'c': 1,'s':0,'d':0},{'pid':26,'id': 6, 'c': 2,'s':0,'d':0},{'pid':27,'id': 6, 'c': 3,'s':0,'d':0},//8
      {'pid':28,'id': 7, 'c': 0,'s':0,'d':0},{'pid':29,'id': 7, 'c': 1,'s':0,'d':0},{'pid':30,'id': 7, 'c': 2,'s':0,'d':0},{'pid':31,'id': 7, 'c': 3,'s':0,'d':0},//7
      {'pid':32,'id': 8, 'c': 0,'s':0,'d':0},{'pid':33,'id': 8, 'c': 1,'s':0,'d':0},{'pid':34,'id': 8, 'c': 2,'s':0,'d':0},{'pid':35,'id': 8, 'c': 3,'s':0,'d':0},//6
      {'pid':36,'id': 9, 'c': 0,'s':0,'d':0},{'pid':37,'id': 9, 'c': 1,'s':0,'d':0},{'pid':38,'id': 9, 'c': 2,'s':0,'d':0},{'pid':39,'id': 9, 'c': 3,'s':0,'d':0},//5
      {'pid':40,'id': 10, 'c': 0,'s':0,'d':0},{'pid':41,'id': 10, 'c': 1,'s':0,'d':0},{'pid':42,'id': 10, 'c': 2,'s':0,'d':0},{'pid':43,'id': 10, 'c': 3,'s':0,'d':0},//4
      {'pid':44,'id': 11, 'c': 0,'s':0,'d':0},{'pid':45,'id': 11, 'c': 1,'s':0,'d':0},{'pid':46,'id': 11, 'c': 2,'s':0,'d':0},{'pid':47,'id': 11, 'c': 3,'s':0,'d':0},//3
      {'pid':48,'id': 12, 'c': 0,'s':0,'d':0},{'pid':49,'id': 12, 'c': 1,'s':0,'d':0},{'pid':50,'id': 12, 'c': 2,'s':0,'d':0},{'pid':51,'id': 12, 'c': 3,'s':0,'d':0}//2
    ],
    deadCard:[
      // ID：牌型ID 对应的是 cards字段  c ：牌型花色黑桃、红心、梅花、方片 对应的 shape s:是否已经选择
      {'pid':0,'id': 0, 'c': 0,'s':0},{'pid':1,'id': 0, 'c': 1,'s':0},{'pid':2,'id': 0, 'c': 2,'s':0},{'pid':3,'id': 0, 'c': 3,'s':0},//A
      {'pid':4,'id': 1, 'c': 0,'s':0},{'pid':5,'id': 1, 'c': 1,'s':0},{'pid':6,'id': 1, 'c': 2,'s':0},{'pid':7,'id': 1, 'c': 3,'s':0},//K
      {'pid':8,'id': 2, 'c': 0,'s':0},{'pid':9,'id': 2, 'c': 1,'s':0},{'pid':10,'id': 2, 'c': 2,'s':0},{'pid':11,'id': 2, 'c': 3,'s':0},//Q
      {'pid':12,'id': 3, 'c': 0,'s':0},{'pid':13,'id': 3, 'c': 1,'s':0},{'pid':14,'id': 3, 'c': 2,'s':0},{'pid':15,'id': 3, 'c': 3,'s':0},//J
      {'pid':16,'id': 4, 'c': 0,'s':0},{'pid':17,'id': 4, 'c': 1,'s':0},{'pid':18,'id': 4, 'c': 2,'s':0},{'pid':19,'id': 4, 'c': 3,'s':0},//10
      {'pid':20,'id': 5, 'c': 0,'s':0},{'pid':21,'id': 5, 'c': 1,'s':0},{'pid':22,'id': 5, 'c': 2,'s':0},{'pid':23,'id': 5, 'c': 3,'s':0},//9
      {'pid':24,'id': 6, 'c': 0,'s':0},{'pid':25,'id': 6, 'c': 1,'s':0},{'pid':26,'id': 6, 'c': 2,'s':0},{'pid':27,'id': 6, 'c': 3,'s':0},//8
      {'pid':28,'id': 7, 'c': 0,'s':0},{'pid':29,'id': 7, 'c': 1,'s':0},{'pid':30,'id': 7, 'c': 2,'s':0},{'pid':31,'id': 7, 'c': 3,'s':0},//7
      {'pid':32,'id': 8, 'c': 0,'s':0},{'pid':33,'id': 8, 'c': 1,'s':0},{'pid':34,'id': 8, 'c': 2,'s':0},{'pid':35,'id': 8, 'c': 3,'s':0},//6
      {'pid':36,'id': 9, 'c': 0,'s':0},{'pid':37,'id': 9, 'c': 1,'s':0},{'pid':38,'id': 9, 'c': 2,'s':0},{'pid':39,'id': 9, 'c': 3,'s':0},//5
      {'pid':40,'id': 10, 'c': 0,'s':0},{'pid':41,'id': 10, 'c': 1,'s':0},{'pid':42,'id': 10, 'c': 2,'s':0},{'pid':43,'id': 10, 'c': 3,'s':0},//4
      {'pid':44,'id': 11, 'c': 0,'s':0},{'pid':45,'id': 11, 'c': 1,'s':0},{'pid':46,'id': 11, 'c': 2,'s':0},{'pid':47,'id': 11, 'c': 3,'s':0},//3
      {'pid':48,'id': 12, 'c': 0,'s':0},{'pid':49,'id': 12, 'c': 1,'s':0},{'pid':50,'id': 12, 'c': 2,'s':0},{'pid':51,'id': 12, 'c': 3,'s':0}//2

    ],
    userName: '',
    userPwd: '',
    ranks: ranks,
    players: [5,7],
    rngDesc:{},
    scrollHeight: 0,
    choseCard: 0,
    // card: ['0_0','0_1','0_2','0_3'],
    // {"Players_rate":[{"Id":0,"Win":100,"Tie":0,"NLose":100},{"Id":1,"Win":0,"Tie":0,"NLose":0}]}
    card: [{'pid':0,'id': 0, 'c': 0,'s':0,'d':0},{'pid':1,'id': 0, 'c': 1,'s':0,'d':0},{'pid':2,'id': 0, 'c': 2,'s':0,'d':0},{'pid':3,'id': 0, 'c': 3,'s':0,'d':0}],
    cards: ['A','K','Q','J','10','9','8','7','6','5','4','3','2'],
    shape: ['♠','♥','♣','♦'],
    shap: ['s','h','c','d'],
    color: ['black','red','green','blue'],
    select: ['','selected'],
    sel: 1,
    selectCards: {selectCards:{}},
    model: 1,
    total: 9,
    rate: [],
    loading: false,
    using: true,
    setp: [0, 0],
    code: '发送',
    isSend: true,
    dead: '',
    userInfo: {},
    hasUserInfo: false,
    selDead: [],
    signkey:'003CW13v1JI94d0sFL3v1kYL2v1CW133',
    isLogin: false,
    nickName: '登陆',
    lastTapDiffTime: 0,
    status: 0,
    account: {
      user: '',
      pwd: '',
      code: '',
      mobile: ''
    }
  },
  paying(){
    var openID = wx.getStorageSync('openID')
    if(!openID){
      wx.showModal({
        title: '提示',
        content: '支付失败，请重新打开小程序'
      })
      return false
    }
    this.setData({loading: true});
    wx.showLoading({
      title: '请求支付中...',
    })
    let s = encrypt.md5(openID + this.data.signkey)
    let data = { method: 'Counter/pay' ,
      'params["p"]': openID,
      'params["s"]': s
    }
    Debao.req(data, (res) => {
      wx.hideLoading();
      this.setData({loading: false});
      if(res.data.status === 1){
        wx.showModal({
          title: '错误',
          content: res.data.msg
        })
        return false
      }
      wx.requestPayment({
         'timeStamp': res.data.timeStamp,
         'nonceStr': res.data.nonce_str,
         'package': res.data.prepay_id,
         'signType': 'MD5',
         'paySign': res.data.sign,
         'appId': res.data.appid,
         'success':function(res){
            console.log('success',res)
         },
         'fail':function(res){
            console.log('fial',res)
         }
      })
      // wx.showToast({
      //   title: '登陆成功',
      //   icon: 'success',
      //   duration: 2000
      // })
      // console.log(res.data)
      // this.setData({isLogin :true, nickName :res.data.name})
      // this.back()
    })
  },
  selBoxDead(){
    var data = e.currentTarget.dataset;
    this.setData({sel: data.lid})
    //Object.keys({P1:'test'}).length
    // console.log(data.lid)
    //if(params.desc){
      //console.log(desc)
      // this.setData({rngDesc: desc})
    //}
  },
  rng() {
    var sel = wx.createSelectorQuery().select('.selected');
    var rngDesc = this.data.rngDesc
    var that = this
    sel.boundingClientRect(function(ref) {      
      if(ref === null){
        wx.showModal({
          title: '错误',
          content: '请选择牌框'
        })
        return false 
      }
      let lid = ref.dataset.lid
      if(lid < 6) {
        wx.showModal({
          title: '错误',
          content: '只能选择手牌范围'
        })
        return false 
      }
      
      if(!ref.dataset.hasOwnProperty('sel')){
        let selectCards = that.data.selectCards.selectCards
        let sel = that.data.sel
        let str = 'card' + sel
        if(selectCards.hasOwnProperty(str)){
          wx.showModal({
            title: '错误',
            content: '请清除当前手牌'
          })
          return false 
        }
        if(sel%2 === 0){
        // 如果是偶数
          str = 'card' + (sel+1)
        }else {
          str = 'card' + (sel-1)
        }
        if(selectCards.hasOwnProperty(str)){
          wx.showModal({
            title: '错误',
            content: '请清除当前手牌'
          })
          return false 
        }
      }
      wx.navigateTo({
        url:'/pages/rng/rng'
      })
    }).exec()
    
  },
  inputAccount(e){
    let account = this.data.account
    account.user = e.detail.value
    this.setData({account: account })
  },
  inputPassword(e){
    let account = this.data.account
    account.pwd = e.detail.value
    this.setData({account: account })
  },
  inputCode(e){
    let account = this.data.account
    account.code = e.detail.value
    this.setData({account: account })
  },
  inputMobile(e){
    let account = this.data.account
    account.mobile = e.detail.value
    this.setData({account: account })
  },
  inputUser(e){
    this.setData({userName: e.detail.value})
  },
  inputPwd(e){
    this.setData({userPwd: e.detail.value})
  },
  register(){
    let account = this.data.account
    if(account.user.length <= 6){
      wx.showModal({
        title: '提示',
        content: '账户长度必须大于6位'
      })
      return false
    }
    if(account.pwd.length <= 6){
      wx.showModal({
        title: '提示',
        content: '密码长度必须大于6位'
      })
      return false
    }
    if(account.mobile.length !== 11){
      wx.showModal({
        title: '提示',
        content: '请输入正确的手机号'
      })
      return false
    }
    if(account.mobile.code < 6){
      wx.showModal({
        title: '提示',
        content: '请输入验证码'
      })
      return false
    }
    let openID = wx.getStorageSync('openID')
    if(!openID){
      wx.showModal({
        title: '提示',
        content: '请重新打开小程序'
      })
    }
    this.setData({loading: true});
    wx.showLoading({
      title: '注册中...',
    })
    let s = encrypt.md5(openID + account.mobile + this.data.signkey)
    let data = { method: 'Counter/register' ,
        'params["c"]': openID,
        'params["s"]': account.user,
        'params["d"]': account.pwd,
        'params["a"]': account.mobile,
        'params["b"]': account.code
      }
      Debao.req(data, (res) => {
        wx.hideLoading();
        this.setData({loading: false});
        if(res.data.status === 0){
          wx.showModal({
            title: '提示',
            content: res.data.msg
          })
        }else {
          wx.showToast({
            title: '注册成功',
            icon: 'success',
            duration: 2000
          })
          this.login()
        }
      }) 
  },
  doLogin() {
    console.log()
    // wx.showModal({
    //     title: '提示',
    //     content: '暂时未开放'
    // })
    let u = this.data.userName
    let p = this.data.userPwd
    let s = encrypt.md5(u + p +this.data.signkey)
    let data = { method: 'Counter/login' ,
              'params["u"]': u,
              'params["p"]': p,
              'params["s"]': s
            }
    Debao.req(data, (res) => {
      if(res.data.status === 0){
        wx.showModal({
          title: '错误',
          content: res.data.msg
        })
        return false
      }
      wx.showToast({
        title: '登陆成功',
        icon: 'success',
        duration: 2000
      })
      console.log(res.data)
      this.setData({isLogin :true, nickName :res.data.name})
      this.back()
    })
  },
  resetDead() {
    let dead = this.data.deadCard.map((e)=>{
      e.s = 0
      return e
    })
    let pokers = this.data.pokers.map((e)=>{
      e.d = 0
      return e
    })
    let card = this.data.card.map((e)=>{
      e.d = 0
      return e
    })
    this.setData({selDead: [], deadCard: dead, pokers: pokers, card: card})
  },
  okDead() {
    let temp = []
    this.data.selDead.map(function(e) {
        temp.push(e.pid)
    })
    console.log(temp)
    let poker = this.data.pokers.map((e) => {
      if(temp.includes(e.pid) ){
        e.d = 1
      } else { e.d = 0}
      return e
    })
    let card = this.data.card.map((e) => {
      if(temp.includes(e.pid) ){
        e.d = 1
      } else { e.d = 0}
      return e
    })
    this.setData({using: true,pokers :poker, card: card})
  },
  selDeadCard(e) {
    let selectCards = this.data.selectCards.selectCards
    let temp = e.currentTarget.dataset.lid
    let isOk = false
    for(var key in selectCards){
      if(selectCards[key].pid == temp.pid){
        isOk = true
        break
      }
    }
    if(isOk){
      wx.showModal({
        title: '错误',
        content: '这张牌已经在手牌或公共牌里面了'
      })
      return false
    }
    let dead = this.data.deadCard
    if( temp.s === 1 ){
      dead[temp.pid].s = 0
      this.setData({deadCard: dead})
      let arr = this.data.selDead.filter(function(e) {
        return e.pid !== temp.pid
      })
      this.setData({selDead: arr})
      return false
    }
    dead[temp.pid].s = 1
    this.setData({deadCard: dead})
    temp.s = 1
    let arr = this.data.selDead
    arr.push(temp)
    this.setData({selDead: arr})
  },
  showDead() {
    this.setData({setp: [4, 0], using: false})
  },
  send: function() {
    if(!this.data.isSend){
      return false;
    }
    let account = this.data.account
    if(account.user.length <= 6){
      wx.showModal({
        title: '提示',
        content: '账户长度必须大于6位'
      })
      return false
    }
    if(account.pwd.length <= 6){
      wx.showModal({
        title: '提示',
        content: '密码长度必须大于6位'
      })
      return false
    }
    if(account.mobile.length !== 11){
      wx.showModal({
        title: '提示',
        content: '请输入正确的手机号'
      })
      return false
    }
    this.setData({code: 60, isSend: false})
    let count = setInterval(() => {
      this.data.code--
        if (this.data.code === 0) {
          this.setData({code: '发送', isSend: true})
          clearInterval(count)
        } else {
          this.setData({code: this.data.code})
        }
    }, 1000)
    let openID = wx.getStorageSync('openID')
    if(!openID){
      wx.showModal({
        title: '提示',
        content: '请重新打开小程序'
      })
    }
    let s = encrypt.md5(openID + account.mobile + this.data.signkey)
    let data = { method: 'Counter/getCode' ,
        'params["c"]': openID,
        'params["s"]': s,
        'params["d"]': account.mobile
      }
      Debao.req(data, (res) => {
        if(res.data.status === 0){
          wx.showModal({
            title: '提示',
            content: res.data.msg
          })
        }else {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2000
          })
        }
      }) 
  },
  payB: function(){
    this.setData({setp: [3, 1], using: false})
  },
  loginB: function(){
    if(this.data.isLogin){
      return false
    }
    this.setData({setp: [2, 1], using: false})
  },
  pay: function(){
    this.setData({setp: [3, 0]})
  },
  login: function(){
    this.setData({setp: [2, 0]})
  },
  debao: function(){
    this.setData({setp: [1, 0]})
  },
  back: function() {
    if (this.data.setp[1] !== 0) {
      this.setData({using: true})
    } else {
      this.setData({setp: [0, 0]})
    }
  },
  using: function() {
    var ranks = this.data.ranks
    // ranks.test = 100
    this.setData({ranks : ranks,using: true})
  },
  qcount: function () {
    if(this.data.status === 0){
      wx.showModal({
        title: '提示',
        content: '您的免费使用权限已经到期已经到期'
      })
      return false
    }
    var dead = this.data.selDead
    // return false
    var data = this.data.selectCards.selectCards;
    var rngDesc = this.data.rngDesc;
    // this.setData({rate: [{"Id":0,"Win":100,"Tie":0,"NLose":100},{"Id":1,"Win":0,"Tie":0,"NLose":0}]});
    var isOk = true;
    // console.log(data)
    // return false
    for (var i = 6; i <= this.data.total; i++) {
      if(!data.hasOwnProperty('card'+i)){
        isOk = false
        break;
      }
    }

    if(!isOk) {
      wx.showModal({
        title: '错误',
        content: '输入完整牌局'
      })
      return false;
    }
    this.setData({loading: true});
    wx.showLoading({
      title: '计算中',
    })
    var that = this;
    wx.request({
      url: 'https://www.debao.com/service/router.php',
      header: { 'content-type': 'application/x-www-form-urlencoded'},
      data: {method: 'Counter/toCount' ,
            'params["d"]': encodeURI(JSON.stringify(data)), 
            'params["t"]': this.data.model, 
            'params["o"]':  this.data.total,
            'params["de"]':  encodeURI(JSON.stringify(dead))
      },
      method: 'POST',
      // data: {data: data,type: this.data.model, total: this.data.total},
      success: function(res) {
        wx.hideLoading();
        that.setData({loading: false});
        if(res.data.status === 0){
           wx.showModal({
            title: '错误',
            content: res.data.msg
          })
          return false;
        }
        that.setData({rate :res.data.data});
      },
      fail(res){
        wx.showModal({
          title: '错误',
          content: '网络失败'
        })
        console.log(res)
        wx.hideLoading();
        that.setData({loading: false});
      },
      complete(){
        wx.hideLoading();
        that.setData({loading: false});
      }
    })
  },
  clear: function() {  
    var pokers = this.data.pokers;
    var cards = this.data.selectCards;
    var card = this.data.card;
    var that = this;
    var sel = wx.createSelectorQuery().select('.selected');
    sel.boundingClientRect(function(ref) {
      if(ref === null){
        wx.showModal({
          title: '错误',
          content: '请选择牌框'
        })
        return false 
      }
      if(!ref.dataset.hasOwnProperty('pid')){
        let s = ref.dataset.lid - 23
        //let p = Math.ceil(s/2)
        let pp = 'P'+(s-1);
        let rngDesc = that.data.rngDesc
        if(rngDesc.hasOwnProperty(pp)){
          let sel = rngDesc[pp].sel
          let str = 'card' + sel
          delete cards['selectCards'][str]
          if(sel%2 === 0){
            // 如果是偶数
            str = 'card' + (sel+1)
          }else {
            str = 'card' + (sel-1)
          }
          delete cards['selectCards'][str]
          delete rngDesc[pp]
          that.setData({rngDesc :rngDesc, selectCards: cards})
        }
        return false 
      }
      if (ref.dataset.pid === "") { return false;}
      delete cards['selectCards'][ref.dataset.id]
      pokers[parseInt(ref.dataset.pid)].s = 0;
      that.setData({pokers: pokers});
      var arr = [];
      for (var i = card.length - 1; i >= 0; i--) {
        if (card[i].pid === ref.dataset.pid){
          card[i].s = 0;
          break;
        }
      }
      that.setData({card: card});
      that.setData({ selectCards: cards})
    }).exec()
  }, 
  add: function(e) {
    if (this.data.total === 23){
      return false;
    }
    var player = this.data.players;
    this.setData({total: this.data.total+2})
    player.push(player[player.length-1]+2);
    this.setData({players: player})
    this.setData({scrollHeight: this.data.scrollHeight + 200})
  },
  reduce(e){
    if (this.data.total === 9){
      return false;
    }
    var player = this.data.players;
    player.splice(-1,1)
    this.setData({total: this.data.total-2})
    this.setData({players: player})
    this.setData({scrollHeight: this.data.scrollHeight - 200})
  },
  chose: function(e) {
    let model = e.currentTarget.dataset.model
    var player = this.data.pokers
    var len = player.length;
    let temp = [12,11,10,9]
    let selectCards = this.data.selectCards.selectCards
    if(model == 1){
      for (var i = 0;i < len; i++) {
        if(temp.includes(player[i].id)){
          player[i].s = 0;
        }
      }
      this.setData({cards :['A','K','Q','J','10','9','8','7','6','5','4','3','2']})
    } else {
      for(var key in selectCards){
        if(temp.includes(selectCards[key].id)){
          delete selectCards[key]
        }
      }
      this.setData({cards :['A','K','Q','J','10','9','8','7','6']})
    }
    for(var key in selectCards){
      if([0].includes(selectCards[key].id)){
        delete selectCards[key]
      }
    }
    for (var i = 0;i < len; i++) {
      if([0].includes(player[i].id)){
        player[i].s = 0;
      }
    }
    let card = [{'pid':0,'id': 0, 'c': 0,'s':0,'d':0},{'pid':1,'id': 0, 'c': 1,'s':0,'d':0},{'pid':2,'id': 0, 'c': 2,'s':0,'d':0},{'pid':3,'id': 0, 'c': 3,'s':0,'d':0}]
    this.setData({model: model, choseCard: 0, card :card, selectCards: {selectCards: selectCards} ,pokers: player})
  },
  reset: function() {
    var player = this.data.pokers;
    var that = this;
    wx.showModal({
      title: '提示',
      content: '是否要重置所有数据',
      success: function(res) {
        if (res.confirm) {
          var len = player.length;
          for (var i = 0;i < len; i++) {
            player[i].s = 0;
          }
          // 已经选择的公共牌和手牌
          that.setData({selectCards: {selectCards:{}}});
          // 把选择的牌设置为0
          that.setData({pokers: player});
          // 把下面的牌设置为默认值
          that.setData({card: [{'pid':0,'id': 0, 'c': 0,'s':0},{'pid':1,'id': 0, 'c': 1,'s':0},{'pid':2,'id': 0, 'c': 2,'s':0},{'pid':3,'id': 0, 'c': 3,'s':0}]});
          that.setData({players: [5,7]});
          that.setData({sel: 1});
          that.setData({total: 9});
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  chosePoker: function(e) {
    var id = e.currentTarget.dataset.id;
    this.setData({choseCard: id});
    var arr = [];
    var j = 0;
    for (var i = this.data.pokers.length - 1; i >= 0; i--) {
      if (this.data.pokers[i].id === id  ){
        arr.push(this.data.pokers[i])
        j++;
        if (j===4) {break;}
      }
    }
    this.setData({card:arr.reverse()});
  },
  selectCard: function(e) {
    var data = e.currentTarget.dataset;
    var pokers = this.data.pokers;
    if (data.d === 1) { return false}
    if (pokers[parseInt(data.pid)].s === 1) {
      return false
    }
    var cards = this.data.selectCards;
    var that = this;
    var sel = wx.createSelectorQuery().select('.selected');
    // // var nextSel = wx.createSelectorQuery().select('#card');
    sel.boundingClientRect(function(ref) {
      if(ref === null){
        wx.showModal({
          title: '错误',
          content: '请选择牌框'
        })
        return false 
      }
      if(!ref.dataset.hasOwnProperty('pid')){
        wx.showModal({
          title: '错误',
          content: '请清除当前手牌范围'
        })
        return false 
      }
      pokers[parseInt(data.pid)].s = 1;
      var card = that.data.card;
      card[parseInt(data.index)].s = 1;
      that.setData({card: card, pokers: pokers});
      // console.log(cards)
      cards['selectCards'][ref.dataset.id] = {pid: data.pid,id: data.id, c: data.c}
      if(ref.dataset.pid !== ""){
        pokers[parseInt(ref.dataset.pid)].s = 0;
        that.setData({pokers: pokers});
        var arr = [];
        for (var i = card.length - 1; i >= 0; i--) {
          if (card[i].pid === ref.dataset.pid){
            card[i].s = 0;
            break;
          }
        }
        that.setData({card: card});
      }
      if (ref.dataset.lid === that.data.total) {
        that.setData({ sel: 1})
      } else {
        that.setData({ sel: (parseInt(ref.dataset.lid)+1)})
      }
      that.setData({ selectCards: cards})
    }).exec()
  },  
  selBox: function( e ) {  
    let curTime = e.timeStamp
    let lastTime = this.data.lastTapDiffTime
    if(curTime >0){
      // 如果两次点击小于300毫秒就是双击事件
      if(curTime - lastTime < 300){
        // console.log(e.timeStamp + '双击')
        this.clear()
      } else {
        // console.log(e.timeStamp + '单击')
        var data = e.currentTarget.dataset;
        this.setData({sel: data.lid})
      }
    } else {
      console.log(e.timeStamp + '第一次点击')
    }
    this.setData({lastTapDiffTime: curTime})
  },
  onLoad: function() {
    let openID = wx.getStorageSync('openID')
    let signkey = this.data.signkey
    if(openID){
      let s = encrypt.md5(openID + signkey)
      let data = { method: 'Counter/checkUser' ,
        'params["c"]': openID,
        'params["s"]': s
      }
      Debao.req(data, (res) => {
        if(res.data.status === 0){
          wx.showModal({
            title: '提示',
            content: '您的免费使用权限已经到期已经到期'
          })
        }
        this.setData({status :res.data.status})
      }) 
      return false
    }
    wx.login({
      success: function(res) {
        if (res.code) {
          //发起网络请求
            let s = encrypt.md5(res.code + signkey)
            let data = { method: 'Counter/wxUser' ,
                      'params["c"]': res.code,
                      'params["s"]': s
                    }
            Debao.req(data, (res) => {
              if(res.data.status === 0){
                wx.showModal({
                  title: '提示',
                  content: res.data.msg
                })
                return false
              }
              wx.setStorage({key:"openID",data:res.data.openid})
            })
        } else {
          wx.showModal({
            title: '提示',
            content: '数据异常，请稍后再试'
          })
        }
      }
    });
  }
})