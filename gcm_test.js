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

var server_api_key = 'AIzaSyCN3BoEudEVn2LD7sKOOP6odr-MvTfb4go';
var sender = new gcm.Sender(server_api_key);
var registrationIds = [];

var token = 'f5q2tiD8Aik:APA91bE5XVVUk2FaG4_XNTIVxX2yzZ8qJLiZdsosVH9nnxibd3LO9KaLJhr30JjEv1eoKQnL4d5_ZIJXo1XuDX4ADxD3hDLyCKj8hUtmA2KzohTx_1q6YM1MW7aQO0QSW_f3MIJ88v24';
registrationIds.push(token);

sender.send(message, registrationIds, 4, function (err, result) {
    console.log(result);
});