<template>
  <div class="wrapper">
    <div class="line"></div>
    <div class="info_wrapper">
      <span class="info_detail">优秀项目推荐</span>
      <router-link to="/project-center" tag='a' class="readmore">查看更多</router-link>
    </div>
    <good-project-item :goodProjectItem='goodProjectItem'></good-project-item>
  </div>
</template>
<script>
import GoodProjectItem from './GoodProjectItem'
export default {
  data(){
    return {
      goodProjectItem:[
        {
          id:1,
          imgUrl:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1547264904&di=091ae12eadb879b1add718b282af086f&src=http://s3.sinaimg.cn/middle/6f32f292g94155f2a2202&690',
          projectName:'今天天气不错今天天气不错今天天气不错',
          desc:'今天天气不错今天天气不错今天天气不错今天天气不错今天天气不错今天天气不错',
          see:'1234',
          good:'123'
        },{
          id:2,
          imgUrl:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1547264904&di=091ae12eadb879b1add718b282af086f&src=http://s3.sinaimg.cn/middle/6f32f292g94155f2a2202&690',
          projectName:'今天天气不错今天天气不错今天天气不错',
          desc:'今天天气不错今天天气不错今天天气不错今天天气不错今天天气不错今天天气不错',
          see:'1234',
          good:'123'
        },{
          id:3,
          imgUrl:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1547264904&di=091ae12eadb879b1add718b282af086f&src=http://s3.sinaimg.cn/middle/6f32f292g94155f2a2202&690',
          projectName:'今天天气不错今天天气不错今天天气不错',
          desc:'今天天气不错今天天气不错今天天气不错今天天气不错今天天气不错今天天气不错',
          see:'1234',
          good:'123'
        }
      ]
    }
  },
  components:{
    GoodProjectItem
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
  margin: 0 auto;
  width: 66.67%;
  .line{
    width: 95%;
    height:4px;
    background:rgba(64,174,168,1);
    margin: 0 auto;
    margin-bottom: 48px;
  }
  .info_wrapper{
    margin-bottom:70px;
    font-size:333%;
    font-family:Adobe Heiti Std R;
    font-weight:normal;
    color:rgba(24,38,42,1);
    line-height:26px;
    .info_detail{
      font-size:100%;
      font-family:Adobe Heiti Std R;
      font-weight:normal;
      color:rgba(24,38,42,1);
      line-height:26px;
    }
    .readmore{
      float: right;
      font-size:75%;
      font-family:Adobe Heiti Std R;
      font-weight:normal;
      color:rgba(64,174,168,1);
      line-height:26px;
      :hover{
        cursor: pointer;
      }
    }  
  } 
}
</style>
