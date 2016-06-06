'use strict';

const Hapi = require('hapi');
const Good = require('good');
const server = new Hapi.Server();
const couchbase = require('couchbase');
const inert = require('inert');

//const materialize = require('materialize-css');

var config = require('./config.json');
var datas = require('./model.json');

var myCluster = new couchbase.Cluster("couchbase://config.couchbase.host");
var Bucket8 = myCluster.openBucket('default');


server.connection({
    host: config.app.host,
    port: config.app.port
});


server.register([require('vision'), require('inert')], (err) => {

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
    path: '/competences.html',
    handler: function (request, reply) {
        reply.view('competences',datas);
    }
});

server.route({
    method: 'GET',
    path: '/regles.html',
    handler: function (request, reply) {
        reply.view('regles',datas);
    }
});

server.route({
    method: 'GET',
    path: '/css/materialize.min.css',
    handler: {
        file: 'public/css/materialize.min.css'
    }
});

server.route({
    method: 'GET',
    path: '/js/materialize.min.js',
    handler: {
        file: 'public/js/materialize.min.js'
    }
});

server.route({
    method: 'GET',
    path: '/fonts/roboto/Roboto-Regular.woff2',
    handler: {
        file: 'public/fonts/Roboto-Regular.woff2'
    }
});

server.route({
    method: 'GET',
    path: '/fonts/roboto/Roboto-Light.woff2',
    handler: {
        file: 'public/fonts/Roboto-Light.woff2'
    }
});

server.route({
    method: 'GET',
    path: '/fonts/roboto/Roboto-Ligth.woff',
    handler: {
        file: 'public/fonts/Roboto-Light.woff'
    }
});

server.route({
    method: 'GET',
    path: '/fonts/roboto/Roboto-Ligth.ttf',
    handler: {
        file: 'public/fonts/Roboto-Light.ttf'
    }
});

server.route({
    method: 'GET',
    path: '/favicon.ico',
    handler: {
        file: 'public/favicon.ico'
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
