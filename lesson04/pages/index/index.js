//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  showLoading() {
    wx.showLoading({
      title: 'loading'
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  showToast() {
    wx.showToast({
      title: 'toast',
      icon: 'none',
      duration: 1000
    })
  },
  showActionSheet() {
    wx.showActionSheet({
      itemList: ['a', 'b', 'c'],
      success(value) {
        console.log(value)
      },
      fail(value) {
        console.log(value)
      },
      complete(value) {
        console.log(value)
      },
    })
  },
  showShareMenu() {
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  getUserInfo() {
    wx.getUserInfo({
      success(res) {
        console.log(res)
      }
    })
  },
  login() {
    wx.login({
      success(res) {
        console.log(res)
      }
    })
  },
  scanCode() {
    wx.scanCode({
      scanType: ['barCode', 'qrCode'],
      success(res) {
        console.log(res)
      }
    })
  },
  setKeepScreenOn() {
    wx.setKeepScreenOn({
      setKeepScreenOn: true
    })
  },
  setScreenBrightness() {
    wx.setScreenBrightness({
      value: 1
    })
  },
  getBatteryInfo() {
    wx.getBatteryInfo({
      success(res) {
        console.log(res)
      }
    })
  },
  connectWifi() {
    wx.connectWifi({
      SSID: '',
      password: '',
      success(res) {
        console.log(res.errMsg)
      }
    })
  },
  startSoterAuthentication() {
    wx.startSoterAuthentication({
      requestAuthModes: ['fingerPrint'],
      challenge: '123456',
      authContent: '请用指纹解锁',
      success(res) {
        wx.showToast({
          title: JSON.stringify(res),
          icon: 'none'
        })
      },
      fail(res) {
        wx.showToast({
          title: JSON.stringify(res),
          icon: 'none',
          duration: 100000
        })
      },
    })
  },
})
