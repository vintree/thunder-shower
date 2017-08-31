const schedule = require('node-schedule')
const site = require('./site')

async function first() {
    await site.bizhongchou()
    
    // var rule = new schedule.RecurrenceRule()
    // rule.hour = 11
    // rule.minute = 45
    // rule.second = 54
    // var times    = [1,6,11,16,21,26,31,36,41,46,51,56]
    // rule.minute  = times

    // var j = schedule.scheduleJob(rule, async () => {
    //     console.log('现在时间：',new Date());
    //     await site.bizhongchou()
    // });
}

async function second() {
    var rule = new schedule.RecurrenceRule()
    rule.hour = 17
    rule.minute = 45
    rule.second = 55
    var j = schedule.scheduleJob(rule, async () => {
        console.log('现在时间：',new Date());
        await site.bizhongchou()
    });
}

// function test() {
//     var rule1     = new schedule.RecurrenceRule();  
//     var times1    = [1,6,11,16,21,26,31,36,41,46,51,56];  
//     rule1.second  = times1;  
//     schedule.scheduleJob(rule1, function(){  
//         console.log('现在时间：',new Date());
//     });  
// }

exports.init = () => {
    first()
    // second()
    // test()
}