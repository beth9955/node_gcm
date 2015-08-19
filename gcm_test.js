var gcm = require('node-gcm');
var fs = require('fs');

var message = new gcm.Message();

var message = new gcm.Message({
    collapseKey: 'demo',
    delayWhileIdle: true,
    timeToLive: 3,
    data: {
        title: 'saltfactory GCM demo',
        message: 'Google Cloud Messaging Å×½ºÆ®',
        custom_key1: 'custom data1',
        custom_key2: 'custom data2'
    }
});

var server_api_key = 'server_api_key';
var sender = new gcm.Sender(server_api_key);
var registrationIds = [];

var token = 'registrationIds';
registrationIds.push(token);

sender.send(message, registrationIds, 4, function (err, result) {
    console.log(result);
});