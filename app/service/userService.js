const _ = require('../utils/request')
const api = require('../../config/data/api')
const _static = require('../../config/data/static')

exports.jscode2session = async(options) => {
    const { js_code, grant_type = 'authorization_code' } = options
    const params = {
        appid: _static.wx.appid,
        secret: _static.wx.secret,
        js_code,
        grant_type
    }
    const data = await _.get(api.jscode2session, params)
    return data
}
