'use strict';

const Hapi = require('hapi');
const Good = require('good');
const server = new Hapi.Server();
const couchbase = require('couchbase');

var config = require('./config.json');
var datas = require('./model.json');

var myCluster = new couchbase.Cluster("couchbase://config.couchbase.host");
var Bucket8 = myCluster.openBucket('default');


server.connection({
    host: config.app.host,
    port: config.app.port
});


server.register(require('vision'), (err) => {

    if (err) {
        throw err;
    }

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.view('index',datas);
    }
});

server.route({
    method: 'GET',
    path: '/favicon.ico',
    handler: function(request, reply) {
        reply().code(200).type('image/x-icon');
    }
});


 server.views({
        engines: {
            js: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'templates'
    });

});

server.register({
    register: Good,
    options: {
        reporters: [{
            reporter: require('good-console'),
            events: {
                response: '*',
                log: '*',
        ops: '*'
            }
        }]
    }
}, (err) => {

    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start((err) => {

        if (err) {
           throw err;
        }
        server.log('info', "Starting project/8 application...")
        server.log('info', 'Server running at: ' + server.info.uri);
        server.log('info', 'Couchbase server configured on ' + config.couchbase.host + ' at port ' + config.couchbase.port);

    });
});
