'use strict';

const couchbase = require('couchbase');

var config = require('./config.json');
var datas = './model.json';
var date = new Date();
var now = date.toISOString();
var myCluster = new couchbase.Cluster("couchbase://config.couchbase.host");
var Bucket8 = myCluster.openBucket('default');

var voirHistoriques = function(historiques){

	require('fs').readFile(historiques,'utf8', function(err,data) {
		if (err) throw err;
			
		var parsedDatas = JSON.parse(data);
		console.log(now, "Voici la liste des Historiques :")
		parsedDatas.Historiques.forEach(function(historiques){
			console.log(now, "Historique : " + historiques.Nom);
		});

	});

};

console.log("Starting project 8 server");
//console.log(datas);
voirHistoriques(datas);
