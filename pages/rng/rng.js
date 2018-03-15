import ranks  from '../../components/card/card'
var pageData = {
  data: {
    ranks,
    val:0,
    height: 0,
    desc: '',
    selCard: [],
    rate: 0,
    model: 0,
    player: 0,
    p:0
  },
  submit() {
    let cards = this.data.ranks
    let temp = []
    cards.pfIndexToPocket.map((item, index) => {
      if(item.s == 1) {
        item.s = 1
        temp.push(item.key)
      }
    })
    if(temp.length === 0){
      wx.showModal({
        title: '错误',
        content: '请选择手牌范围'
      })
      return false
    }
    let pages = getCurrentPages();
    // var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面
    let desc = ''
    if(temp.length > 2){
      desc = temp[0] + ' ' + temp[1] + '...'
    } else {
      desc = temp.join(' ')
    }
    let rng = prevPage.data.rngDesc
    let sel = prevPage.data.sel
    let selectCards = prevPage.data.selectCards
    rng['P' + (this.data.player-1)] = {  desc : desc, sel: sel, val: temp}
    let str = 'card' + sel
    temp = temp.join('|')
    selectCards['selectCards'][str] = { val: temp }
    if(sel%2 === 0){
      // 如果是偶数
      str = 'card' + (sel+1)
      selectCards['selectCards'][str] = { val: temp }
      sel += 2 
    }else {
      str = 'card' + (sel-1)
      selectCards['selectCards'][str] = { val: temp }
      sel++
    }
    if(prevPage.data.total < sel ){
      sel = 1
    }
    prevPage.setData({rngDesc: rng, sel : sel,selectCards :selectCards})
    wx.navigateBack({
      url:'/pages/home/home'
    })
  },
  reset() {
    let cards = this.data.ranks
    let temp = []
    let poker = cards.pfIndexToPocket.map((item, index) => {
      item.color = 0
      item.s = 0
      return item
    })
    cards.pfIndexToPocket = poker
    this.setData({ranks: cards,desc: "",rate: 0,val: 0})
  },
  up() {
    this.go(-13)
  },
  down(){
    this.go(13)
  },
  go(number) {
    let cards = this.data.ranks
    let i = 0
    let poker = cards.pfIndexToPocket.map((item, index) => {
      if(item.color == 4 ) {
          item.color = 0
          i = index
      }
      return item
    })
    if(number == 13 && i >= 156){
      poker[i].color = 4
    }else if(number == -13 && i < 13){
      poker[i].color = 4
    }else if(number == 1 && i == 168 ){
      poker[i].color = 4
    }else if(number == -1 && i == 0){
      poker[i].color = 4
    }else {
      poker[i+number].color = 4
    }
    cards.pfIndexToPocket = poker
    this.setData({ranks: cards})
  },
  left() {
    this.go(-1)
  },
  right() {
    this.go(1)
  },
  chose(e){
    let id = e.currentTarget.dataset.pid
    let cards = this.data.ranks
    let poker = cards.pfIndexToPocket.map((item, index) => {
      if(item.color == 4 ) {
        item.color = 0
      }
      if(index == id){
        item.color = 4
      }
      return item
    })
    cards.pfIndexToPocket = poker
    this.setData({ranks: cards})
  },
  del() {
    let cards = this.data.ranks
    let temp = []
    let poker = cards.pfIndexToPocket.map((item, index) => {
      if(item.color == 4 && item.s == 1) {
        item.s = 0
      }
      if(item.s == 1){
        temp.push(item.key)
      }
      return item
    })

    cards.pfIndexToPocket = poker
    let desc = ""
    let val = temp.length / cards.sort.length * 100
    if(temp.length >= 16){
      desc = temp.splice(0,16).join(" ")+"..."
    } else {
      desc = temp.join(" ")
    }
    this.setData({ranks: cards,desc: desc,rate: val.toFixed(2)})
  },
  add() {
    let cards = this.data.ranks
    let temp = []
    let poker = cards.pfIndexToPocket.map((item, index) => {
      if(item.color == 4 || item.s == 1) {
        item.s = 1
        temp.push(item.key)
      }
      return item
    })
    cards.pfIndexToPocket = poker
    let val = temp.length / cards.sort.length * 100
    let desc = ""
    if(temp.length >= 16){
      desc = temp.splice(0,16).join(" ")+"..."
    } else {
      desc = temp.join(" ")
    }
    this.setData({ranks: cards,desc: desc,rate: val.toFixed(2)})
  },
  onLoad(params) {
    // let pok = this.data.ranks.pfPocketEquity
    // let p = Object.values(pok)
    // let temp = [];
    // for (var k in pok) {
    //   temp.push([k, pok[k]])
    // }
    // temp.sort((e, d)=>{
    //   return d[1] - e[1];
    // })
    // let poker = []

    // for (var i = 0;i < temp.length;i++) {
    //   poker.push(temp[i][0])
    // }
    // let str = JSON.stringify(poker)
    // console.log(str)
    let pages = getCurrentPages();
    let data = pages[pages.length - 2].data;  //上一个页面
    // let rng = prevPage.data.rngDesc
    let sel = data.sel
    if(sel > 23){
      sel -= 18
    }
    let p = Math.ceil((sel - 5)/2)
    if(data.sel >23){
      p++
    }
    let pp = 'P'+(p-1);
    if(data.rngDesc.hasOwnProperty(pp)){
      let val = data.rngDesc[pp].val
      let cards = this.data.ranks
      let temp = []
      let poker = cards.pfIndexToPocket.map((item, index) => {
        if(val.includes(item.key)) {
          item.s = 1
          temp.push(item.key)
        }
        return item
      })
      cards.pfIndexToPocket = poker
      let desc = ""
      let vals = temp.length / cards.sort.length * 100
      if(temp.length >= 16){
        desc = temp.splice(0,16).join(" ")+"..."
      } else {
        desc = temp.join(" ")
      }
      this.setData({ranks: cards,desc: desc,rate: vals.toFixed(2)})
    }
    this.setData({height: wx.getSystemInfoSync().windowHeight, player: p, p: data.sel})
  },
  change(e) {
    let l = .59
    let t = Math.ceil(e.detail.value/l)
    let cards = this.data.ranks //pfIndexToPocket
    let pfPocketToIndex = cards.pfPocketToIndex
    let sort = cards.sort.filter((e, index) => {
      return t > index
    })
    let poker = cards.pfIndexToPocket.map((item, index) => {
      if(sort.includes(item.key)) {
        item.color = 4
      } else {
        item.color = item.c
      }
      return item
    })
    // if(e.detail.value == 99.71) {
    //   this.setData({val: 100})
    // }
    cards.pfIndexToPocket = poker
    this.setData({ranks: cards,val: e.detail.value})
    // console.log(e.detail.value)
    // e.detail.value
    // console.log('slider' + 'index' + '发生 change 事件，携带值为', )
  }
}
// for (var i = 1; i < 5; i++) {
//   (function (index) {
//     pageData['slider' + index + 'change'] = function(e) {
//       console.log('slider' + 'index' + '发生 change 事件，携带值为', e.detail.value)
//     }
//   })(i)
// }
Page(pageData)