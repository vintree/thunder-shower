const urlx = require('urlx')
const fetch = require('node-fetch')

async function getCommon(url, params) {
    if(!!params) {
        url = `${url}${urlx.stringify(params)}`
    }
    const res = await fetch(url)
    return res
}

exports.get = async(url, params) => {
    const body = await getCommon(url, params)
    const json = await body.json()
    return json
}

exports.text = async(url, params) => {
    const body = await getCommon(url, params)
    const text = await body.text()
    return text
}