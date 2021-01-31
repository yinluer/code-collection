uploadImg(name) {
  let newUrl = '';
  wx.chooseImage ({
    success: res => {
      const tempFilePaths = res.tempFilePaths;
      const url = tempFilePaths[0];
      wx.getImageInfo({
        src: url,
        success: res => {
          const date = new Date().getTime();
          const ctx = wx.createCanvasContext('firstCanvas', this);
          ctx.drawImage(url, 0, 0, res.width, res.height);
          ctx.setFontSize(20);
          ctx.setFillStyle('blue');
          ctx.fillText(date, 10, 30);
          ctx.strokeText(date, 10, 30);
          ctx.draw(false, () => {
            console.log(111);
            wx.canvasToTempFilePath({
              canvasId: 'firstCanvas',
              success: uus => {
                newUrl = uus.tempFilePath;
                console.log('newUrl', newUrl);
                this.picUrls[name] = newUrl;
                this.uploadFile ([newUrl], name);
              },
              fail: _ => {
                console.log(222);
              }
            }, this);
          });
        }
      });
      this.$apply ();
    }
  });
}