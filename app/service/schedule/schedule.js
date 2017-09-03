const schedule = require('node-schedule')
const site = require('./site')
const log = require('../../../config/log4js')

async function first() {    
    var rule = new schedule.RecurrenceRule()
    rule.hour = 11
    rule.minute = 45
    rule.second = 54
    var j = schedule.scheduleJob(rule, async () => {
        console.log('现在时间：',new Date())
        log.action.info('Schedule task: bizhongchou')
        await site.bizhongchou()
        await site.ico365()
    });
}

async function second() {
    var rule = new schedule.RecurrenceRule()
    rule.hour = 17
    rule.minute = 45
    rule.second = 55
    var j = schedule.scheduleJob(rule, async () => {
        console.log('现在时间：',new Date())
        log.action.info('Schedule task: bizhongchou')        
        await site.bizhongchou()
        await site.ico365()
    });
}

exports.init = async () => {
    await first()
    await second()
    // site.ico365()
}