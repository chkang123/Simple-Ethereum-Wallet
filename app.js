var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);
server.listen(3000);

app.use(express.static("public"));
app.get("/", function(req, res){
	res.sendFile("/home/bc/web/public/html/index.html");
})

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

app.get("/send", function(req, res){
	var transmitter = req.query.transmitter;
	var value = req.query.value;
	var recipient = req.query.recipient;
	var password = req.query.password;

	web3.personal.unlockAccount(transmitter, password);
	eth.sendTransaction({
		from: transmitter,
		to: recipient,
		value: web.toWei(value, "ether")}, function(error,result){
			if(!error) { res.send(result); }
			else { res.send("Error"); }
		});
})

