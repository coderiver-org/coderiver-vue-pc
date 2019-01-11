<template>
  <section class="footer">
    <Row type="flex" justify="center">
      <Col class="coderiver-info">
        <img src="@/assets/logo.png" alt="CodeRover Logo">
        <div class="info">
          <div>CodeRiver 河码专注于 IT 行业，是集教、学、研、实战、公益为一体的综合社区。目前分为五大生态群：</div>
          <div>CodeRiver 开源：致力于打造全栈全平台精品开源项目。</div>
          <div>CodeRiver 协作平台：程序员、设计师、产品经理等 IT 从业者的项目协作平台。</div>
          <div>CodeRiver 学院：提供多种形式的热门技术学习资源，免费专业的职业拓展平台。</div>
          <div>CodeRiver 技术研究院：研究前沿技术，推出自研框架。</div>
          <div>CodeRiver 公益：以技术推动公益事业发展，为公益团体免费开发项目。</div>
        </div>
        <div class="by">CodrRiver&copy;2018</div>
      </Col>
      <Col class="friend-links">
        <div class="links-text">友情链接</div>
        <div class="links">
          <div class="link-item">Github</div>
        </div>
        <div class="app-platform">
          <img src="./assets/ios.png" alt="ios">
          <img src="./assets/android.png" alt="android">
        </div>
        <div class="link-icon">
          <img src="/img/icons/Github.png" alt="Github">
          <img src="/img/icons/weibo-icon.png" alt="微博">
          <img src="/img/icons/wx-icon.png" alt="微信">
        </div>
      </Col>
    </Row>
  </section>
</template>

<style lang="scss" scoped>
.footer{
  background-color: #ffffff;
  padding: 0 10%;

  .coderiver-info{
    flex: 1;
    padding-right: 40px;
  }
  .friend-links{
    width: 385px;

    .links-text{
      font-size: 40px;
    }
    .links{
      font-size: 20px;
    }
    .app-platform{
      & > *{
        margin-right: 10px;
      }
    }
    .link-icon{
      margin-top: 40px;
      & > * {
        margin-right: 30px;
      }
    }
  }
}
</style>

