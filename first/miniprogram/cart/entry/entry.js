// miniprogram/cart/entry/entry.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      
      user: {
          name:"",
          company:"",
          department:"",
          room:"",
          order:[
              {id:0,title:'午餐', num:0, hiddenFlag:true},
              {id:1,title:'晚餐', num:0, hiddenFlag:true}
          ]
          
      },
      carts:[
        {id:0,title:'午餐',image:'/image/food/lunch.png', num:0, hiddenFlag:true,price:0.01,selected:true},
        {id:1,title:'晚餐',image:'/image/food/lunch.png', num:0, hiddenFlag:true, price:0.03,selected:true}
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    if(this.data.user.name == "")
    {
        console.log("333")
         wx.navigateTo({
            url: '../reg/reg',
            /*url: '../picker/picker',*/
            success: function(res){
                // success
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
        }) 
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
   
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  plusAction:function(e) 
  {
      console.log(e.currentTarget)
 
      let tmpNum = 0;
      let i = 0
      for ( i = 0; i < this.data.carts.length; i++) 
      {
        if (e.currentTarget.dataset.id == this.data.carts[i].id)
          {
              /* console.log(this.data.carts[i].num) */
             tmpNum = this.data.carts[i].num
             break
          }
      }
      console.log(i)
      console.log(this.data.carts[i].num)
      this.setData({
         ['carts[' + i +'].num']: tmpNum+1,
         ['carts[' + i +'].hiddenFlag']:false
      }) 
  },
  subAction:function(e) 
  {
      console.log(e.currentTarget)
      var i = 0, tmpNum = 0;
      for (i in this.data.carts)
      {
          if (e.currentTarget.dataset.id == this.data.carts[i].id)
          {
            tmpNum = this.data.carts[i].num;
            break
          }
           
      }

      if (tmpNum>=1)
      {
          this.setData({
            ['carts[' + i +'].num']: tmpNum-1
            })
      }
      
      if(this.data.carts[i].num == 0) 
      {
          this.setData({
            ['carts[' + i +'].hiddenFlag']:true
            })
      }
  },
})