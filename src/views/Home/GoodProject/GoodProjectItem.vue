<template>
<Row>
  <i-col :span='12' class="item_wrapper" v-for="item in goodProjectItem" :key='item.id'>
    <div class="img_wrapper">
      <img :src="item.imgUrl" class='item_img' alt="">
    </div>
    <p class="project_name">{{item.projectName}}</p>
    <p class="project_info">{{item.desc}}</p>
    
    <div style="height:24px;line-height:24px;font-size:20px;color:#999;">
      <div class="icon_wrapper">
        <img class="see_icon" src="@/assets/see_icon@2x.png" alt="">
        <span>{{item.see}}</span>
      </div>
      <div class="icon_wrapper">
        <img class="zan_icon" src="@/assets/zan_icon@2x.png" alt="">
        <span ref="count">{{item.good}}</span>
      </div>
      
    </div>
  </i-col>
</Row>
</template>
<script>
export default {
  name: 'GoodProjectItem',
  props:{
    goodProjectItem: Array
  }
}
</script>
<style lang="scss" scoped>
.item_wrapper{
  padding:5.2%;
  margin-bottom:30px; 
  &:hover{
    box-shadow:0px 4px 5px 1px rgba(0, 0, 0, 0.3);
    z-index: 2;
  }
  .img_wrapper{
    height: 0;
    padding-bottom:66.9%;
    overflow: hidden;  
    .item_img{
      width:100%;
    }
  }
  .project_name{
    font-size:250%;
    font-family:Adobe Heiti Std R;
    font-weight:normal;
    color:rgba(24,38,42,1);
    line-height:26px;
    margin-bottom:14px;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
  }
  .project_info{
    font-size:167%;
    font-family:Adobe Heiti Std R;
    font-weight:normal;
    color:rgba(153,153,153,1);
    line-height:130%;
    margin-bottom:30px;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
  }
  .icon_wrapper{
    width:40%;
    display: inline-block;
    margin-right:5%;
    .see_icon{
      width:30px;
      height: 18px;
      margin-right:5%;
    }
    .zan_icon{
      width:24px;
      height:24px;
      cursor: pointer;
      margin-right:5%;
    }
  }
  
}
</style>
