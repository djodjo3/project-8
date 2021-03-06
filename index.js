'use strict';

const Hapi = require('hapi');
const Good = require('good');
const server = new Hapi.Server();
const couchbase = require('couchbase');

var config = require('./config.json');
var datas = require('./model.json')
var myCluster = new couchbase.Cluster("couchbase://config.couchbase.host");
var Bucket8 = myCluster.openBucket('default');


server.connection({ port: 3000 });

server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file('./routes/hello.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/favicon.ico',
        config: {
            cache: {
                expiresIn: 1000 * 60 * 60 * 24 * 21
            }
        },
            handler: function(request, reply) {
                reply.file('./routes/favicon.ico');
                }
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
        server.log('info', 'Server running at: ' + server.info.uri);
        server.log('info', 'Couchbase server configured on ' + config.couchbase.host + ' at port ' + config.couchbase.port);

    });
});
