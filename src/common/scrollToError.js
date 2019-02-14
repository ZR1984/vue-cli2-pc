
function scrollToError(self,data){
    document.documentElement.scrollTop = self.$refs[
        data[0]
      ][0].offsetTop; //页面滚动到第一个报错信息所在的位置
      document.body.scrollTop = self.$refs[data[0]][0].offsetTop;
}

export default scrollToError