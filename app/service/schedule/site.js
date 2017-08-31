/*
 * @Author: puxiao.wh 
 * @Date: 2017-08-31 02:43:00 
 * @Last Modified by: puxiao.wh
 * @Last Modified time: 2017-09-01 02:39:58
 */

/**
 * 币众筹
 */
const cheerio = require('cheerio')
const daoico = require('../../dao/ico')
const _ = require('../../utils/request')

async function bizhongchouRequest(url) {
    const text = await _.text(url)
    const $ = cheerio.load(text)
    const listDom = $('#list_content_all').children('li')

    listDom.each(async function(item) {
        const doms = $(this)
        const infoDom = doms.find('.progress-news').children()

        const icoName = doms.find('.activity-name').children('a').text().trim()
        const icoImgUrl = doms.find('img').attr('src')
        const icoDes = doms.find('.library-list-desc').text().trim()
        const icoTargetAmount = infoDom.eq(0).find('a').text().trim()
        const icoStarTime = infoDom.eq(1).find('a').text().trim()
        let icoState = doms.find('.ico-list-state-before, .ico-list-state-after').text().trim()

        switch(icoState) {
            case '预热中':
                icoState = 'THE'
                break
            case '已完成':
                icoState = 'FINISH'
                break
            case '进行中':
                icoState = 'ING'
                break
        }
        const detailLink = `http://bizhongchou.com${infoDom.eq(0).find('a').attr('href')}`
        const icoSource = '币众筹'
        
        // 查询是否已经记录过ico
        const icoList = await daoico.get({
            icoName
        }, {
            icoName: 1
        })

        console.log('name---', icoName, icoList);

        if(icoList.length === 0) {
            const detailText = await _.text(detailLink)
            const $1 = cheerio.load(detailText)
            const icoDetail = $1('.l_main').html()
            const icoSiteLink = $1('.shoucang_span').children('a').attr('href')
    
            daoico.created({
                icoName,
                icoImgUrl,
                icoDes,
                icoTargetAmount,
                icoStarTime,
                icoState,
                icoSource,
                icoDetail,
                detailLink,
                icoSiteLink,
                isDel: false
            })
        }

    })
    return listDom.length
}

exports.bizhongchou = async () => {
    let count = 1
    while(count !== 0) {
        console.log('count', count);
        const listCount = await bizhongchouRequest(`https://bizhongchou.com/project_ico/r--id-0-loc--state-0-tag--k--type-0-p-${count}.html`)
        if(listCount > 0) {
            count++
        } else {
            count = 0
            break
        }
    }
}