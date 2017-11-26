var https = require('https')

exports.myHandler = function(event, context, callback) {

    var options = {
            protocol: 'https:',
            host: 'coincap.io',
            path: '/history/BTC' + '',
            method: 'GET'
        },
        req = https.request(options, (res) => {
            var buffer = ""
            res.on('data', (chunk) => buffer += chunk)

            res.on('end', () => {
                var data = JSON.parse(buffer)
                callback({
                    error: false,
                    data: data
                })
            })
        })

    req.on('error', (e) => {
        callback({
            error: {
                code: 1000,
                message: e.message
            }
        })
    })

    req.end()
}
