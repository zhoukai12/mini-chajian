const request = require('./request.js');
const base = 'https://abyys.club/aiba_client_app';
// const base = 'http://www.xagzts.cn';
// const base = 'http://www.dengnixiake.xyz:8080/app';
const ajax = {
  // 登录，获取token
  wxLogin(params = {}) {
    return request(`${base}/login`, 'POST', params, {
      contentType: 'application/x-www-form-urlencoded'
    });
  },
  // 登录
  getToken(params = {}) {
    return request(`${base}/login/config`, 'GET', params);
  },
  //调用条码支付
  payCode(params = {}){
    return request(`${base}/pay/barCode`,'POST',params)
  },
  //获取所有的商品分类信息
  getGoodsSort(params = {}) {
    return request(`${base}/smallProgram/SpGoodsClassController/selectGoodsClass`, 'GET', params)
  },
  //获取分类下商品分页查询
  getGoodsById(params = {}) {
    return request(`${base}/smallProgram/SpGoodsController/selectByClassId/${params.current}/${params.size}?classId=${params.classId}`, 'GET', {})
  },
  //调用条码支付
  payCode(params = {}) {
    // params = Object.assign(params, {
    //   "merId": 104,
    //   "merchants_number": "1175065325",
    //   "number": "0.01"})
    return request(`${base}/pay/barCode`, 'POST', params)
  },
  //根据订单列表编号查询
  getDBillDetail(params = {}) {
    return request(`${base}/billDetail/findById/${params.billDetailId}`, 'GET', params)
  },
};

module.exports = ajax;
