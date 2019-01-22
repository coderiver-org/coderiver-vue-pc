<template>
  <section class="footer">
    <Row type="flex" align="middle" class="row-1">
      <Col class="coderiver_info">
        <img src="@/assets/logo.png" alt="CodeRover Logo">
      </Col>
      <Col class="link_part link_text">
        友情链接
      </Col>
    </Row>
    <Row type="flex" align="stretch" class="row-2">
      <Col class="coderiver_info info">
        <div>CodeRiver 河码专注于 IT 行业，是集教、学、研、实战、公益为一体的综合社区。目前分为五大生态群：</div>
        <div>CodeRiver 开源：致力于打造全栈全平台精品开源项目。</div>
        <div>CodeRiver 协作平台：程序员、设计师、产品经理等 IT 从业者的项目协作平台。</div>
        <div>CodeRiver 学院：提供多种形式的热门技术学习资源，免费专业的职业拓展平台。</div>
        <div>CodeRiver 技术研究院：研究前沿技术，推出自研框架。</div>
        <div>CodeRiver 公益：以技术推动公益事业发展，为公益团体免费开发项目。</div>
      </Col>
      <Col class="link_part links">
        <div class="links_list">
          <span class="links_item">Github</span>
          <span class="links_item">友情链接</span>
          <span class="links_item">占位符</span>
        </div>
        <div class="app_platform">
          <img src="./assets/ios.png" alt="ios">
          <img src="./assets/android.png" alt="android">
        </div>
      </Col>
    </Row>
    <Row type="flex" align="middle" class="row-3">
      <Col class="coderiver_info creat_by">
        CodrRiver&copy;2018
      </Col>
      <Col class="link_part link_icon">
        <img src="/img/icons/Github.png" alt="Github">
        <img src="/img/icons/weibo-icon.png" alt="微博">
        <img src="/img/icons/wx-icon.png" alt="微信">
      </Col>
    </Row>
  </section>
</template>

<style lang="scss" scoped>
.footer{
  background-color: #ffffff;
  padding: 30px 10% 30px 10%;
  color: #18262A;

  .coderiver_info{
    flex: 1;
  }
  .link_part{
    width: 40%;
  }

  .row-1{
    padding: 50px 0 30px 0;
    border-top: 4px solid #40AEA8;

    .link_text{
      font-size: 40px;
    }
  }

  .row-2{
    .info{
      font-size: 18px;
    }
    .links{
      font-size: 20px;
      display: flex;
      flex-direction: column;

      .links_list{

        .links_item{
          padding-right: 10px;
        }
      }
      .app_platform{
        flex: 1;
        display: flex;
        align-items: center;

        img{
          margin-right: 10px;
        }
      }
    }
  }

  .row-3{
    padding: 18px 0 40px 0;

    .creat_by{
      font-size: 20px;
    }
    .link_icon{
      font-size: 20px;

      img{
        margin-right: 30px;
      }
    }
  }
}
</style>
