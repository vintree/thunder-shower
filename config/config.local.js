const path = require('path')

exports.port = '7001'

exports.mongodb = 'mongodb://px:wh6282804@106.14.146.127:27017/ico'

exports.logPath = path.join(__dirname, '../logs')

// exports.siteFile = {
//     '/favicon.ico': fs.readFileSync(path.join(appInfo.baseDir, 'app/public/favicon.ico')),
// };