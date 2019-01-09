const fs = require('fs');
const path = require('path');
const YAML = require('yamljs');
const template = require('art-template');

/**
 * 绝对地址转换
 * @param {String} pathString 
 */
function resolve(pathString) {
  return path.resolve(__dirname, pathString);
}

/** 
 * @description 模板字符串
 */
let templateStr = `/**
* @description {{ info.description }}
* @version {{ info.version }}
* @title {{ info.title }}
*/
import axios from '@/libs/api.request';
{{each apis item}}
/**
 * @name {{ item.info.summary }}{{if item.info.description}}\n * @description {{ item.info.description }}{{/if}}
 * @param {Object} params 
 */
export const {{ item.funName }} = (params) => {
  return axios.request({
    url: '{{ item.url }}',
    method: '{{ item.method }}',
    {{ item.method === 'GET' ? 'params' : 'data' }}: params,
  })
}
{{/each}}
`;
/**
 * function tools
 * @description 生成规则 [小写method][驼峰url]
 */
function functionNameGen(prefix, str) {
  let tmp_s = str.replace(/\//, '').split(/\//ig);
  for (let i = 0; i < tmp_s.length; i++) {
    tmp_s[i] = tmp_s[i].slice(0, 1).toUpperCase() + tmp_s[i].slice(1);
  }
  return prefix + tmp_s.join('');
}
/**
 * 生成api访问代码字符串
 * @param {*} param0 
 */
function generateApiAccessCodeString({ info, paths }) {
  let apis = [];

  for (let url in paths) {
    for (let method in paths[url]) {
      let info = paths[url][method];
      apis.push({
        url,
        method: method.toUpperCase(),
        funName: functionNameGen(method.toLowerCase(), url),
        info
      });
    }
  }

  let render = template.compile(templateStr, {});

  return render({
    info,
    apis
  });
}
/**
 * 保存代码字符成文件
 * @param {String} str
 */
function saveCodeString2File(data, options = {}) {
  fs.writeFile(resolve('./demo.js'), data, 'utf-8', (err) => {
    if(err) {
      console.error(err);
      return;
    }
    console.log("API访问代码生成成功");
 });
}

// 读取yml格式文件
const filePath = resolve('./api.yml');
const yamlData = YAML.parse(fs.readFileSync(filePath).toString());
saveCodeString2File(generateApiAccessCodeString(yamlData));

// TODO：将swagger文件（*.json、*.yml），以request的方式请求下来，再生成api文件
