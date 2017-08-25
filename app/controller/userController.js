/*
 * @Author: puxiao.wh 
 * @Date: 2017-07-23 17:05:36 
 * @Last Modified by: puxiao.wh
 * @Last Modified time: 2017-07-25 01:17:48
 */

const userService = require('./../service/userService.js');

// var getUserinfo = (ctx, next) => {
//     let query = ctx.query;
//     let userId = query.id;
//     let userInfo = userService.getUserById(userId);

//     ctx.response.type ='application/json';
//     ctx.response.body = {
//         id: query.id,
//         name: 'aaa'
//     };
// };

// var saveUserinfo = (ctx, next) => {
//     const requestString = ctx.data;
//     //TODO数据处理
//     Console.log(requestString);
// };

const getUserCode = async (ctx, next) => {
    const query = ctx.query
    const userCode = await userService.jscode2session(query)
    // { 
    //     session_key: 'lFhCniOZsjWaOh/Okki8DQ==',
    //     expires_in: 7200,
    //     openid: 'olGMN0S4T3aRayNSQVaRlQ0Vv60g' 
    // }
    console.log('aaaaaa', userCode);
}

module.exports = {
    'GET /getUserCode': getUserCode,
    // 'GET /getUserinfo.jsonp': getUserinfo,
    // 'POST /saveUserinfo': saveUserinfo
};