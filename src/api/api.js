/*jshint -W069 */
import axios from 'axios'

/**
 * CodeRiver API 接口文档
 * @class API
 * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
 * @param {string} [domainOrOptions.domain] - The project domain
 * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
 */
export default class API {

  $defaultDomain = 'https://easy-mock.com/upload/2019/01/05/78df98bb0fb034b7a2a6b36f1d0b304e.json'

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain ){
    if(domain)
      this.$defaultDomain = domain;
  }

    
    /**
    * 将返回轮播图列表
    * @method
    * @name API#将返回轮播图列表
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getHomeBanners (parameters){ 

      let body = null;
      let config = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/home/banners',
        method: 'GET'
      };
    
      config.headers = {}
      
      
      
      if (body) {
        config.data = body
      }
      return axios.request( config );
    }
    
    /**
    * 获取首页项目推荐列表
    * @method
    * @name API#获取首页项目推荐列表
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getHomeRecommendProjects (parameters){ 

      let body = null;
      let config = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/home/recommendProjects',
        method: 'GET'
      };
    
      config.headers = {}
      
      
      
      if (body) {
        config.data = body
      }
      return axios.request( config );
    }
    
    /**
    * 获取首页团队推荐列表
    * @method
    * @name API#获取首页团队推荐列表
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getHomeRecommendTeams (parameters){ 

      let body = null;
      let config = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/home/recommendTeams',
        method: 'GET'
      };
    
      config.headers = {}
      
      
      
      if (body) {
        config.data = body
      }
      return axios.request( config );
    }
    
    /**
    * 获取首页英雄推荐列表
    * @method
    * @name API#获取首页英雄推荐列表
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getHomeRecommendHeroes (parameters){ 

      let body = null;
      let config = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/home/recommendHeroes',
        method: 'GET'
      };
    
      config.headers = {}
      
      
      
      if (body) {
        config.data = body
      }
      return axios.request( config );
    }
    
    /**
    * 用户登录
    * @method
    * @name API#用户登录
    * @param string username - 用户名 * @param string password - 密码 
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    postUserLogin (parameters){ 

      let body = null;
      let config = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/user/login',
        method: 'POST'
      };
    
      config.headers = {}
      
      
      
      
      
      if (body) {
        config.data = body
      }
      return axios.request( config );
    }
    
    /**
    * 用户注册
    * @method
    * @name API#用户注册
    * @param  body - 用户填写的注册信息 
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    postUserRegister (parameters){ 

      let body = null;
      let config = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/user/register',
        method: 'POST'
      };
    
      config.headers = {}
      
      
      body = parameters.body;
      config.data = body;
      
      if (body) {
        config.data = body
      }
      return axios.request( config );
    }
    
    /**
    * 获取所有角色列表
    * @method
    * @name API#获取所有角色列表
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getUserRoles (parameters){ 

      let body = null;
      let config = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/user/roles',
        method: 'GET'
      };
    
      config.headers = {}
      
      
      
      if (body) {
        config.data = body
      }
      return axios.request( config );
    }
    
    /**
    * 获取经验列表
    * @method
    * @name API#获取经验列表
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getUserExperiences (parameters){ 

      let body = null;
      let config = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/user/experiences',
        method: 'GET'
      };
    
      config.headers = {}
      
      
      
      if (body) {
        config.data = body
      }
      return axios.request( config );
    }
  
    
}