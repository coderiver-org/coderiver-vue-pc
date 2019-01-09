/**
 * @description CodeRiver API 接口文档
 * @version 1.0.0
 * @title CodeRiver API Document
 */
import axios from '@/libs/api.request';

/**
 * @description 用户注册
 * @param {*} params 
 */
export const postUserRegister = (params) => {
  return axios.request({
    url: '/user/register',
    method: 'POST',
    data: params,
  })
}

/**
 * @description 用户登录
 * @param {*} params 
 */
export const postUserLogin = (params) => {
  return axios.request({
    url: '/user/login',
    method: 'POST',
    data: params,
  })
}

/**
 * @description 获取所有角色列表
 * @param {*} params 
 */
export const postUserRoles = (params) => {
  return axios.request({
    url: '/user/roles',
    method: 'GET',
    params: params,
  })
}

/**
 * @description 获取经验列表
 * @param {*} params 
 */
export const postUserExperiences = (params) => {
  return axios.request({
    url: '/user/experiences',
    method: 'GET',
    params: params,
  })
}
